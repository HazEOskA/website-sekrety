# Audyt branży beauty — specyfikacja wdrożeniowa
**Zakres:** polskie + światowe studia rzęs / kosmetologii. Metodologia: analiza live stron (web reader) + wyszukiwania.

---

## CZĘŚĆ A. Wyniki audytu (co naprawdę robią konkurenci)

### A1. Polskie studia — analiza struktur

| Studio | Stack / booking | Kluczowe sekcje | Co wyróżnia |
|---|---|---|---|
| **Lash and Brow Place** (Warszawa-Ursus, 9 lat) | WordPress+Divi, booking **Fresha** (embed), sklep `sklep.`, ebook | Usługi (grid 6 usług), historia właścicielki, testimonials z imionami, blog (laminacja koreańska vs klasyczna), szkolenia, cennik | Personalny storytelling właścicielki Justyny, **ebook jako lead magnet**, dwa źródła przychodu (usługi + szkolenia) |
| **Elegante Lashes** (Warszawa-Wola, od 2012) | Landing one-page z anchor-nav, booking **Booksy** + telefon | Hero z 3 poziomami usług (Natural 1:1 / Light 2:1 / Volume 4D-10D), "Co nas wyróżnia" (12 pkt), "Jak wygląda zabieg", galeria #galeria, cennik #pricing, testimonials #testimonials, kontakt z mapą, FAQ inline (przygotowanie, przeciwwskazania, pielęgnacja) | **3-tier hero** (problem→efekt), scarcity CTA ("ostatnie wolne terminy w promocji"), SEO alt-texty ("przedluzanie rzes warszawa"), bezpłatna konsultacja |
| **MO's Beauty** (Warszawa Centrum) | Multi-service: microblading, makijaż permanentny, medycyna estet., podologia, rzęsy | Mega-menu usług, pozycjonowanie pod medycynę estetyczną | Pokrycie całego spektrum beauty (cross-sell) |
| **Her Eyes Studio** | Laminacja + rzęsy + brwi | Strong reviews, branding "Her Eyes" | Pozycjonowanie laminacji jako flagowej usługi |

**Wnioski PL:** dominuje WordPress + zewn. widget bookingowy (Fresha/Booksy). Standard = one-pager z sekcjami Hero→Usługi→O mnie→Galeria→Cennik→Opinie→Kontakt. Blog rzadki, ale kto ma — pozycjonuje się na "laminacja koreańska", "jak dbać o rzęsy". Personal brand właścicielki = klucz zaufania.

### A2. Światowe top studios — analiza struktur

| Studio | Model | Co kopiujemy |
|---|---|---|
| **Blanco Lash Studio** (Londyn, award-winning, japońska właścicielka) | Multilingual EN/JA/ZH, booking **Timely**, shop, training, aftercare page | **Award badges** jako social proof (8 lat z rzędu), usługi prezentowane problem→rozwiązanie ("Looking for a solution for short lashes?"), osobna strona **Aftercare**, gift vouchers, free consultation CTA |
| **London Lash Studio** (Fulham, od 2015) | Hero pytanie-retoryka, **Instagram-embed styl** galerii z emoji (💗 Volume Full Set 🧚‍♀️ artist ⏰ 2h 📍Fulham), testimonials z pełnymi imionami i nazwiskami | Link do **Google reviews**, sekcja **Careers** (rekrutacja), **policies** page (regulamin), mapa Google embed, gift vouchers |
| **Edy London** (Marylebone, premium personal brand) | 3 usługi tylko (Full Set / Subtle Set / Infills), **celebrity clientele** (Rita Ora, Ellie Goulding), wzmianki Forbes/Harper's Bazaar, blog SEO, newsletter, **Home Visit + Destination Lashes** | **Blog SEO** z artykułami-pytaniami ("What Are Classic Lashes and Why Are They the Best?", "The History of Fake Eyelashes: From Ancient Egypt to Today"), social share buttons, press logos, "Edy's Picks" |
| **MILash** (Katy, TX) | Multi-service, **gallery+FAQ na jednej stronie**, booking **Roland CRM widget** | **6-pytaniowe FAQ** w formacie Q/A, "Featured Testimonial" z imionami+zdjęciami, telefon click-to-call |
| **The Lash Lounge** (US, 100+ salonów franczyza) | Before/after gallery, "design your custom look" | Skalowanie franczyzowe, dedykowana strona before/after |
| **Lilly Lashes** (DTC product brand, celebrity: Kim Kardashian, Kylie Jenner, JLo) | E-commerce, hero sale, "Shop by Volume", **kreatywne nazwy produktów** (DayDreamer, StarCatcher, TrendSetter), bundles, collabs (Bratz x Lilly) | Naming produktów emocjonalny nie techniczny, "The Lashes Everyone's Talking About" sekcja social proof, kategoryzacja po efekcie (volume) |

