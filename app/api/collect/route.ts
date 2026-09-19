import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 32 * 1024;

const submissionSchema = z.object({
  form: z.string().trim().min(1).max(100),
  data: z
    .record(z.string(), z.unknown())
    .refine((value) => Object.keys(value).length <= 100, "Too many fields"),
  sourceUrl: z.string().trim().url().max(2048).optional(),
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

function normalizeSourceUrl(value: string | null | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.origin;
  } catch {
    return null;
  }
}

function methodNotAllowed() {
  return NextResponse.json(
    { ok: false, error: "METHOD_NOT_ALLOWED" },
    {
      status: 405,
      headers: {
        Allow: "POST",
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json(
      { ok: false, error: "UNSUPPORTED_MEDIA_TYPE", requestId },
      { status: 415, headers: { "Cache-Control": "no-store" } },
    );
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "PAYLOAD_TOO_LARGE", requestId },
      { status: 413, headers: { "Cache-Control": "no-store" } },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json(
      { ok: false, error: "INVALID_BODY", requestId },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "PAYLOAD_TOO_LARGE", requestId },
      { status: 413, headers: { "Cache-Control": "no-store" } },
    );
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { ok: false, error: "INVALID_JSON", requestId },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const parsed = submissionSchema.safeParse(parsedJson);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "VALIDATION_ERROR",
        requestId,
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          code: issue.code,
        })),
      },
      { status: 422, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const submission = await prisma.submission.create({
      data: {
        form: parsed.data.form,
        payload: parsed.data.data,
        sourceUrl: normalizeSourceUrl(
          parsed.data.sourceUrl ?? request.headers.get("referer"),
        ),
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: submission.id,
        createdAt: submission.createdAt.toISOString(),
      },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("collect_api_write_failed", {
      requestId,
      errorName: error instanceof Error ? error.name : "UnknownError",
    });

    return NextResponse.json(
      { ok: false, error: "STORAGE_ERROR", requestId },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export const GET = methodNotAllowed;
export const PUT = methodNotAllowed;
export const PATCH = methodNotAllowed;
export const DELETE = methodNotAllowed;
