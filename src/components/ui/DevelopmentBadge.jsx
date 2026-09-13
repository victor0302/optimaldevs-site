export function DevelopmentBadge({ children = "Currently in development" }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-light px-3 py-1.5 text-xs font-medium text-accent">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  )
}
