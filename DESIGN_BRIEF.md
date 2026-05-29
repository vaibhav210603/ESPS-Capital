# Design Brief — "ESPS Capital" style investment-firm homepage

Build a single-page, scroll-driven marketing homepage for a financial-services
company. Editorial-meets-fintech: a warm off-white canvas, one confident red
accent, big serif display type, and restrained motion that rewards scrolling.
Minimalist but creative — never corporate-stocky, never AI-slop gradients.

Deliver a **React app** (inline Babel/JSX, no build step) that is fully
responsive to mobile. Output the **home page only**.

---

## 0. Tech setup (do exactly this)

- Single `index.html` that loads, in order:
  - Google Fonts: `Instrument Serif` (display), `Geist` (UI), `Geist Mono` (labels)
  - React 18.3.1 + ReactDOM 18.3.1 + Babel standalone 7 (pinned, with integrity hashes)
  - One external stylesheet `src/styles.css`
  - Several `text/babel` script files, in dependency order:
    `hooks.jsx` → `marks.jsx` → `creatives.jsx` → `sections.jsx` → `app.jsx`
- **Split the code** into small files (none over ~600 lines). Each `text/babel`
  file gets its own scope, so at the end of every component file do
  `Object.assign(window, { ComponentA, ComponentB, ... })` to share globals.
- Never name a style object `styles`; give each a component-specific name or use
  inline styles, to avoid global collisions.
- Mount with `ReactDOM.createRoot(document.getElementById('root')).render(<App/>)`.

---

## 1. Brand system

**Logo:** use the company's actual logo PNG. Crop a mark-only version for small
placements; reuse the mark as a recurring motif (nav, hero backdrop watermark,
a "values" centerpiece, footer). Never redraw the logo as an approximate SVG.

**Color palette (CSS variables):**
```
--bg:       #F4EFE9   /* warm off-white — main canvas */
--bg-deep:  #ECE5DC   /* slightly darker warm — alt sections */
--ink:      #16110F   /* warm near-black — text + dark sections */
--ink-soft: #3A302C
--muted:    #8A7E76
--rule:     rgba(22,17,15,0.12)   /* hairline borders */
--red:      #D32238   /* brand crimson — the ONE accent */
--red-deep: #A8132A
```
Rule: red is a scalpel, not a bucket. Use it for one accent word per heading,
dots/bullets, hover fills, small data marks. Everything else is ink on warm
paper. Max two background colors across the page (off-white + ink). No
decorative gradients.

**Type system:**
- Display / headings: `Instrument Serif`, weight 400, often with an *italic*
  accent word colored red. Tight tracking (`-0.02em` to `-0.03em`), line-height
  ~0.92–1.0. Huge: hero `clamp(56px, 11.5vw, 200px)`.
- Body / UI: `Geist`, 300–600.
- Meta labels: `Geist Mono`, 10–12px, uppercase, letter-spacing `0.1em`. Use for
  eyebrows, section numbers ("01 — What we do"), coordinates, captions.
- A red dot "●" used as a period or list marker is a signature flourish.

**Spacing & shape:** generous section padding (`12–18vh`). Hairline `--rule`
borders separate sections and list rows. Border-radius only on cards/visuals
(14–16px); type and section edges stay sharp. Use fl\
ex/grid with `gap` for all
groupings — never inline-whitespace spacing.

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for almost everything.

---

## 2. Motion / interaction language

Inspired by award-style scroll sites (think pinned sections, reveals, marquees,
magnetic hovers) but tasteful and performance-cheap. Implement these reusable
hooks in `hooks.jsx`:

- `useReveal()` — IntersectionObserver adds `.in`; elements fade+rise 24px once.
- `useScrollY()` — rAF-throttled scroll position for parallax.
- `usePinProgress(ref)` — 0→1 progress while a tall section is pinned (optional).
- `useCountUp(target)` — only if you have REAL numbers to animate (see §6 warning).

Concrete motion beats:
- **Nav** transparent at top; on scroll >40px gains a blurred translucent bg +
  hairline bottom border. Links have an underline that wipes in on hover.
- **Hero backdrop**: the logo mark, faint (opacity ~0.08–0.10), parallax-drifts
  and slightly rotates with scroll.
- **Marquee strip**: infinite horizontal ticker of service keywords in serif,
  separated by red dots (CSS keyframe translateX -50%, duplicated track).
- **Section reveals**: headings + cards rise/fade on enter with small stagger.
- **List hover**: each services row inverts to dark (ink bg wipes up via
  `transform: scaleY`), text turns to paper, arrow nudges up-right, accent reds.
- **Custom cursor** (pointer devices only): a small red dot using
  `mix-blend-mode: difference` that lerps toward the mouse and scales up over
  interactive elements. Hidden on touch.
- **Respect** `prefers-reduced-motion` and make sure the at-rest state of any
  reveal is the *visible* state (no content trapped invisible if JS/anim pauses).

---

## 3. Page structure (sections, in order)

1. **Nav** (fixed) — logo mark + wordmark + subtle italic tagline; center/right
   links (Approach, Services, What we stand for, Academy, Contact); a pill CTA
   "Open an account". Mobile: hamburger → full-screen dark slide-down menu with
   huge serif links numbered 01–05.

