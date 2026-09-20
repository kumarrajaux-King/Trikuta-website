# Trikuta Adventures & Sports — Design System

A design system for **Trikuta Adventures & Sports**, an adventure and sports outfitter.
The brand runs guided treks and high-altitude expeditions in the western Himalaya
alongside year-round sports programmes. The identity is built on two things: a deep
summit navy and a metallic gold, set in heavy uppercase type with wide tracking.

---

## ⚠️ Read this first

Everything here is derived from **one raster logo**. There was no codebase, no Figma
file, no website and no brand guide. Three consequences:

1. **The typeface is a substitution.** The wordmark is a heavy geometric sans with
   flat terminals and a round "U" bowl. No binary was supplied, so the system ships
   **Montserrat** (display) and **Source Sans 3** (body) from Google Fonts. Send the
   real files and `tokens/fonts.css` becomes a set of `@font-face` rules.
2. **Icons are a substitution.** See ICONOGRAPHY below.
3. **Everything beyond colour, type and the mark is an informed extrapolation.** The
   layout rules, motion, component inventory and voice are built *from* the logo's
   own logic — angular geometry, gold as punctuation, uppercase tracked labels — not
   copied from existing Trikuta material. Where a real site exists, treat it as the
   authority and send it over.

**One asset request above all others: a transparent-background SVG or PNG of the
logo.** The supplied file is a raster on solid white, which means it cannot go on a
navy ground. Every dark surface currently falls back to the type lockup.

---

## Sources

| Source | What it gave us |
| --- | --- |
| `uploads/pasted-1789755094453-0.png` (copied to `assets/trikuta-logo.png`) | 1254×1254 logo raster. Colours sampled directly from its pixels. **The only source.** |

The logo contains: a gold hexagonal frame; a navy mountain range with a sunburst; a
trident above the central peak; a hiker with a pack; a badminton player mid-smash;
the "TRIKUTA" wordmark; the subtitle "ADVENTURES & SPORTS"; and the tagline
"RISE · EXPLORE · CONQUER" between tapered gold rules.

## Products represented

**One** — the marketing website (`ui_kits/website/`). No application, booking back
end or mobile product was supplied, so none is modelled.

---

## CONTENT FUNDAMENTALS

**Voice: an experienced guide giving you a straight briefing.** Calm, specific and
faintly understated. It respects the mountain and does not oversell it. The brand
never uses the language of luxury travel ("curated", "bespoke", "unforgettable") and
never the language of extreme-sports marketing ("crush", "conquer your limits" —
despite the tagline, which is the one permitted piece of bravado).

**Casing is the system's loudest signal.**

- Display headlines and section titles: **UPPERCASE**, tracked `+0.02em`.
- Eyebrows, buttons, nav links, form labels, badges: **UPPERCASE**, tracked `0.1em`
  to `0.22em`.
- Everything else — body copy, card titles below 24px, itinerary text: **sentence
  case**. Never title case. `Kedarkantha Winter Summit` is a proper name, not title
  casing.

**Person: "you" for the reader, "we" for the company.** *"You should be able to walk
5 km on undulating ground without stopping."* · *"We send a six-week preparation plan
once you book."* The brand uses "we" freely — it is a small outfit and says so.

**Be concrete. Numbers beat adjectives.** Not "a challenging high-altitude trek" but
*"Six days from Dehradun to a 3,810 m ridge."* Distances in km, altitudes in metres
with a thin space and unit, durations in days, temperatures in °C. Prices in rupees
with the `₹` symbol and a comma thousands separator: `₹18,500`.

**State the unwelcome thing plainly.** *"The guide's decision is final and it is
always a safety decision."* · *"We do not refund for weather."* No hedging, no
apology, no exclamation marks.

**Headlines are 2–5 words.** *Rise above the treeline* · *Four disciplines, one
outfit* · *Trips with places left* · *Run by people who live here* · *What climbers
say* · *Get in touch*.

**Body copy is one to three sentences.** It adds a fact the headline implies; it
never restates it.

**The tagline is fixed and always set as three words with separators:**
`RISE · EXPLORE · CONQUER`. Middots, not bullets or hyphens. Never reordered, never
translated, never used as a sentence in running copy.

**No emoji, ever.** No exclamation marks in UI copy. The one decorative mark in the
system is the small gold diamond (◆ rotated square) used as a separator — it is a
drawn element, not a character.

**Buttons name the action and its object.** *Book this trek*, *Browse adventures*,
*Choose a date*, *Send enquiry*, *Join waitlist*. Never *Submit*, *Learn more* or
*Click here*.

