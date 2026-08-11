import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { team } from "../../data/team.js"
import { Wordmark } from "../ui/Wordmark.jsx"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contact", label: "Contact" },
]

// A bare row of icons for four people reads as one anonymous clump — you can't
// tell whose GitHub is whose. Pair each set with the name it belongs to.
function memberIcons(member) {
  const links = member.links || {}
  const usable = (value) =>
    typeof value === "string" && value.trim() && value.trim() !== "#"

  return [
    { key: "website", href: links.website, Icon: Globe, what: "website" },
    { key: "github", href: links.github, Icon: Github, what: "GitHub" },
    { key: "linkedin", href: links.linkedin, Icon: Linkedin, what: "LinkedIn" },
    {
      key: "email",
      href: usable(links.email) ? `mailto:${links.email}` : "",
      Icon: Mail,
      what: "email",
    },
  ]
    .filter((entry) => usable(entry.href))
    .map((entry) => ({ ...entry, label: `${member.name} ${entry.what}` }))
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg"><Wordmark /></p>
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
                  className="font-mono text-sm text-ink/75 hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Team</p>
          <ul className="space-y-2">
            {team.map((member) => {
              const icons = memberIcons(member)
              if (icons.length === 0) return null
              return (
                <li key={member.id} className="flex items-center gap-3">
                  <span className="font-mono text-sm text-ink/75">
                    {member.name}
                  </span>
                  <span className="flex items-center gap-2 text-muted">
                    {icons.map(({ key, href, Icon, label }) => (
                      <a
                        key={key}
                        href={href}
                        target={key === "email" ? undefined : "_blank"}
                        rel={key === "email" ? undefined : "noopener noreferrer"}
                        aria-label={label}
                        className="hover:text-ink transition-colors"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span>© {year} OptimalDevs. All rights reserved.</span>
          <Link to="/privacy" className="font-mono hover:text-ink transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