### A3. Wzorce UX potwierdzone w audycie

- **Booking widget**: nikt nie buduje własnego — wszyscy embedują **Fresha / Booksy / Timely / Roland CRM**. Standard = przycisk "Book Online" w headerze (sticky) + sekcja CTA powtarzana co 2-3 ekrany.
- **Instagram**: dominuje **link zewnętrzny** (nie embed) — embed łamie się przy rate-limitach i spowalnia stronę. Blanco/London Lash/Edy → wszystkie linkują do profilu IG. Galeria efektów jest **własna** (self-hosted zdjęcia), nie z IG.
- **Formularz kontaktowy**: rzadko używany — konkurenci kierują do **telefonu + WhatsApp/IG DM + booking widget**. Edy London = `mailto:` + `tel:` linki.
- **Kalendarz rezerwacji**: wewn. kalendarz NIE istnieje na stronach — to always zewnętrzny SaaS. UX = wybór usługi → wybór stylistki → wybór dnia/godziny → podanie danych → potwierdzenie (proces 4-krokowy).
- **Before/After**: prezentowane jako **galeria grid** z hover (klik = lightbox). Elegante ma dedykowane SEO-alt na każde zdjęcie ("przedluzanie rzes warszawa", "mega_volume_lashes_warszawa").
- **Mikrointerakcje**: subtelne — hover-zoom na zdjęciach galerii, sticky CTA, licznik "ostatnie wolne terminy". Lilly Lashes = animowane add-to-bag. Brak ciężkich animacji — branża celuje w czystość i szybkość.

### A4. SEO best practices (potwierdzone)

- **Schema.org**: typ `HealthAndBeautyBusiness` (lub `HairSalon`/`DaySpa`) z `LocalBusiness` properties: `name`, `address`, `geo`, `openingHoursSpecification`, `telephone`, `priceRange`, `aggregateRating`, `review`. Elegante ma Yoast SEO; Lash and Brow Place ma GTM + Facebook Pixel.
- **Local SEO**: GBP (Google Business Profile) = absolutny priorytet. London Lash Studio linkuje bezpośrednio do Google reviews. NAP (Name-Address-Phone) spójny w stopce + JSON-LD + GBP.
- **Słowa kluczowe (PL)**: "salon kosmetyczny [miasto]", "gabinet kosmetyczny [miasto]", "przedłużanie rzęs [miasto]", "stylizacja brwi [miasto]", "laminacja rzęs [miasto]", "kosmetolog [dzielnica]", "makijaż permanentny [miasto]".
- **Long-tail blog** (Edy London model): artykuły w formacie pytań — pozycjonują się na featured snippets. 5 potwierdzonych tytułów: "What Are Classic Lashes...", "The History of Fake Eyelashes...", "Eyelash Specialist London...", "What Are Eyelash Extensions Made Of...", "Eyelash Extension Aftercare Tips...".
- **Mobile-first**: wszystkie strony mobilne, ale PL strony na WP+Divi bywają ciężkie (270KB HTML). Konkurencja premium (Edy) lżejsza.

