import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { Button } from "../../components/ui/Button.jsx"
import { team } from "../../data/team.js"

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function WarmSerif() {
  return (
    <div className="min-h-screen bg-bg text-ink pt-8 font-display">
      <DemoBackBar label="14 · Warm — Serif" />

      <header className="sticky top-8 z-30 bg-bg/85 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-display italic font-medium text-accent text-xl">Optimaldevs</p>
          <nav className="hidden md:flex items-center gap-7 text-[0.95rem] italic text-ink/80">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#team" className="hover:text-accent">Team</a>
            <a href="#partnership" className="hover:text-accent">Partnership</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <Button variant="primary" href="#contact">Work With Us</Button>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24 pb-32">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <span className="font-display italic font-light text-accent opacity-[0.08] select-none whitespace-nowrap leading-none text-[20rem] md:text-[32rem]">
            Optimal
          </span>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-display italic text-accent text-[1.1rem] mb-6">A note from the studio</p>
          <h1 className="font-display font-light text-[3rem] md:text-[6rem] leading-[1] tracking-tight text-ink">
            We build <span className="italic font-normal">websites</span> small businesses{" "}
            <span className="italic font-normal">actually use.</span>
          </h1>
          <p className="mt-8 font-display text-[1.25rem] md:text-[1.4rem] italic leading-relaxed max-w-2xl mx-auto" style={{ color: "#3A3A3A" }}>
            A lean dev team — four people, full stack — helping local businesses get online with the design, development, and infrastructure to back it up.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="#services">See What We Do</Button>
            <Button variant="ghost" href="#partnership">Learn About Partnerships</Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-display italic text-accent text-[1.1rem] mb-3">— What we do</p>
          <h2 className="font-display font-medium text-[2.5rem] md:text-[3.5rem] leading-tight text-ink">
            A small team, <em>full-stack coverage.</em>
          </h2>
          <div className="mt-16 space-y-16">
            {[
              { n: "I.", t: "Web Development", d: "Custom websites, designed and built from scratch — fast, accessible, and tailored to your business. Not a template in sight." },
              { n: "II.", t: "Online Presence", d: "Google Business, Facebook, local SEO. The pieces that help customers actually find you, set up properly." },
              { n: "III.", t: "DevOps & Security", d: "Reliable hosting, smooth deployments, basic-but-solid security. The quiet layer beneath the surface." },
            ].map((s) => (
              <article key={s.t} className="grid md:grid-cols-12 gap-6">
                <p className="md:col-span-1 font-display italic text-[2.5rem] text-accent leading-none">{s.n}</p>
                <div className="md:col-span-11">
                  <h3 className="font-display font-normal text-[2rem] text-ink leading-tight">{s.t}</h3>
                  <p className="mt-3 font-display italic text-[1.2rem] leading-relaxed" style={{ color: "#3A3A3A" }}>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="bg-surface border-y border-border py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-accent text-[1.1rem] mb-3">— A different model</p>
          <h2 className="font-display font-light text-[2.5rem] md:text-[3.5rem] leading-tight text-ink">
            Building together, <em>for free.</em>
          </h2>
          <p className="mt-6 font-display italic text-[1.3rem] leading-relaxed" style={{ color: "#3A3A3A" }}>
            We're growing our portfolio. You need a website. We build it at no cost — you pay only for your domain and hosting. A fair exchange.
          </p>
          <div className="mt-10">
            <Button variant="primary" to="/partnership">Read about the program</Button>
          </div>
        </div>
      </section>

      <section id="team" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-display italic text-accent text-[1.1rem] mb-3">— The people</p>
          <h2 className="font-display font-medium text-[2.5rem] md:text-[3.5rem] leading-tight text-ink">
            Four people. <em>One studio.</em>
          </h2>
          <div className="mt-12 space-y-10">
            {team.map((m, i) => (
              <article key={m.id} className="grid md:grid-cols-12 gap-6 pb-10" style={{ borderBottom: i < team.length - 1 ? "1px solid #E2DDD6" : "none" }}>
                <div className="md:col-span-3 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light text-accent ring-4 ring-accent-light flex items-center justify-center font-sans font-semibold text-lg shrink-0">
                    {getInitials(m.name)}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display font-normal text-[1.75rem] leading-tight text-ink">{m.name}</h3>
                  <p className="mt-1 font-display italic text-accent text-[1rem]">{m.role}</p>
                  <p className="mt-4 font-display italic text-[1.15rem] leading-relaxed" style={{ color: "#3A3A3A" }}>{m.bio}</p>
                  <div className="mt-4 flex items-center gap-3 text-muted">
                    {m.links?.website && m.links.website !== "#" && <a href={m.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Globe size={16} /></a>}
                    {m.links?.github && m.links.github !== "#" && <a href={m.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Github size={16} /></a>}
                    {m.links?.linkedin && m.links.linkedin !== "#" && <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Linkedin size={16} /></a>}
                    {m.links?.email && <a href={`mailto:${m.links.email}`} className="hover:text-accent"><Mail size={16} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-light text-[3rem] md:text-[5rem] leading-[1] text-ink">
            <em>Let's talk.</em>
          </h2>
          <p className="mt-6 font-display italic text-[1.2rem] max-w-xl mx-auto" style={{ color: "#3A3A3A" }}>
            We'd love to hear what you're working on — drop us a line.
          </p>
          <div className="mt-10">
            <Button variant="primary" to="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm italic text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OptimalDevs · Built by developers, for small businesses.</p>
          <Link to="/demos" className="hover:text-accent">All demos</Link>
        </div>
      </footer>
    </div>
  )
}
