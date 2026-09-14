import {
  AppWindow,
  BarChart3,
  Workflow,
  Globe,
  ArrowUpRight,
} from "lucide-react"
import { Link } from "react-router-dom"

const ICONS = { AppWindow, BarChart3, Workflow, Globe }

export function ServiceCard({ service, detailed = false, index = 0 }) {
  const Icon = ICONS[service.icon] || Globe
  const Heading = detailed ? "h2" : "h3"
  return (
    <article
      id={detailed ? service.id : undefined}
      className="service-card h-full flex flex-col border border-border rounded-lg bg-bg p-6 sm:p-8 scroll-mt-24"
    >
      <div className="flex items-center justify-between">
        <Icon
          size={26}
          className="text-accent"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <span aria-hidden="true" className="text-xs font-mono text-muted">
          0{index + 1}
        </span>
      </div>
      <Heading className="mt-7 text-xl font-semibold leading-tight tracking-tight">
        {service.title}
      </Heading>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      {detailed ? (
        <ul className="mt-6 pt-5 border-t border-border space-y-2 text-sm text-ink">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                ↳
              </span>
              {detail}
            </li>
          ))}
        </ul>
      ) : (
        <Link
          to={`/services#${service.id}`}
          className="text-link mt-auto pt-6"
          aria-label={`Explore ${service.title}`}
        >
          Explore service <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      )}
    </article>
  )
}
