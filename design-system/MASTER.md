# Start & Scale Growth Advisors — Design System

Global source of truth. All pages reference this system unless a page-specific override exists in `design-system/pages/`.

---

## Color Palette

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| Primary | `#0F172A` | `primary` | Headlines, nav, footer bg |
| Secondary | `#334155` | `secondary` | Subheadings, secondary text |
| Accent | `#B45309` | `accent` | CTAs, links, hover states, key metrics |
| Muted | `#64748B` | `muted` | Body text, captions, meta |
| Background | `#FFFFFF` | `background` | Page background |
| Surface | `#F8FAFC` | `surface` | Alternating sections, cards |
| Border | `#E2E8F0` | `border` | Dividers, card borders |
| Dark | `#020617` | `dark` | Hero sections, footer |

Rationale: Navy/slate conveys authority and experience. Amber accent is warm and confident — reads as "seasoned operator" not "McKinsey deck."

---

## Typography

**Font Family:** Inter (single-font system)
- One network request = better Lighthouse performance
- Excellent number rendering for metrics/stats
- Weights used: 400 (body), 500 (emphasis), 600 (subheadings), 700 (headings)

| Element | Weight | Size (mobile / desktop) | Line Height |
|---------|--------|-------------------------|-------------|
| H1 | 700 | 2.25rem / 3.75rem | 1.1 |
| H2 | 700 | 1.875rem / 3rem | 1.15 |
| H3 | 600 | 1.5rem / 1.875rem | 1.25 |
| H4 | 600 | 1.25rem / 1.5rem | 1.3 |
| Body | 400 | 1rem / 1.125rem | 1.6 |
| Body Large | 400 | 1.125rem / 1.25rem | 1.6 |
| Small/Caption | 500 | 0.875rem | 1.5 |
| Metric/Stat | 700 | 2.5rem / 4rem | 1.0 |

---

## Spacing Scale

Uses Tailwind default spacing. Key usage guidelines:

| Token | Value | Usage |
|-------|-------|-------|
| 1 | 0.25rem (4px) | Inline spacing, icon gaps |
| 2 | 0.5rem (8px) | Tight padding, tag padding |
| 3 | 0.75rem (12px) | Button padding-y, input padding |
| 4 | 1rem (16px) | Card padding, list gaps |
| 6 | 1.5rem (24px) | Section inner padding |
| 8 | 2rem (32px) | Component gaps |
| 12 | 3rem (48px) | Section spacing (mobile) |
| 16 | 4rem (64px) | Section spacing (tablet) |
| 20 | 5rem (80px) | Section spacing (desktop) |
| 24 | 6rem (96px) | Hero padding |

---

## Layout Grid

| Breakpoint | Width | Columns | Container |
|------------|-------|---------|-----------|
| Mobile | < 640px | 1 | 100% (px-4) |
| Tablet | 640–1023px | 2 | 100% (px-6) |
| Desktop | 1024–1279px | 3 | max-w-5xl |
| Wide | 1280px+ | 4 | max-w-6xl (1152px) |

- Content max-width for long-form text: `max-w-3xl` (768px)
- Page container: `max-w-6xl` centered with `mx-auto`

---

## Component Patterns

### Navigation
Fixed top, white background, subtle `border-b border-border` on scroll. Logo left, links center/right, CTA button right. Mobile: hamburger with slide-in panel.

### Hero
Full-width dark background (`dark`). Large H1 in white, subtext in `slate-300`. Single amber CTA button. No stock photos — typography and negative space create impact.

### Stat Blocks
Grid of 3–4 metrics. Large number in accent (`#B45309`), label in muted. Use real numbers: "$120M ARR", "42-person org", "4x promoted."

### Service Cards
White background, subtle border, left-aligned. Lucide icon (24px), H3 title, 2-line description, text link with arrow. Hover: color shift, no scale.

### CTA Sections
Amber background with white text, or dark slate with amber button. One headline, one button. Between major sections and at page bottom.

### Case Study Cards
Surface background. Metric callout at top (large amber number). Brief narrative. "Read more" link.

### Footer
Dark background (`dark`). Three columns: nav links, contact info, social/legal.

---

## Anti-Patterns

1. **No gradients** — Flat colors only. Gradients read as startup/SaaS.
2. **No stock photography** — Typography, whitespace, color blocks. Real photos only if needed.
3. **No rounded-full cards** — `rounded-lg` (8px) max. Sharp corners = sharp operator.
4. **No emoji as icons** — Lucide icon set, consistent 24px.
5. **No animations on load** — Content visible immediately. Hover transitions only (150–200ms, color/opacity).
6. **No parallax or scroll hijacking** — Native scroll behavior.
7. **No "Learn More" buttons** — Every CTA states the action: "Book a Call," "See Case Studies."
8. **No light gray text on white** — Minimum `slate-500` (#64748B) for any visible text.
9. **No decorative elements** — No dots, blobs, waves, abstract shapes.
10. **No more than 2 CTAs per viewport** — One primary (amber), one secondary (text link).

---

## Icon Set

Lucide Icons — consistent 24x24px, `stroke-width: 1.5`. Use sparingly.

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (Lucide SVGs only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions: 150–200ms, color/opacity only
- [ ] Text contrast: 4.5:1 minimum (WCAG AA)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive tested: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on any breakpoint
- [ ] All images: alt text, lazy loading, WebP/AVIF
- [ ] Page weight under 500KB including images
