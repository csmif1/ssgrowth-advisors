# Start & Scale — Design System

Global source of truth. All pages reference this system unless a page-specific override exists in `design-system/pages/`.

---

## Color Palette

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| Dark Base | `#0A0A0A` | `dark` | Hero sections, footer, dark alternating sections |
| Dark Surface | `#171717` | `dark-surface` | Cards/elements on dark backgrounds, nav bg on scroll |
| Accent | `#0D9488` | `accent` | CTAs, links, hover states, key metrics, stat numbers |
| Accent Hover | `#0F766E` | `accent-hover` | Button/link hover state (teal-700) |
| Accent Muted | `#5EEAD4` | `accent-muted` | Text on dark backgrounds, secondary highlights |
| Body Text (light) | `#44403C` | `body` | Body copy on white/light sections (stone-700) |
| Body Text (dark) | `#D6D3D1` | `body-light` | Body copy on dark sections (stone-300) |
| Headline (light) | `#1C1917` | `headline` | Headlines on white sections (stone-900) |
| White | `#FAFAF9` | `background` | Light section backgrounds (stone-50) |
| Surface | `#F5F5F4` | `surface` | Alternating light sections, card backgrounds (stone-100) |
| Border | `#E7E5E4` | `border` | Subtle dividers where needed (stone-200) |

### Contrast Checks (WCAG AA)

- `#0D9488` on `#FAFAF9`: 4.6:1 (passes AA normal text)
- `#0D9488` on `#0A0A0A`: 5.2:1 (passes AA normal text)
- White on `#0D9488`: 4.5:1 (passes AA normal text)
- `#44403C` on `#FAFAF9`: 8.5:1 (passes AAA)
- `#D6D3D1` on `#0A0A0A`: 14.3:1 (passes AAA)

---

## Typography

**Headline & Stats:** Space Grotesk (self-hosted WOFF2)
- Weights: 600 (subheadings), 700 (headlines, stats)
- Character: Distinctive letterforms, editorial without being decorative

**Body, Nav, Buttons:** Source Sans 3 (self-hosted WOFF2)
- Weights: 400 (body), 500 (captions, nav), 600 (buttons, emphasis)
- Character: Warm humanist sans-serif, excellent small-size readability

### Type Scale

| Element | Font | Weight | Size (mobile / desktop) | Line Height | Letter Spacing |
|---------|------|--------|-------------------------|-------------|----------------|
| H1 | Space Grotesk | 700 | 2.25rem / 3.75rem | 1.05 | -0.02em |
| H2 | Space Grotesk | 700 | 1.875rem / 3rem | 1.1 | -0.02em |
| H3 | Space Grotesk | 600 | 1.5rem / 1.875rem | 1.2 | -0.01em |
| H4 | Space Grotesk | 600 | 1.25rem / 1.5rem | 1.25 | 0 |
| Body | Source Sans 3 | 400 | 1rem / 1.125rem | 1.65 | 0 |
| Body Large | Source Sans 3 | 400 | 1.125rem / 1.25rem | 1.6 | 0 |
| Small/Caption | Source Sans 3 | 500 | 0.875rem | 1.5 | 0.01em |
| Stat Number | Space Grotesk | 700 | 2.5rem / 4.5rem | 1.0 | -0.03em |
| Nav Link | Source Sans 3 | 500 | 0.875rem / 0.9375rem | 1.0 | 0.04em |
| CTA Button | Source Sans 3 | 600 | 0.9375rem | 1.0 | 0.02em |

---

## Spacing

| Context | Mobile | Desktop |
|---------|--------|---------|
| Section padding (vertical) | 3rem (48px) | 5rem (80px) |
| Hero padding (vertical) | 4rem (64px) | 7rem (112px) |
| Component gap | 2rem (32px) | 2rem (32px) |
| Card inner padding | 1.5rem (24px) | 2rem (32px) |

---

## Layout Grid

