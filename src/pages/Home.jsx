import { SectionTitle } from "../components/ui/SectionTitle.jsx"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle
        eyebrow="Home"
        title="We build websites small businesses actually use."
        subtitle="OptimalDevs is a lean dev team helping local businesses get online — with the design, development, and infrastructure to back it up."
      />
      <p className="mt-8 text-sm text-muted">
        Home page sections arrive in Phase 2.
      </p>
    </div>
  )
}
