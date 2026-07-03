import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../ui/Button.jsx"
import { useReducedMotion } from "../../hooks/useReducedMotion.js"

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduced = useReducedMotion()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled
  const headerClass = transparent
    ? "bg-transparent border-transparent"
    : "bg-bg/90 backdrop-blur border-border"

  const handleSamePathClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${headerClass}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => handleSamePathClick("/")}
          className="font-display font-medium text-ink text-[1.5rem] tracking-tight leading-none"
        >
          OptimalDevs
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => handleSamePathClick(link.to)}
              className={({ isActive }) =>
                `relative text-sm text-ink/80 hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-accent after:transition-all after:duration-200 ${
                  isActive ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" to="/contact">
            Work With Us
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            className="md:hidden bg-bg border-t border-border"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => handleSamePathClick(link.to)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? "text-accent" : "text-ink/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button variant="primary" to="/contact" className="mt-2 self-start">
                Work With Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