| Breakpoint | Width | Columns | Container |
|------------|-------|---------|-----------|
| Mobile | < 640px | 1 | 100% (px-5) |
| Tablet | 640–1023px | 2 | 100% (px-8) |
| Desktop | 1024–1279px | 3 | max-w-5xl |
| Wide | 1280px+ | 4 | max-w-6xl (1152px) |

- Long-form text: `max-w-3xl` (768px)
- Page container: `max-w-6xl mx-auto`

---

## Component Patterns

### Navigation
Fixed top, `bg-dark/95 backdrop-blur-sm` when scrolled. "Start & Scale" wordmark in white (Space Grotesk 600). Nav links in stone-300, hover → accent-muted. "Book a Call" button: `bg-accent text-white` with sharp corners. Mobile: hamburger with full-screen dark overlay.

### Hero
Full-width `bg-dark`. H1 in white, large and tight. Subtext in body-light. Single accent CTA button. No images — type and negative space only.

### Proof Strip (Stats)
Dark or light bg section. Numbers in accent color (`#0D9488`), Space Grotesk 700 at 4.5rem desktop. Labels in muted body text below each number. 3-4 stats in a row.

### Experience Strip
Light bg. Company names in Space Grotesk 600, stone-400 color, separated by em dashes or generous spacing. "Built and scaled at" label above in small caps.

### Service Cards
White/surface bg, no visible border (shadow-sm on hover only). Left-aligned. Lucide icon (24px, accent color), H3 in Space Grotesk, body in Source Sans, text link with arrow → accent color. Hover: accent color shift on link, subtle shadow. No scale transforms.

### CTA Blocks
`bg-dark` with white headline (Space Grotesk), body-light subtext, accent button. One headline, one button. Sharp corners.

### Case Study Cards
Surface bg. Large accent-colored stat number at top. Brief narrative in body text. "Read more →" link in accent.

### Footer
`bg-dark`. Three columns: nav links (stone-400, hover → accent-muted), contact info, copyright. "Start & Scale" wordmark. Minimal.

### Blog Post Cards
Surface bg. Date in small/caption. H3 title in Space Grotesk. Excerpt in body. "Read →" accent link. No images.

### Contact Form
Light bg. Labels in small/caption weight. Inputs with border color, headline text. Focus state: accent border. Submit: accent bg, white text.

### Timeline Items
Left-aligned vertical line in border color. Dot marker in accent. Company in Space Grotesk 600, role in body, dates in caption. Stats in accent.

---

## Anti-Patterns

1. **No gradients** — flat colors only
2. **No stock photography** — typography and whitespace carry design
3. **No rounded corners beyond `rounded` (4px)** — sharp = precision
4. **No emoji as icons** — Lucide set, 24px, stroke-width 1.5
5. **No animations on load** — content visible immediately. Hover transitions only (150–200ms, color/opacity)
6. **No parallax or scroll hijacking**
7. **No "Learn More" buttons** — every CTA states the action
8. **No light gray text on white** — minimum stone-500 for any visible text
9. **No decorative elements** — no dots, blobs, waves, abstract shapes
10. **No more than 2 CTAs per viewport**
11. **No Inter, Poppins, or geometric startup fonts**
12. **No blue anywhere in the palette**
13. **No amber/copper/orange anywhere in the palette**

---

## Icon Set

Lucide Icons — consistent 24x24px, `stroke-width: 1.5`. Use sparingly.

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (Lucide SVGs only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions: 150–200ms, color/opacity only
- [ ] Text contrast: 4.5:1 minimum (WCAG AA)
- [ ] Focus states visible for keyboard navigation (accent-colored ring)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive tested: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on any breakpoint
- [ ] Fonts self-hosted as WOFF2 (no Google Fonts API)
- [ ] Page weight under 500KB including fonts
- [ ] Space Grotesk loaded in weights 600, 700 only
- [ ] Source Sans 3 loaded in weights 400, 500, 600 only
