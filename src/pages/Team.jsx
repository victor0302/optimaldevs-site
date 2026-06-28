import { SectionTitle } from "../components/ui/SectionTitle.jsx"

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle
        eyebrow="Team"
        title="The people behind OptimalDevs"
        subtitle="We're a team of four developers — each with a specialty, all committed to doing good work."
      />
      <p className="mt-8 text-sm text-muted">
        Team grid arrives in Phase 3.
      </p>
    </div>
  )
}
