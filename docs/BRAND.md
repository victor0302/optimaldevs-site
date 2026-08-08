# OptimalDevs — brand and design spec

Handoff for the optimaldevs.tech redesign. Written to be read by Claude Code as
a repo-level reference.

**How to use this file:** drop it at `docs/BRAND.md` and add a pointer in
`CLAUDE.md`:

```md
Design and brand rules live in `docs/BRAND.md`. Read it before writing any
component, and follow the "Hard rules" section exactly — those constraints
came from real failures, not preference.
```

---

## 1. Company

- **Name:** OptimalDevs (one word — see open question 1)
- **Site:** optimaldevs.tech
- **What we do:** websites and bespoke software for small businesses
- **Tagline in use:** `websites · software · security`
- **LinkedIn:** company page is live with the logo and banner from this system

The audience is **small business owners, not developers.** This matters more
than any visual rule below. The aesthetic is terminal-derived, but every piece
of copy and navigation must be legible to someone who has never opened a shell.
Terminal glyphs are decoration for them, not vocabulary.

---

## 2. Direction

**Terminal brutalist.** Flat surfaces, hard edges, monospace type, one accent
colour used as a shape rather than as ink. The design references a command
prompt without becoming a costume.

What that means concretely:

- No gradients, drop shadows, blurs, glows, or noise textures
- Flat fills only; borders are hairlines or nothing
- Corner radius 0–6px maximum; this system does not use pill shapes
- Lowercase in brand elements; sentence case in UI copy; never Title Case
- Whitespace does the structural work, not boxes and dividers

---

## 3. Palette

| Token | Hex | Role |
|---|---|---|
| `--cream` | `#F4F1E8` | Primary surface / page background |
| `--ink` | `#111111` | Text, marks, inverse surfaces |
| `--orange` | `#FF5C1C` | Accent — **shapes only on cream** |
| `--muted` | `#6B675C` | Secondary text on cream |

Two colours plus a neutral. Do not add a fifth. If something needs to be
distinguished, use weight, size, or space before reaching for another colour.

### Measured contrast (WCAG 2.1)

| Pair | Ratio | Verdict |
|---|---|---|
| ink on cream | 16.72:1 | Passes AA and AAA |
| cream on ink | 16.72:1 | Passes AA and AAA |
| muted on cream | 5.00:1 | Passes AA body text |
| orange on ink | 6.11:1 | Passes AA body text |
| **orange on cream** | **2.73:1** | **Fails — never use for text** |
| muted on ink | 3.34:1 | Large text only (24px+ / 19px bold) |

The orange-on-cream number is the load-bearing one. On a cream surface, orange
may only appear as a solid block, bar, rule, or fill — never as a letterform,
icon stroke carrying meaning, or link colour. On an **ink** surface orange is
legitimate for text.

---

## 4. Typography

**Face:** JetBrains Mono, with IBM Plex Mono as the fallback.
**Self-host it.** Do not rely on a system stack — the entire identity collapses
into a generic sans if the font fails to load, and the wordmark spacing is
calculated against monospace advance widths.

```css
font-family: "JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular,
             Menlo, Consolas, monospace;
```

Weights: 400 and 500 only. Do not use 600 or 700 — mono faces get muddy heavy.

Suggested scale (adjust to the layout, keep the ratios):

| Role | Size | Weight | Colour |
|---|---|---|---|
| Hero wordmark | clamp(2rem, 6vw, 3.5rem) | 500 | ink |
| Section heading | 1.5rem | 500 | ink |
| Body | 1rem / 1.7 line-height | 400 | ink |
| Secondary / caption | 0.875rem | 400 | muted |

Body copy in monospace is a deliberate risk — it reads slower than a
proportional face. If long-form pages (case studies, blog) feel heavy, pair the
mono with a neutral sans for body and keep mono for headings, nav, labels, and
data. That is a legitimate evolution of this system, not a violation of it.

---

## 5. The mark

Two nested chevrons: an ink outer chevron and an orange inner one, derived from
the `>` that opens the wordmark. The logo is a crop of the lockup, not a
separate object.

**Mark only, transparent background** — use this inline in the site:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="OptimalDevs">
  <title>OptimalDevs</title>
  <path d="M91 76 L176 150 L91 224" fill="none" stroke="#111111" stroke-width="25" stroke-linejoin="miter"/>
  <path d="M155 104 L200 150 L155 196" fill="none" stroke="#FF5C1C" stroke-width="25" stroke-linejoin="miter"/>
</svg>
```

`stroke-linejoin="miter"` is required — round joins soften the chevron tips and
kill the terminal feel. Never add `stroke-linecap="round"`.

On an ink background, swap the outer stroke to `#F4F1E8` and keep the inner
orange.

### Variants and when to use each

| Variant | Use |
|---|---|
| Frameless cream tile | Platform avatars where the platform draws its own container (LinkedIn, GitHub org) |
| Framed cream tile (10px ink border) | Cream mark on a white or near-white surface with no container — site footer, slides, print |
| Ink tile | Dark surfaces, and anything rendered below ~24px |
| Favicon (ink, 34px strokes) | 16–32px only; strokes are thickened so the chevrons stay separate |

Minimum size for the cream variants is about 24px. Below that, switch to ink.

### Clear space

