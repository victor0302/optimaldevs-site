import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { Button } from "../components/ui/Button.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" />
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-3">404</p>
          <SectionTitle
            title="That page doesn't exist."
            subtitle="The link might be broken, or the page may have moved. Head back home or get in touch."
            align="center"
          />
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button variant="primary" to="/">
              Back to home
            </Button>
            <Button variant="ghost" to="/contact">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
