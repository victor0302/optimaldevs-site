import { PageMeta } from "../components/ui/PageMeta.jsx"

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="How information submitted through the OptimalDevs website is used, and how to contact us with privacy questions."
      />
      <section className="section-space">
        <div className="site-container max-w-3xl">
          <p className="eyebrow mb-4">Website information</p>
          <h1 className="page-heading">Privacy Policy</h1>
          <p className="mt-6 text-muted">
            This page describes information handled through the OptimalDevs
            company website. It does not describe data processing by the
            OptimalDevs Platform, which is currently in development.
          </p>
          <div className="mt-10 space-y-8 text-muted">
            <section>
              <h2 className="text-xl font-semibold mb-3">
                Information you send us
              </h2>
              <p>
                The contact form asks for your name, email address, inquiry
                category, and message. When you submit the form, those details
                are sent to our contact service so we can review your inquiry
                and respond. If you email us directly, we receive the
                information you include in your email. Please avoid sending
                sensitive business or personal information in an initial
                inquiry.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3">
                Services used by this website
              </h2>
              <p>
                The website and contact delivery use Amazon Web Services,
                including a contact endpoint backed by Amazon SES. These
                services receive technical request information, such as your IP
                address. Fonts are served with the website. The website's
                current code does not include advertising trackers or analytics
                scripts.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3">External links</h2>
              <p>
                Links to team profiles and other external websites take you to
                services with their own privacy practices.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3">
                Questions about your information
              </h2>
              <p>
                For questions about this website's handling of information, or
                to ask about information you have sent us, contact{" "}
                <a
                  href="mailto:hello@optimaldevs.tech"
                  className="text-accent underline underline-offset-4"
                >
                  hello@optimaldevs.tech
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
