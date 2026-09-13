import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/Button.jsx"
import { SystemFlow } from "../ui/SystemFlow.jsx"

export function Hero() {
  return (
    <section className="pt-16 pb-16 lg:pt-24 lg:pb-20">
      <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow mb-6">Software, data & automation</p>
          <h1 className="text-[2.75rem] sm:text-6xl xl:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.055em]">
            Turn your business data into{" "}
            <span className="text-accent">something useful.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            OptimalDevs builds software, data infrastructure, analytics, and
            automation that help small businesses connect their systems and make
            better decisions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button to="/platform">
              Explore Our Platform <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button variant="ghost" to="/contact">
              Work With Us
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted">
            Client services today. A reusable platform in development.
          </p>
        </div>
        <SystemFlow />
      </div>
      <div className="site-container mt-16 lg:mt-20">
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <p className="text-xs font-medium uppercase tracking-label text-muted">
            Built around your business
          </p>
          <p className="text-sm text-ink">
            Better software. Connected systems. Clearer decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
