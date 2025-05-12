"use client";
import React from "react";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { AnimatedCard } from "./AnimatedCard";
import ImageCarousel from "./ui/image-carousel";

export default function ImagesSlider() {
  const desktopImages = [
    "/logos/Home-Page-Pictures/coverimages/1.jpg",
    "/logos/Home-Page-Pictures/coverimages/2.jpg",
    "/logos/Home-Page-Pictures/coverimages/3.jpg",
    "/logos/Home-Page-Pictures/coverimages/4.jpg",
    "/logos/Home-Page-Pictures/coverimages/5.jpg",
    "/logos/Home-Page-Pictures/coverimages/6.jpg",
    "/logos/Home-Page-Pictures/coverimages/7.jpg",
  ];

  const mobileImages = [
    "/logos/Home-Page-Pictures/coverimages/mobile/1.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/2.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/3.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/4.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/5.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/6.jpg",
    "/logos/Home-Page-Pictures/coverimages/mobile/7.jpg",
  ];

  const titles = [
    "Title 1",
    "Title 2",
    "Title 3",
    "Title 4",
    "Title 5",
    "Title 6",
    "Title 7",
  ];

  const subtexts = [
    "Subtext for slide 1",
    "Subtext for slide 2",
    "Subtext for slide 3",
    "Subtext for slide 4",
    "Subtext for slide 5",
    "Subtext for slide 6",
    "Subtext for slide 7",
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
          delay={5000}
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
