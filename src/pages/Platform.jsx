import { ArrowUpRight, BookOpen, Database, Layers3, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { DevelopmentBadge } from "../components/ui/DevelopmentBadge.jsx"
import { Button } from "../components/ui/Button.jsx"
import { BusinessBrainFlow } from "../components/platform/BusinessBrainFlow.jsx"
import { SourceAttribution } from "../components/platform/SourceAttribution.jsx"
import { HumanControl } from "../components/platform/HumanControl.jsx"

const pillars = [
  {
    title: "Business Data",
    icon: Database,
    description:
      "Connect operational systems and create a usable data layer for understanding how your business is performing.",
    examples:
      "POS, accounting, websites, inventory, CRM, marketing, operational databases, spreadsheets, and APIs.",
  },
  {
    title: "Business Knowledge",
    icon: BookOpen,
    description:
      "Bring together the documents, decisions, and operating knowledge that explain how your organization works.",
    examples:
      "Documents, meetings, SOPs, policies, project information, internal documentation, and training material.",
  },
  {
    title: "Business Intelligence",
    icon: Layers3,
    description:
      "Use the combined context to support search, analytics, reporting, recommendations, and workflow automation.",
    examples:
      "As the platform develops: forecasting and AI-assisted decision support, with people in control.",
  },
]

const questions = [
  "What's our process for approving a refund?",
  "Why were sales lower last month?",
  "What decisions were made about our new location?",
  "Which products have grown the most this quarter?",
  "What operating procedure applies here?",
  "Where did we document this decision?",
]

const memoryAreas = [
  [
    "Searchable company knowledge",
    "Find relevant information with answers linked back to company sources.",
  ],
  [
    "Meeting summaries & decisions",
    "Preserve the decisions made, the reasoning behind them, and their context.",
  ],
  [
    "Operating knowledge that stays useful",
    "Organize procedures, training material, and knowledge updates as work changes.",
  ],
  [
    "Project context & organizational history",
    "Keep project information, vendor details, research, and institutional knowledge connected over time.",
  ],
]

export default function Platform() {
  return (
    <>
      <PageMeta
        title="Platform — Business Brain"
        description="OptimalDevs is developing a Business Brain: a unified layer for business data, organizational knowledge, search, analytics, and automation with human control."
      />
      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow mb-5">The OptimalDevs Platform</p>
              <h1 className="page-heading">
                Your business has more than data.
                <br />
                <span className="text-accent">It has knowledge.</span>
              </h1>
            </div>
            <div>
              <DevelopmentBadge>In active development</DevelopmentBadge>
              <p className="mt-5 text-muted">
                Important information lives across sales systems, documents,
                spreadsheets, meetings, emails, and the people who know how your
                business works.
              </p>
              <p className="mt-4 text-muted">
                We're building toward a platform that brings these pieces
                together into one useful business knowledge and intelligence
                layer.
              </p>
              <Button
                to="/contact?subject=Platform%20%2F%20Pilot%20Interest"
                className="mt-7"
              >
                Discuss an Early Pilot{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="mt-14 lg:mt-20">
            <h2 className="text-xs uppercase tracking-label font-semibold text-muted mb-5">
              Three connected capabilities · our platform direction
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map(
                ({ title, icon: Icon, description, examples }, index) => (
                  <article
                    key={title}
                    className="bg-surface border border-border rounded-lg p-6 flex flex-col"
                  >
                    <div className="flex justify-between items-center text-accent">
                      <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-xs font-mono" aria-hidden="true">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm text-muted">{description}</p>
                    <p className="mt-5 pt-5 border-t border-border text-xs text-muted leading-relaxed">
                      {examples}
                    </p>
                  </article>
                ),
              )}
            </div>
            <p className="mt-5 text-xs text-muted">
              The architecture is in early platform development. Connections and
              capabilities described here are planned or under active
              exploration, and are not generally available.
            </p>
          </div>
        </div>
      </section>

      <section
        id="business-brain"
        className="section-space bg-surface border-y border-border scroll-mt-24"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">One intelligence layer</p>
            <h2 className="section-heading">Building a Business Brain.</h2>
            <p className="mt-5 text-muted">
              Most businesses have two disconnected sources of intelligence:
              data generated by their systems, and knowledge held in documents,
              meetings, processes, and people. OptimalDevs is developing a
              platform architecture designed to bring those sources together.
            </p>
            <div className="mt-8 space-y-5 border-l-2 border-accent pl-5">
              <div>
                <h3 className="font-semibold text-base tracking-normal">
                  Data tells you what happened.
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Analytics reveals sales, operational changes, and performance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base tracking-normal">
                  Knowledge explains how your business works.
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Company knowledge adds the procedures, decisions, and context
                  behind the numbers.
                </p>
              </div>
              <p className="text-sm font-medium">
                Bringing both together creates better context for decisions.
              </p>
            </div>
          </div>
          <BusinessBrainFlow />
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Ask your business</p>
            <h2 className="section-heading">
              Ask questions across your business.
            </h2>
            <p className="mt-5 text-muted">
              We're designing toward search that can use both operational data
              and company knowledge. The goal is to make relevant information
              easier to find and understand, with sources and interpretations
              clearly identified.
            </p>
            <p className="mt-5 text-xs font-medium text-accent">
              Planned capability · illustrative questions
            </p>
            <p className="mt-2 text-xs text-muted">
              These examples show the questions we're building toward
              supporting. They are not customer interactions or a live query
              tool.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {questions.map((question) => (
              <li key={question} className="py-5 flex items-start gap-4">
                <Search
                  size={18}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <p className="font-medium">{question}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-surface border-y border-border">
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Durable organizational memory</p>
            <h2 className="section-heading">Keep what your team learns.</h2>
            <p className="mt-5 text-muted">
              As teams grow, valuable knowledge becomes fragmented across
              people, documents, chat history, meetings, and disconnected
              software.
            </p>
            <p className="mt-4 text-muted">
              We're actively exploring systems that preserve important
              decisions, operating knowledge, and business context, so
              information remains useful as organizations grow.
            </p>
            <p className="mt-5 text-xs font-medium text-accent">
              Areas under active development and exploration
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {memoryAreas.map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-border bg-bg p-6"
              >
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SourceAttribution />
      <HumanControl />

      <section className="section-space">
        <div className="site-container grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-4">Who we're building for</p>
            <h2 className="section-heading">
              Small teams with a lot to keep track of.
            </h2>
            <p className="mt-5 text-muted">
              Our initial focus is smaller organizations without their own
              engineering or data teams. These are the businesses we hope to
              learn from and support as the platform develops.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border text-lg font-medium">
            {[
              "Small businesses",
              "Restaurants",
              "Local businesses",
              "Growing multi-location businesses",
            ].map((type) => (
              <li key={type} className="py-4 flex justify-between gap-4">
                {type}
                <span aria-hidden="true" className="text-accent">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-space bg-surface border-t border-border">
        <div className="site-container max-w-3xl text-center">
          <p className="eyebrow mb-4">Help shape what comes next</p>
          <h2 className="section-heading">
            Interested in becoming an early pilot?
          </h2>
          <p className="mt-5 text-muted">
            Tell us which systems you use, where your team's knowledge lives,
            and what you'd like to understand better. Those conversations help
            inform the platform we're developing.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4">
            <Button to="/contact?subject=Platform%20%2F%20Pilot%20Interest">
              Start a Conversation <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <a className="text-link" href="mailto:hello@optimaldevs.tech">
              hello@optimaldevs.tech
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            Need help with a project today?{" "}
            <Link
              to="/services"
              className="text-accent underline underline-offset-4"
            >
              Explore our services.
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