---

## VISUAL FOUNDATIONS

### The one big idea

**Navy is the ground, gold is the punctuation.** Large areas of deep navy —
heroes, footers, stat bands — carry white type, and gold appears only as a rule, a
label, a frame or a single filled button. Gold is never a background for body text
and never more than a few percent of any screen. Get that ratio wrong and the brand
reads as a hotel; get it right and it reads as an outfitter.

### Colour

- **Summit navy** `#001848` is the primary. The full ramp runs `--navy-900` to
  `--navy-50`. Every dark surface, every heading, every primary button.
- **Trikuta gold** `#c68a1a` core, with `--gold-400` `#ebb130` as the highlight and
  `--gold-700` `#8a5e08` as the shadow. The logo's gold is a **metallic gradient**,
  not a flat fill — `--gold-metallic` (135°) for frames, crests and hexagons;
  `--gold-metallic-flat` (90°) for rules and dividers.
- **Stone neutrals** are cool-leaning so they sit under navy without muddying.
- **Status colours** are deliberately cool and clearly distinct from gold, so an
  amber "3 left" badge never reads as a brand accent.

Contrast: gold-400 on navy is 8.9:1 and gold-700 on white is 4.8:1 — the latter is
fine for labels and eyebrows but **never for body copy**.

### Type

Two faces, one contrast. Display is heavy, uppercase and **positively tracked**
(`+0.02em` on display, up to `0.34em` on the tagline) — the opposite of most modern
systems and the single most important thing to get right. Body is a humanist
grotesque at 1.62 leading, sentence case, grey.

The rhythm of a section is always the same four objects: eyebrow → uppercase
headline → gold rule → grey body. That repetition is what makes the system cohere.

### Spacing & layout

4px base. Sections are 96px tall vertically (`--layout-section-y`), content is capped
at 1200px inside a 1440px page. Layout is structured and edge-to-edge: full-bleed
navy bands alternate with white content sections. There is no floating "page card" —
content runs to the viewport edge and is bounded by its own background colour.

### Backgrounds

Flat colour and photography. **No decorative gradients** — the only gradients in the
system are the gold metallic sweeps and the photo scrims. No patterns, no textures,
no noise. Full-bleed navy bands do the heavy lifting.

### Imagery

Wide Himalayan landscape and action photography: cold blue shadows, warm low-angle
light, high contrast, deep depth of field. People are shown small against terrain
rather than posed. No black-and-white, no heavy grade, no lens flare.

Photos always carry a **navy scrim**, never a black one: bottom-up
`rgba(0,18,51,0.86) → transparent` on tiles, left-to-right on heroes. Never a blur,
never a solid overlay panel across an image.

**With no photograph, use a flat navy or gold block** at the frame's radius
(`imageTone`). Do not use a grey box with a photo icon, and do not generate imagery.

### Corners, borders, shadows

The logo is built from peaks, chevrons and a hard hex frame, so **the system is
angular**. Buttons and inputs 4px, cards 6px, panels 10px. A full pill appears on
`Badge` and nowhere else.

**Borders do the work shadows do elsewhere.** Every card carries a 1px
`--border-subtle` hairline; on navy it is a 1px white-at-18% line. Shadows are tight,
cool-tinted and reserved for genuinely floating objects — a hovered card, a sticky
booking panel, a dialog. Static cards get no shadow at all.

The one coloured shadow is `--shadow-gold`, used under a gold button at rest on a
busy ground.

### Transparency & blur

Two places only: pills over photography (`rgba(0,18,51,0.52)` + 12px backdrop blur)
and the `frost` icon button. Nothing else is translucent. Navy panels are opaque.

### Motion

Brisk and purposeful — 150ms for controls, 220ms for surfaces, 380ms for media.
Easing is `cubic-bezier(0.16, 1, 0.3, 1)`. **Nothing bounces or overshoots.**

The signature interaction: **cards do not lift.** On hover the photograph scales to
`1.05` inside a fixed frame while the card stays put and its border darkens. The
`ActivityTile`'s gold rule extends from 24px to 56px. That restraint is deliberate —
floating cards would undercut the solidity the brand trades on.

### Hover & press

- **Buttons** lighten their fill one step (`--action-*-bg-hover`). No shadow change,
  no lift, no scale on hover.
- **Nav links** sit at 76% opacity and go to 100%; the active item keeps a 2px gold
  underline.
