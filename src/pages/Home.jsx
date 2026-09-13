import { Hero } from "../components/home/Hero.jsx"
import { Problem } from "../components/home/Problem.jsx"
import { WhatWeDo } from "../components/home/WhatWeDo.jsx"
import { HowItWorks } from "../components/home/HowItWorks.jsx"
import { PlatformPreview } from "../components/home/PlatformPreview.jsx"
import { TeamTeaser } from "../components/home/TeamTeaser.jsx"
import { ContactTeaser } from "../components/home/ContactTeaser.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"

export default function Home() {
  return (
    <>
      <PageMeta />
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <PlatformPreview />
      <TeamTeaser />
      <ContactTeaser />
    </>
  )
}
