import { ArrowRight, ArrowDown, UserCheck } from "lucide-react"

const steps = [
  "Information",
  "Analysis",
  "Recommended action",
  "Human approval",
  "Execution",
]

export function HumanControl() {
  return (
    <section className="section-space border-y border-border bg-surface">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">A product principle: human control</p>
          <h2 className="section-heading">
            AI assists.
            <br />
            People remain in control.
          </h2>
          <p className="mt-5 text-muted">
            We're designing toward workflows that separate analysis and
            recommendations from action. A proposed task, suggested workflow, or
            recommended inventory adjustment should reach a person for review
            before execution.
          </p>
        </div>
        <p className="mt-9 mb-4 text-xs text-muted">
          Planned approval flow · no live actions are available here
        </p>
        <ol className="grid gap-8 md:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step} className="relative min-w-0">
              <div
                className={`h-full rounded-lg border px-3 md:px-2 lg:px-3 py-5 text-center ${step === "Human approval" ? "border-accent bg-accent-light" : "border-border bg-bg"}`}
              >
                <span
                  className="text-xs font-mono text-accent"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <p className="mt-2 text-sm md:text-xs lg:text-sm font-semibold leading-snug">
                  {step}
                </p>
                {step === "Human approval" && (
                  <UserCheck
                    size={20}
                    className="mx-auto mt-3 text-accent"
                    aria-hidden="true"
                  />
                )}
              </div>
              {i < steps.length - 1 && (
                <>
                  <ArrowRight
                    size={16}
                    className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-accent"
                    aria-hidden="true"
                  />
                  <ArrowDown
                    size={18}
                    className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-accent"
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          Forecasting and AI-assisted decision support are under active
          exploration. These capabilities will depend on reliable business data,
          relevant context, and human judgment as the platform develops.
        </p>
      </div>
    </section>
  )
}
