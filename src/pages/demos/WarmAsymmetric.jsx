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

export default function WarmAsymmetric() {
  return (
    <div className="min-h-screen bg-bg text-ink pt-8">
      <DemoBackBar label="11 · Warm — Asymmetric" />

      <header className="sticky top-8 z-30 bg-bg/85 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-12 items-center">
          <p className="col-span-3 font-sans font-bold text-accent text-lg">OptimalDevs</p>
          <nav className="hidden md:flex col-span-7 items-center gap-7 text-sm text-ink/80">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#team" className="hover:text-accent">Team</a>
            <a href="#partnership" className="hover:text-accent">Partnership</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <div className="col-span-2 flex justify-end">
            <Button variant="primary" href="#contact">Work With Us</Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-2 eyebrow self-end">— 01 / Hello</p>
          <h1 className="col-span-12 md:col-span-9 font-display font-light text-[3rem] md:text-[7rem] leading-[0.95] tracking-tight text-ink">
            We build<br />
            <span className="italic font-normal text-accent">websites</span><br />
            small businesses<br />
            actually use.
          </h1>
          <div className="col-span-12 md:col-span-1 hidden md:block" />
          <div className="col-span-12 md:col-start-4 md:col-span-6 mt-6">
            <p className="text-lg text-muted leading-relaxed max-w-md">
              A lean dev team helping local businesses get online — with the design, development, and infrastructure to back it up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" href="#services">See What We Do</Button>
              <Button variant="ghost" href="#partnership">Free Site Program</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 self-start">
            <p className="eyebrow mb-3">— 02 / Practice</p>
            <h2 className="font-display font-medium text-[2.5rem] md:text-[3rem] leading-[1.05] text-ink">
              A small team,<br />
              <span className="italic">full-stack</span> coverage.
            </h2>
            <p className="mt-5 text-muted max-w-sm">
              Four developers. Three core practices. Done with care.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {[
              { n: "i.", t: "Web Development", d: "Custom websites, designed and built from scratch — fast, accessible, tailored to your business." },
              { n: "ii.", t: "Online Presence", d: "Google Business, Facebook, local SEO — the pieces that help customers actually find you." },
              { n: "iii.", t: "DevOps & Security", d: "Reliable hosting, smooth deployments, basic-but-solid security for your site and customers." },
            ].map((s) => (
              <article key={s.t} className="grid grid-cols-12 gap-4 pb-12 border-b border-border last:border-0">
                <p className="col-span-2 font-display italic text-[1.75rem] text-accent leading-none pt-1">{s.n}</p>
                <div className="col-span-10">
                  <h3 className="font-display font-medium text-[1.75rem] text-ink leading-tight">{s.t}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-12 gap-6 items-center">
          <p className="col-span-12 md:col-span-2 eyebrow">— 03 / Free</p>
          <h2 className="col-span-12 md:col-span-7 font-display font-light text-[2.5rem] md:text-[4rem] leading-[1] text-ink">
            Building <span className="italic font-normal text-accent">together,</span><br />
            for free.
          </h2>
          <div className="col-span-12 md:col-span-3">
            <p className="text-muted leading-relaxed mb-6">
              We build, you pay only for domain and hosting.
            </p>
            <Button variant="primary" to="/partnership">How it works →</Button>
          </div>
        </div>
      </section>

      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-3">— 04 / Voices</p>
            <h2 className="font-display font-medium text-[2.5rem] leading-[1.05] text-ink">
              A small team.<br />
              <span className="italic">Serious</span><br />
              about craft.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-5 grid gap-6 md:grid-cols-2">
            {team.map((m, i) => (
              <article key={m.id} className={`bg-surface border border-border rounded-lg p-6 ${i % 2 === 1 ? "md:translate-y-12" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-light text-accent ring-4 ring-accent-light flex items-center justify-center font-sans font-semibold text-lg shrink-0">
                    {getInitials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-medium text-[1.25rem] text-ink leading-tight">{m.name}</h3>
                    <p className="text-sm italic text-accent mt-0.5">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">{m.bio}</p>
                <div className="mt-4 flex items-center gap-3 text-muted">
                  {m.links?.website && m.links.website !== "#" && (
                    <a href={m.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Globe size={16} /></a>
                  )}
                  {m.links?.github && m.links.github !== "#" && (
                    <a href={m.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Github size={16} /></a>
                  )}
                  {m.links?.linkedin && m.links.linkedin !== "#" && (
                    <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Linkedin size={16} /></a>
                  )}
                  {m.links?.email && (
                    <a href={`mailto:${m.links.email}`} className="hover:text-accent"><Mail size={16} /></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-end">
          <p className="col-span-12 md:col-span-2 eyebrow">— 05 / Hello</p>
          <h2 className="col-span-12 md:col-span-7 font-display font-light text-[3rem] md:text-[5rem] leading-[1] text-ink">
            Let's <span className="italic text-accent">talk.</span>
          </h2>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <Button variant="primary" to="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OptimalDevs · Built by developers, for small businesses.</p>
          <Link to="/demos" className="hover:text-accent">All demos</Link>
        </div>
      </footer>
    </div>
  )
}
