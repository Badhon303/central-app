"use client";
import React from "react";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { AnimatedCard } from "./AnimatedCard";
import ImageCarousel from "./ui/image-carousel";

export default function ImagesSlider() {
  const desktopImages = [
    "/logos/Home-Page-Pictures/coverimages/1.png",
    "/logos/Home-Page-Pictures/coverimages/2.png",
    "/logos/Home-Page-Pictures/coverimages/3.jpg",
    "/logos/Home-Page-Pictures/coverimages/4.png",
    "/logos/Home-Page-Pictures/coverimages/5.png",
    "/logos/Home-Page-Pictures/coverimages/6.png",
    "/logos/Home-Page-Pictures/coverimages/7.png",
  ];

  const mobileImages = [
    "/logos/Home-Page-Pictures/coverimages/1.png",
    "/logos/Home-Page-Pictures/coverimages/2.png",
    "/logos/Home-Page-Pictures/coverimages/3.jpg",
    "/logos/Home-Page-Pictures/coverimages/4.png",
    "/logos/Home-Page-Pictures/coverimages/5.png",
    "/logos/Home-Page-Pictures/coverimages/mobile/6.jpg",
    "/logos/Home-Page-Pictures/coverimages/7.png",
  ];

  const titles = [
    "WELCOME TO CENTRAL",
    "Opportunity Awaits",
    "From API's to Primary Packaging",
    "Crafted For Precision",
    "Pure Ingredients",
    "Nutraceuticals for a Stronger Tomorrow",
    "Bloom Hub",
  ];

  const subtexts = [
    "By choosing Central, you are partnering with a dynamic, transparent and energetic team of professionals who are passionately dedicated to excellence in the fields of pharmaceuticals and food",
    "Explore. Build. Thrive. Together",
    "Applying High-Purity APIs and Advanced Packaging Solutions to Safeguard Pharmaceuticals Excellence",
    "Advanced Laboratory Consumables for Peak Performance",
    "Hornessing Nature's Strength",
    "Your Source for Quality Nutraceuticals",
    "Built to Serve, Grown to Last",
  ];

  return (
    <div className="relative">
      {/* Image slider background */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={desktopImages}
          mobileImages={mobileImages}
          titles={titles}
          subtexts={subtexts}
          autoplay={true}
          delay={3000}
          className="h-full"
        />
      </div>

      {/* content overlay */}
      <div className="">
        <div className="h-screen flex flex-col text-lg items-center justify-center"></div>

        {/* cards section */}
        <section className="relative z-20">
          <div className="mx-auto">
            <CardHoverEffect />
            <AnimatedCard />
          </div>
        </section>
      </div>
    </div>
  );
}
