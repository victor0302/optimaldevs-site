import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Globe, Code2, Share2, ShieldCheck } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const BG = "#FBF6F0"
const SURFACE = "#F2EBE0"
const BORDER = "#E0D5C5"
const INK = "#2A1F18"
const MUTED = "#7A6553"
const ACCENT = "#C76F3E"
const ACCENT_LIGHT = "#F5E0D2"

const services = [
  { icon: Code2, title: "Web Development", body: "Custom websites, designed and built from scratch — fast, accessible, tailored to your business." },
  { icon: Share2, title: "Online Presence", body: "Google Business, Facebook, local SEO — the pieces that help customers actually find you." },
  { icon: ShieldCheck, title: "DevOps & Security", body: "Reliable hosting, smooth deployments, basic-but-solid security for your site and customers." },
]

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function Button({ variant = "primary", children, to, href, ...rest }) {
  const base = "inline-flex items-center justify-center font-medium text-[0.9rem] px-5 py-2 rounded-md transition-colors duration-200"
  const styles = variant === "primary"
    ? { backgroundColor: ACCENT, color: "white" }
    : { border: `1px solid ${ACCENT}`, color: ACCENT, backgroundColor: "transparent" }
  if (to) return <Link to={to} className={base} style={styles} {...rest}>{children}</Link>
  return <a href={href} className={base} style={styles} {...rest}>{children}</a>
}

export default function WarmClay() {
  return (
    <div className="min-h-screen pt-8" style={{ backgroundColor: BG, color: INK }}>
      <DemoBackBar label="13 · Warm — Clay" />

      <header className="sticky top-8 z-30 backdrop-blur border-b" style={{ backgroundColor: `${BG}D9`, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-sans font-bold text-lg" style={{ color: ACCENT }}>OptimalDevs</p>
          <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: `${INK}CC` }}>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#team" className="hover:opacity-70">Team</a>
            <a href="#partnership" className="hover:opacity-70">Partnership</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <Button href="#contact">Work With Us</Button>
        </div>
      </header>

      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <span className="font-display italic font-light select-none whitespace-nowrap leading-none text-[18rem] md:text-[28rem]" style={{ color: ACCENT, opacity: 0.09 }}>
            Optimal
          </span>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display font-normal text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight">
            We build websites small businesses actually use.
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: MUTED }}>
            OptimalDevs is a lean dev team helping local businesses get online — with the design, development, and infrastructure to back it up.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="#services">See What We Do</Button>
            <Button variant="ghost" href="#partnership">Learn About Partnerships</Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.1em] uppercase mb-3" style={{ color: ACCENT }}>What we do</p>
          <h2 className="font-display font-medium text-[2rem] leading-tight max-w-prose">
            A small team, full-stack coverage.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <article key={s.title} className="rounded-lg p-7" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}>
                  <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-sans font-semibold text-[1.125rem]">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: MUTED }}>{s.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="partnership" className="py-20 md:py-24 border-y" style={{ backgroundColor: SURFACE, borderColor: BORDER }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-[0.1em] uppercase mb-3" style={{ color: ACCENT }}>Partnership program</p>
          <h2 className="font-display font-medium text-[2rem] md:text-[2.5rem] leading-tight">
            Building together, for free.
          </h2>
          <p className="mt-5 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: MUTED }}>
            We're growing. You need a website. We build it at no cost — you only pay for your domain and hosting.
          </p>
          <div className="mt-8">
            <Button to="/partnership">See How It Works</Button>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.1em] uppercase mb-3" style={{ color: ACCENT }}>The team</p>
          <h2 className="font-display font-medium text-[2rem] leading-tight max-w-prose">
            A small team. Serious about craft.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((m) => (
              <article key={m.id} className="rounded-lg p-6 flex items-start gap-5" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center font-sans font-semibold text-xl shrink-0" style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT, boxShadow: `0 0 0 4px ${ACCENT_LIGHT}` }}>
                  {getInitials(m.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-semibold text-[1.05rem]">{m.name}</h3>
                  <p className="text-sm" style={{ color: ACCENT }}>{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{m.bio}</p>
                  <div className="mt-3 flex items-center gap-3" style={{ color: MUTED }}>
                    {m.links?.website && m.links.website !== "#" && <a href={m.links.website} target="_blank" rel="noopener noreferrer"><Globe size={16} /></a>}
                    {m.links?.github && m.links.github !== "#" && <a href={m.links.github} target="_blank" rel="noopener noreferrer"><Github size={16} /></a>}
                    {m.links?.linkedin && m.links.linkedin !== "#" && <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>}
                    {m.links?.email && <a href={`mailto:${m.links.email}`}><Mail size={16} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-medium text-[2rem] md:text-[2.25rem] leading-tight">
            Ready to get your business online?
          </h2>
          <div className="mt-8">
            <Button to="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: SURFACE, borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between" style={{ color: MUTED }}>
          <p>© {new Date().getFullYear()} OptimalDevs. Built by developers, for small businesses.</p>
          <Link to="/demos" style={{ color: ACCENT }}>All demos</Link>
        </div>
      </footer>
    </div>
  )
}
