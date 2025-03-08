"use client";
import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./ui/Slider";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { AnimatedCard } from "@/components/AnimatedCard";

export default function ImagesSlider() {
  const images = [
    // "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/logos/img24.jpg",
    "/logos/img24.jpg",
    "/logos/img24.jpg",
  ];
  return (
    <div>
      <Slider className="h-screen" images={images}>
        <div className="flex flex-col h-full relative top-1/3">
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
            className="z-50 flex flex-col items-center justify-center top-1/2"
          >
            <motion.p className="font-bold text-3xl lg:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              WELCOME TO CENTRAL SCIENTIFIC CO. 
            </motion.p>
            <motion.p className="font-bold px-6 text-base md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              By choosing CSCO, you are partnering with a mature, dynamic,
              transparent and reliable company, run by professionals with
              extensive experience in the field.
            </motion.p>
          </motion.div>
          <div className="bottom-4 left-0 w-full z-50 flex flex-col">
            <CardHoverEffect />
            <AnimatedCard />
          </div>
        </div>
      </Slider>
    </div>
  );
}