- **Cards** darken their border and gain `--shadow-md`; the image zooms.
- **Press** is a uniform `scale(0.985)` with no colour change.
- **Focus** is a 3px gold ring (`rgba(235,177,48,0.28)`) plus a navy border on
  inputs; 2px solid `--focus-ring` at 2px offset elsewhere.
- **Disabled** is 40% opacity with `not-allowed`. Sold-out rows dim to 55% and stay
  on the page rather than disappearing.

---

## ICONOGRAPHY

**No icon set was supplied** — the only source is a logo raster, so there are no
vector files to copy. The logo's own drawn elements (trident, sunburst, mountains,
figures) are illustration, not a reusable icon system.

**Substitution: [Lucide](https://lucide.dev) at version 0.469.0, loaded from CDN.**
It matches the brand's needs on stroke weight and cap style, and its outdoor set
(`mountain-snow`, `tent`, `compass`, `waves`, `backpack`) covers the domain. The
`Icon` component fetches
`https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/<name>.svg` and inlines it
so glyphs paint in `currentColor` and accept a `weight` override. (CSS `mask-image`
was tried first and does not work cross-origin in Chromium — inlining is the reason
for the fetch.) **Flagged for review** — drop real SVGs into `assets/icons/` and
repoint `LUCIDE` in `components/core/Icon.jsx` when a set exists.

Rules observed throughout:

- **Stroke width 2** at all sizes; 1.75 inside a `Crest`, where the glyph is large.
- Icons are **never** the only thing carrying meaning — every icon button has a
  `label`, and metadata rows pair a glyph with text.
- Icons sit inside a **square** (4px radius), never a circle. The one exception is
  the hexagonal `Crest`, which is the logo's own frame.
- **Emoji: never.** **Unicode glyphs as icons: never** — the gold diamond separator
  is a rotated `<span>`, not `◆`.
- The gold diamond and the tapered gold rule are the brand's two ornamental marks.
  Both come straight from the logo lockup. Nothing else decorative may be added.

### Logo

`assets/trikuta-logo.png` — the supplied raster, unmodified. **It has a solid white
background**, so it cannot be placed on navy. `Wordmark` handles this: `variant="mark"`
renders the file on light grounds, `variant="type"` sets "TRIKUTA / ADVENTURES &
SPORTS / RISE · EXPLORE · CONQUER" in the display face for dark ones. No
reconstruction, redraw or vector trace of the mark has been attempted.

---

## Index

### Root

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `readme.md` | This file. |
| `SKILL.md` | Agent-Skills front matter, so this folder works in Claude Code. |
| `thumbnail.html` | Homepage tile for the system. |
| `assets/trikuta-logo.png` | The supplied logo raster. |

### `tokens/`

`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
`elevation.css` · `motion.css` · `base.css` — 171 custom properties.

### `guidelines/`

22 specimen cards across four groups: **Colors** (7), **Type** (6), **Spacing** (3),
**Brand** (6).

### Components

**`components/core/`** — `Button`, `IconButton`, `Icon`, `Badge`, `Pill`, `Card`

**`components/brand/`** — `Wordmark`, `Eyebrow`, `GoldRule`, `Crest`, `StatBlock`,
`TaglineBand`

**`components/content/`** — `TripCard`, `ActivityTile`, `ItineraryStep`,
`TestimonialCard`, `DepartureRow`, `Accordion`

**`components/navigation/`** — `Navbar`, `Footer`, `Tabs`, `CarouselControls`

**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`

Every component has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

### On the component inventory

No source defined a component list — the only input was a logo. The set above is a
standard inventory sized to what an adventure outfitter's site actually needs, plus
five pieces that exist **because** of the logo and would not otherwise be here:
`Crest` (its hexagonal frame), `GoldRule` (its tapered divider), `TaglineBand` (its
tagline), `Wordmark` (its lockup) and `StatBlock` (the credibility register the
"RISE · EXPLORE · CONQUER" line sets up).

Deliberately **not** built, because nothing in the source calls for them: Dialog,
Toast, Tooltip, Switch, Radio, Avatar, Breadcrumb, Pagination, Table. Ask before
adding any of them — a component with no counterpart in the brand is one consumers
will trust and designers will not recognise.

### `ui_kits/website/`

`index.html` (click-through), `Shell.jsx`, `Home.jsx`, `Adventures.jsx`,
`TripDetail.jsx`, `Contact.jsx`, `data.js`, `README.md`.

### `templates/`

`adventure-page/` — a ready-to-edit Trikuta marketing page for consuming projects.
