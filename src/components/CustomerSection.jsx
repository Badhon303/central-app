"use client";
import { Globe } from "@/components/ui/globe";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteSlider } from "./ui/infinite-slider";

export function CustomerSection() {
  return (
    <div className="relative py-16 md:py-24 ">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <motion.div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Our{" "}
            <span className="text-primary dark:text-white">
              Valued Customers
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-primary rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 my-4 max-w-[600px] mx-auto">
            Trusted by leading organizations for our expertise and reliability,
            we strive to build lasting relationships with our valued customers.
            Our comprehensive solutions are designed to address their unique
            challenges, ensuring they achieve their goals efficiently and
            effectively.
          </p>
        </div>

        {/* customer logos slider */}
        <InfiniteSlider durationOnHover={75} gap={100} className={"py-10"}>
          <img
            src="/logos/customers/ACI.jpg"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/nipro.jpg"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/popular.jpg"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/incepta.jpg"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/Everest.jpeg"
            alt="Yung Lean - Stardust"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/eskayef.jpg"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/beacon.png"
            alt="A$AP Rocky - Tailor Swif"
            className="aspect-square w-[120px] rounded-[4px]"
          />
          <img
            src="/logos/customers/ACME.jpg"
            alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
            className="aspect-square w-[120px] rounded-[4px]"
          />
        </InfiniteSlider>
      </motion.div>
    </div>
  );
}
