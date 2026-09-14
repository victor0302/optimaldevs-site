import { FadeIn } from "../ui/FadeIn.jsx"

export function Problem() {
  return (
    <section className="section-space bg-surface border-y border-border">
      <FadeIn className="site-container grid gap-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow mb-4">The missing connection</p>
          <h2 className="section-heading max-w-lg">
            Your tools do their jobs.
            <br />
            Do they work together?
          </h2>
        </div>
        <div className="text-muted md:pt-9 space-y-4">
          <p>
            Sales live in your POS. Inventory sits in a spreadsheet. Your
            website, accounting, and marketing tools each hold another piece of
            the picture.
          </p>
          <p>
            When those pieces stay separate, it takes more work to understand
            what’s happening. We help connect them, so you can spend less time
            moving information and more time using it.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
