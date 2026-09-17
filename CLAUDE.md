# Sun Worx — project rules

Standing rules for every page (all languages). These override the master build prompt where they conflict.

## A. Never say the company is new
No wording that says or implies Sun Worx is new, new under this name, building its reviews, or just starting out — in any language. The Reviews page leads with a confident promise ("Our Promise to You" / "Nuestra promesa para usted"), not an explanation of why there are no reviews yet. Still no invented reviews, testimonials, names, star ratings or statistics.

## B. License number and license class — footer only
- **The license number AND the license class appear in exactly one place per page: the footer license line.** Never in a hero, trust bar, subline, body paragraph, title or meta description.
- Footer line, exactly: EN "CSLB License #1129581 · California B (General Building) Contractor · Licensed, Bonded & Insured" / ES "Licencia CSLB #1129581 · Contratista General Clase B de California · Con licencia, fianza y seguro".
- Everywhere else: "licensed contractor", "licensed, bonded and insured" / "con licencia, fianza y seguro" — words only, no number, no class letter.

## B2. A small local company, never one person
Sun Worx is a small, local, dedicated **team** that handles the project start to finish — personal service, no call centers, no pressure. Always "we" and "our team" / "nosotros" and "nuestro equipo". Never "owner-run", "the owner", "he runs the job", "the same person", "one contractor", "nobody working on commission" — and in Spanish never "el dueño", "dirigida por su dueño", "la misma persona", "él mismo". ("Homeowner" / "dueño de la casa" or system ownership in financing copy is fine.)

## C. No empty image slots — Pixabay only, no attribution
Every image, photo box and hero video must show real, relevant, high-quality media **sourced only from Pixabay** (pixabay.com — Pixabay Content License: no attribution required). No visible credit caption, `credit` attribute or other company's name anywhere on any page, in any language. Keep a `<!-- REAL JOB PHOTO -->` / `<!-- REAL VIDEO: swap in Sun Worx footage -->` comment and a descriptive `placeholder` so Sun Worx's own photography and footage can be dropped in later; photo captions stay neutral ("Sun Worx installation" / "Instalación de Sun Worx"). A blank gray box is never acceptable. Shared media registry: `MEDIA` in `_parts/builder.js`.

## D. Financing wording
Say: "Financing available on approved credit. We'll help you find a monthly payment that fits, and walk you through your options at your free quote — no pressure."
Do **not** say: "we go through the options with your own bills in front of us", "Sun Worx does not lend money", or "the routes homeowners use".
Keep the fact: the 30% federal tax credit for purchased home solar ended December 31, 2025; some third-party-owned (lease or PPA) programs can still apply a federal credit through 2027.

## E. Affordability section on Home
Both home pages carry a "Solar Costs Less Than You Think." / "La solar cuesta menos de lo que cree." section — you are already paying for power every month, and going solar is often more affordable than the bill you already have. Warm, simple, **no prices, no numbers, no dollar figures**, ending in a free-quote button.

## Carried over from the master prompt (still in force)
- Business name exactly **Sun Worx**; tagline exactly **Solar & Battery**.
- Roofing and electrical never appear in a tagline, title, H1 or meta description — body text and their own service pages only.
- Wherever roofing or a main panel / electrical upgrade is mentioned, include the legal line once on that page: EN "All electrical and roofing work is performed by appropriately licensed professionals." / ES "Todo trabajo eléctrico y de techado es realizado por profesionales con la licencia correspondiente." It also sits in every footer.
- No prices of any kind, no "$0 down", no lender names, no interest rates.
- No panel brand names ("premium panels backed by a 25-year manufacturer warranty"). Batteries: Enphase and FranklinWH only. Inverters: Enphase microinverters only.
- No certifications, badges, awards or affiliations.
- Incentive numbers come only from the master prompt's incentive facts, unchanged, always followed by the disclaimer.
- Sacramento, CA — never a street address, never a map pin.
- No sentence reused across pages, in either language. Spanish is written fresh in Mexican Spanish, formal (usted), never translated word for word.
- The user's logo file is used exactly as supplied. Never rebuild, recolor, crop or retype it. Header background stays white.

## Build notes
- `_parts/builder.js` and `_parts/page.js` hold the shared section helpers and page factory; both already encode these rules. Use them for new batches so pages stay consistent.
- `PAGES.md` is the running page list — update it at the end of every batch.
- Language toggles and the logo link point at working project files and carry `<!-- PRODUCTION PATHS: EN = / · ES = /es/ -->`; nav, footer and city links use final production paths.
