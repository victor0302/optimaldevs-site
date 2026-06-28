import { Hero } from "../components/home/Hero.jsx"
import { WhatWeDo } from "../components/home/WhatWeDo.jsx"
import { PartnershipCallout } from "../components/home/PartnershipCallout.jsx"
import { TeamTeaser } from "../components/home/TeamTeaser.jsx"
import { ContactTeaser } from "../components/home/ContactTeaser.jsx"

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <PartnershipCallout />
      <TeamTeaser />
      <ContactTeaser />
    </>
  )
}
