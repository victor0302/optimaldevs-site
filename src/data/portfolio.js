// Client-facing showcase. Descriptions are written for small business owners,
// not developers — say what the thing does for the customer, not how it was
// built. Keep the tech detail on the resume and in the repo, not here.
//
// status: short honest label rendered as a badge on the card.
//   "Live"            — publicly available at liveUrl
//   "In preview"      — built and running, not yet on the client's domain
//   "In development"  — active build, nothing public to link to
// Omit liveUrl unless the link actually goes somewhere a visitor can use.
// linkLabel overrides the default "Visit site" wording, so a preview link can
// say so rather than implying the client has launched.
export const portfolio = [
  {
    id: 1,
    name: "Precision Lawn & Gutters",
    clientType: "Home Services · Denver",
    description:
      "A 15 page website for a local lawn care and gutter company, built so nearby customers can find them on Google and request a quote in a couple of clicks. Includes pages for each service, pages for each area they cover, and an online quote form that reaches the owner directly.",
    tags: ["Website", "Local Search", "Quote Form"],
    image: "/images/portfolio/precision-lawn-gutters.png",
    status: "In preview",
    liveUrl: "https://precision.optimaldevs.tech",
    linkLabel: "View preview",
  },
  {
    id: 2,
    name: "optimaldevs.tech",
    clientType: "Our own site",
    description:
      "Our home on the web, designed and built in house. It runs on the same hosting setup, security practices, and automated publishing pipeline we put behind every client project, so the site you're reading is also our reference build.",
    tags: ["Website", "Hosting", "Contact Form"],
    image: "/images/portfolio/optimaldevs-tech.png",
    status: "Live",
    liveUrl: "https://optimaldevs.tech",
  },
  {
    id: 3,
    name: "BuildStory",
    clientType: "In-house product",
    description:
      "Software we built for our own team. It reads the full history of a software project and explains it in plain language, so a developer joining midway can get up to speed in days instead of weeks. It's how we keep client work from depending on any one person.",
    tags: ["Product", "AI", "Internal Tool"],
    image: "/images/portfolio/buildstory.png",
    status: "Live",
    liveUrl: "https://buildstory-web.fly.dev",
  },
  {
    id: 4,
    name: "PorchLight",
    clientType: "Real Estate · Colorado",
    description:
      "A listing tool we're building for a Colorado real estate client. An agent enters a property address and gets back a polished listing presentation they can share with a seller as a simple web link, replacing an afternoon of manual work.",
    tags: ["Product", "Real Estate", "Client Work"],
    status: "In development",
  },
]
