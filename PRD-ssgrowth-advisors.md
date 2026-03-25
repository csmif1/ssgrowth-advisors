# PRD: ssgrowthadvisors.com

**Version:** 1.0
**Date:** March 25, 2026
**Author:** Chris Smith + Claude
**Status:** Final — ready for Claude Code execution

---

## 1. Product Overview

### What We're Building

A 7-8 page website for Start & Scale, Chris Smith's growth advisory practice. The site serves two purposes: lead generation for consulting engagements, and a proof of concept that demonstrates technical excellence. Every performance score, SEO detail, and design decision is part of the pitch — when a prospect inspects this site, they should see someone who knows what they're doing.

### Success Criteria

- Visitor lands → understands what Chris does within 5 seconds
- Visitor scrolls → sees proof (numbers, names, outcomes) within 10 seconds
- Visitor converts → books a call or downloads a resource within 2 minutes
- Lighthouse: 95+ on all four scores
- Core Web Vitals: all green
- Page weight: under 500KB per page

---

## 2. Target User

### Primary Persona: The Stuck Operator

**Who:** CEO, founder, or C-level exec at a startup (Seed–Series B) or SMB ($2M–$50M revenue). They have product-market fit but are hitting a ceiling — GTM isn't scaling, ops are held together with duct tape, team structure hasn't kept up with growth, and they're feeling pressure to adopt AI but don't know where to start.

**Mindset when visiting:** Skeptical. They've talked to consultants before. They're Googling Chris after receiving a cold outreach, getting a referral, or seeing a LinkedIn post. They'll spend 30-90 seconds deciding if he's worth a call.

**What they need to see:**
1. This person has been inside companies like mine — not just advising from outside
2. Specific numbers and outcomes, not vague credentials
3. He understands the chaos I'm in because he's lived it
4. He can actually do the work, not just tell me what to do
5. Clear, fast path to a conversation

**What turns them off:**
- Generic consulting language ("unlock your potential," "strategic transformation")
- No proof — just claims
- Slow site, bad mobile experience, broken anything
- A site that looks like a template

---

## 3. Design Direction

### Reference Sites & What to Pull From Them

**Starfish (starfishco.com):**
- Dark, bold hero section with high-contrast typography
- Case study carousel with numbered slides — editorial presentation of work
- Minimal navigation, confident whitespace
- Single persistent CTA ("Let's Talk") that doesn't feel aggressive
- Typography as the primary design element — the type does the heavy lifting

**Infinum (infinum.com):**
- Clean, modern, generous whitespace
- Strong stats/numbers displayed prominently (7 countries, 400+ professionals)
- Client logo trust strip
- Expertise areas as clear navigation categories
- Work/case studies positioned high on the page
- Dark footer with newsletter capture
- Showreel video element for engagement

### Design Principles for Start & Scale

1. **Typography-led.** The design should feel like a well-set editorial page. Bold headlines, clean body text, confident hierarchy. Type carries the personality — not color, not illustration, not stock photography.

2. **High contrast.** Dark sections and light sections alternating. Not all-dark like Starfish, not all-light like a typical SaaS site. Use contrast to create visual rhythm and guide the eye.

3. **Numbers prominent.** Chris's career is defined by specific numbers ($20M→$120M, 42 people in 8 months, 210% of plan). These should be visually elevated — large type, featured placement, not buried in paragraphs.

4. **No stock photography.** No handshake photos, no people-in-meetings, no generic office shots. Use typography, whitespace, subtle geometric patterns, or abstract shapes. If imagery is needed, it's icons or custom graphics — never stock.

5. **Operator energy, not agency energy.** Starfish and Infinum are agencies — their sites sell creativity. Chris's site sells execution and clarity. The design should feel more like a sharp operator's personal site than a creative agency portfolio. Think: confident restraint.

6. **Mobile-first, desktop-impressive.** Design for the phone first (the prospect Googling Chris from a referral text). Then make it impressive on desktop for the prospect doing deeper research.

### Brand Kit Direction (For UUPM Skill to Generate)

When generating the design system with ui-ux-pro-max, use these constraints:

- **Color palette:** Dark neutral base (near-black or deep navy), 1 strong accent color (not blue — differentiate from every other consulting site), 1 secondary accent, warm neutral for body text, clean white for contrast sections. Avoid: bright startup colors, gradients, neon.
- **Typography:** Sans-serif pair. Display/headline font should have character — not generic. Body font should be highly readable. Both must be available as web fonts (Google Fonts or similar, self-hosted for performance). Avoid: geometric fonts that feel like tech startups (Inter, Poppins). Consider: editorial-leaning sans-serifs.
- **Spacing:** Generous. Let content breathe. Dense information should be balanced with empty space.
- **Borders/dividers:** Minimal. Use whitespace and color shifts to separate sections, not lines.
- **Radius:** Minimal to none. Sharp corners convey precision and confidence. Rounded corners feel casual.
- **Motion:** Subtle. Fade-in on scroll for content blocks. No parallax, no bouncing elements, no decorative animations. Motion should feel intentional, not playful.

