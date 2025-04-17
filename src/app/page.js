"use client"

import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import ImagesSlider from "@/components/ImagesSlider"
import WorldMapWeb from "@/components/WorldMapWeb"
import UpcomingEvents from "@/components/UpcomingEvents"
import { useState } from "react"

export default function Home() {
  const [inHome, setInHome] = useState(true)
  return (
    <div className="space-y-20 mb-40">
      <ImagesSlider />
      <HeroSection />
      <Features />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <UpcomingEvents inHome={inHome} />
      <WorldMapWeb />
    </div>
  )
}
