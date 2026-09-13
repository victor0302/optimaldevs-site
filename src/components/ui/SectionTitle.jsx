export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`${alignment} max-w-prose`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading
        className={Heading === "h1" ? "page-heading" : "section-heading"}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
