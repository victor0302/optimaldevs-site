import { Link } from "react-router-dom"
import { Code2, Share2, ShieldCheck, Github, Linkedin, Mail, Globe } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { Button } from "../../components/ui/Button.jsx"
import { team } from "../../data/team.js"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Custom websites designed and built from scratch — fast, accessible, and tailored to your business.",
  },
  {
    icon: Share2,
    title: "Online Presence",
    body: "Google Business, Facebook, local SEO — the pieces that help customers actually find you.",
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Security",
    body: "Reliable hosting, smooth deployments, and basic but solid security for your site and customers.",
  },
]

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Warm() {
  return (
    <div className="min-h-screen bg-bg text-ink pt-8">
      <DemoBackBar label="01 · Warm Minimalism" />

      <header className="sticky top-8 z-30 bg-bg/85 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-sans font-bold text-accent text-lg">OptimalDevs</p>
          <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#team" className="hover:text-accent">Team</a>
            <a href="#partnership" className="hover:text-accent">Partnership</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <Button variant="primary" href="#contact">Work With Us</Button>
        </div>
      </header>

      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <span className="font-display italic font-light text-accent opacity-[0.08] select-none whitespace-nowrap leading-none text-[18rem] md:text-[28rem]">
            Optimal
          </span>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display font-normal text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight text-ink">
            We build websites small businesses actually use.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            OptimalDevs is a lean dev team helping local businesses get online — with the design, development, and infrastructure to back it up.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="#portfolio">See Our Work</Button>
            <Button variant="ghost" href="#partnership">Learn About Partnerships</Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="font-display font-medium text-[2rem] text-ink leading-tight max-w-prose">
            A small team, full-stack coverage.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <article key={s.title} className="bg-surface border border-border rounded-lg p-7">
                  <div className="w-10 h-10 rounded-md bg-accent-light text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-sans font-semibold text-[1.125rem]">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">{s.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="partnership" className="bg-surface border-y border-border py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow mb-3">Partnership program</p>
          <h2 className="font-display font-medium text-[2rem] md:text-[2.5rem] leading-tight text-ink">
            Building together, for free.
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We're growing. You need a website. We build it at no cost — you only pay for your domain and hosting.
          </p>
          <Link to="/partnership" className="mt-8 inline-block">
            <Button variant="primary">See How It Works</Button>
          </Link>
        </div>
      </section>

      <section id="team" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-3">The team</p>
          <h2 className="font-display font-medium text-[2rem] text-ink leading-tight max-w-prose">
            A small team. Serious about craft.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((m) => (
              <article key={m.id} className="bg-surface border border-border rounded-lg p-6 flex items-start gap-5">
                <div className="w-20 h-20 rounded-full bg-accent-light text-accent ring-4 ring-accent-light flex items-center justify-center font-sans font-semibold text-xl shrink-0">
                  {getInitials(m.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-semibold text-[1.05rem]">{m.name}</h3>
                  <p className="text-sm text-accent">{m.role}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{m.bio}</p>
                  <div className="mt-3 flex items-center gap-3 text-muted">
                    {m.links?.website && m.links.website !== "#" && (
                      <a href={m.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Globe size={16} /></a>
                    )}
                    {m.links?.github && m.links.github !== "#" && (
                      <a href={m.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Github size={16} /></a>
                    )}
                    {m.links?.linkedin && m.links.linkedin !== "#" && (
                      <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Linkedin size={16} /></a>
                    )}
                    {m.links?.email && m.links.email !== "#" && (
                      <a href={`mailto:${m.links.email}`} className="hover:text-accent"><Mail size={16} /></a>
                    )}
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
          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OptimalDevs. Built by developers, for small businesses.</p>
          <Link to="/demos" className="hover:text-accent">All demos</Link>
        </div>
      </footer>
    </div>
  )
}