---

## CZĘŚĆ B. GOTOWA SPECYFIKACJA DO WDROŻENIA

### B1. 10 SEKCJI które MUSI mieć strona kosmetologa w 2026

| # | Sekcja | Cel | Konkretne elementy |
|---|---|---|---|
| 1 | **Sticky Header + CTA booking** | Konwersja z każdego ekranu | Logo lewo, nav (Usługi/O mnie/Galeria/Cennik/FAQ/Blog/Kontakt), **przycisk "Umów się"** zawsze widoczny (kolor akcentu), wersja mobilna = hamburger + sticky "Rezerwuj" bottom-bar |
| 2 | **Hero z pytaniem-retoryką + 3 usługi flagowe** | Hook emocjonalny | Tło = wideo/zoom przed/po. Headline w formie pytania ("Chcesz dłuższe, gęstsze rzęsy bez tuszu?"). Subheadline 1 zdanie. 2 CTA: "Rezerwuj" + "Zobacz efekty". Poniżej: 3 kafle flagowych usług (icon + nazwa + cena od). Mikro-social-proof: "★ 4,9 (247 opinii) · 1200+ klientek" |
| 3 | **Logo bar / press / awards** | Zaufanie w 2 sekundy | Logo magazynów/partnerów, award badges (jeśli są), "Współpracowaliśmy z..." lub "Polecane w...". Jeśli brak — zamień na liczniki (lat doświadczenia, klientek, stylistek) |
| 4 | **Sekcja usług (grid problem→rozwiązanie)** | Pokazanie oferty | Każda usługa = kafel: problem klientki → nazwa usługi → co daje → czas → cena od → "Umów". Min. 6 usług. Blanco-model: "Szukasz rozwiązania na [problem]? → [Usługa]" |
| 5 | **Before/After gallery (interaktywna)** | Dowód efektywności | Grid zdjęć z filtrami po usłudze (Rzęsy / Brwi / Laminacja). Hover = zoom. Klik = lightbox z opisem (metoda, czas, stylistka). **Każde zdjęcie ma SEO alt** ("przedłużanie rzęs objętościowe Warszawa"). Opcja: slider before↔after (przeciąganie palcem) |
| 6 | **O mnie / O studiu (personal story)** | Budowa relacji | Zdjęcie właścicielki, historia ("jak to sobie wymyśliłam"), certyfikaty, szkolenia u kogo. To różni od korporacji. Elegante: "salon od 2012, pierwsze miejsce w Warszawie z metodą X". **Certi badges** (marki produktów, szkolenia) |
| 7 | **Cennik (tabela po metodach)** | Transparentność | Tabela: metoda (1:1, 2D, 3D, Volume 4D-10D, Lash Lift, Laminacja) × (czas, trwałość, cena nowy zestaw, cena uzupełnienie). Wyróżnienie "Najpopularniejsza". Notka "cena finalna po konsultacji". Link do booking |
| 8 | **Testimonials (strukturalne)** | Social proof | Min. 6 opinii z: imię + inicjał nazwiska, usługa, data, gwiazdki, treść (struktura B5 poniżej), opcjonalnie zdjęcie. Link do Google reviews + Booksy reviews. Karuzela + grid |
| 9 | **FAQ (akordeon + JSON-LD FAQPage)** | Redukcja obiekcji + SEO | Min. 8 pytań (B2 poniżej). Akordeon animowany. **Schema.org FAQPage** w JSON-LD = szansa na featured snippet w Google. Pytania = dokładne frazy, które klientki wpisują |
| 10 | **Footer z NAP + mapą + linkami** | Local SEO + kontakt | Adres (z mapą Google embed), telefon (click-to-call), godziny otwarcia, linki social (IG/FB/TikTok), newsletter signup, polityka prywatności, regulamin, **JSON-LD LocalBusiness w stopce**. Wersja mobilna: sticky bottom-bar z 3 przyciskami (Zadzwoń / IG / Rezerwuj) |

