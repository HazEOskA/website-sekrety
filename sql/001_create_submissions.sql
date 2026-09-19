CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY,
  form VARCHAR(100) NOT NULL,
  payload JSONB NOT NULL,
  source_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS submissions_created_at_idx
  ON submissions (created_at DESC);