---

## 4. Site Architecture

### Brand Name Usage

- **Visitor-facing:** The brand displays as **"Start & Scale"** everywhere — logo, nav, headers, footer, page copy. "Growth Advisors" and "SS Growth Advisors" never appear on the site.
- **Technical identifiers:** Project folder (`ssgrowth-advisors`), domain (`ssgrowthadvisors.com`), and GitHub repo (`csmif1/ssgrowth-advisors`) stay as-is — visitors never see these.

### Sitemap

```
ssgrowthadvisors.com/
├── / (Home)
├── /about
├── /services
├── /case-studies
│   ├── /case-studies/[slug] (individual case study pages)
├── /blog
│   ├── /blog/[slug] (individual posts)
├── /resources
├── /contact
└── /ai-advisory (optional — dedicated AI practice page)
```

### Navigation

**Desktop:** Horizontal nav bar, sticky on scroll. "Start & Scale" wordmark left, nav links center-right, "Book a Call" button right (always visible, accent color).

**Mobile:** Hamburger menu, full-screen overlay on open. "Book a Call" button visible in header without opening menu.

**Nav items:** Home, About, Services, Case Studies, Blog, Resources, Contact

---

## 5. Page-by-Page Specifications

### 5A. Home Page (`/`)

**Purpose:** Prove credibility in under 10 seconds. Convert interest into a booked call or resource download.

**Sections in order:**

1. **Hero**
   - Headline: Bold, specific positioning statement. Not "We help companies grow." Something closer to: the anchor bio adapted for impact. Think Infinum's "Designing and building digital solutions since 2005" — clear, confident, time-stamped credibility.
   - Subheadline: One sentence expanding on the headline. Use the "impose clarity, drive accountability, keep execution moving" language.
   - Primary CTA: "Book a Call" (Calendly link)
   - Secondary CTA: "See the Work" (scrolls to case studies or links to /case-studies)
   - No hero image. Typography and whitespace carry the hero. Optional: subtle background texture or gradient.

2. **Proof Strip**
   - Large-format numbers: 3-4 key stats displayed prominently (like Infinum's "7 countries / 400+ professionals" but with Chris's numbers)
   - Examples: "$120M ARR scaled" / "9 markets launched" / "15+ years in founder-led companies" / "4 companies, Seed to IPO-track"
   - Visual treatment: Large type, contrasting background section, minimal decoration

