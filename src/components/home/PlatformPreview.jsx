import { FadeIn } from "../ui/FadeIn.jsx"
import { ArrowUpRight, Layers3 } from "lucide-react"
import { Button } from "../ui/Button.jsx"
import { DevelopmentBadge } from "../ui/DevelopmentBadge.jsx"

export function PlatformPreview() {
  return (
    <section className="section-space bg-surface border-y border-border">
      <FadeIn className="site-container grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20 items-center">
        <div>
          <p className="eyebrow mb-5">Our product direction</p>
          <h2 className="section-heading">
            We're building the OptimalDevs Platform.
          </h2>
          <p className="mt-6 text-muted">
            Alongside our client work, we're actively developing a platform that
            brings together operational business data and organizational
            knowledge: the documents, decisions, and processes behind your work.
          </p>
          <p className="mt-4 text-muted">
            Our Business Brain direction connects those sources into one useful
            intelligence layer for search, analytics, reporting, and automation,
            with forecasting and AI-assisted decision support under exploration.
          </p>
          <Button to="/platform" className="mt-7">
            Explore the Platform <ArrowUpRight size={17} aria-hidden="true" />
          </Button>
        </div>
        <div className="rounded-lg border border-border bg-bg p-7 sm:p-9">
          <Layers3
            size={36}
            className="text-accent mb-6"
            strokeWidth={1.25}
            aria-hidden="true"
          />
          <DevelopmentBadge>In active development</DevelopmentBadge>
          <h3 className="mt-6 text-2xl font-semibold leading-tight">
            Business data.
            <br />
            Business knowledge.
            <br />
            Better context.
          </h3>
          <p className="mt-4 text-sm text-muted">
            We're designing around searchable company knowledge, source-linked
            information, and a clear distinction between company records and AI
            recommendations. People remain in control of proposed actions.
          </p>
          <p className="mt-6 pt-5 border-t border-border text-xs text-muted">
            These are development plans, not generally available features.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