**Bonus sekcje (rekomendowane, nie obowiązkowe):**
- Blog / Wiki / Baza wiedzy (SEO long-tail — patrz B3)
- Szkolenia / B2B (drugi strumień przychodu — Lash&Brow Place, Blanco, Edy)
- Sklep z produktami (aftercare, rzęsy) — Blanco, Lilly
- Gift vouchers (karta podarunkowa — London Lash, Blanco)
- Kariera / rekrutacja (London Lash Studio)

### B2. 5 najczęstszych pytań w FAQ (potwierdzone w audycie PL + EN)

Format: pytanie po polsku + wariant zapytań Google + zarys odpowiedzi.

1. **Jak długo trzymają się przedłużane rzęsy i jak często trzeba je uzupełniać?**
   *(warianty: "trwałość rzęs", "kiedy uzupełnianie", "co 3 tygodnie")*
   → Odpowiedź: 4-6 tygodni (cykl naturalny), rekomendowane uzupełnianie co 2-3 tyg. Czynniki: pielęgnacja, cykl wzrostu, jakość kleju.

2. **Czy przedłużanie rzęs jest bezpieczne / czy niszczy własne rzęsy?**
   *(warianty: "czy szkodzą", "czy wypadają własne", "bezpieczeństwo")*
   → Odpowiedź: Tak, jeśli wykonane przez certyfikowaną stylistkę z odpowiednią wagą/grubością. Obiekcja #1 — trzeba ją rozbić konkretnie (izolacja 1:1, dobór wagi do kondycji rzęsy).

3. **Jak przygotować się do zabiegu i jak dbać o rzęsy po? (pielęgnacja)**
   *(warianty: "przed zabiegiem", "po zabiegu", "mycie oczu", "makijaż")*
   → Odpowiedź: Przed = czyste, bez makijażu, bez olejów. Po = 48h nie mocz, myj pianką bezolejową codziennie, unikaj tłustych kremów, śpij na plecach, nie trzyj oczu. Link do aftercare page.

4. **Jak długo trwa zabieg i czy boli?**
   *(warianty: "czas zabiegu", "ile trwa", "czy można spać")*
   → Odpowiedź: Full set 1,5-2,5h (zależnie od metody), uzupełnianie 60-90 min. Bezboleni — większość klientek zasypia. Pozycja leżąca, zamknięte oczy.

5. **Jakie są przeciwwskazania do zabiegu?**
   *(warianty: "kiedy nie można", "alergia", "ciąża", "zapalenie")*
   → Odpowiedź: Stany zapalne oczu/powiek, alergia na klej, świeże operacje okolic oczu, urazy twarzy, ciąży (konsultacja). Lista wypunktowana.

**Bonus 3 pytania** (jeśli miejsce pozwala):
6. Czy mogę nosić makijaż i myć oczy? (tak, ale bez olejów i waterproof)
7. Czym się różnią metody 1:1, 2D, Volume, Mega Volume? (tabela porównawcza)
8. Ile kosztuje i czy jest promocja dla nowych klientek? (odwołanie do cennika)

### B3. 8 artykułów do "Wiki / Bazy wiedzy" (SEO long-tail)

Model: Edy London — artykuły w formacie pytania, 800-1500 słów, z FAQPage schema, internal link do usługi + booking. Każdy celuje w featured snippet.

