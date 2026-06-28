import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useReducedMotion } from "../../hooks/useReducedMotion.js"

export function PortfolioCard({ project }) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full bg-surface border border-border rounded-lg overflow-hidden hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(13,115,119,0.25)] transition-shadow"
    >
      {project.image && (
        <div className="aspect-[16/10] bg-bg overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {project.clientType && (
          <p className="eyebrow mb-2">{project.clientType}</p>
        )}
        <h3 className="font-sans font-semibold text-[1.125rem] text-ink leading-tight">
          {project.name}
        </h3>
        {project.description && (
          <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">
            {project.description}
          </p>
        )}
        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="bg-accent-light text-accent text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Visit site <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  )
}
