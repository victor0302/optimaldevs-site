import { Link } from "react-router-dom"
import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { ServiceCard } from "../components/ui/ServiceCard.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { ContactTeaser } from "../components/home/ContactTeaser.jsx"
import { services } from "../data/services.js"

export default function Services() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Custom software, data and analytics, integrations, automation, and modern websites. Practical development and implementation services for growing businesses."
      />
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="site-container">
          <SectionTitle
            as="h1"
            eyebrow="Our services"
            title="Build what your business needs next."
            subtitle="Practical software, data, and implementation services available today. We work with you to understand the problem, agree on a useful scope, and build a solution around your business."
          />
        </div>
      </section>
      <section className="pb-20 lg:pb-28">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                detailed
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted max-w-3xl">
            Every project is scoped individually, including access to your
            existing systems and any implementation work. Our reusable{" "}
            <Link
              to="/platform"
              className="text-accent underline underline-offset-4"
            >
              OptimalDevs Platform
            </Link>{" "}
            is a separate product in development.
          </p>
        </div>
      </section>
      <section className="section-space bg-surface border-t border-border">
        <div className="site-container grid gap-7 md:grid-cols-2 md:gap-20">
          <h2 className="section-heading">
            Start with the problem.
            <br />
            Find the right scope.
          </h2>
          <div className="text-muted space-y-4">
            <p>
              You don't need a technical brief to start a conversation. Show us
              what's taking too much time, where information is missing, or what
              your current tools can't do.
            </p>
            <p>
              We'll work through the options together, from improving one
              workflow to building a new application. The goal is useful
              software and a clear handoff.
            </p>
          </div>
        </div>
      </section>
      <ContactTeaser />
    </>
  )
}
