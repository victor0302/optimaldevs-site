import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Team from "./pages/Team.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Partnership from "./pages/Partnership.jsx"
import Contact from "./pages/Contact.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
