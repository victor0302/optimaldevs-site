import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

const SITE = "OptimalDevs"
const DEFAULT_TITLE =
  "OptimalDevs | Software, Data & Automation for Small Businesses"
const DEFAULT_DESCRIPTION =
  "OptimalDevs builds software, data infrastructure, analytics, and automation that help small businesses connect their systems and understand their operations."

export function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  noindex = false,
}) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${SITE}` : DEFAULT_TITLE
  const url = `https://optimaldevs.tech${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow"}
      />
      {!noindex && <link rel="canonical" href={url} />}
    </Helmet>
  )
}
