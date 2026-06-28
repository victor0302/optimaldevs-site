import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Team from "./pages/Team.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Partnership from "./pages/Partnership.jsx"
import Contact from "./pages/Contact.jsx"
import DemosIndex from "./pages/demos/Index.jsx"
import WarmDemo from "./pages/demos/Warm.jsx"
import EditorialDemo from "./pages/demos/Editorial.jsx"
import BoldDemo from "./pages/demos/Bold.jsx"
import FriendlyDemo from "./pages/demos/Friendly.jsx"
import StudioDemo from "./pages/demos/Studio.jsx"
import SwissDemo from "./pages/demos/Swiss.jsx"
import BentoDemo from "./pages/demos/Bento.jsx"
import BrutalistDemo from "./pages/demos/Brutalist.jsx"
import SketchDemo from "./pages/demos/Sketch.jsx"
import TerminalDemo from "./pages/demos/Terminal.jsx"

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

        <Route path="/demos" element={<DemosIndex />} />
        <Route path="/demos/warm" element={<WarmDemo />} />
        <Route path="/demos/editorial" element={<EditorialDemo />} />
        <Route path="/demos/bold" element={<BoldDemo />} />
        <Route path="/demos/friendly" element={<FriendlyDemo />} />
        <Route path="/demos/studio" element={<StudioDemo />} />
        <Route path="/demos/swiss" element={<SwissDemo />} />
        <Route path="/demos/bento" element={<BentoDemo />} />
        <Route path="/demos/brutalist" element={<BrutalistDemo />} />
        <Route path="/demos/sketch" element={<SketchDemo />} />
        <Route path="/demos/terminal" element={<TerminalDemo />} />
      </Routes>
    </BrowserRouter>
  )
}
