# Website repositioning: implementation and review

## Changes

The homepage now introduces software, data, analytics, and automation before website services. It includes the fragmented-systems problem, four service categories, Connect → Understand → Automate → Improve, a clearly labeled platform preview, the company introduction, and a contact CTA.

Added `/platform`, `/about`, and `/privacy`. Updated `/services` and `/contact`. Primary navigation is Home, Services, Platform, About, Contact. Existing `/team`, `/portfolio`, and `/partnership` URLs remain available, with unsupported portfolio and slot-availability claims removed.

New components: `SystemFlow`, `DevelopmentBadge`, `Problem`, `HowItWorks`, and `PlatformPreview`. Reused and updated the existing Hero, service cards, company teaser, contact CTA, layout, buttons, and metadata helper. Diagrams use HTML and lightweight SVG. No new application dependencies were added.

Following the latest visual feedback, the site keeps its warm white base (`#FDFCF9`) and subtle beige panels (`#F5F1E9`), with blue accents (`#2572A7`) and pale blue highlights (`#E8F3FB`) replacing the previous orange. Colors use the existing theme tokens, including hover states and focus outlines. Headings use the existing Inter family, now self-hosted with its license; the unused Newsreader request is removed. The text wordmark remains. The stock framework favicon is replaced with a simple blue OD favicon. Existing team names, roles, specialties, and biographies are retained; personal email exposure is removed.

## Motion

The homepage diagram animates its connecting lines and gently moves its inputs, OptimalDevs hub, and outputs once when it enters view; the sequence finishes in about 1.15 seconds. Homepage section content uses the existing `FadeIn` component with a 400ms, 8px entrance. Sections and diagram labels stay fully opaque throughout their entrances to avoid visible content disappearing and flashing back in during scrolling. Focusing a link inside a section cancels its entrance permanently for that mount. Service cards gain a small border/shadow response; button arrows move 2px on hover or keyboard focus.

The existing Motion viewport hook and reduced-motion hook coordinate CSS animations. Reduced-motion preferences disable the entrances, diagram sequence, and arrow movement, including when the preference changes. No dependencies were added. The palette, content, and 16px homepage top spacing remain unchanged.

## Business Brain platform expansion

The Platform page now presents three connected capabilities: Business Data, Business Knowledge, and Business Intelligence. The homepage platform preview and About page reflect the same direction, while client services remain centered on software, data, analytics, automation, and websites.

New platform components: `BusinessBrainFlow`, `SourceAttribution`, and `HumanControl`. These show operational systems and organizational knowledge merging into an intelligence layer, clearly distinguish illustrative company-source information from an illustrative AI suggestion, and show a planned human approval step before execution.

The page also covers illustrative business questions, durable organizational memory, source-linked answers, knowledge updates, decisions, meeting summaries, and project history. All capabilities are labeled as in active development, planned, or under exploration. The policy, source title, and AI suggestion are explicitly fictional product examples; they are not live answers or real company records. No chatbot or live querying UI was introduced. Forecasting and AI-assisted decision support remain longer-term development areas.

## Contact compatibility

The existing endpoint and POST keys remain `name`, `email`, `subject`, and `message`. The Lambda implementation is absent from this repository, so new customer-facing inquiry categories are mapped conservatively to the original subject vocabulary:

| Inquiry                                                                               | Backend subject     |
| ------------------------------------------------------------------------------------- | ------------------- |
| Software Development, Data & Analytics, Automation / Integration, Website Development | Project Quote       |
| Platform / Pilot Interest, Other                                                      | General Question    |
| Existing partnership link                                                             | Partnership Inquiry |

The selected category appears at the beginning of the delivered message. Existing success/error handling is retained, with a semantic form, Enter-key submission, associated validation errors, status announcements, and privacy link. Query-selected pilot interest and the legacy partnership link are supported.

No live messages were sent, and actual SES delivery was not verified. A local development endpoint was intercepted in the browser for all submission tests. AWS credentials, API Gateway, Lambda, SES, and CI deployment configuration were not changed.

## Metadata

The homepage title is `OptimalDevs | Software, Data & Automation for Small Businesses`, with the requested software/data-focused description. Relevant pages have individual descriptions, Open Graph and Twitter tags, and canonical URLs. Unknown pages request `noindex`.

The HTML includes fallback homepage metadata for non-JavaScript readers. On startup those fallback tags are removed before React 19/Helmet mounts its page-specific metadata, preventing duplicate tags. This remains the existing client-rendered SPA: social crawlers that do not execute JavaScript receive the homepage fallback on nested routes. Route-specific prerendering/server rendering was not introduced.

## Assumptions and human review

- `src/pages/Platform.jsx` and `src/components/home/PlatformPreview.jsx`: the platform is in development; no working integrations, forecasting models, or AI workflows were found. All such capabilities are planned or exploratory. Review product wording against the internal roadmap.
- `src/pages/Privacy.jsx`: describes only the site's observable contact and hosting behavior. Review against actual operational logging, retention, and any obligations outside this repository before publishing. No Terms page or detailed legal commitments were invented.
- `src/pages/Contact.jsx`: review inquiry routing with whoever owns Lambda, then verify delivery through an appropriate staging endpoint.
- `src/pages/Partnership.jsx`: the pre-existing website partnership offer and support terms are retained on its legacy URL. Confirm that offer remains current; it is no longer promoted in the main navigation or homepage.
- `src/data/team.js`: names, roles, and biographies come from the existing site. Confirm they remain current.
- `.github/workflows/ci.yml` and `vercel.json`: left unchanged. Direct routes work in Vite's production preview, and the existing Vercel SPA rewrite covers them. Live CloudFront fallback behavior is outside this repository and still requires staging verification.

## Verification

Baseline and updated `npm run lint` and `npm run build` passed. No formatter, type-check, or test scripts were configured. Changed source files were formatted using temporary Prettier tooling, with no dependency or lockfile changes.

Temporary Playwright/Chromium and axe tooling in `/tmp/optimaldevs-browser` verified:

- Nine routes at 375, 768, 1024, and 1440 pixels: 36 route/viewport combinations, one main heading, no horizontal overflow.
- 20 WCAG 2 A/AA and 2.1 AA automated scans: zero reported violations, including the contact form validation and submission-error states on the tan background. Automated checks do not replace a complete manual accessibility audit.
- All discovered internal links and service anchors, direct `/platform` and `/platform/` loads, and a full reload of the platform page.
- A single description/Open Graph title/Twitter title and the appropriate canonical per route; unknown-route noindex behavior.
- Public email links use `mailto:hello@optimaldevs.tech`.
- Mobile menu keyboard activation, Escape-to-close and focus return, navigation closing, and pilot inquiry selection.
- Reduced-motion scroll behavior, form validation and invalid-field focus, Enter submission, success/reset, HTTP failure, network failure, missing endpoint, and legacy subject compatibility.
- No browser runtime exceptions.
- Business Brain capability headings, clearly distinguished source/AI examples, ordered human approval before execution, and the absence of a live query interface.
- Browser checks confirmed the preceding tan/orange theme and hover states. The subsequent warm-white adjustment changes only the background, surface, border, and favicon foreground colors; the earlier screenshots and exact palette assertions document the tan version.

Screenshots were captured for the six main pages at all four widths and inspected for layout issues. These local artifacts and the browser script are in `/tmp/optimaldevs-browser`; they are not deployment assets. The latest platform/theme checks are in `business-brain-check.mjs` with results in `business-brain-results.json`. Browser tools and supporting libraries were isolated there without installing system packages.
