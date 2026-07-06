import { Button } from "../ui/Button.jsx"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <span className="font-display italic font-light text-accent opacity-[0.08] select-none whitespace-nowrap leading-none text-[18rem] md:text-[28rem] after:content-['Optimal']" />
      </div>

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
