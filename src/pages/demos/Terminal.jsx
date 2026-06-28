import { Link } from "react-router-dom"
import { Terminal as TerminalIcon, Folder, GitBranch, Circle } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const BG = "#0D1117"
const PANEL = "#161B22"
const BORDER = "#30363D"
const TEXT = "#E6EDF3"
const COMMENT = "#7D8590"
const BLUE = "#58A6FF"
const GREEN = "#7EE787"
const PURPLE = "#D2A8FF"
const ORANGE = "#FFA657"
const RED = "#FF7B72"

function Window({ title, children, className = "" }) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`} style={{ backgroundColor: PANEL, border: `1px solid ${BORDER}` }}>
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: "#0D1117" }}>
        <div className="flex items-center gap-2">
          <Circle size={10} fill="#FF5F57" color="#FF5F57" />
          <Circle size={10} fill="#FEBC2E" color="#FEBC2E" />
          <Circle size={10} fill="#28C840" color="#28C840" />
        </div>
        <p className="text-[0.7rem] font-mono" style={{ color: COMMENT }}>{title}</p>
        <div className="w-12" />
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export default function Terminal() {
  return (
    <div className="min-h-screen pt-8 font-mono" style={{ backgroundColor: BG, color: TEXT }}>
      <DemoBackBar label="10 · Terminal / Dev-Shop" />

      <header style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <TerminalIcon size={18} style={{ color: GREEN }} />
            <p style={{ color: TEXT }}>~/optimaldevs</p>
            <span style={{ color: COMMENT }}>·</span>
            <div className="flex items-center gap-1.5" style={{ color: PURPLE }}>
              <GitBranch size={14} />
              <span>main</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs" style={{ color: COMMENT }}>
            <a href="#about" className="hover:text-white">./about</a>
            <a href="#services" className="hover:text-white">./services</a>
            <a href="#team" className="hover:text-white">./team</a>
            <a href="#contact" className="hover:text-white">./contact</a>
          </nav>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Window title="hero.sh — bash">
            <p style={{ color: GREEN }}>vic@optimaldevs <span style={{ color: TEXT }}>~$</span> <span style={{ color: TEXT }}>cat README.md</span></p>
            <div className="mt-4 space-y-1">
              <p><span style={{ color: COMMENT }}># OptimalDevs</span></p>
              <p><span style={{ color: COMMENT }}>{">"} A four-person dev studio building websites for small businesses.</span></p>
              <p><span style={{ color: COMMENT }}>{">"} Real engineering. Real code. Real humans.</span></p>
            </div>
            <p className="mt-6" style={{ color: GREEN }}>vic@optimaldevs <span style={{ color: TEXT }}>~$</span> <span style={{ color: TEXT }}>./pitch.sh</span></p>
          </Window>

          <h1 className="mt-12 font-sans font-bold text-[2.75rem] md:text-[5rem] leading-[1.05] tracking-tight">
            <span style={{ color: COMMENT }}>{"//"}</span> We build{" "}
            <span style={{ color: GREEN }}>websites</span>
            <span style={{ color: COMMENT }}>;</span>
            <br />
            <span style={{ color: COMMENT }}>{"//"}</span> Small business{" "}
            <span style={{ color: BLUE }}>{"=> "}</span>
            <span style={{ color: ORANGE }}>online()</span>
            <span style={{ color: COMMENT }}>;</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed font-sans" style={{ color: COMMENT }}>
            We're four engineers based in Denver. We write code, configure servers, set up domains, and ship websites that don't break.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/portfolio" className="px-5 py-2.5 text-sm rounded-md font-medium" style={{ backgroundColor: GREEN, color: BG }}>
              {">"} ./view-work.sh
            </Link>
            <Link to="/partnership" className="px-5 py-2.5 text-sm rounded-md font-medium" style={{ border: `1px solid ${BORDER}`, color: TEXT }}>
              {"$"} cat PARTNERSHIP.md
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs mb-2" style={{ color: COMMENT }}>{"$"} ls -la ./services</p>
          <h2 className="font-sans font-bold text-[2rem] md:text-[2.75rem] leading-tight mb-10">
            <span style={{ color: COMMENT }}>{"//"}</span> What we ship
          </h2>
          <div className="space-y-3">
            {[
              { icon: <Folder size={16} style={{ color: BLUE }} />, name: "web-development/", desc: "Custom sites. React, Go, whatever fits.", tag: "→ ./read" },
              { icon: <Folder size={16} style={{ color: BLUE }} />, name: "online-presence/", desc: "Google Business, FB, local SEO setup.", tag: "→ ./read" },
              { icon: <Folder size={16} style={{ color: BLUE }} />, name: "infrastructure/", desc: "Hosting, CI/CD, monitoring, backups.", tag: "→ ./read" },
              { icon: <Folder size={16} style={{ color: BLUE }} />, name: "security/", desc: "SSL, audits, hardening. Quietly thorough.", tag: "→ ./read" },
            ].map((s) => (
              <article key={s.name} className="grid grid-cols-12 gap-4 items-center px-5 py-4 rounded-md text-sm" style={{ backgroundColor: PANEL, border: `1px solid ${BORDER}` }}>
                <div className="col-span-12 md:col-span-1 flex items-center gap-2">
                  {s.icon}
                </div>
                <p className="col-span-12 md:col-span-3" style={{ color: PURPLE }}>{s.name}</p>
                <p className="col-span-12 md:col-span-6" style={{ color: TEXT }}>{s.desc}</p>
                <p className="col-span-12 md:col-span-2 text-right text-xs" style={{ color: COMMENT }}>{s.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Window title="partnership.json — vim">
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: TEXT }}>
{`{
  `}<span style={{ color: BLUE }}>"program"</span>{`: `}<span style={{ color: GREEN }}>"OptimalDevs Partnership"</span>{`,
  `}<span style={{ color: BLUE }}>"cost"</span>{`: `}<span style={{ color: ORANGE }}>0</span>{`,
  `}<span style={{ color: BLUE }}>"client_pays"</span>{`: [`}<span style={{ color: GREEN }}>"domain (~$12/yr)"</span>{`, `}<span style={{ color: GREEN }}>"hosting (~$5-15/mo)"</span>{`],
  `}<span style={{ color: BLUE }}>"we_provide"</span>{`: `}<span style={{ color: GREEN }}>"everything else"</span>{`,
  `}<span style={{ color: BLUE }}>"slots_open"</span>{`: `}<span style={{ color: ORANGE }}>2</span>{`,
  `}<span style={{ color: BLUE }}>"why"</span>{`: `}<span style={{ color: GREEN }}>"real projects = real growth"</span>{`
}`}
            </pre>
          </Window>
          <Link to="/partnership" className="mt-6 inline-flex items-center gap-2 text-sm" style={{ color: GREEN }}>
            {"$"} cd partnership/ <span style={{ color: TEXT }}>→</span>
          </Link>
        </div>
      </section>

      <section id="team" className="py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs mb-2" style={{ color: COMMENT }}>{"$"} cat team.yaml</p>
          <h2 className="font-sans font-bold text-[2rem] md:text-[2.75rem] leading-tight mb-10">
            <span style={{ color: COMMENT }}>{"//"}</span> ./team
          </h2>
          <div className="space-y-4">
            {team.map((m, i) => (
              <article key={m.id} className="p-5 rounded-md text-sm" style={{ backgroundColor: PANEL, border: `1px solid ${BORDER}` }}>
                <p className="mb-1" style={{ color: COMMENT }}>{"# member " + (i + 1)}</p>
                <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: TEXT }}>
<span style={{ color: BLUE }}>name</span>{`: `}<span style={{ color: GREEN }}>{`"${m.name}"`}</span>{`\n`}
<span style={{ color: BLUE }}>role</span>{`: `}<span style={{ color: ORANGE }}>{m.role}</span>{`\n`}
<span style={{ color: BLUE }}>specialty</span>{`: `}<span style={{ color: PURPLE }}>{m.specialty}</span>{`\n`}
<span style={{ color: BLUE }}>bio</span>{`: |\n  `}<span style={{ color: TEXT }}>{m.bio}</span>
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Window title="contact.sh">
            <p style={{ color: GREEN }}>vic@optimaldevs <span style={{ color: TEXT }}>~$</span> <span style={{ color: TEXT }}>./hello.sh</span></p>
            <p className="mt-3" style={{ color: COMMENT }}># initiating contact protocol...</p>
            <p style={{ color: COMMENT }}># ✓ ready to receive message</p>
            <p className="mt-4" style={{ color: GREEN }}>vic@optimaldevs <span style={{ color: TEXT }}>~$</span> <span style={{ color: TEXT }}>_</span></p>
          </Window>
          <h2 className="mt-10 font-sans font-bold text-[2.5rem] md:text-[3.5rem] leading-tight">
            <span style={{ color: RED }}>{"const"}</span>{" "}
            <span style={{ color: ORANGE }}>message</span>{" "}
            <span style={{ color: COMMENT }}>=</span>{" "}
            <span style={{ color: GREEN }}>"hi"</span>
            <span style={{ color: COMMENT }}>;</span>
          </h2>
          <Link to="/contact" className="mt-6 inline-block px-6 py-3 rounded-md text-sm font-medium" style={{ backgroundColor: GREEN, color: BG }}>
            {">"} ./send-message
          </Link>
        </div>
      </section>

      <footer className="py-6" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 text-xs flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between" style={{ color: COMMENT }}>
          <p>$ echo "© {new Date().getFullYear()} OptimalDevs · all rights reserved"</p>
          <Link to="/demos" className="hover:text-white">cd ../demos →</Link>
        </div>
      </footer>
    </div>
  )
}
