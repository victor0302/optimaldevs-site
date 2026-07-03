import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { ServiceCard } from "../components/ui/ServiceCard.jsx"
import { Button } from "../components/ui/Button.jsx"
import { FadeIn } from "../components/ui/FadeIn.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { services } from "../data/services.js"

export default function Services() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Website design, online presence, security, DevOps, and infrastructure for small businesses."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Services"
            title="What We Build"
            subtitle="From a first website to full infrastructure, we handle the parts that matter for small businesses."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-medium text-[1.75rem] md:text-[2rem] leading-tight text-ink">
              Not sure what you need? Let's figure it out together.
            </h2>
            <p className="mt-4 text-muted">
              Tell us about your business and we'll help you scope what makes
              sense. No pressure.
            </p>
            <div className="mt-8">
              <Button variant="primary" to="/contact">
                Get in Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
