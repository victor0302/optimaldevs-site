import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:bg-bg focus-visible:text-ink focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-button focus-visible:border focus-visible:border-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
