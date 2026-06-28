import { Link } from "react-router-dom"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const INK = "#111111"
const MUTED = "#666666"
const FAINT = "#999999"
const ACCENT = "#0D7377"

const monoClass = "font-mono"

export default function Studio() {
  return (
    <div className="min-h-screen pt-8 bg-white" style={{ color: INK }}>
      <DemoBackBar label="05 · Studio Minimal" />

      <header>
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            <p className={`${monoClass} text-[0.8rem] tracking-wide`}>OPTIMALDEVS</p>
          </div>
          <nav className={`hidden md:flex items-center gap-8 ${monoClass} text-[0.75rem] tracking-wide`} style={{ color: MUTED }}>
            <a href="#work" className="hover:text-black">WORK</a>
            <a href="#about" className="hover:text-black">ABOUT</a>
            <a href="#index" className="hover:text-black">INDEX</a>
            <a href="#contact" className="hover:text-black">CONTACT</a>
          </nav>
        </div>
      </header>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-32 md:py-48">
          <p className={`${monoClass} text-[0.75rem] tracking-[0.2em] mb-10`} style={{ color: FAINT }}>
            <span style={{ color: ACCENT }}>●</span> EST. 2025 · DENVER, CO
          </p>
          <h1 className="font-display font-light text-[3.5rem] md:text-[6.5rem] leading-[0.95] tracking-tight max-w-4xl">
            A four-person studio<br />
            building thoughtful<br />
            websites for small<br />
            businesses.
          </h1>
          <div className={`mt-16 ${monoClass} text-[0.8rem] tracking-wide flex flex-wrap gap-8`}>
            <Link to="/portfolio" className="hover:text-black" style={{ color: MUTED }}>
              [01] SELECTED WORK →
            </Link>
            <Link to="/partnership" className="hover:text-black" style={{ color: MUTED }}>
              [02] PARTNERSHIP →
            </Link>
            <Link to="/contact" className="hover:text-black" style={{ color: MUTED }}>
              [03] GET IN TOUCH →
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-t" style={{ borderColor: "#EEEEEE" }}>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <p className={`md:col-span-3 ${monoClass} text-[0.7rem] tracking-[0.2em]`} style={{ color: FAINT }}>(01) ABOUT</p>
            <div className="md:col-span-9 max-w-2xl">
              <p className="font-display font-light text-[1.5rem] md:text-[2rem] leading-[1.4]">
                We design, develop, and deploy websites for small businesses — and we do it through a partnership model where you pay only for your domain and hosting. Everything else is on us.
              </p>
              <p className="mt-8 text-[0.95rem] leading-relaxed" style={{ color: MUTED }}>
                We're four developers based in Denver, focused on one thing: making the web work better for the businesses that need it most. No accounts team. No middlemen. Just craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t" style={{ borderColor: "#EEEEEE" }}>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <p className={`md:col-span-3 ${monoClass} text-[0.7rem] tracking-[0.2em]`} style={{ color: FAINT }}>(02) PRACTICE</p>
            <div className="md:col-span-9">
              <ul className="divide-y" style={{ borderColor: "#EEEEEE" }}>
                {[
                  ["Web", "Custom sites, designed and built from scratch."],
                  ["Presence", "Google, Facebook, and local SEO — done right."],
                  ["Infrastructure", "Hosting, CI/CD, monitoring — set up properly."],
                  ["Security", "SSL, audits, hardening — quietly in the background."],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-12 gap-6 py-6">
                    <p className={`col-span-4 md:col-span-3 ${monoClass} text-[0.75rem] tracking-wider uppercase`} style={{ color: FAINT }}>
                      {k}
                    </p>
                    <p className="col-span-8 md:col-span-9 text-[1rem] leading-relaxed">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="index" className="border-t" style={{ borderColor: "#EEEEEE" }}>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <p className={`md:col-span-3 ${monoClass} text-[0.7rem] tracking-[0.2em]`} style={{ color: FAINT }}>(03) PEOPLE</p>
            <div className="md:col-span-9">
              <ul className="divide-y" style={{ borderColor: "#EEEEEE" }}>
                {team.map((m, i) => (
                  <li key={m.id} className="grid grid-cols-12 gap-6 py-8 items-start">
                    <p className={`col-span-2 ${monoClass} text-[0.7rem] tracking-wider`} style={{ color: FAINT }}>
                      0{i + 1}
                    </p>
                    <div className="col-span-10 md:col-span-4">
                      <p className="font-display font-normal text-[1.5rem] leading-tight">{m.name}</p>
                      <p className={`mt-1 ${monoClass} text-[0.7rem] tracking-wider uppercase`} style={{ color: FAINT }}>{m.role}</p>
                    </div>
                    <p className="col-span-12 md:col-span-6 text-[0.95rem] leading-relaxed" style={{ color: MUTED }}>{m.bio}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t" style={{ borderColor: "#EEEEEE" }}>
        <div className="max-w-5xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <p className={`md:col-span-3 ${monoClass} text-[0.7rem] tracking-[0.2em]`} style={{ color: FAINT }}>(04) CONTACT</p>
            <div className="md:col-span-9">
              <p className="font-display font-light text-[2.5rem] md:text-[4rem] leading-[1] tracking-tight">
                Let's talk.
              </p>
              <Link to="/contact" className={`mt-8 inline-block ${monoClass} text-[0.85rem] tracking-wider`} style={{ color: ACCENT }}>
                HELLO@OPTIMALDEVS.COM →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: "#EEEEEE" }}>
        <div className={`max-w-5xl mx-auto px-6 py-8 ${monoClass} text-[0.7rem] tracking-wider flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between`} style={{ color: FAINT }}>
          <p>OPTIMALDEVS · MMXXV · DENVER</p>
          <Link to="/demos" className="hover:text-black">ALL DEMOS →</Link>
        </div>
      </footer>
    </div>
  )
}