| # | Tytuł artykułu | Fraza kluczowa (PL) | Dlaczego pozycjonuje |
|---|---|---|---|
| 1 | **Przedłużanie rzęs 1:1 vs Volume — którą metodę wybrać?** | "przedłużanie rzęs 1:1 vs volume", "jaka metoda rzęs" | Najczęstsze pytanie decyzyjne; idealne pod table/snippet |
| 2 | **Laminacja rzęs a przedłużanie — co wybrać? (porównanie)** | "laminacja czy przedłużanie", "laminacja rzęs co to" | Lash&Brow Place już się na to pozycjonuje — udowodniony ruch |
| 3 | **Jak dbać o rzęsy po zabiegu — 10 zasad pielęgnacji** | "pielęgnacja rzęs", "jak dbać o przedłużane rzęsy" | Evergreen, wysoki wolumen, prowadzi do aftercare products |
| 4 | **Przeciwwskazania do przedłużania rzęs — pełna lista** | "przeciwwskazania rzęsy", "kiedy nie można przedłużać" | Nisza, mała konkurencja, łatwy top-3 |
| 5 | **Lash lift (lifting rzęs) — co to jest, jak długo trzyma, cena** | "lash lift co to", "lifting rzęs cena" | Rosnąca trend-fraza, niska konkurencja PL |
| 6. | **Makijaż permanentny ust/brwi — wszystko co warto wiedzieć** | "makijaż permanentny brwi", "permanentny ust" | Wysoki wolumen, wysoka intencja zakupowa |
| 7 | **Jak wybrać stylistkę rzęs — 7 pytań przed pierwszą wizytą** | "jak wybrać stylistkę rzęs", "dobry salon rzęs" | Edukacyjne, buduje autorytet, konwertuje na booking |
| 8 | **Historia rzęs: od starożytnego Egiptu do dzisiaj** | "historia rzęs", "kiedy powstały rzęsy" | Viral/evergreen — Edy London ma odpowiednik, zdobywa linki i social shares |

**Struktura każdego artykułu:** H1 pytanie → TL;DR (1 akapit, 2 zdania = snippet bait) → spis treści → sekcje H2 → tabela porównawcza gdzie pasuje → CTA "Umów na konsultację" → FAQ 3 pytania (FAQPage schema) → internal links do 2 innych artykułów → autor (E-E-A-T: imię + certyfikaty).

### B4. 6 pytań do testimoniali (struktura opinii)

Zamiast "napisz coś o nas" → daj klientce 6 konkretnych pytań. Odpowiedzi = gotowa opinia konwertująca.

1. **Jakie usługi miałaś robione i z jakim problemem przyszłaś pierwszy raz?**
   *(kontekst: np. "przychodziłam na rzęsy bo własne były jasne i krótkie")*
2. **Dlaczego wybrałaś nasze studio (a nie konkurencję)?**
   *(decydujący czynnik: opinje / polecenie / efekty / lokalizacja)*
3. **Jak wyglądała Twoja pierwsza wizyta — od wejścia do wyjścia?**
   *(atmosfera, profesjonalizm, komfort)*
4. **Jaki był efekt i jak długo się utrzymał?**
   *(konkretny wynik + trwałość — to rozbija obiekcję "a czy długo poleżą")*
5. **Co zaskoczyło Cię pozytywnie — czego nie spodziewałaś się?**
   *(element "wow" = różnicujący)*
6. **Komu poleciłabyś to studio i w jakiej sytuacji?**
   *(target persona: np. "każdej, która boi się, że rzęsy wyglądają sztucznie")*

**Prezentacja opinii (schema Review):**
```
[Imię K.] · [Usługa] · [Data] · ★★★★★
"Pełna treść z odpowiedzi na 2-3 z powyższych pytań."
— źródło: Google Reviews / Booksy / weryfikowana klientka
```
JSON-LD: `Review` z `reviewRating`, `author`, `itemReviewed` (usługa), `datePublished`. Agreguj do `aggregateRating` na stronie głównej.

### B5. 3 pomysły na animacje które robią wrażenie (practical, nie gimick)

1. **Before/After slider przeciągany palcem (drag-to-reveal)**
   - Implementacja: jeden kontener, dwie warstwy, suwak pionowy reagujący na touch + mouse.
   - Tech: CSS `clip-path` + JS pointer events, ~40 linii. Framer Motion `useMotionValue` + `drag`.
   - Dlaczego działa: klientka dosłownie "odkrywa" efekt — angażuje 5x dłużej niż statyczne zdjęcie. Najwyższa konwersja w branży beauty (potwierdzone Lilly Lashes, The Lash Lounge).
   - Gdzie: sekcja before/after (B1.5) + hero (jako tło).

