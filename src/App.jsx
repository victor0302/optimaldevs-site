import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar.jsx"
import { Footer } from "./components/layout/Footer.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Team from "./pages/Team.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Partnership from "./pages/Partnership.jsx"
import Contact from "./pages/Contact.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
