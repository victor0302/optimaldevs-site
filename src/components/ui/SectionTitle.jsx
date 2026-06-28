export function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`${alignment} max-w-prose`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display font-medium text-[2rem] leading-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
