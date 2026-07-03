import { Button } from "../ui/Button.jsx"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { TeamCard } from "../ui/TeamCard.jsx"
import { FadeIn } from "../ui/FadeIn.jsx"
import { team } from "../../data/team.js"

export function TeamTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="The team"
            title="A small team. Serious about craft."
            subtitle="Four developers, each with a specialty. Close enough to coordinate, focused enough to ship good work."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.06}>
              <TeamCard member={member} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" to="/team">
            Meet the team
          </Button>
        </div>
      </div>
    </section>
  )
}
