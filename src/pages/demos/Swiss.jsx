import { Link } from "react-router-dom"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const RED = "#E11D48"

export default function Swiss() {
  return (
    <div className="min-h-screen pt-8 bg-white text-black font-sans">
      <DemoBackBar label="06 · Swiss Grid" />

      <header className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-12 items-center gap-4">
          <p className="col-span-3 font-black text-xl tracking-tight">OptimalDevs<span style={{ color: RED }}>.</span></p>
          <nav className="col-span-7 hidden md:flex items-center gap-8 text-[0.85rem] font-medium">
            <a href="#001">001 Work</a>
            <a href="#002">002 Practice</a>
            <a href="#003">003 People</a>
            <a href="#004">004 Contact</a>
          </nav>
          <p className="col-span-2 text-right text-[0.75rem] tabular-nums">DEN / EST. MMXXV</p>
        </div>
      </header>

      <section className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <div className="w-3 h-3" style={{ backgroundColor: RED }} />
            <p className="mt-3 text-[0.7rem] tracking-widest">A SMALL<br />DEV STUDIO<br />FOR SMALL<br />BUSINESSES</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-black text-[3rem] md:text-[7rem] leading-[0.9] tracking-tight uppercase">
              We build.<br />
              <span style={{ color: RED }}>You grow.</span>
            </h1>
            <div className="mt-12 grid grid-cols-12 gap-4 border-t-2 border-black pt-6">
              <p className="col-span-12 md:col-span-6 text-[0.95rem] leading-snug max-w-md">
                Four developers based in Denver. Websites, online presence, deployment. We work with one client at a time.
              </p>
              <div className="col-span-12 md:col-span-6 flex flex-wrap gap-3 md:justify-end items-start">
                <Link to="/portfolio" className="px-5 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">[ Selected Work ]</Link>
                <Link to="/partnership" className="px-5 py-2 text-sm font-medium" style={{ backgroundColor: RED, color: "white" }}>Partnership →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="002" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <p className="font-black text-[3rem] leading-none" style={{ color: RED }}>002</p>
            <p className="mt-2 text-[0.7rem] tracking-widest">PRACTICE</p>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-4">
            {[
              ["A", "Web Development", "Hand-built sites. Fast. Accessible. Built to last beyond the launch."],
              ["B", "Online Presence", "Google. Facebook. Local SEO. The pieces that make a business findable."],
              ["C", "Infrastructure", "Hosting, deployments, SSL, monitoring. The quiet layer that just works."],
            ].map(([k, t, b]) => (
              <article key={k} className="col-span-12 md:col-span-4 border-t-2 border-black pt-4">
                <div className="flex items-baseline justify-between">
                  <p className="font-black text-[1.5rem]">{t}</p>
                  <p className="font-mono text-xs">— {k}</p>
                </div>
                <p className="mt-3 text-[0.9rem] leading-snug">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="border-b-2 border-black" style={{ backgroundColor: RED, color: "white" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-2">
            <p className="font-black text-[3rem] leading-none">003</p>
            <p className="mt-2 text-[0.7rem] tracking-widest">PARTNERSHIP</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-black text-[2.5rem] md:text-[4rem] leading-[0.95] uppercase tracking-tight">
              Get a site.<br />Pay only for hosting.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <Link to="/partnership" className="inline-block px-5 py-2 bg-white text-black text-sm font-medium hover:bg-black hover:text-white transition-colors">Read the terms →</Link>
          </div>
        </div>
      </section>

      <section id="003" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <p className="font-black text-[3rem] leading-none" style={{ color: RED }}>004</p>
            <p className="mt-2 text-[0.7rem] tracking-widest">PEOPLE</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black text-left text-[0.7rem] tracking-widest">
                  <th className="py-3 w-12">#</th>
                  <th className="py-3">NAME</th>
                  <th className="py-3 hidden md:table-cell">ROLE</th>
                  <th className="py-3 hidden md:table-cell">SPECIALTY</th>
                </tr>
              </thead>
              <tbody>
                {team.map((m, i) => (
                  <tr key={m.id} className="border-b border-black/30">
                    <td className="py-5 align-top font-mono text-sm tabular-nums">0{i + 1}</td>
                    <td className="py-5 align-top">
                      <p className="font-black text-[1.25rem] leading-tight">{m.name}</p>
                      <p className="mt-1 text-[0.85rem] md:hidden">{m.role}</p>
                    </td>
                    <td className="py-5 align-top hidden md:table-cell text-[0.9rem]">{m.role}</td>
                    <td className="py-5 align-top hidden md:table-cell text-[0.9rem]">{m.specialty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <p className="font-black text-[3rem] leading-none" style={{ color: RED }}>005</p>
            <p className="mt-2 text-[0.7rem] tracking-widest">CONTACT</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-black text-[3rem] md:text-[5rem] leading-[0.95] uppercase tracking-tight">
              Get in<br />touch.
            </h2>
            <Link to="/contact" className="mt-8 inline-block font-mono text-sm border-b-2 border-black pb-1" style={{ color: RED }}>
              HELLO@OPTIMALDEVS.COM →
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-12 gap-4 font-mono text-[0.7rem] tracking-widest">
          <p className="col-span-6">OPTIMALDEVS / DEN / MMXXV</p>
          <Link to="/demos" className="col-span-6 text-right hover:underline">ALL DEMOS →</Link>
        </div>
      </footer>
    </div>
  )
}
