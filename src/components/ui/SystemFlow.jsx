import { Database, BarChart3, Workflow, Lightbulb } from "lucide-react"

const outputs = [
  { label: "Analytics", icon: BarChart3 },
  { label: "Automation", icon: Workflow },
  { label: "Business insights", icon: Lightbulb },
]

export function SystemFlow({ platform = false }) {
  const inputs = platform
    ? [
        "POS",
        "Website",
        "Accounting",
        "Inventory",
        "Marketing",
        "CRM",
        "Operational tools",
      ]
    : ["POS", "Website", "Accounting", "Inventory", "Marketing"]

  return (
    <figure className="flow-surface rounded-xl border border-border p-5 sm:p-8">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted mb-7">
        {platform
          ? "Planned platform architecture"
          : "A more connected business"}
      </p>
      <div aria-hidden="true">
        <div className="flex flex-wrap justify-center gap-2">
          {inputs.map((input) => (
            <span
              key={input}
              className="rounded border border-border bg-bg px-3 py-2 text-xs font-medium"
            >
              {input}
            </span>
          ))}
        </div>
        <svg
          className="w-full h-16 text-accent/40"
          viewBox="0 0 360 64"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M40 0V15Q40 28 54 28H166Q180 28 180 42V64M180 0V64M320 0V15Q320 28 306 28H194Q180 28 180 42"
            stroke="currentColor"
          />
        </svg>
        <div className="max-w-[260px] mx-auto rounded-lg bg-accent text-white px-5 py-5 text-center shadow-sm">
          <Database size={24} className="mx-auto mb-2" strokeWidth={1.5} />
          <p className="font-semibold text-xl tracking-tight">OptimalDevs</p>
          <p className="text-xs mt-1 text-white/90">
            {platform
              ? "Unified data layer · in development"
              : "Software · Data · Automation"}
          </p>
        </div>
        <svg
          className="w-full h-12 text-accent/40"
          viewBox="0 0 360 48"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M180 0V48M180 0V10Q180 24 166 24H66Q60 24 60 34V48M180 0V10Q180 24 194 24H294Q300 24 300 34V48"
            stroke="currentColor"
          />
        </svg>
        <div className="grid grid-cols-3 gap-2">
          {outputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded border border-border bg-bg px-1.5 py-3 text-center"
            >
              <Icon
                size={18}
                className="mx-auto text-accent mb-2"
                strokeWidth={1.5}
              />
              <p className="text-[0.65rem] sm:text-xs font-medium leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-6 text-xs leading-relaxed text-muted">
        <span className="sr-only">
          {inputs.join(", ")} flow into OptimalDevs for analytics, automation,
          and business insights.{" "}
        </span>
        {platform
          ? "Product direction. Connections and capabilities shown are planned, not available integrations."
          : "Our approach: connect your tools, organize your data, and make it useful. Each project is scoped to your business."}
      </figcaption>
    </figure>
  )
}
