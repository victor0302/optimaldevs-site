import { Hero } from "../components/home/Hero.jsx"
import { WhatWeDo } from "../components/home/WhatWeDo.jsx"
import { PartnershipCallout } from "../components/home/PartnershipCallout.jsx"
import { TeamTeaser } from "../components/home/TeamTeaser.jsx"
import { ContactTeaser } from "../components/home/ContactTeaser.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"

export default function Home() {
  return (
    <>
      <PageMeta
        description="OptimalDevs — a lean dev team helping small businesses get online with custom websites, online presence, and infrastructure."
      />
      <Hero />
      <WhatWeDo />
      <PartnershipCallout />
      <TeamTeaser />
      <ContactTeaser />
    </>
  )
}
