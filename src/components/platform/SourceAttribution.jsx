import { FileText, Lightbulb } from "lucide-react"

export function SourceAttribution() {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">
            A product principle: traceable information
          </p>
          <h2 className="section-heading">Know where an answer came from.</h2>
          <p className="mt-5 text-muted">
            The architecture is being designed around source-linked business
            intelligence. Information retrieved from company sources should be
            clearly distinguishable from AI-generated recommendations or
            interpretations.
          </p>
        </div>
        <figure className="mt-10">
          <figcaption className="text-xs text-muted mb-4">
            Illustrative product examples. This policy and suggestion are sample
            content, not real company records or results from a working
            platform.
          </figcaption>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <FileText
                  size={21}
                  className="text-accent shrink-0"
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-label font-semibold">
                  Company source · example
                </p>
              </div>
              <h3 className="mt-6 text-xl font-semibold">Company policy</h3>
              <blockquote className="mt-3 text-muted">
                Refunds over $100 require manager approval.
              </blockquote>
              <p className="mt-6 border-t border-border pt-4 text-sm">
                <span className="text-muted">Illustrative source:</span> Refund
                Policy v3
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-accent bg-bg p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Lightbulb
                  size={21}
                  className="text-accent shrink-0"
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-label font-semibold text-accent">
                  AI interpretation · example
                </p>
              </div>
              <h3 className="mt-6 text-xl font-semibold">AI suggestion</h3>
              <p className="mt-3 text-muted">
                Consider recording refund reasons to identify recurring issues.
              </p>
              <p className="mt-6 border-t border-border pt-4 text-sm text-muted">
                A recommendation to review. It does not establish or change
                company policy.
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
