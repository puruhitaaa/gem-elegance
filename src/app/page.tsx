import { TopBar } from "@/components/TopBar"
import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { CollectionsSection } from "@/components/CollectionsSection"
import { AboutSection } from "@/components/AboutSection"
import { EverydayFineSection } from "@/components/EverydayFineSection"
import { FeaturedCollectionsSection } from "@/components/FeaturedCollectionsSection"
import { SeamlessExperienceSection } from "@/components/SeamlessExperienceSection"

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col bg-white'>
      <TopBar />
      <NavBar />
      <Hero />
      <CollectionsSection />
      <AboutSection />
      <EverydayFineSection />
      <FeaturedCollectionsSection />
      <SeamlessExperienceSection />
    </main>
  )
}
