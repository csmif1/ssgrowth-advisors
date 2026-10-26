# Start & Scale

## What This Is

Website and digital presence for Start & Scale, an operating partner firm run by Chris Smith (see Positioning below). This site is both a lead generation tool and a proof of concept — it should demonstrate through its own execution what great looks like: performance, SEO, design, accessibility, code quality. Every technical detail is part of the pitch.

- **Domain:** ssgrowthadvisors.com (registered at Bluehost, DNS pointed to Vercel)
- **Stack:** Astro + Tailwind CSS
- **Hosting:** Vercel (free tier)
- **Deploy:** GitHub auto-deploy via github.com/csmif1/ssgrowth-advisors
- **CTA:** Calendly scheduling link + contact form (both on every page)

---

## Positioning (Current — Write to This)

- **Descriptor:** "Operating Partners". Never "Growth Advisory" or "Growth Advisors".
- **The line:** "Operating partners who meet founders and leadership teams where they are."
- **What operating partner means:** we advise, build and hand off. Never promise to run, monitor or operate a client's systems. No uptime, on-call or managed-services language.
- **Stages:** 0→1 (pre-revenue to $1M), 1→10 ($1M to $10M), 10→50 ($10M to $50M) and 50+ ($50M and up), by annual revenue, or annual budget for nonprofits. Every engagement is scoped to the organization's goals. Site wording: "Every one of our engagements is scoped based on your organization's goals." Use the stages where they help a reader place themselves; don't restate the whole framework on every page. The Home H1 ("Your company outgrew your playbook.") sets up the stages heading ("What got you here won't take you there."). Stage data lives in `src/data/stages.ts`.
- **Five practices, in this order:** Revenue & GTM, Brand & Communications, Operations & Systems, Fundraising & Investor Readiness, AI & Technology.
- **Proof order:** Legal-Tech SaaS Platform leads Selected Work on Home and the Case Studies page.
- **Voice:** write as an advisory firm ("our advisors"), not as a résumé.
- **Scale claim:** our advisors have operated from pre-revenue to over $1B in ARR. $20M→$120M is Chris's personal WeWork result: use it only as that specific outcome, never as the ceiling of the firm's experience.
- **Experience list:** nine companies, in this order: Apple, JPMorgan Chase, WeWork, CloudKitchens, Opensignal, Blitzy, Allwhere, Barkbus, TESF. Shown as text only, never logos (Apple's trademark guidelines bar its logo on websites without a written license). Data lives in `src/data/experience.ts`.

---

## Site Structure (7-8 Pages)

1. **Home** — Hero with positioning statement, proof stats, experience strip, stages section, practices overview, selected work, CTA
2. **About** — The firm's track record told through the lens of disruptive industries and hypergrowth, with the company showcase. Not a cheerleading page — a credibility page that shows pattern recognition across chaotic environments.
3. **Services** — Five practice areas with descriptions, outcomes, and individual CTAs. AI & Technology should emphasize that we build the technology, not just the strategy.
4. **Case Studies** — 3-4 outcome-first snapshots (2-3 paragraphs each). Numbers lead, narrative follows. Frame around the chaos-to-order arc, not just revenue numbers.
5. **Blog** — Thought leadership. "People, Systems, Deals" framework essay goes here. Short-form posts cross-posted to LinkedIn.
6. **Resources** — Downloadable assets, frameworks, guides. Lead capture opportunity.
7. **Contact** — Calendly embed + simple contact form. No friction.

Optional 8th page: **AI Advisory** — dedicated page for the AI & Technology practice area. This is where the "I built a SaaS platform from scratch using AI tools" story lives with depth.

---

## Who Chris Is (Source Material for All Content)

The positioning is three-layered: Chris has scaled revenue inside disruptive, founder-led companies under polarizing executive leadership. He's done it at the operational level (building teams, creating systems, launching and scaling new products and markets) AND the strategic level (advising founders and exec teams on GTM, org design, and growth architecture). And he can actually build the technology — not just advise on it.

### Career Arc

- **WeWork** (5.5 years) — Early employee, promoted 4x across operations and sales leadership during expansion from 10 to 800+ locations globally. Roles: Community Manager → Boston City Lead → Head of Sales (US East) → Regional Sales Director (NE US & Canada). Scaled regional ARR $20M→$120M in 24 months across 21 locations. Led 7 market launches, closed $70M+ in enterprise deals (Amazon, Puma, EzCater, USAF). Top performer globally 4 consecutive years. Lived through hypergrowth AND the restructuring/layoffs — year over year during tenure.
- **CloudKitchens** (under Travis Kalanick) — Deployed by COO to stand up Northeast business unit. Built 9 markets, recruited 42-person org (AEs, SDRs, CSMs — full revenue system) in 8 months. 120%+ of plan. 40% faster time-to-revenue vs other regions. Built the market launch playbook, tech stack, and CS workflows from zero.
- **Apple Retail** — Team Lead for 15 Business Specialists in Apple's highest-grossing store. 175 SMB/enterprise clients. $7M+ across 12 quarters. Top 1% globally: 140% (2011), 164% (2012), 131% (2013).
- **Allwhere** — Head of Sales & Partnerships at stealth-stage launch. Built GTM strategy. 50% of company revenue in 6 months. 210% of plan. 35% of new logos. Impacted by failed Series A.
- **TESF** — Chief Advancement Officer (W2, full-time). Leads operations, fundraising, and technology modernization for national 501(c)(3) across 29 states. Co-founded in 2009.

### What Makes Chris Different From Other Consultants

1. **He's been inside the chaos, not advising from outside it.** WeWork under Adam Neumann. CloudKitchens under Travis Kalanick. Apple under Steve Jobs. He knows what hypergrowth actually feels like — the broken systems, the impossible timelines, the org chart that changes monthly.
2. **Cross-functional leadership without direct authority.** His consistent pattern: imposed clarity, drove accountability, kept execution moving — across sales, marketing, ops, and CS teams that didn't report to him.
3. **He builds the technology, not just the strategy.** Built TrustFlow360 (AI-powered SaaS platform) end-to-end using Claude Code. Runs Salesforce NPSP, SFMC, GA4 integrations, and deploys production code. This isn't a consultant who hands you a deck — he can implement.

### Anchor Bio (Source Material, Not Site Copy)

Site copy is written as a firm ("our advisors"), not in Chris's first person. Use the bio for facts.

"15+ years in founder-led, high-velocity environments — WeWork under Adam, CloudKitchens under Travis, Apple under Steve. I've led cross-functional initiatives across sales, marketing, and ops, usually without direct authority. My job has been to impose clarity, drive accountability, and keep execution moving."

### Target Clients

Founder-led startups, SMBs and nonprofits scaling past what got them here, placed by stage (0→1 through 50+). Horizontal — no single vertical.

---

## Practices (Final Names, in This Order)

- **Revenue & GTM** — Sales process, pipeline, pricing, channel strategy. Chris has built revenue orgs from scratch (CloudKitchens: 42 people, 9 markets, 8 months) and scaled existing ones (WeWork: $20M→$120M ARR).
- **Brand & Communications** — Positioning, core messaging, brand refreshes from audit to launch (with design partners on visual identity), communications plans for each audience, and the website that carries the story.
- **Operations & Systems** — Tech stack audits, Salesforce/CRM, marketing automation, process design, team structure. Not just strategy — we configure and deploy the systems ourselves.
- **Fundraising & Investor Readiness** — Deck, narrative, metrics packaging, investor outreach strategy. Informed by experience inside companies at every stage from stealth (Allwhere) to IPO-track (WeWork).
- **AI & Technology** — AI pilots, workflow automation and team rollout inside the client's own environment. Engagements run pilot (2–4 weeks), then build and hand off, then monthly advisory. This is where the "builds the tech" differentiator is strongest: Chris built a full-stack SaaS platform (React/TypeScript/Supabase, 23 Edge Functions, AI document processing) using Claude Code. We don't just recommend AI tools — we ship them, then hand them off.

"People, Systems, Deals" is Chris's internal operating framework validated during startup time. It may appear as a blog post or thought leadership content — not as the primary service framing on the site.

---

## Brand Voice

**Tone:** Short, warm, no buzzwords. One specific insight per point. Simple close. Never preachy or corporate.

**Do:**
- Write like a seasoned operator who's been in the room, not a consultant selling frameworks
- Write as an advisory firm ("our advisors"), not as a résumé
- Use concrete numbers and outcomes (ARR growth, % of plan, team size, timeline)
- Be direct — say what you mean in fewer words
- Sound like someone you'd want to grab coffee with, who also happens to have scaled a $120M region
- Let the career arc speak for itself — WeWork, CloudKitchens, Apple are recognizable names. Don't oversell them. State what happened, move on.

**Don't:**
- Use "leverage," "synergy," "unlock," "empower," "holistic," "cutting-edge," "game-changer"
- Write in triple-structure lists that sound like AI generated them
- Hedge with "it's important to note" or "in today's fast-paced world"
- Over-explain. Trust the reader to connect dots.
- Use "breaking barriers" or similar cliché phrases
- Promise to run, monitor or operate client systems (no uptime, on-call or managed-services language)
- Cheerleadfor Chris. The site proves credibility through specifics, not superlatives. "Scaled $20M→$120M ARR" is more convincing than "visionary revenue leader."

**Email sign-off style:** Short, warm, one specific insight, simple close. Signs "All the best, Chris."

---

## Technical Standards (This Site = Proof of Concept)

This site must score perfectly on every audit tool a prospect might run:

- **Lighthouse:** Target 95+ on all four scores (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** LCP < 2.5s, INP < 200ms, CLS < 0.1
- **SEO:** Semantic HTML, proper heading hierarchy, meta descriptions on every page, OpenGraph tags, sitemap.xml, robots.txt, structured data (LocalBusiness + Person schema)
- **Accessibility:** WCAG 2.1 AA. Proper alt text, focus states, color contrast, keyboard navigation.
- **Mobile-first:** Design for phone screens first, scale up. Responsive breakpoints at 640/768/1024/1280.
- **Page weight:** Under 500KB per page including images. Use WebP/AVIF, lazy loading.

---

## Build Workflow

1. **Design system first.** Before writing any code, use the ui-ux-pro-max skill to generate a complete design system. Save to `design-system/MASTER.md`. All pages reference this system.
2. **Scaffold Astro project.** `npm create astro@latest` with Tailwind integration.
3. **Build components.** Header, footer, CTA block, hero, service card, case study card, blog post layout.
4. **Build pages.** One at a time, starting with Home.
5. **Content pass.** Use copywriting skill for page copy, stop-slop skill for review.
6. **SEO pass.** Use seo skill to audit before launch. Meta tags, structured data, sitemap, robots.txt.
7. **Performance pass.** Lighthouse audit, image optimization, lazy loading.
8. **Deploy.** Push to GitHub → auto-deploys to Vercel.

---

## Deploy Commands

```bash
# First-time setup (run once)
cd ~/projects/ssgrowth-advisors
git init
git remote add origin git@github.com:csmif1/ssgrowth-advisors.git
npx vercel link

# Development
npm run dev              # Local dev server at localhost:4321

# Deploy (auto via GitHub push)
git add . && git commit -m "description" && git push
# Vercel auto-builds and deploys on push

# Manual deploy (backup method)
npx vercel --prod
```

---

## DNS Setup (One-Time, After Vercel Link)

In Bluehost DNS settings for ssgrowthadvisors.com:
1. Set A record → `76.76.21.21` (Vercel)
2. Set CNAME `www` → `cname.vercel-dns.com`
3. Remove any conflicting A records or parking pages

Vercel handles SSL automatically after DNS propagates.

---

## Skill Usage Rules

1. **stop-slop** — Run on ALL written content. Every page, every blog post, every meta description.
2. **ui-ux-pro-max** — Use BEFORE writing any frontend code. Generate design system first.
3. **copywriting** — Use for all marketing page copy (Home, Services, About, Case Studies).
4. **cold-email** — Use for outreach templates and follow-up sequences.
5. **seo** — Audit every page before launch. Run again monthly.
6. **cro** — Review conversion elements on Home, Services, and Contact pages.
7. **launch-strategy** — Use when planning the site launch and initial promotion.
8. **pricing-strategy** — Use if/when packaging consulting tiers or productized services.
9. **brainstorming** — Use before any major creative decision (site architecture, content strategy, brand direction).
10. **root-cause-tracing** — Use when debugging build issues, deploy failures, or rendering bugs.

---

## Related Projects (Context Only)

Chris also runs:
- **TESF** (The Thomas E. Smith Foundation) — nonprofit, Chief Advancement Officer. ~/projects/tesf-monthly
- **RealPrepare** — survivalist/off-grid education business. ~/projects/realprepare
- **TrustFlow360** — dormant ILIT administration SaaS. ~/projects/trustflow360

Separate codebases and brands. Don't cross-pollinate content or voice unless explicitly asked.

These projects can be used as case study source material for ssgrowthadvisors.com:
- **TrustFlow360** → Legal-Tech SaaS Platform case (Operations & Systems, AI & Technology)
- **RealPrepare** → Off-Grid Education Startup case (Revenue & GTM, AI & Technology, Brand & Communications)
- **TESF** → National Nonprofit case (Operations & Systems, Fundraising, Brand & Communications)

A fourth case, **Local Nonprofit** (a volunteer-powered community organization in Massachusetts; Brand & Communications, Operations & Systems), is client work. Case order on Home and Case Studies: Legal-Tech SaaS Platform, Local Nonprofit, National Nonprofit, Off-Grid Education Startup.

**Anonymization rule:** All case studies must be anonymized. Reference by industry or company type (e.g., "a national nonprofit," "an off-grid education startup," "a legal-tech SaaS platform," "a local nonprofit") — never by name. Highlight specific outcomes and services provided.

**Never-name rule:** The real names connected to the Local Nonprofit case are listed in `CLAUDE.local.md` (kept out of git because this repo is public). They never appear anywhere on the site: copy, alt text, metadata, slugs or file names. Never connect Marblehead to a case study. Marblehead, MA appears only as Start & Scale's own location (footer, Contact, structured data).