import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/Button.jsx"

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/platform", label: "Platform" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.search])

  const closeMenu = () => setOpen(false)
  const onEscape = (event) => {
    if (event.key === "Escape" && open) {
      closeMenu()
      toggleRef.current?.focus()
    }
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-border bg-bg"
      onKeyDown={onEscape}
    >
      <div className="site-container h-20 flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-[1.4rem] font-semibold tracking-[-0.055em] leading-none"
          aria-label="OptimalDevs home"
        >
          OptimalDevs
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm py-2 transition-colors hover:text-accent ${isActive ? "text-accent font-semibold" : "text-muted"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/contact" className="hidden lg:inline-flex">
          Work With Us
        </Button>
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden p-3 -mr-3 text-ink"
        >
          {open ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="lg:hidden border-t border-border bg-bg"
      >
        <div className="site-container py-5 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-2 text-base ${isActive ? "text-accent font-semibold" : "text-muted"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" onClick={closeMenu} className="mt-3 self-start">
            Work With Us
          </Button>
        </div>
      </nav>
    </header>
  )
}