2. **Magnetic / hover-fill przycisk booking (mikrointerakcja CTA)**
   - Implementacja: przycisk "Rezerwuj" — tło wypełnia się kolorem akcentu od strony kursora (radial gradient podążający za myszą), lekki scale + shadow na hover, ikona strzałki przesuwa się w prawo.
   - Tech: CSS `@property --mouse-x` + `radial-gradient` + `transition`, lub Framer Motion `motion.button` z `whileHover`.
   - Dlaczego działa: CTA jest najważniejszy — musi zachęcać fizycznie. Wyróżnia od "płaskich" stron PL konkurencji.
   - Gdzie: każdy przycisk "Umów się" w hero, sekcjach, sticky bar.

3. **Scroll-reveal galerii efektów (staggered masonry)**
   - Implementacja: zdjęcia wchodzą pojedynczo z opóźnieniem (stagger 80ms), lekkim scale 0.95→1 + fade. Przy scrollu w dół kolejny rząd = kolejna fala.
   - Tech: Framer Motion `whileInView` + `staggerChildren`, lub IntersectionObserver + CSS transitions.
   - Dlaczego działa: tworzy narrację ("zobacz więcej, przewiń") = dłuższy time-on-page = lepszy SEO + więcej eksponowanych efektów = większe zaufanie.
   - Gdzie: sekcja galerii (B1.5). Opcja: parallax lekkiego tła za sekcją O mnie.

**Zasada animacji w beauty:** <400ms każdy transition, `ease-out`, respect `prefers-reduced-motion` (wyłącz dla accessibility). Żadnych ciężkich loaderów — LCP <2,5s priorytetem.

---

## CZĘŚĆ C. Checklist wdrożeniowy (kolejność)

1. **Stack**: Next.js 16 + TS + Tailwind + shadcn/ui (zgodne z tym workspace).
2. **Booking**: zintegruj **Booksy** (PL rynek dominuje) jako embed widget + przycisk "Rezerwuj" → modal. Nie buduj własnego kalendarza.
3. **SEO**: `HealthAndBeautyBusiness` JSON-LD w `<head>` każdej strony + `FAQPage` na FAQ + `Review`/`aggregateRating` na homepage. Yoast-ekwiwalent = `next-seo` lub ręczny metadata API.
4. **Zdjęcia**: WebP/AVIF, lazy-load, **każde zdjęcie z SEO alt** (wzór: `[usługa] [miasto] [efekt]`). Max 200KB/szt.
5. **Mobilna**: sticky bottom-bar (Zadzwoń / IG / Rezerwuj). Mobile-first (PL ruch mobilny >70%).
6. **Kontakt**: `tel:` + `mailto:` + link IG/FB/TikTok. Formularz opcjonalny (konkurencja go omija).
7. **Analytics**: GA4 + Meta Pixel + Booksy analytics. GTM do zarządzania.
8. **Blog/Wiki**: 8 artykułów (B3) w pierwszym kwartale, potem 1/miesiąc.
9. **GBP**: zweryfikuj i zoptymalizuj Google Business Profile — to #1 źródło rezerwacji w lokalnej branży.
10. **Testy**: Lighthouse >90 (perf/SEO/accessibility), Core Web Vitals zielone.

---

## Źródła (live audyt)
**PL:** lashandbrowplace.pl, salonurodyelegante.pl, mosbeauty.pl, hereyes.pl, lashdesign.pl, noblelashes.pl, ambasadaurody.pl
**Świat:** blancolashstudio.com, londonlashstudio.co.uk, edy.london, milash.net, thelashlounge.com, lillylashes.com, chiclashboutique.co.uk
**SEO/UX:** sembility.com, kubadzikowski.com, delante.pl, schema.org (HealthAndBeautyBusiness), simplybook.me, fresha.com, booksy.com
