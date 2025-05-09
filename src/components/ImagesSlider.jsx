"use client";
import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./ui/Slider";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { AnimatedCard } from "./AnimatedCard";
import ImageCarousel from "./ui/image-carousel";

export default function ImagesSlider() {
  const desktopImages = [
    "/logos/Home-Page-Pictures/1.png",
    "/logos/Home-Page-Pictures/2.png",
    "/logos/Home-Page-Pictures/3.png",
    "/logos/Home-Page-Pictures/4.png",
    "/logos/Home-Page-Pictures/5.png",
    "/logos/Home-Page-Pictures/6.png",
    "/logos/Home-Page-Pictures/7.png",
  ];

  const mobileImages = [
    "/logos/Home-Page-Pictures/1_mobile_new.jpg",
    "/logos/Home-Page-Pictures/2_mobile_new.jpg",
    "/logos/Home-Page-Pictures/3_mobile_new.jpg",
    "/logos/Home-Page-Pictures/4_mobile_new.jpg",
    // "/logos/Home-Page-Pictures/5_mobile.png",
    "/logos/Home-Page-Pictures/6_mobile_new.jpg",
    // "/logos/Home-Page-Pictures/7_mobile.png",
  ];

  return (
    <div className="relative">
      {/* Image slider background */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={desktopImages}
          mobileImages={mobileImages}
          autoplay={true}
          delay={5000}
          className="h-full"
        />
      </div>

      {/* Content overlay (z-10) */}
      <div className="">
        <div className="h-screen flex flex-col items-center justify-center"></div>

        {/* Cards section */}
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