2. **Hero** (min-100vh, flex column space-between):
   - Top meta row (mono): company name + city on the left; the **tagline set
     small and subtle** on the right.
   - An eyebrow ("● An investment services house"), then the **big serif
     headline that says plainly WHAT THE COMPANY DOES** (e.g. "Customised
     investment services."), with one red italic accent word.
   - A mono row of the core offerings separated by hairline dashes
     (e.g. Online trading · Mutual funds · Insurance · Loans).
   - A one-paragraph plain-language description + two buttons (primary red,
     ghost outline).
   - Foot row: a compact summary of the approach pillars + a "scroll" indicator
     with an animated descending line.

3. **Marquee** — service keywords ticker (see §2).

4. **Approach** — the heart of the page. An acronym/pillars system. Intro strip
   ("Four letters. One discipline.") with clickable letter chips, then **one
   full panel per pillar**. Each panel is a split layout:
   - Left: a giant serif italic letter + red dot + the pillar word (mono), a
     manifesto headline, a short body, and a numbered 3-item list.
   - Right: a **custom hand-drawn SVG "creative"** that scroll-animates in
     (line draws on, area fills, dots pop). See §5.
   - Alternate panel backgrounds for rhythm (paper → warm → ink → ink). The
     right-hand visual is `position: sticky` on desktop so it holds while the
     copy scrolls; static on mobile.

5. **Services** — section head (split: title left, blurb right), then a list of
   rows separated by hairlines. Each row: number, a small line-art glyph,
   serif title (with red italic tail), description, mono meta tag, up-right
   arrow. Dark-invert hover (see §2).

6. **What we stand for** ("Values") — a header with the logo mark as an animated
   centerpiece (gentle float + pulsing aura + orbiting dots), and a 4-card grid
   of qualitative values (NOT vanity stats). Each card: mono number, serif
   title, short description, a small red rule.

7. **Academy / learning platform** — dark section. Big serif title (can mix a
   script/native-language word in red), an intro paragraph, a row of pill chips
   (topics), a paper-colored CTA button. Below: a grid of "lesson" cards
   (bordered, dark, hover lifts + red border) each with a line-art glyph, a
   mono label, a serif lesson title, and a mono meta row.

8. **CTA** — centered, very large serif call to action with a red italic word
   and an inline up-right arrow. A thin animated rule with a red dot walking
   along it. Below: a mono row of real contact columns (address, email,
   website, social).

9. **Footer** — dark. Logo + wordmark + tagline + one-line description; then 3–4
   link columns (Services, Company, Office/contact). Bottom base row in mono.

---

## 4. Reusable marks (`marks.jsx`)

- `LogoMark` — `<img>` of the real cropped logo at a given size.
- `ArrowUR` — up-right arrow (diagonal line + corner), 24×24 stroke icon.
- `ArrowRight` — horizontal arrow.
All icon SVGs use `stroke="currentColor"`, `strokeWidth` ~1.5, round caps/joins.

---

## 5. Hand-drawn creatives (`creatives.jsx`)

All pure inline SVG, no external art. Each takes a `progress` (0→1) prop to
animate on reveal (use `strokeDashoffset` for "drawing" lines, opacity for
fades, conditional render for sequential reveals). One per Approach pillar, e.g.:
- **Easy** → a sleek phone mockup (dark frame) with a portfolio screen: header,
  a line chart with a gradient area fill that draws on, two summary cards, a
  paper-colored action button.
- **Sustainable** → a long compounding curve across a labeled time axis with
  faint "cycle" bands and milestone dots; small dark badge.
- **Profitable** → a candlestick chart on dark bg (red up-candles, muted
  down-candles), a dashed trend line, a marker, a small label block.
- **Scalable** → a branching tree from one root node out to many leaf dots,
  revealing tier by tier.
Plus small line-art glyphs for services (candles, stacked bars, shield,
exchange arrows) and academy lessons (ledger, growth line, shield, doc), and a
"chevron ornament" row that riffs on the logo geometry.

**Important:** keep any text inside these SVGs generic/illustrative — labels
like "Portfolio", "Long-term", "Research-led", masked values (₹ ●●,●●●). Do not
bake invented metrics into the art (see §6).

---

## 6. CONTENT INTEGRITY — strict

- Use ONLY real, verifiable facts about the company: what it actually does, its
  real tagline, real product names, real address, real contact details, real
  description of any sub-brand/academy.
- **No invented statistics.** Do not fabricate AUM, client counts, retention %,
  CAGR/returns, "years in business", regulatory registration numbers, awards,
  or fake live market prices. If a real number isn't supplied, express the idea
  qualitatively instead (e.g. "research-led", "minimal cost") — never with a
  fake figure.
- Keep all copy in the company's actual voice and claims. When unsure, ask the
  user for the real value rather than guessing.
- Label slides/screens with `data-screen-label` and keep markup canonical
  (explicit closing tags, quoted attributes) so it stays directly editable.

---

## 7. Responsive

- Breakpoints around 980/900/760/560/480px.
- Approach panels: split → stacked, sticky visual → static.
- Services rows: collapse columns; hide mono meta on small screens; keep 44px+
  hit targets.
- Values & academy grids: 4 → 2 → 1 columns.
- Hero type scales with `clamp()`; nav collapses to the slide-down menu.
- Custom cursor disabled on touch.

---

## 8. Definition of done

Loads with zero console errors; the hero clearly communicates what the company
does on first paint (tagline subordinate); every section renders with the real
logo and real content; motion is smooth and degrades gracefully; mobile layout
stacks cleanly. Verify by screenshotting at several scroll positions and at
375px width.
