import { Code2, Share2, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { FadeIn } from "../ui/FadeIn.jsx"

const items = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites designed and built from scratch — fast, accessible, and tailored to your business.",
  },
  {
    icon: Share2,
    title: "Online Presence",
    description:
      "Google Business, Facebook, local SEO — the pieces that help customers actually find you.",
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Security",
    description:
      "Reliable hosting, smooth deployments, and basic but solid security for your site and customers.",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="What we do"
            title="A small team, full-stack coverage."
            subtitle="Three core areas of work — designed to take a small business from no online presence to a polished, working site."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <article className="h-full bg-surface border border-border rounded-lg p-7 hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-accent-light text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-sans font-semibold text-[1.125rem] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            See all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
