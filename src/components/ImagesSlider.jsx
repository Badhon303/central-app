"use client";
import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./ui/Slider";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { AnimatedCard } from "./AnimatedCard";

export default function ImagesSlider() {
  const images = [
    "/logos/Home-Page-Pictures/1.png",
    "/logos/Home-Page-Pictures/2.png",
    "/logos/Home-Page-Pictures/3.png",
    "/logos/Home-Page-Pictures/4.png",
    "/logos/Home-Page-Pictures/5.png",
    "/logos/Home-Page-Pictures/6.png",
    "/logos/Home-Page-Pictures/7.png",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Slider className="h-full" images={images} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Welcome Section */}
        <div className="h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-col items-center justify-center"
          ></motion.div>
        </div>

        {/* Categories */}
        <section className="">
          <div className="mx-auto">
            <CardHoverEffect />
            <AnimatedCard />
          </div>
        </section>
      </div>
    </section>
  );
}