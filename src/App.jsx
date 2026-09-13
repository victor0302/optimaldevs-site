import { useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Platform from "./pages/Platform.jsx"
import About from "./pages/About.jsx"
import Privacy from "./pages/Privacy.jsx"
import Team from "./pages/Team.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Partnership from "./pages/Partnership.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./pages/NotFound.jsx"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousRoute = useRef(`${pathname}${hash}`)
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: "instant" })
    else window.scrollTo({ top: 0, behavior: "instant" })
    const currentRoute = `${pathname}${hash}`
    if (previousRoute.current !== currentRoute) {
      document.getElementById("main-content")?.focus({ preventScroll: true })
      previousRoute.current = currentRoute
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
