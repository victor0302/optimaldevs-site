import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/Button.jsx"

export function ContactTeaser() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="site-container grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h2 className="section-heading !text-white">
            Have a problem
            <br />
            technology could solve?
          </h2>
          <p className="mt-5 text-white/90 max-w-xl">
            Whether you need a better website, an internal tool, clearer
            business analytics, or a way to connect systems that don't talk to
            each other, we'd like to hear about it.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-5">
          <Button
            to="/contact"
            className="!bg-bg !text-accent hover:!bg-accent-light focus-visible:!outline-white"
          >
            Start a Conversation <ArrowUpRight size={17} aria-hidden="true" />
          </Button>
          <a
            href="mailto:hello@optimaldevs.tech"
            className="text-sm text-white underline underline-offset-4 focus-visible:!outline-white"
          >
            hello@optimaldevs.tech
          </a>
        </div>
      </div>
    </section>
  )
}
