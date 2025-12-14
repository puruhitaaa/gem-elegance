import { AboutSection } from "@/components/AboutSection"
import { CollectionsSection } from "@/components/CollectionsSection"
import { EverydayFineSection } from "@/components/EverydayFineSection"
import { FashionAndFinesseSection } from "@/components/FashionAndFinesseSection"
import { FeaturedCollectionsSection } from "@/components/FeaturedCollectionsSection"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { InstagramSection } from "@/components/InstagramSection"
import { NavBar } from "@/components/NavBar"
import { NewProductsSection } from "@/components/NewProductsSection"
import { SeamlessExperienceSection } from "@/components/SeamlessExperienceSection"
import { TopBar } from "@/components/TopBar"

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
      <NewProductsSection />
      <SeamlessExperienceSection />
      <FashionAndFinesseSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
