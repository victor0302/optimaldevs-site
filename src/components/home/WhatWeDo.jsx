import { useEffect, useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Server,
  Settings,
  Share2,
  Shield,
} from "lucide-react"
import { Link } from "react-router-dom"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { FadeIn } from "../ui/FadeIn.jsx"
import { services } from "../../data/services.js"

const iconMap = {
  Globe,
  Share2,
  Shield,
  Settings,
  Server,
}

export function WhatWeDo() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }

    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const scrollByCard = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector("[data-card]")
    const delta = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * delta, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="What we do"
            title="A small team, full-stack coverage."
            subtitle="The core areas we cover, from a first website to full infrastructure."
          />
        </FadeIn>

        <div className="mt-12 relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-bg to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-bg to-transparent z-10"
            aria-hidden="true"
          />

          <div
            ref={scrollRef}
            role="region"
            aria-label="Services"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-8 md:px-12 scroll-px-8 md:scroll-px-12"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <article
                  key={service.id}
                  data-card
                  className="snap-start shrink-0 w-[280px] md:w-[320px] bg-surface border border-border rounded-lg p-7 hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-accent-light text-accent flex items-center justify-center">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="mt-5 font-sans font-semibold text-[1.125rem] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
                    {service.description}
                  </p>
                </article>
              )
            })}
          </div>

          <button
            type="button"
            aria-label="Previous services"
            onClick={() => scrollByCard(-1)}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg border border-border items-center justify-center text-ink shadow-sm transition-opacity ${
              canScrollLeft
                ? "opacity-100 hover:border-accent/40"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next services"
            onClick={() => scrollByCard(1)}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg border border-border items-center justify-center text-ink shadow-sm transition-opacity ${
              canScrollRight
                ? "opacity-100 hover:border-accent/40"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight size={18} />
          </button>
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
