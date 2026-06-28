import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function DemoBackBar({ label }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur text-white text-xs px-4 py-2 flex items-center justify-between">
      <Link to="/demos" className="inline-flex items-center gap-2 hover:underline">
        <ArrowLeft size={14} /> All demos
      </Link>
      <span className="opacity-70">{label}</span>
    </div>
  )
}
