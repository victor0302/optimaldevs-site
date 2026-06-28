import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { useReducedMotion } from "../../hooks/useReducedMotion.js"

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function isUsableLink(value) {
  return typeof value === "string" && value.trim() && value.trim() !== "#"
}

function PhotoOrInitials({ name, photo }) {
  const hasPhoto = photo && !photo.includes("placeholder")

  if (hasPhoto) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="w-24 h-24 rounded-full object-cover ring-4 ring-accent-light"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="w-24 h-24 rounded-full bg-accent-light text-accent ring-4 ring-accent-light flex items-center justify-center font-sans font-semibold text-2xl"
    >
      {getInitials(name)}
    </div>
  )
}

export function TeamCard({ member }) {
  const reduced = useReducedMotion()
  const links = member.links || {}

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-surface border border-border rounded-lg p-6 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(13,115,119,0.25)] transition-shadow"
    >
      <div className="flex items-start gap-5">
        <PhotoOrInitials name={member.name} photo={member.photo} />
        <div className="min-w-0 flex-1">
          <h3 className="font-sans font-semibold text-[1.125rem] text-ink leading-tight">
            {member.name}
          </h3>
          <p className="mt-0.5 font-sans font-medium text-[0.875rem] text-accent">
            {member.role}
          </p>
          {member.specialty && (
            <span className="mt-2 inline-block bg-accent-light text-accent text-xs font-medium px-2.5 py-1 rounded-full">
              {member.specialty}
            </span>
          )}
        </div>
      </div>

      <p className="mt-5 text-muted text-[0.9rem] leading-relaxed">
        {member.bio}
      </p>

      <div className="mt-5 flex items-center gap-4 text-muted">
        {isUsableLink(links.website) && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} website`}
            className="hover:text-accent transition-colors"
          >
            <Globe size={18} />
          </a>
        )}
        {isUsableLink(links.github) && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
        )}
        {isUsableLink(links.linkedin) && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        )}
        {isUsableLink(links.email) && (
          <a
            href={`mailto:${links.email}`}
            aria-label={`${member.name} email`}
            className="hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </motion.article>
  )
}
