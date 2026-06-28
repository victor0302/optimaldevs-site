import { Helmet } from "react-helmet-async"

const SITE = "OptimalDevs"

export function PageMeta({ title, description }) {
  const fullTitle = title ? `${title} — ${SITE}` : `${SITE} — Web development for small businesses`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
