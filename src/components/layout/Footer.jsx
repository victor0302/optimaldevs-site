import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { team } from "../../data/team.js"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contact", label: "Contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-sans font-bold text-accent text-lg">OptimalDevs</p>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
            Built by developers, for small businesses.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Site</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Team</p>
          <ul className="flex flex-wrap gap-3">
            {team.map((member) =>
              member.links?.github ||
              member.links?.linkedin ||
              member.links?.email ||
              member.links?.website ? (
                <li
                  key={member.id}
                  className="flex items-center gap-2 text-muted"
                >
                  {member.links?.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} website`}
                      className="hover:text-accent transition-colors"
                    >
                      <Globe size={16} />
                    </a>
                  )}
                  {member.links?.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {member.links?.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="hover:text-accent transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.links?.email && (
                    <a
                      href={`mailto:${member.links.email}`}
                      aria-label={`${member.name} email`}
                      className="hover:text-accent transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted">
          © {year} OptimalDevs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
