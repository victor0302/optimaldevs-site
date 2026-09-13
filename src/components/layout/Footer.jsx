import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-container py-12 grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link to="/" className="text-xl font-semibold tracking-tight">
            OptimalDevs
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Software, data & automation
            <br />
            for growing businesses.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="eyebrow mb-3">Explore</p>
          <ul className="space-y-2">
            {["Services", "Platform", "About", "Contact"].map((label) => (
              <li key={label}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  className="text-sm text-muted hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-3">Let's talk</p>
          <a
            href="mailto:hello@optimaldevs.tech"
            className="text-sm text-ink hover:text-accent underline underline-offset-4"
          >
            hello@optimaldevs.tech
          </a>
          <p className="text-xs text-muted mt-4">
            Have an idea or an operational problem? We'd like to hear it.
          </p>
        </div>
      </div>
      <div className="site-container">
        <div className="border-t border-border py-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-muted">
          <p>© {new Date().getFullYear()} OptimalDevs. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