Keep clear space equal to the width of the inner chevron (roughly 8% of the
mark's width) on all sides. Nothing crosses it.

---

## 6. The wordmark lockup

`> optimal_devs` in monospace, followed by a solid orange block cursor.

Ratios relative to font size (`fs`), so it scales cleanly:

| Property | Value |
|---|---|
| Cursor width | `0.55 × fs` (one character cell) |
| Cursor height | `0.96 × fs` |
| Cursor top | `baseline − 0.71 × fs` |
| Gap after last glyph | `0.35 × fs` |

The wordmark is always lowercase with the underscore: `optimal_devs`. It is a
**lockup, never prose.** In sentences the company is "OptimalDevs".

If a tagline sits under the wordmark, centre both on the same axis. Left-aligning
them looks broken because the `> ` prompt indents the first word — this was an
actual defect on the first banner, a 42px offset between the two line centres.

---

## 7. Layout principles

- **The `>` is the system's structural device.** Use it for section eyebrows,
  list markers, and CTA labels (`> get in touch`). Use it because it encodes
  "prompt / input / go", not as decoration. Do not use it on every element.
- **The block cursor is the signature.** Spend boldness here and keep everything
  else quiet. One blinking cursor on the hero is memorable; a cursor on every
  heading is noise. If you animate it, respect `prefers-reduced-motion`.
- **Left-align text blocks.** Centred body copy fights the terminal metaphor.
  The banner is centred because it is a symmetrical brand plate, not a layout.
- **Generous vertical rhythm.** This palette is quiet; the design earns its
  presence through space and precision, not density.
- **Responsive and accessible floor:** works to 360px wide, visible keyboard
  focus (an orange 2px outline on ink, ink on cream), reduced motion respected,
  every interactive target at least 44px.

---

## 8. Hard rules

These came from things that actually broke. Do not relitigate them.

1. **Orange is never text on cream.** 2.73:1. Shapes only. Orange text on ink is fine.
2. **Cream never floats on white.** It needs a container, a border, or the framed variant. Cream on white is about 1.1:1 — the edge disappears entirely.
3. **Platform avatar files are full-bleed and fully opaque.** No `rx` on the outer rect, no transparent corners. LinkedIn composites transparency onto white and then applies its own rounding, producing white wedges and a doubled edge.
4. **Do not use "od" as a monogram anywhere.** It reads as "overdose". This was tested and rejected.
5. **Never let the mono font fall back.** Self-host with `font-display: swap` and a mono fallback. For locked raster assets, convert text to outlines before export.
6. **Below ~24px, switch to the ink tile** with thickened strokes. The cream tile's edge and the chevron gap both vanish at small sizes.
7. **Two colours plus a neutral.** No fifth colour without a deliberate decision.

---

## 9. Assets

Delivered alongside this file:

```
optimaldevs-logo-cream-300.{svg,png}         frameless — LinkedIn / platform avatars
optimaldevs-logo-cream-framed-300.{svg,png}  10px ink keyline — white backgrounds
optimaldevs-logo-ink-300.{svg,png}           inverse
optimaldevs-favicon.svg                      thickened strokes for small sizes
optimaldevs-favicon-{16,32,512}.png
optimaldevs-banner-1128x191.{svg,png}        LinkedIn company cover, native spec
optimaldevs-banner-2256x382.{svg,png}        2× for retina
optimaldevs-banner-4200x700.{svg,png,jpg}    alternate high-res spec (6:1)
```

**Caveat on the raster files:** the PNGs were rendered with DejaVu Sans Mono as
a stand-in because JetBrains Mono was not installed in the build environment.
Install JetBrains Mono and re-export from the SVGs before treating any raster
as final. The SVGs carry the correct font stack.

---

## 10. Open questions — settle these before building

1. **Name form.** Three variants are currently live: `OptimalDevs` (site title),
   `Optimal Devs` (LinkedIn page name), `optimal_devs` (wordmark). Pick one
   prose form and make the LinkedIn page name match the site exactly, since
   that pairing is what shows up in search results. The wordmark stays as-is —
   it is a lockup, not a name.
2. **Is "security" a service line or a practice?** The tagline currently
   promises security. If OptimalDevs sells audits, hardening, or incident
   response, keep it and build a page for it. If it means "we build things
   securely", reword — the claim sets client expectations and carries different
   liability than web work.
3. **Body typeface.** Full monospace, or mono for headings and a sans for
   long-form body? Decide before writing components, not after.
4. **Font licensing.** Verify JetBrains Mono's current licence terms before
   self-hosting on a commercial site.
5. **Current stack.** Unknown at handoff — Claude Code should inspect the
   existing repo before proposing an architecture.

---

## 11. Starter prompt for Claude Code

```
Read docs/BRAND.md in full before doing anything else.

Then inspect this repo and tell me:
1. The current stack, build setup, and where styles live
2. Which parts of the existing site already fit BRAND.md and which conflict
3. A proposed component inventory for the redesign

Do not write any code yet. Once we agree on the inventory, we will build
one component at a time, starting with the design tokens as CSS custom
properties matching the palette table exactly.

Constraints that are not negotiable: the "Hard rules" section of BRAND.md,
WCAG AA on all text, and no gradients, shadows, or blurs anywhere.
```

Starting with an audit rather than a build is deliberate. It stops Claude Code
from generating a plausible-looking site that quietly ignores half of these
constraints.
