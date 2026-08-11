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
        className="w-24 h-24 rounded-md object-cover"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="w-24 h-24 rounded-md bg-ink text-bg flex items-center justify-center font-mono font-medium text-2xl"
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
      className="h-full flex flex-col bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors"
    >
      <div className="flex items-start gap-5">
        <PhotoOrInitials name={member.name} photo={member.photo} />
        <div className="min-w-0 flex-1">
          <h3 className="font-sans font-semibold text-[1.125rem] text-ink leading-tight">
            {member.name}
          </h3>
          <p className="mt-0.5 font-mono font-medium text-[0.875rem] text-ink">
            {member.role}
          </p>
          {member.specialty && (
            <span className="mt-2 inline-block font-mono border border-field text-ink text-xs px-2.5 py-1 rounded-[3px]">
              {member.specialty}
            </span>
          )}
        </div>
      </div>

      <p className="mt-5 text-muted text-[0.9rem] leading-relaxed">
        {member.bio}
      </p>

      {/* mt-auto pins the links to the card floor, so the icon rows line up
          across a row of cards whose bios are different lengths. min-h keeps
          the floor identical for a member who has no links yet. */}
      <div className="mt-auto pt-5 min-h-[2.625rem] flex items-center gap-4 text-muted">
        {isUsableLink(links.website) && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} website`}
            className="hover:text-ink transition-colors"
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
            className="hover:text-ink transition-colors"
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
            className="hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
        )}
        {isUsableLink(links.email) && (
          <a
            href={`mailto:${links.email}`}
            aria-label={`${member.name} email`}
            className="hover:text-ink transition-colors"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </motion.article>
  )
}
