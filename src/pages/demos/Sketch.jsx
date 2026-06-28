import { Link } from "react-router-dom"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const PAPER = "#FAF7F0"
const INK = "#1E1E1E"
const PEN = "#1A4A7A"
const HIGHLIGHT = "#FFE066"

function HandUnderline({ color = PEN, className = "" }) {
  return (
    <svg viewBox="0 0 200 12" className={className} style={{ display: "block" }} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M2 6 C 40 2, 80 10, 120 5 S 198 8, 198 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function HandArrow({ color = INK, className = "" }) {
  return (
    <svg viewBox="0 0 40 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10 C 12 6, 22 14, 32 10 M28 4 L34 10 L28 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Sketch() {
  return (
    <div className="min-h-screen pt-8 font-serif" style={{ backgroundColor: PAPER, color: INK, fontFamily: '"Fraunces", Georgia, serif' }}>
      <DemoBackBar label="09 · Sketch / Notebook" />

      <header>
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="relative inline-block">
            <p className="font-bold text-2xl" style={{ color: INK }}>OptimalDevs</p>
            <HandUnderline color={PEN} className="absolute -bottom-2 left-0 w-full h-2" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm italic" style={{ color: PEN }}>
            <a href="#what" className="hover:underline">what we do</a>
            <a href="#who" className="hover:underline">who we are</a>
            <a href="#partnership" className="hover:underline">free site!</a>
            <a href="#hello" className="hover:underline">say hello</a>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm italic mb-6" style={{ color: PEN }}>— a small note from the team —</p>
          <h1 className="font-normal text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight">
            We're four developers who like<br />
            <span className="relative inline-block">
              <span className="relative z-10 px-1" style={{ backgroundColor: HIGHLIGHT }}>making websites</span>
            </span>{" "}
            for{" "}
            <span className="italic" style={{ color: PEN }}>small businesses.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed max-w-2xl" style={{ color: "#3A3A3A" }}>
            Drop us a line, sketch out an idea, or tell us what you've been putting off — we'd love to help you sort it out.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/portfolio" className="text-lg italic font-medium border-b-2 pb-1" style={{ borderColor: INK }}>
              See what we've made
            </Link>
            <HandArrow className="w-10 h-5" />
            <Link to="/partnership" className="text-lg italic font-medium border-b-2 pb-1" style={{ borderColor: PEN, color: PEN }}>
              Ask about the free program
            </Link>
          </div>
        </div>
      </section>

      <section id="what" className="py-20" style={{ borderTop: `2px dashed ${INK}33`, borderBottom: `2px dashed ${INK}33` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-3xl italic" style={{ color: PEN }}>p. 1</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-tight">What we do →</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "✦", t: "Websites", d: "We design and build sites from scratch. Yours will look like yours, not a template." },
              { n: "✿", t: "Online presence", d: "Google, Facebook, all that. We set it up properly so people can find you." },
              { n: "✸", t: "Tech upkeep", d: "Hosting, deployments, security. The little things, looked after." },
            ].map((s) => (
              <article key={s.t} className="p-2">
                <p className="text-3xl mb-3" style={{ color: PEN }}>{s.n}</p>
                <h3 className="text-[1.5rem] mb-3 leading-tight">
                  <span className="relative">
                    {s.t}
                    <HandUnderline color={INK} className="absolute -bottom-1.5 left-0 w-full h-1.5" />
                  </span>
                </h3>
                <p className="text-base leading-relaxed mt-4" style={{ color: "#3A3A3A" }}>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative p-10 md:p-14" style={{ backgroundColor: "white", border: `2px solid ${INK}`, transform: "rotate(-0.3deg)", boxShadow: "8px 8px 0 rgba(0,0,0,0.85)" }}>
            <p className="text-sm italic mb-4" style={{ color: PEN }}>↓ partnership program ↓</p>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10 px-1" style={{ backgroundColor: HIGHLIGHT }}>Free site,</span>
              </span>{" "}
              for real.
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#3A3A3A" }}>
              We're growing our portfolio on real projects. You get a website at no cost — we cover everything except your domain (~$12/yr) and hosting (~$5–15/mo).
            </p>
            <Link to="/partnership" className="mt-6 inline-flex items-center gap-2 text-lg italic font-medium border-b-2" style={{ borderColor: INK }}>
              Read the fine print
              <HandArrow className="w-8 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="who" className="py-20" style={{ borderTop: `2px dashed ${INK}33` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-3xl italic" style={{ color: PEN }}>p. 2</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-tight">The four of us</h2>
          </div>
          <div className="space-y-8">
            {team.map((m, i) => (
              <article key={m.id} className="grid md:grid-cols-12 gap-6 pb-8" style={{ borderBottom: i < team.length - 1 ? `1px dashed ${INK}40` : "none" }}>
                <div className="md:col-span-3">
                  <p className="text-2xl leading-tight">
                    <span className="relative">
                      {m.name}
                      <HandUnderline color={PEN} className="absolute -bottom-1 left-0 w-full h-1.5" />
                    </span>
                  </p>
                  <p className="mt-3 text-sm italic" style={{ color: PEN }}>{m.role}</p>
                </div>
                <p className="md:col-span-9 text-base leading-relaxed" style={{ color: "#3A3A3A" }}>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hello" className="py-24" style={{ borderTop: `2px dashed ${INK}33` }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm italic mb-4" style={{ color: PEN }}>— write us a note —</p>
          <h2 className="text-[3rem] md:text-[4.5rem] leading-tight">
            Say{" "}
            <span className="italic" style={{ color: PEN }}>hello.</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-xl italic border-b-2 pb-1" style={{ borderColor: INK }}>
            hello@optimaldevs.com
            <HandArrow className="w-10 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-8">
        <div className="max-w-5xl mx-auto px-6 text-sm italic flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between" style={{ color: PEN }}>
          <p>OptimalDevs · © {new Date().getFullYear()} · made with care in Denver</p>
          <Link to="/demos" className="hover:underline">all demos →</Link>
        </div>
      </footer>
    </div>
  )
}
