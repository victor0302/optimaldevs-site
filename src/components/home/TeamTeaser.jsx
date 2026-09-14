import { FadeIn } from "../ui/FadeIn.jsx"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export function TeamTeaser() {
  return (
    <section className="section-space">
      <FadeIn className="site-container grid gap-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow mb-4">Small team. Practical thinking.</p>
          <h2 className="section-heading">
            Useful technology starts with understanding the problem.
          </h2>
        </div>
        <div className="md:pt-9">
          <p className="text-muted">
            OptimalDevs was started by a small team of college developers who
            wanted to build useful technology for organizations often
            underserved by traditional software and consulting companies.
          </p>
          <p className="mt-4 text-muted">
            We work closely with businesses, understand the problem first, and
            build what makes sense. No unnecessary complexity. No technology for
            the sake of technology.
          </p>
          <Link to="/about" className="text-link mt-6">
            Get to know OptimalDevs{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
