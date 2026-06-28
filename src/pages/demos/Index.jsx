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
