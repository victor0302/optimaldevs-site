import { FadeIn } from "../ui/FadeIn.jsx"
import { ArrowRight } from "lucide-react"

const steps = [
  ["Connect", "Bring together data from the tools your business already uses."],
  [
    "Understand",
    "Turn that information into useful dashboards, reports, and metrics.",
  ],
  [
    "Automate",
    "Reduce repetitive processes and move information between systems.",
  ],
  ["Improve", "Use better information to make better operational decisions."],
]

export function HowItWorks() {
  return (
    <section className="section-space border-t border-border">
      <FadeIn className="site-container">
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="section-heading">
          From scattered data to a clearer direction.
        </h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map(([title, body], i) => (
            <li key={title} className="border-t border-border pt-5">
              <div className="flex items-center justify-between text-accent">
                <span className="text-xs font-mono">0{i + 1}</span>
                {i < steps.length - 1 && (
                  <ArrowRight size={18} aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </FadeIn>
    </section>
  )
}
