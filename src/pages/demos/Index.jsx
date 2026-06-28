import { Link } from "react-router-dom"
import { ArrowRight, ArrowLeft } from "lucide-react"

const variants = [
  {
    slug: "warm",
    name: "Warm Minimalism",
    blurb:
      "The spec direction — off-white background, deep teal accent, Fraunces italic watermark. Soft, professional, breathing room. Built for small business owners.",
    palette: ["#FAFAF8", "#F2F0EB", "#0D7377", "#1C1917"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    blurb:
      "Magazine-style. Big serif headlines, numbered sections, horizontal rules, asymmetric two-column grids. Confident and craft-focused.",
    palette: ["#F7F3EB", "#1A1A1A", "#9CA3AF", "#0D7377"],
  },
  {
    slug: "bold",
    name: "Bold Dark",
    blurb:
      "Dark slate background, bright accent, heavy sans headlines, sharp-edged cards. Projects expertise and confidence — feels more dev-shop, less agency.",
    palette: ["#0F1714", "#1B2520", "#2DD4BF", "#F8FAFC"],
  },
  {
    slug: "friendly",
    name: "Friendly Soft",
    blurb:
      "Peachy cream background, rounded shapes, coral accent, casual copy. Lowers the barrier for non-technical owners — feels approachable and warm.",
    palette: ["#FFF4EC", "#FFE4D1", "#E76F51", "#3A2A1F"],
  },
  {
    slug: "studio",
    name: "Studio Minimal",
    blurb:
      "Near-pure white, black ink, monospace eyebrows, massive whitespace. Lets the work speak. Confident, restrained — feels like a high-end design studio.",
    palette: ["#FFFFFF", "#F4F4F4", "#111111", "#0D7377"],
  },
  {
    slug: "swiss",
    name: "Swiss Grid",
    blurb:
      "Strict International Typographic Style. Modular 12-column grid, heavy black sans, bright red accent dots, ruler-like dividers, big section numbers. Disciplined and established.",
    palette: ["#FFFFFF", "#000000", "#E11D48", "#999999"],
  },
  {
    slug: "bento",
    name: "Bento SaaS",
    blurb:
      "Modern SaaS landing page. Bento grid hero with mixed card sizes, indigo→purple gradient accents, frosted nav, glassy CTA blocks. Apple/Linear marketing energy.",
    palette: ["#F5F7FA", "#FFFFFF", "#6366F1", "#0F172A"],
  },
  {
    slug: "brutalist",
    name: "Brutalist",
    blurb:
      "Raw and oversized. Cream paper + black ink + hot orange, thick 4px borders everywhere, oversized uppercase mono, no rounding, no shadows. Anti-design confidence.",
    palette: ["#E8E4D9", "#000000", "#FF4500", "#FFFFFF"],
  },
  {
    slug: "sketch",
    name: "Sketch / Notebook",
    blurb:
      "Notebook paper aesthetic. Cream paper background, hand-drawn SVG underlines, dashed dividers, highlighted words, slightly tilted cards with hard offset shadows. Personal and warm.",
    palette: ["#FAF7F0", "#FFE066", "#1A4A7A", "#1E1E1E"],
  },
  {
    slug: "terminal",
    name: "Terminal / Dev-Shop",
    blurb:
      "Code-editor inspired. GitHub-dark background, monospace everywhere, syntax-highlighted hero, terminal-window mockups, YAML/JSON team data. Unmistakably 'built by developers'.",
    palette: ["#0D1117", "#161B22", "#7EE787", "#58A6FF"],
  },
  {
    slug: "warm-asymmetric",
    name: "Warm — Asymmetric",
    blurb:
      "Warm minimalism, but the compositions break out of centered hero. Big italic Fraunces left-aligned, offset content blocks, sticky-section side titles, staggered team cards. Same palette, different rhythm.",
    palette: ["#FAFAF8", "#F2F0EB", "#0D7377", "#1C1917"],
  },
  {
    slug: "warm-sage",
    name: "Warm — Sage",
    blurb:
      "Same warm minimalism, but the teal accent shifts to a botanical sage green. Calmer, slightly more earthy. Same layout language as the spec baseline.",
    palette: ["#FAFAF8", "#F0EFE8", "#6B8E5E", "#E7EFE0"],
  },
  {
    slug: "warm-clay",
    name: "Warm — Clay",
    blurb:
      "Warm minimalism with the accent shifted to terracotta. Background warms up slightly to match. More personal, slightly handmade.",
    palette: ["#FBF6F0", "#F2EBE0", "#C76F3E", "#F5E0D2"],
  },
  {
    slug: "warm-serif",
    name: "Warm — Serif",
    blurb:
      "Leans hard into Fraunces. Italic body callouts, serif eyebrows, italic nav links, Roman numerals for sections. Most literary of the warm variants.",
    palette: ["#FAFAF8", "#F2F0EB", "#0D7377", "#1C1917"],
  },
]

export default function DemosIndex() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} /> Back to main site
        </Link>

        <header className="mt-10">
          <p className="eyebrow mb-3">Design directions</p>
          <h1 className="font-display font-medium text-[2.5rem] md:text-[3rem] leading-tight text-ink">
            Five takes on the OptimalDevs homepage.
          </h1>
          <p className="mt-4 text-muted max-w-2xl">
            Each is a full-page treatment — open them, scroll through, and pick
            the direction that feels right. We'll iterate from there.
          </p>
        </header>

        <ul className="mt-12 space-y-4">
          {variants.map((v) => (
            <li key={v.slug}>
              <Link
                to={`/demos/${v.slug}`}
                className="group block bg-surface border border-border rounded-lg p-6 md:p-7 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(13,115,119,0.25)] transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display font-medium text-[1.5rem] text-ink leading-tight">
                      {v.name}
                    </h2>
                    <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
                      {v.blurb}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {v.palette.map((c) => (
                        <span
                          key={c}
                          aria-hidden="true"
                          style={{ background: c }}
                          className="w-6 h-6 rounded-full border border-border"
                        />
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-muted">
          Tip: open each in a new tab and skim side-by-side. The current site
          at <code className="text-ink">/</code> is the same as{" "}
          <code className="text-ink">/demos/warm</code>.
        </p>
      </div>
    </div>
  )
}
