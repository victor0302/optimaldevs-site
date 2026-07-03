import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { TeamCard } from "../components/ui/TeamCard.jsx"
import { FadeIn } from "../components/ui/FadeIn.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { team } from "../data/team.js"

export default function Team() {
  return (
    <>
      <PageMeta
        title="Team"
        description="The four developers behind OptimalDevs, each with a specialty and all committed to good work."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Team"
            title="The people behind OptimalDevs"
            subtitle="We're a team of four developers, each with a specialty, all committed to doing good work."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.06}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
