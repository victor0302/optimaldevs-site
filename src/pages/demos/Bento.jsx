import { Link } from "react-router-dom"
import { Sparkles, Code, Rocket, Shield, Users, Mail, ArrowUpRight, Zap } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const INDIGO = "#6366F1"
const BG = "#F5F7FA"

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Bento() {
  return (
    <div className="min-h-screen pt-8" style={{ backgroundColor: BG, color: "#0F172A" }}>
      <DemoBackBar label="07 · Bento SaaS" />

      <header className="sticky top-8 z-30 backdrop-blur" style={{ backgroundColor: "rgba(245,247,250,0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${INDIGO}, #A855F7)` }}>
              <Sparkles size={16} color="white" />
            </div>
            <p className="font-bold text-lg">OptimalDevs</p>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features">Features</a>
            <a href="#team">Team</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <Link to="/contact" className="px-4 py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: INDIGO }}>
            Get started →
          </Link>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: "white", color: INDIGO, border: `1px solid ${INDIGO}33` }}>
              <Zap size={12} /> Partnership program now open
            </span>
            <h1 className="font-sans font-bold text-[2.5rem] md:text-[4.5rem] leading-[1.05] tracking-tight">
              Everything you need to{" "}
              <span style={{ background: `linear-gradient(135deg, ${INDIGO}, #A855F7)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                get online
              </span>
              .
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A four-person dev team that handles your site, your presence, and your infrastructure — so you can run your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[180px]">
            <div className="md:col-span-4 md:row-span-2 rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INDIGO}, #8B5CF6)` }}>
              <Code size={28} className="opacity-80" />
              <p className="mt-6 font-bold text-2xl">Custom websites, built from scratch.</p>
              <p className="mt-3 text-sm opacity-90 max-w-md">No drag-and-drop. No templates. Real code, written by people who care.</p>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: "white" }} />
            </div>

            <div className="md:col-span-2 rounded-3xl p-6 bg-white">
              <Rocket size={24} style={{ color: INDIGO }} />
              <p className="mt-4 font-bold text-[1.05rem]">Fast launch</p>
              <p className="mt-2 text-sm text-slate-600">From kickoff to live site in weeks, not months.</p>
            </div>

            <div className="md:col-span-2 rounded-3xl p-6 bg-white">
              <Shield size={24} style={{ color: INDIGO }} />
              <p className="mt-4 font-bold text-[1.05rem]">Secure by default</p>
              <p className="mt-2 text-sm text-slate-600">SSL, hardening, monitoring — handled.</p>
            </div>

            <div className="md:col-span-3 rounded-3xl p-6 bg-white">
              <p className="text-5xl font-bold tabular-nums" style={{ color: INDIGO }}>4</p>
              <p className="mt-1 font-medium">people, working together</p>
              <p className="mt-3 text-sm text-slate-600">No account managers. You talk to the people building your site.</p>
            </div>

            <div className="md:col-span-3 rounded-3xl p-6" style={{ backgroundColor: "#0F172A", color: "white" }}>
              <p className="text-xs tracking-widest uppercase opacity-60">Pricing</p>
              <p className="mt-3 font-bold text-3xl">$0 + hosting</p>
              <p className="mt-2 text-sm opacity-80">Our partnership program. We build, you only pay for domain and hosting.</p>
              <Link to="/partnership" className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: "#A5B4FC" }}>
                See how it works <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: INDIGO }}>THE TEAM</p>
            <h2 className="font-bold text-[2.25rem] md:text-[3rem] leading-tight">Built by humans you can email.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((m) => (
              <article key={m.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg text-white" style={{ background: `linear-gradient(135deg, ${INDIGO}, #A855F7)` }}>
                  {getInitials(m.name)}
                </div>
                <h3 className="mt-4 font-bold">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.role}</p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INDIGO}, #1E293B)` }}>
            <Users size={28} className="mx-auto opacity-80" />
            <h2 className="mt-6 font-bold text-[2.25rem] md:text-[3rem] leading-tight">
              Ready to ship?
            </h2>
            <p className="mt-4 opacity-90 max-w-xl mx-auto">
              Tell us about your business. We'll reply within 1–2 business days.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white font-semibold" style={{ color: INDIGO }}>
              <Mail size={16} /> Get in touch
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OptimalDevs. Built different.</p>
          <Link to="/demos" className="hover:text-slate-900">All demos →</Link>
        </div>
      </footer>
    </div>
  )
}
