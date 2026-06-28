import { motion } from "framer-motion"
import { Check, Globe, Share2, Shield, Settings, Server } from "lucide-react"
import { useReducedMotion } from "../../hooks/useReducedMotion.js"

const ICONS = { Globe, Share2, Shield, Settings, Server }

export function ServiceCard({ service }) {
  const reduced = useReducedMotion()
  const Icon = ICONS[service.icon] || Globe

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full bg-surface border border-border rounded-lg p-7 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(13,115,119,0.25)] transition-shadow"
    >
      <div className="w-11 h-11 rounded-md bg-accent-light text-accent flex items-center justify-center">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-sans font-semibold text-[1.125rem] text-ink leading-tight">
        {service.title}
      </h3>
      <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-[0.9rem] text-ink/80">
            <Check size={16} className="text-accent shrink-0 mt-1" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
