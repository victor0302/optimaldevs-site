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
        description="Meet the team building OptimalDevs software, data systems, cloud infrastructure, and a platform in active development."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            as="h1"
            eyebrow="Team"
            title="The people behind OptimalDevs"
            subtitle="A small technical team working across software, data systems, security, and cloud infrastructure to build useful products and deliver practical client solutions."
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
