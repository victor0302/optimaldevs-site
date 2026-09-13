import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { ServiceCard } from "../ui/ServiceCard.jsx"
import { services } from "../../data/services.js"

export function WhatWeDo() {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="section-heading">
              The right technology.
              <br />
              For the work you do.
            </h2>
          </div>
          <Link to="/services" className="text-link">
            All services <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
