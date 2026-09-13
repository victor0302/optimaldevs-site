import { BookOpen, Database, Layers3, ArrowDown } from "lucide-react"

const sources = [
  {
    title: "Business knowledge",
    icon: BookOpen,
    items: [
      "Documents",
      "Meetings",
      "SOPs",
      "Policies",
      "Decisions",
      "Training",
    ],
  },
  {
    title: "Business data",
    icon: Database,
    items: ["POS", "Accounting", "Inventory", "CRM", "Website", "Marketing"],
  },
]
const outputs = [
  "Analytics",
  "Search",
  "Automation",
  "Insights",
  "Forecasting",
  "AI-assisted workflows",
]

export function BusinessBrainFlow() {
  return (
    <figure className="flow-surface rounded-xl border border-border p-5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-label text-muted mb-6">
        Architecture in active development
      </p>
      <div aria-hidden="true">
        <div className="grid gap-3 sm:grid-cols-2">
          {sources.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="border border-border rounded-lg bg-bg p-4"
            >
              <Icon size={22} className="text-accent mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold">{title}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-muted border border-border rounded px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <svg
          className="hidden sm:block w-full h-12 text-accent"
          viewBox="0 0 400 48"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M100 0V12Q100 24 112 24H188Q200 24 200 36V48M300 0V12Q300 24 288 24H212Q200 24 200 36"
            stroke="currentColor"
          />
        </svg>
        <ArrowDown className="sm:hidden mx-auto my-4 text-accent" size={24} />
        <div className="max-w-sm mx-auto bg-accent text-white rounded-lg p-6 text-center">
          <Layers3 size={28} className="mx-auto mb-3" strokeWidth={1.5} />
          <p className="text-2xl font-semibold tracking-tight">OptimalDevs</p>
          <p className="mt-1 text-sm">Business Brain</p>
          <p className="mt-2 text-xs text-white/90">
            A unified knowledge & intelligence layer
          </p>
        </div>
        <ArrowDown className="mx-auto my-4 text-accent" size={24} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {outputs.map((output) => (
            <div
              key={output}
              className="rounded border border-border bg-bg p-3 text-xs text-center font-medium"
            >
              {output}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-6 text-xs text-muted leading-relaxed">
        <span className="sr-only">
          Documents, meetings, SOPs, policies, decisions, and training combine
          with POS, accounting, inventory, CRM, website, and marketing data in
          OptimalDevs. Planned outputs include analytics, search, automation,
          insights, forecasting, and AI-assisted workflows.{" "}
        </span>
        Platform direction. Connections and capabilities shown are being
        developed or explored; they are not available integrations. Forecasting
        and AI-assisted workflows are longer-term capabilities.
      </figcaption>
    </figure>
  )
}
