"use client";
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
            Meet our{" "}
            <span className="text-primary dark:text-white">happy clients</span>
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
        <div className="py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {/* Each grid cell is a flex container to center the image */}
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/ACI.jpg"
                alt="ACI"
                className="aspect-square w-[120px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/nipro.jpg"
                alt="Nipro"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/popular.jpg"
                alt="Popular"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/incepta.jpg"
                alt="Incepta"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/Everest.jpeg"
                alt="Everest"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/eskayef.jpg"
                alt="Eskayef"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/beacon.png"
                alt="Beacon"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
            <div className="flex justify-center items-center border aspect-square">
              <img
                src="/logos/customers/ACME.jpg"
                alt="ACME"
                className="aspect-square w-[130px] rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