3. **Experience Strip**
   - Company names where Chris has operated: WeWork, CloudKitchens, Apple, Allwhere
   - Not "client logos" — framed as "Built and scaled at" or "Operating experience"
   - Text-based, not logos (we don't have permission to use their logos and it would misrepresent the relationship)

4. **Services Overview**
   - 4 service cards in a grid (2x2 desktop, stacked mobile)
   - Each card: title, 2-line description, arrow/link to /services
   - Cards from CLAUDE.md: Revenue & GTM, Operations & Systems, Fundraising & Investor Readiness, AI & Automation Advisory

5. **Case Study Teaser**
   - 2-3 featured case studies with outcome headline, industry tag, brief summary
   - Link to /case-studies for more
   - Anonymized per CLAUDE.md rules

6. **CTA Block**
   - "Let's talk about what's slowing you down."
   - Calendly button + "Or send a message" link to /contact
   - Dark background section for contrast

### 5B. About Page (`/about`)

**Purpose:** Build trust and personal connection. Answer "why should I trust this person?"

**Sections:**

1. **Intro**
   - Not a third-person bio. First-person or narrative voice.
   - Opening hook: the pattern across WeWork, CloudKitchens, Apple — what Chris learned from building inside chaos.

2. **Career Arc**
   - Visual timeline or structured narrative (not a resume dump)
   - Each company: 1-2 sentence context, key numbers, what he built/learned
   - Emphasis on the progression: operator → leader → builder → advisor
   - Include the restructuring/layoff experience at WeWork — it adds credibility, not weakness

3. **Three Differentiators**
   - Inside the chaos, not outside it
   - Cross-functional without direct authority
   - Builds the technology, not just the strategy
   - Each gets a short paragraph with a specific proof point

4. **CTA Block**

### 5C. Services Page (`/services`)

**Purpose:** Show what Chris actually does. Each service should feel like a solution to a specific pain, not a menu item.

**Structure:** 4 sections, one per service. Each section:

- **Pain statement:** What the client is experiencing (e.g., "You have a product people want but your sales org can't keep up")
- **What Chris does:** Specific deliverables and approach
- **Proof point:** Relevant career example with numbers (anonymized if needed)
- **CTA:** "Book a call about [service area]" — Calendly link with UTM parameter for tracking which service drove the inquiry

### 5D. Case Studies Page (`/case-studies`)

**Purpose:** Prove outcomes with specifics.

**3 case studies, anonymized per CLAUDE.md:**

1. **"National Nonprofit — Fundraising & Technology Modernization"** (TESF)
   - Challenge: 15-year-old org with manual processes, fragmented donor data, no digital infrastructure
   - Approach: Salesforce NPSP implementation, SFMC email production, GA4/Givebutter integration, grant writing, donor stewardship strategy
   - Outcomes: Modernized tech stack, centralized donor management, launched digital fundraising campaigns
   - Services: Fundraising & Investor Readiness, AI & Automation Advisory

2. **"Off-Grid Education Startup — GTM & Content Strategy"** (RealPrepare)
   - Challenge: New brand in niche market, no audience, no revenue infrastructure
   - Approach: Brand positioning, content strategy, marketing agent configuration, pricing model
   - Outcomes: Complete marketing infrastructure built, content calendar, brand voice established
   - Services: Revenue & GTM, AI & Automation Advisory

3. **"Legal-Tech SaaS Platform — Full-Stack Product Build"** (TrustFlow360)
   - Challenge: Complex regulatory domain (ILIT administration), needed end-to-end platform from zero
   - Approach: Built React/TypeScript/Supabase platform with 19 Edge Functions, AI document processing via Gemini, PDF generation, full auth system
   - Outcomes: V1 complete, E2E tested, production-ready
   - Services: Operations & Systems, AI & Automation Advisory

Each case study should have its own page (`/case-studies/[slug]`) with full detail, plus a card on the listing page.

### 5E. Blog (`/blog`)

**Purpose:** Thought leadership and SEO. Cross-posted to LinkedIn.

**Infrastructure:**
- Astro content collections for posts (Markdown files in `src/content/blog/`)
- Listing page with BlogPostCard components
- Individual post layout: title, date, author (Chris Smith), estimated reading time, content, related posts, CTA at bottom

**Launch posts (2):**

1. **"People, Systems, Deals"** (~800 words)
   - Chris's operating framework distilled from WeWork, CloudKitchens, Apple
   - Structure: What it means, where it came from, how founders can use it
   - Tone: First-person, conversational, specific

2. **"What Founders Get Wrong About Hiring Their First Sales Leader"** (~600 words)
   - Drawn from Chris's experience building sales orgs from scratch
   - Practical, opinionated, contrarian where appropriate

### 5F. Resources (`/resources`)

**Purpose:** Lead capture + demonstrate expertise.

**Launch with 1 resource:**

- **"Growth Readiness Assessment"** — A self-assessment checklist (on-page, not PDF) that a founder/operator can use to evaluate if their company is ready to scale. Covers: GTM maturity, ops infrastructure, team structure, data/analytics, AI readiness.
- Email capture gate: name + email to access full results or downloadable version
- Form submits to Formspree (or similar — configured post-launch)

### 5G. Contact (`/contact`)

**Purpose:** Zero friction path to a conversation.

**Elements:**
- Calendly embed (scheduling widget, not just a link)
- Contact form: name, email, company, brief message, submit
- Brief text: "Let's talk about what's slowing you down." or similar
- Response time expectation: "I'll get back to you within 24 hours."
- Location: Marblehead, MA (for local SEO / structured data)

### 5H. AI Advisory (`/ai-advisory`) — Optional

**Purpose:** Deep-dive page for the AI & Automation Advisory practice area.

**Include if:** The services page can't do justice to the AI offering. This page would cover:
- Chris's hands-on AI/build credentials (TrustFlow360, Claude Code, agentic workflows)
- AI readiness assessment framework
- Case study detail on the SaaS build
- "I don't just recommend tools — I build with them" positioning

**Skip if:** The services page adequately covers this.

---

## 6. Component Inventory

All components built in `src/components/`:

| Component | Description | Props |
|---|---|---|
| Header | Sticky nav, "Start & Scale" wordmark, links, mobile hamburger, "Book a Call" button | — |
| Footer | "Start & Scale" wordmark, nav, copyright, social links, optional newsletter capture | — |
| HeroSection | Full-width headline, subheadline, 1-2 CTAs | headline, subheadline, primaryCTA, secondaryCTA |
| ProofStrip | Large-format stats in a row | stats: array of {number, label} |
| ExperienceStrip | Company names where Chris operated | — |
| ServiceCard | Single service offering card | title, description, link, icon |
| CaseStudyCard | Case study snapshot card | title, industryTag, summary, link |
| CaseStudyFull | Full case study layout | challenge, approach, outcomes, services |
| BlogPostCard | Blog listing card | title, date, excerpt, link |
| CTABlock | Reusable CTA section | heading, subtext, primaryCTA, secondaryCTA |
| ContactForm | Name, email, company, message, submit | — |
| ResourceCard | Resource listing card with download/capture | title, description, captureRequired |
| StatBlock | Single large stat with label | number, label |
| TimelineItem | Career timeline entry | company, role, dates, description, stats |

---

## 7. Content Requirements

### Copy Rules (Enforced by Skills)

- All page copy → **copywriting skill**
- All copy reviewed → **stop-slop skill**
- Source material → **CLAUDE.md "Who Chris Is" section**
- Anonymization → **CLAUDE.md rules** (never use TESF, RealPrepare, TrustFlow360 by name in case studies)

### SEO Content

Every page needs:
- Unique meta title (50-60 characters, keyword-aware)
- Unique meta description (150-160 characters, includes CTA language)
- One H1 per page
- Proper heading hierarchy (H1 → H2 → H3, no skipped levels)
- OpenGraph title, description, image
- Twitter Card tags

### Structured Data

- **LocalBusiness** schema: Start & Scale, Marblehead MA, consulting services
- **Person** schema: Chris Smith, founder, linked to the business
- **BlogPosting** schema: on each blog post
- **FAQPage** schema: if any page has FAQ content

---

## 8. Technical Specifications

### Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Content:** Astro Content Collections (Markdown for blog posts)
- **Hosting:** Vercel (free tier)
- **Deploy:** GitHub auto-deploy from `csmif1/ssgrowth-advisors`
- **Domain:** ssgrowthadvisors.com (Bluehost DNS → Vercel)
- **Forms:** Formspree (free tier, configured post-launch)
- **Scheduling:** Calendly embed
- **Analytics:** GA4 (configured post-launch)
- **Fonts:** Self-hosted web fonts (determined by design system, loaded via @font-face for performance)

### Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| Page weight | < 500KB per page |
| Time to Interactive | < 3s |

### Accessibility

- WCAG 2.1 AA compliance
- Proper alt text on all images/icons
- Focus states on all interactive elements
- Color contrast ratios meet AA standards
- Keyboard navigation for all interactive elements
- Skip-to-content link
- Landmark regions (header, main, footer, nav)
- Form labels and error states

---

## 9. File Structure

```
~/projects/ssgrowth-advisors/
├── CLAUDE.md                          # Project instructions for Claude Code
├── PRD.md                             # This document
├── design-system/
│   └── MASTER.md                      # Generated by UUPM skill
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── ProofStrip.astro
│   │   ├── ExperienceStrip.astro
│   │   ├── ServiceCard.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── CaseStudyFull.astro
│   │   ├── BlogPostCard.astro
│   │   ├── CTABlock.astro
│   │   ├── ContactForm.astro
│   │   ├── ResourceCard.astro
│   │   ├── StatBlock.astro
│   │   └── TimelineItem.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogPost.astro
│   │   └── CaseStudy.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── resources.astro
│   │   ├── contact.astro
│   │   └── ai-advisory.astro (optional)
│   ├── content/
│   │   ├── blog/
│   │   │   ├── people-systems-deals.md
│   │   │   └── hiring-first-sales-leader.md
│   │   └── case-studies/
│   │       ├── national-nonprofit.md
│   │       ├── off-grid-education.md
│   │       └── legal-tech-saas.md
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── .gitignore
```

---

## 10. Build Phases (Reference)

Detailed prompts for each phase are in the Build & Launch Guide. This PRD is the spec that Claude Code reads alongside CLAUDE.md to understand what to build and why. The build guide tells it the session-by-session execution order.

| Phase | What Gets Built | Key Decision Point |
|---|---|---|
| 1 | Scaffold + Design System | Approve colors, fonts, design system |
| 2 | Components + Base Layout | Approve component look/feel on test page |
| 3 | Home + About pages | Approve page copy and layout |
| 4 | Services + Case Studies + Contact | Approve case study framing |
| 5 | Blog + Resources | Approve blog posts |
| 6 | SEO + Performance pass | Review Lighthouse scores |
| 7 | Final review + Deploy | Go/no-go on launch |
