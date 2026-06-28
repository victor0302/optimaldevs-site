import { Button } from "../ui/Button.jsx"
import { FadeIn } from "../ui/FadeIn.jsx"

export function ContactTeaser() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-display font-medium text-[2rem] md:text-[2.25rem] leading-tight text-ink">
            Ready to get your business online?
          </h2>
          <p className="mt-4 text-muted text-base max-w-xl mx-auto">
            Tell us what you're working on. We'll get back within a couple of
            business days.
          </p>
          <div className="mt-8">
            <Button variant="primary" to="/contact">
              Get in Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
