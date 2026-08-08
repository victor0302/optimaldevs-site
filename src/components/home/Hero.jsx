import { Button } from "../ui/Button.jsx"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* The oversized italic "Optimal" watermark belonged to the serif
          identity and reads as broken in monospace. BRAND.md §7 puts the
          signature on the block cursor instead — that lands in the component
          pass, along with the `> optimal_devs` lockup. */}

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-display font-normal text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight text-ink">
          We build websites small businesses actually use.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          OptimalDevs is a lean dev team helping local businesses get online,
          with the design, development, and infrastructure to back it up.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button variant="primary" to="/portfolio">
            See Our Work
          </Button>
          <Button variant="ghost" to="/partnership">
            Learn About Partnerships
          </Button>
        </div>
      </div>
    </section>
  )
}
