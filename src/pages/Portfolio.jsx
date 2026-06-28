import { Sparkles } from "lucide-react"
import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { PortfolioCard } from "../components/ui/PortfolioCard.jsx"
import { Button } from "../components/ui/Button.jsx"
import { FadeIn } from "../components/ui/FadeIn.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { portfolio } from "../data/portfolio.js"

function EmptyState() {
  return (
    <div className="bg-surface border border-border rounded-lg px-8 py-16 text-center">
      <div className="w-12 h-12 mx-auto rounded-full bg-accent-light text-accent flex items-center justify-center">
        <Sparkles size={22} />
      </div>
      <h3 className="mt-5 font-display font-medium text-[1.5rem] text-ink leading-tight">
        Projects coming soon
      </h3>
      <p className="mt-3 text-muted max-w-md mx-auto">
        Our first partnerships are underway. Check back shortly — we'll showcase
        every project we ship right here.
      </p>
      <div className="mt-7">
        <Button variant="primary" to="/partnership">
          Interested in being featured? Join our partnership program
        </Button>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const hasProjects = portfolio.length > 0

  return (
    <>
      <PageMeta
        title="Portfolio"
        description="Projects we've built — real businesses, real results."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Portfolio"
            title="Our Work"
            subtitle="Projects we've built — real businesses, real results."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {hasProjects ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((project, i) => (
                <FadeIn key={project.id} delay={i * 0.05}>
                  <PortfolioCard project={project} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <EmptyState />
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
