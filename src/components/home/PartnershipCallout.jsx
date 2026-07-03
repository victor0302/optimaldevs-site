import { Button } from "../ui/Button.jsx"
import { FadeIn } from "../ui/FadeIn.jsx"

export function PartnershipCallout() {
  return (
    <section className="bg-surface border-y border-border py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="eyebrow mb-3">Partnership program</p>
          <h2 className="font-display font-medium text-[2rem] md:text-[2.5rem] leading-tight text-ink">
            Building together, for free.
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We're a growing dev team looking to do good work on real projects.
            You're a small business that needs to get online. We build your site
            at no cost. You only pay for your domain and hosting.
          </p>
          <div className="mt-8">
            <Button variant="primary" to="/partnership">
              See How It Works
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
