"use client";
import React from "react";
import { motion } from "framer-motion";

export function CustomerSection({ inHome = false }) {
  return (
    <div className={`relative ${inHome ? "py-0" : "py-16 md:py-24"}`}>
      {/* Background gradient (only for customer section) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 ${
          inHome ? "hidden" : "block"
        }`}
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <motion.div
        className={`relative ${inHome ? "w-full" : "container mx-auto px-4"}`}
      >
        {/* Section header (only for customer section) */}
        <div
          className={`text-center mb-12 capitalize ${
            inHome ? "hidden" : "block"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Meet our{" "}
            <span className="text-primary dark:text-white">happy clients</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl mx-auto">
            Trusted by leading organizations for our expertise and reliability,
            we strive to build lasting relationships with our valued customers.
            Our comprehensive solutions are designed to address their unique
            challenges, ensuring they achieve their goals efficiently and
            effectively.
          </p>
        </div>

        {/* Customer logos grid - MAIN CHANGE IS HERE */}
        <div className={`${inHome ? "pt-6 w-full px-4" : "py-10"}`}>
          <div
            className={`grid border border-gray-400 dark:border-gray-600 ${
              inHome
                ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-0 sm:gap-4"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            }`}
          >
            {[
              { src: "/logos/Customer-Logos/aci.png", alt: "ACI" },
              { src: "/logos/Customer-Logos/nipro.png", alt: "Nipro" },
              { src: "/logos/Customer-Logos/popular.png", alt: "Popular" },
              { src: "/logos/Customer-Logos/incepta.png", alt: "Incepta" },
              { src: "/logos/Customer-Logos/everest.jpeg", alt: "Everest" },
              { src: "/logos/Customer-Logos/skf.png", alt: "Eskayef" },
              { src: "/logos/Customer-Logos/beacon.png", alt: "Beacon" },
              { src: "/logos/customers/ACME.jpg", alt: "ACME" },
            ].map((logo, index) => (
              <div 
                key={logo.alt}
                className="flex justify-center items-center border border-gray-400 dark:border-gray-600 aspect-square"
                style={{
                  padding: inHome ? "2rem" : "4rem",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`rounded-[4px] ${
                    inHome ? "max-w-[60px] sm:max-w-[100px]" : "w-[100px]"
                  }`}
                  style={{
                    width: inHome ? "100%" : "auto",
                    height: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}