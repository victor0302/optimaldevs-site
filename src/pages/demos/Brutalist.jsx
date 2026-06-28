import { Link } from "react-router-dom"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const PAPER = "#E8E4D9"
const INK = "#000000"
const HOT = "#FF4500"

export default function Brutalist() {
  return (
    <div className="min-h-screen pt-8 font-mono" style={{ backgroundColor: PAPER, color: INK }}>
      <DemoBackBar label="08 · Brutalist" />

      <header style={{ borderBottom: "4px solid black" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-2xl font-black uppercase tracking-tighter">OPTIMAL_DEVS</p>
          <div className="flex items-center gap-4">
            <p className="hidden md:block text-xs">[BUILD = WEB]</p>
            <p className="hidden md:block text-xs">[STATUS = OPEN]</p>
            <a href="#contact" className="px-3 py-1 text-xs font-bold uppercase" style={{ backgroundColor: INK, color: PAPER }}>
              EMAIL_US
            </a>
          </div>
        </div>
      </header>

      <section style={{ borderBottom: "4px solid black" }}>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <p className="text-xs mb-4">{">"} INITIALIZING_AGENCY... [OK]</p>
          <h1 className="font-black uppercase leading-[0.85] tracking-tighter text-[4rem] md:text-[10rem]" style={{ color: INK }}>
            WE<br />
            <span className="inline-block px-2" style={{ backgroundColor: HOT, color: PAPER }}>BUILD</span><br />
            WEBSITES
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed">
            {">"} INPUT: SMALL BUSINESS WITH NO WEB PRESENCE<br />
            {">"} PROCESS: 4 DEVELOPERS + CUSTOM CODE + INFRASTRUCTURE<br />
            {">"} OUTPUT: A REAL WEBSITE THAT WORKS
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/portfolio" className="px-5 py-3 font-bold uppercase text-sm" style={{ backgroundColor: INK, color: PAPER, border: "2px solid black" }}>
              [VIEW_WORK]
            </Link>
            <Link to="/partnership" className="px-5 py-3 font-bold uppercase text-sm" style={{ border: "2px solid black", backgroundColor: PAPER }}>
              [GET_FREE_SITE]
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "4px solid black" }}>
        <div className="grid md:grid-cols-3">
          {[
            { code: "001", t: "WEB_DEV", d: "CUSTOM SITES. NO TEMPLATES. NO BLOAT. SHIPPED FAST.", bg: PAPER },
            { code: "002", t: "PRESENCE", d: "GOOGLE / FB / LOCAL_SEO. GET FOUND BY ACTUAL CUSTOMERS.", bg: INK, color: PAPER },
            { code: "003", t: "INFRA", d: "HOSTING. DEPLOYMENTS. SSL. MONITORING. THE BORING STUFF.", bg: HOT, color: INK },
          ].map((s, i) => (
            <article
              key={s.code}
              className="p-6 md:p-10"
              style={{
                backgroundColor: s.bg,
                color: s.color || INK,
                borderRight: i < 2 ? "4px solid black" : "none",
              }}
            >
              <p className="text-xs font-bold">/{s.code}/</p>
              <h3 className="mt-4 font-black text-[2.5rem] md:text-[3.5rem] uppercase leading-none">{s.t}</h3>
              <p className="mt-6 text-sm leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ borderBottom: "4px solid black", backgroundColor: INK, color: PAPER }}>
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-8">
            <p className="text-xs mb-4">{">"} README_PARTNERSHIP.TXT</p>
            <h2 className="font-black uppercase text-[3rem] md:text-[6rem] leading-[0.9] tracking-tighter">
              FREE_SITE.<br />
              YOU_OWN_IT.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="mb-6 text-sm leading-relaxed">
              {">"} WE_BUILD: EVERYTHING<br />
              {">"} YOU_PAY: DOMAIN + HOSTING<br />
              {">"} CATCH: NONE
            </p>
            <Link to="/partnership" className="inline-block px-5 py-3 font-bold uppercase text-sm" style={{ backgroundColor: HOT, color: INK, border: "2px solid white" }}>
              [READ_TERMS]
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "4px solid black" }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-xs mb-4">{">"} ls -la /team</p>
          <h2 className="font-black uppercase text-[2.5rem] md:text-[4rem] leading-none tracking-tighter mb-8">
            THE_HUMANS
          </h2>
          <div className="border-2 border-black">
            <div className="grid grid-cols-12 text-xs font-bold uppercase" style={{ backgroundColor: INK, color: PAPER }}>
              <p className="col-span-1 p-3" style={{ borderRight: "2px solid #888" }}>#</p>
              <p className="col-span-3 p-3" style={{ borderRight: "2px solid #888" }}>NAME</p>
              <p className="col-span-3 p-3 hidden md:block" style={{ borderRight: "2px solid #888" }}>ROLE</p>
              <p className="col-span-5 p-3 hidden md:block">BIO</p>
            </div>
            {team.map((m, i) => (
              <div
                key={m.id}
                className="grid grid-cols-12 text-sm"
                style={{ borderTop: i > 0 ? "2px solid black" : "none" }}
              >
                <p className="col-span-1 p-3 font-bold" style={{ borderRight: "2px solid black" }}>0{i + 1}</p>
                <div className="col-span-11 md:col-span-3 p-3" style={{ borderRight: "2px solid black" }}>
                  <p className="font-bold">{m.name}</p>
                  <p className="text-xs md:hidden mt-1">{m.role}</p>
                </div>
                <p className="col-span-3 p-3 hidden md:block" style={{ borderRight: "2px solid black" }}>{m.role}</p>
                <p className="col-span-5 p-3 hidden md:block leading-relaxed text-xs">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ borderBottom: "4px solid black" }}>
        <div className="max-w-7xl mx-auto px-4 py-24">
          <p className="text-xs mb-4">{">"} CONNECT/</p>
          <h2 className="font-black uppercase text-[3rem] md:text-[8rem] leading-[0.9] tracking-tighter">
            SEND_<br />
            <span className="inline-block px-2" style={{ backgroundColor: INK, color: PAPER }}>MESSAGE</span>
          </h2>
          <Link to="/contact" className="mt-10 inline-block px-6 py-4 font-bold uppercase text-sm" style={{ backgroundColor: HOT, color: INK, border: "2px solid black" }}>
            [OPEN_CONTACT_FORM →]
          </Link>
        </div>
      </section>

      <footer>
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} OPTIMAL_DEVS / DEN / EST_2025</p>
          <Link to="/demos" className="hover:underline">[ALL_DEMOS →]</Link>
        </div>
      </footer>
    </div>
  )
}
