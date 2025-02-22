import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import CallToAction from "@/components/CallToAction"
import Blog from "@/components/Blog"
import ImagesSlider from "@/components/ImagesSlider"
import FloatingDockWeb from "@/components/FloatingDockWeb"
import TracingBeamWeb from "@/components/TracingBeamWeb"
import WorldMapWeb from "@/components/WorldMapWeb"

export default function Home() {
  return (
    <div className="space-y-40 mb-40">
      <ImagesSlider />
      {/* <FloatingDockWeb /> */}
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
      <WorldMapWeb />
    </div>
  )
}
