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
    <section className="relative">
      {/* Background Image Slider */}
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
          >
            {/* <motion.p className="font-bold text-3xl lg:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              WELCOME TO CENTRAL SCIENTIFIC CO.
            </motion.p>
            <motion.p className="font-bold px-6 text-base md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              By choosing CSCO, you are partnering with a mature, dynamic,
              transparent and reliable company, run by professionals with
              extensive experience in the field.
            </motion.p> */}
          </motion.div>
        </div>

        {/* Categories Section */}
        <section className="">
          <div className="container mx-auto">
            <CardHoverEffect />
            <AnimatedCard />
          </div>
        </section>
      </div>
    </section>
  );
}