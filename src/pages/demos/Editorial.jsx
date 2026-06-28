import { Link } from "react-router-dom"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const sections = [
  {
    n: "01",
    title: "Web development",
    body: "Custom sites — designed, written, and shipped by humans. No templates, no bloat. Fast, accessible, and built to last.",
  },
  {
    n: "02",
    title: "Online presence",
    body: "Google Business, Facebook, local SEO. The plumbing that turns 'we have a website' into 'customers find us'.",
  },
  {
    n: "03",
    title: "Infrastructure & security",
    body: "Hosting, deployments, SSL, backups, monitoring. The boring-but-critical layer, done properly from day one.",
  },
]

export default function Editorial() {
  return (
    <div className="min-h-screen pt-8" style={{ backgroundColor: "#F7F3EB", color: "#1A1A1A" }}>
      <DemoBackBar label="02 · Editorial" />

      <header className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <p className="font-display font-medium text-[1.5rem] tracking-tight">OptimalDevs</p>
          <nav className="hidden md:flex items-center gap-8 text-[0.85rem] tracking-wide uppercase">
            <a href="#index">Index</a>
            <a href="#work">Work</a>
            <a href="#voices">Voices</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2 md:pt-3">
            <p className="text-[0.75rem] tracking-[0.2em] uppercase opacity-60">Issue 01 · 2025</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="font-display font-light text-[3.5rem] md:text-[6rem] leading-[0.95] tracking-tight">
              Websites for the<br />
              <span className="italic font-normal">small business</span><br />
              that almost wasn't online.
            </h1>
            <div className="mt-10 max-w-xl">
              <p className="text-[1.05rem] leading-relaxed opacity-80">
                OptimalDevs is a four-person studio. We build websites and online presence for businesses that need both — and we do it through a partnership model that costs you nothing beyond hosting.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <Link to="/portfolio" className="border-b border-black pb-1 hover:opacity-60 transition-opacity">See the work →</Link>
                <Link to="/partnership" className="border-b border-black/30 pb-1 hover:opacity-60 transition-opacity">Read about the partnership →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="index" className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <p className="md:col-span-2 text-[0.75rem] tracking-[0.2em] uppercase opacity-60">Index</p>
            <h2 className="md:col-span-10 font-display font-light text-[2.5rem] md:text-[3rem] leading-tight">What we do, in three movements.</h2>
          </div>
          <div className="space-y-12">
            {sections.map((s) => (
              <article key={s.n} className="grid md:grid-cols-12 gap-8 py-6 border-t border-black/10">
                <p className="md:col-span-2 font-display font-light text-[3rem] leading-none" style={{ color: "#0D7377" }}>{s.n}</p>
                <h3 className="md:col-span-4 font-display font-normal text-[1.75rem] leading-tight">{s.title}</h3>
                <p className="md:col-span-6 text-[1rem] leading-relaxed opacity-80">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="voices" className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <p className="md:col-span-2 text-[0.75rem] tracking-[0.2em] uppercase opacity-60">Voices</p>
            <h2 className="md:col-span-10 font-display font-light text-[2.5rem] md:text-[3rem] leading-tight">Four people. One studio.</h2>
          </div>
          <div className="divide-y divide-black/10">
            {team.map((m) => (
              <div key={m.id} className="grid md:grid-cols-12 gap-8 py-10">
                <div className="md:col-span-3">
                  <p className="font-display font-normal text-[1.5rem] leading-tight">{m.name}</p>
                  <p className="mt-1 text-[0.85rem] tracking-wide uppercase opacity-60">{m.role}</p>
                </div>
                <p className="md:col-span-9 text-[1rem] leading-relaxed opacity-80">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-8">
          <p className="md:col-span-2 text-[0.75rem] tracking-[0.2em] uppercase opacity-60">Colophon</p>
          <div className="md:col-span-10">
            <h2 className="font-display font-light text-[2.5rem] md:text-[3.5rem] leading-tight max-w-2xl">
              Have a business that should be online? <span className="italic">Write to us.</span>
            </h2>
            <Link to="/contact" className="mt-8 inline-block border-b border-black pb-1 hover:opacity-60 transition-opacity">
              hello@optimaldevs.com →
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-8 text-[0.75rem] tracking-wide uppercase opacity-60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>OptimalDevs Studio · MMXXV</p>
          <Link to="/demos" className="hover:opacity-80">All demos</Link>
        </div>
      </footer>
    </div>
  )
}
