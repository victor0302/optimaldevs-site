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
        description="The four developers behind OptimalDevs: full stack, security, DevOps, and infrastructure."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Team"
            title="The people behind OptimalDevs"
            subtitle="Four developers, each owning a discipline: full stack, security, DevOps, and infrastructure."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.06} className="h-full">
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
