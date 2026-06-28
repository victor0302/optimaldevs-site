import { Link } from "react-router-dom"
import { ArrowRight, Code2, Share2, ShieldCheck, Server } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const services = [
  { icon: Code2, title: "Web Development", body: "Custom builds, no templates." },
  { icon: Share2, title: "Online Presence", body: "Get found by real customers." },
  { icon: ShieldCheck, title: "Security", body: "SSL, audits, hardening." },
  { icon: Server, title: "Infrastructure", body: "Hosting that scales." },
]

const BG = "#0F1714"
const SURFACE = "#1B2520"
const ACCENT = "#2DD4BF"
const TEXT = "#F8FAFC"
const MUTED = "#94A3B8"

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Bold() {
  return (
    <div className="min-h-screen pt-8" style={{ backgroundColor: BG, color: TEXT }}>
      <DemoBackBar label="03 · Bold Dark" />

      <header className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <p className="font-sans font-bold text-[1.25rem]" style={{ color: ACCENT }}>OptimalDevs<span style={{ color: TEXT }}>/</span></p>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: MUTED }}>
            <a href="#stack">Stack</a>
            <a href="#crew">Crew</a>
            <a href="#partnership">Partnership</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="px-5 py-2.5 font-medium text-sm rounded-none" style={{ backgroundColor: ACCENT, color: BG }}>
            Start a Project
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)` }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}1A 0%, transparent 70%)` }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 py-28 md:py-40">
          <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: ACCENT }}>// A dev studio for small businesses</p>
          <h1 className="font-sans font-extrabold text-[3rem] md:text-[5.5rem] leading-[1] tracking-tight max-w-5xl">
            We ship websites<br />
            that <span style={{ color: ACCENT }}>actually work</span>.
          </h1>
          <p className="mt-8 text-lg max-w-xl leading-relaxed" style={{ color: MUTED }}>
            Four developers. Real engineering. We don't do drag-and-drop builders, and we don't do excuses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm" style={{ backgroundColor: ACCENT, color: BG }}>
              Start a project <ArrowRight size={16} />
            </a>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm border" style={{ borderColor: TEXT, color: TEXT }}>
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section id="stack" className="border-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>// The stack</p>
          <h2 className="font-sans font-bold text-[2.25rem] md:text-[3rem] leading-tight max-w-3xl">Everything you need under one roof.</h2>
          <div className="mt-12 grid gap-px md:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {services.map((s) => {
              const Icon = s.icon
              return (
                <article key={s.title} className="p-7" style={{ backgroundColor: SURFACE }}>
                  <Icon size={28} style={{ color: ACCENT }} />
                  <h3 className="mt-5 font-sans font-bold text-[1.125rem]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{s.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="partnership" className="py-28">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>// Partnership</p>
            <h2 className="font-sans font-bold text-[2rem] md:text-[2.75rem] leading-tight">
              Get a real site, on the house.
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: MUTED }}>
              We're growing our portfolio. You need a site. We build it free. You pay only for domain + hosting.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <Link to="/partnership" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm" style={{ backgroundColor: ACCENT, color: BG }}>
              How it works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="crew" className="border-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>// The crew</p>
          <h2 className="font-sans font-bold text-[2.25rem] md:text-[3rem] leading-tight">Four people. Zero account managers.</h2>
          <div className="mt-12 grid gap-px md:grid-cols-2" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {team.map((m) => (
              <article key={m.id} className="p-7 flex gap-5" style={{ backgroundColor: SURFACE }}>
                <div className="w-16 h-16 flex items-center justify-center font-sans font-bold text-lg shrink-0" style={{ backgroundColor: ACCENT, color: BG }}>
                  {getInitials(m.name)}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[1.05rem]">{m.name}</h3>
                  <p className="text-sm" style={{ color: ACCENT }}>{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-sans font-bold text-[2.5rem] md:text-[3.5rem] leading-[1.05]">
            Ready to build?
          </h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 font-semibold" style={{ backgroundColor: ACCENT, color: BG }}>
            Let's talk <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs" style={{ color: MUTED }}>
          <p>© {new Date().getFullYear()} OptimalDevs // Built different.</p>
          <Link to="/demos" className="hover:text-white">All demos</Link>
        </div>
      </footer>
    </div>
  )
}
