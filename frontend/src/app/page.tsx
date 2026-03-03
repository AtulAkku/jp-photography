import { getHomeData } from "@/lib/queries"
import GallerySection from "@/components/GallerySection"
import AboutSection from "@/components/AboutSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import HeroSection from "@/components/HeroSection"

export default async function Home() {
  const data = await getHomeData()

  return (
    <main>
      <HeroSection hero={data.hero} />
      <GallerySection galleries={data.galleries} />
      <AboutSection about={data.about} />
      <TestimonialsSection testimonials={data.testimonials} />
    </main>
  )
}