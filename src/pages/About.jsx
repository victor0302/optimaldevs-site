import { PageMeta } from "../components/ui/PageMeta.jsx"
import { TeamCard } from "../components/ui/TeamCard.jsx"
import { ContactTeaser } from "../components/home/ContactTeaser.jsx"
import { Link } from "react-router-dom"
import { team } from "../data/team.js"

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Meet OptimalDevs: a small team of college developers building practical software, data solutions, and automation for businesses, alongside a platform in development."
      />
      <section className="section-space">
        <div className="site-container grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-5">About OptimalDevs</p>
            <h1 className="page-heading">
              Small team.
              <br />
              Useful technology.
              <br />
              <span className="text-accent">Real problems first.</span>
            </h1>
          </div>
          <div className="md:pt-10 text-muted space-y-5 text-lg">
            <p>
              OptimalDevs is a small technology startup founded by college
              developers. We started with a simple idea: smaller organizations
              deserve thoughtful, practical software, too.
            </p>
            <p>
              We help businesses build software, connect their systems,
              understand their data, and reduce repetitive work. Websites are
              part of that work, alongside the tools and infrastructure behind
              them.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space bg-surface border-y border-border">
        <div className="site-container grid gap-10 md:grid-cols-3">
          {[
            [
              "Understand first",
              "We work closely with businesses to understand the people, processes, and constraints behind a request before choosing the technology.",
            ],
            [
              "Keep it practical",
              "We build what makes sense for the problem. No unnecessary complexity. No technology for the sake of technology.",
            ],
            [
              "Build for what comes next",
              "Alongside client work, we're developing a platform that connects business data and organizational knowledge to support search, analytics, and automation.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 text-muted text-sm">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <p className="eyebrow mb-4">The people behind the work</p>
          <h2 className="section-heading">
            A small technical team,
            <br />
            working closely with you.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Learn about our{" "}
            <Link to="/services" className="text-link">
              client services
            </Link>{" "}
            or the{" "}
            <Link to="/platform" className="text-link">
              platform we're developing
            </Link>
            .
          </p>
        </div>
      </section>
      <ContactTeaser />
    </>
  )
}
