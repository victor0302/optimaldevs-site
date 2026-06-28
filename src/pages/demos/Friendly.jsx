import { Link } from "react-router-dom"
import { Heart, Sparkles, Coffee, Sun } from "lucide-react"
import { DemoBackBar } from "./_shared.jsx"
import { team } from "../../data/team.js"

const BG = "#FFF4EC"
const SURFACE = "#FFE4D1"
const ACCENT = "#E76F51"
const INK = "#3A2A1F"
const MUTED = "#7A5C4D"

function getInitials(name) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim()
  const parts = clean.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const things = [
  { icon: Sun, title: "Friendly websites", body: "Built so customers actually enjoy using them. Bright, clear, and easy to find what they need." },
  { icon: Sparkles, title: "Being online", body: "Google, Facebook, all that good stuff — set up properly so people can find your business." },
  { icon: Heart, title: "Lasting support", body: "We don't disappear after launch. We're here when you need updates, fixes, or just have a question." },
]

export default function Friendly() {
  return (
    <div className="min-h-screen pt-8" style={{ backgroundColor: BG, color: INK }}>
      <DemoBackBar label="04 · Friendly Soft" />

      <header className="px-6 pt-6">
        <div className="max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between" style={{ backgroundColor: "white" }}>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
              <Coffee size={16} color="white" />
            </span>
            <p className="font-sans font-bold text-lg" style={{ color: ACCENT }}>OptimalDevs</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: MUTED }}>
            <a href="#what">What we do</a>
            <a href="#who">Who we are</a>
            <a href="#chat">Say hi</a>
          </nav>
          <a href="#chat" className="px-5 py-2 rounded-full font-medium text-sm" style={{ backgroundColor: ACCENT, color: "white" }}>
            Say hi! 👋
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-50" style={{ backgroundColor: SURFACE }} />
        <div aria-hidden="true" className="absolute top-1/2 -left-24 w-64 h-64 rounded-full opacity-40" style={{ backgroundColor: "#FCD9B4" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: SURFACE, color: ACCENT }}>
            <Sparkles size={14} /> Hi! We're OptimalDevs
          </span>
          <h1 className="font-display font-normal text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight">
            We make websites for{" "}
            <span className="italic" style={{ color: ACCENT }}>small businesses</span>
            <br />
            who deserve a great one.
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: MUTED }}>
            No tech jargon, no stress. Just four friendly developers who love making the web a warmer place — one local business at a time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/portfolio" className="px-6 py-3 rounded-full font-semibold text-sm" style={{ backgroundColor: ACCENT, color: "white" }}>
              See our work →
            </Link>
            <Link to="/partnership" className="px-6 py-3 rounded-full font-semibold text-sm" style={{ backgroundColor: "white", color: ACCENT, border: `2px solid ${ACCENT}` }}>
              Get a free site
            </Link>
          </div>
        </div>
      </section>

      <section id="what" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide" style={{ color: ACCENT }}>WHAT WE DO</p>
            <h2 className="mt-3 font-display font-normal text-[2.25rem] md:text-[3rem] leading-tight">A few things, done with care.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {things.map((t) => {
              const Icon = t.icon
              return (
                <article key={t.title} className="rounded-3xl p-8 text-center" style={{ backgroundColor: "white" }}>
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center" style={{ backgroundColor: SURFACE }}>
                    <Icon size={26} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mt-5 font-sans font-bold text-[1.25rem]">{t.title}</h3>
                  <p className="mt-3 leading-relaxed" style={{ color: MUTED }}>{t.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[2.5rem] p-12 md:p-16 text-center" style={{ backgroundColor: ACCENT, color: "white" }}>
            <h2 className="font-display font-normal text-[2rem] md:text-[2.75rem] leading-tight">
              Free website. Really, truly, no catch.
            </h2>
            <p className="mt-5 text-lg leading-relaxed opacity-90 max-w-xl mx-auto">
              Our partnership program: we build, you only pay for your domain and hosting. We learn, you grow. Everybody wins. ✨
            </p>
            <Link to="/partnership" className="mt-8 inline-block px-7 py-3.5 rounded-full font-semibold" style={{ backgroundColor: "white", color: ACCENT }}>
              Tell me more
            </Link>
          </div>
        </div>
      </section>

      <section id="who" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide" style={{ color: ACCENT }}>WHO WE ARE</p>
            <h2 className="mt-3 font-display font-normal text-[2.25rem] md:text-[3rem] leading-tight">The four of us 👇</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.id} className="rounded-3xl p-6 text-center" style={{ backgroundColor: "white" }}>
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center font-sans font-bold text-2xl" style={{ backgroundColor: SURFACE, color: ACCENT }}>
                  {getInitials(m.name)}
                </div>
                <h3 className="mt-4 font-sans font-bold text-[1rem]">{m.name}</h3>
                <p className="text-sm" style={{ color: ACCENT }}>{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="chat" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-normal text-[2.5rem] md:text-[3rem] leading-tight">
            Wanna chat?
          </h2>
          <p className="mt-4 text-lg" style={{ color: MUTED }}>
            We'd love to hear from you — even if it's just a "what should I do about my website?" question.
          </p>
          <Link to="/contact" className="mt-8 inline-block px-7 py-3.5 rounded-full font-semibold" style={{ backgroundColor: ACCENT, color: "white" }}>
            Say hi! 👋
          </Link>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm" style={{ color: MUTED }}>
          <p>Made with ☕ and care by OptimalDevs · © {new Date().getFullYear()}</p>
          <Link to="/demos" className="mt-2 inline-block hover:underline" style={{ color: ACCENT }}>All demos</Link>
        </div>
      </footer>
    </div>
  )
}
