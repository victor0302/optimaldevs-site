import { Handshake, Hammer, Key, Check } from "lucide-react"
import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { Button } from "../components/ui/Button.jsx"
import { FadeIn } from "../components/ui/FadeIn.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"

const steps = [
  {
    icon: Handshake,
    title: "We reach out (or you do)",
    body:
      "We find businesses that could use a web presence and start a conversation. No pressure, no sales pitch.",
  },
  {
    icon: Hammer,
    title: "We build it together",
    body:
      "Our team designs and builds your site, sets up your Google and Facebook presence, and handles the technical side entirely.",
  },
  {
    icon: Key,
    title: "You own it",
    body:
      "The site is yours. You pay only for the domain (~$12/year) and hosting (~$5–15/month). We handle everything else at no charge.",
  },
]

const included = [
  "Custom website design and development",
  "Mobile-responsive build",
  "Google Business Profile setup",
  "Facebook business page",
  "Basic SEO setup",
  "Deployment and hosting configuration",
  "30 days of post-launch support",
]

const responsibilities = [
  "Domain registration (~$10–15/year)",
  "Monthly hosting fees (~$5–20/month depending on needs)",
  "Providing content: logo, photos, business info, copy (we can help guide this)",
]

// Manually maintained: the number of partnership slots currently open. Update
// this by hand as clients sign on (decrement) or slots free up (increment). It
// drives the "N partnership slots open" line below.
const OPEN_SLOTS = 2

export default function Partnership() {
  return (
    <>
      <PageMeta
        title="Partnership"
        description="A free-website partnership program for small businesses. We build at no cost; you pay only for domain and hosting."
      />
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle
            eyebrow="Partnership"
            title="Get online for free. Really."
            subtitle="We're a growing dev team looking to build real projects. You're a business that needs a website. Let's work together."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionTitle eyebrow="How it works" title="Three simple steps." />
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.title} delay={i * 0.06}>
                  <article className="h-full bg-surface border border-border rounded-lg p-7">
                    <div className="w-11 h-11 rounded-md bg-accent-light text-accent flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 font-sans font-semibold text-[1.125rem] text-ink leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </article>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
          <FadeIn>
            <div className="bg-surface border border-border rounded-lg p-8 h-full">
              <p className="eyebrow mb-3">For free</p>
              <h3 className="font-display font-medium text-[1.5rem] text-ink leading-tight">
                What's included
              </h3>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.95rem] text-ink/85"
                  >
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="bg-bg border border-border rounded-lg p-8 h-full">
              <p className="eyebrow mb-3">On your end</p>
              <h3 className="font-display font-medium text-[1.5rem] text-ink leading-tight">
                What you're responsible for
              </h3>
              <ul className="mt-6 space-y-3">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="text-[0.95rem] text-ink/85 leading-relaxed before:content-['•'] before:text-accent before:mr-3 before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="eyebrow mb-3">Why we do this</p>
            <h2 className="font-display font-medium text-[1.75rem] md:text-[2rem] leading-tight text-ink">
              An honest exchange.
            </h2>
            <p className="mt-5 text-muted text-base leading-relaxed">
              We're building our portfolio and sharpening our skills on real
              projects. Working with real businesses, with their real deadlines
              and real requirements, is how we grow. You get a professional site at
              near-zero cost. We get experience and a portfolio piece. It's a
              fair trade.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="eyebrow mb-3">Availability</p>
            <p className="font-display font-medium text-[1.75rem] md:text-[2rem] leading-tight text-ink">
              We currently have{" "}
              <span className="text-accent">
                {OPEN_SLOTS} partnership slot{OPEN_SLOTS === 1 ? "" : "s"} open
              </span>
              .
            </p>
            <p className="mt-4 text-muted">
              Interested? Tell us a bit about your business and we'll be in
              touch.
            </p>
            <div className="mt-8">
              <Button
                variant="primary"
                to="/contact?subject=Partnership%20Inquiry"
              >
                Apply for a Partnership
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
