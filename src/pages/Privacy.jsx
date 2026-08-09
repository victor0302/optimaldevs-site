import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"

// Everything on this page describes what the site actually does today. The
// contact form is the only place any personal data is collected: it POSTs to
// API Gateway, a Lambda formats the message, and SES delivers it to the team.
// There is no analytics, no tag manager and no cookie of any kind on this
// site. If that changes, this page changes in the same commit.
const LAST_UPDATED = "9 August 2026"

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-display font-medium text-[1.25rem] text-ink leading-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-muted leading-relaxed">{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy"
        description="What OptimalDevs collects through this site, why, and how long we keep it."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            eyebrow="Privacy"
            title="What we collect"
            subtitle="Short version: the contact form, and nothing else."
          />

          <Section title="What the contact form collects">
            <p>
              When you submit the contact form we receive the name, email
              address, subject and message you typed into it. That is the only
              personal information this site collects, and it is only collected
              when you choose to send it.
            </p>
          </Section>

          <Section title="Where it goes">
            <p>
              The form posts to an endpoint hosted on Amazon Web Services. A
              small function formats your message and emails it to the
              OptimalDevs team through Amazon SES. Your email address is set as
              the reply address so we can answer you directly.
            </p>
            <p>
              We use it to reply to your enquiry and to carry out any work that
              follows from it. We do not sell it, rent it, or share it with
              anyone outside the team, and we do not add you to a mailing list.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              Your message stays in our email for as long as we may need it for
              the conversation it belongs to. Ask us to delete it and we will.
            </p>
          </Section>

          <Section title="Analytics and cookies">
            <p>
              This site sets no cookies and runs no analytics, no tag manager
              and no third party tracking scripts. Nothing follows you around
              after you leave.
            </p>
            <p>
              The site is served through Amazon CloudFront, which keeps standard
              server request logs, the same as any web host. Those are used for
              delivery and security, not to profile visitors.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can ask us what we hold about you, ask for a copy, or ask us
              to delete it, using the contact form. If you would rather not use
              the form at all, do not submit it: browsing the site collects
              nothing.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              If we add anything that collects data, this page gets updated in
              the same change. Last updated {LAST_UPDATED}.
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}
