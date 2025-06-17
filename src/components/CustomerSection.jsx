"use client";
import React from "react";
import { motion } from "framer-motion";

export function CustomerSection({ inHome = false }) {
  return (
    <div className={`relative ${inHome ? "py-0" : "py-16 md:py-24"}`}>
      <motion.div className={`relative ${inHome ? "w-full" : "mx-auto px-4"}`}>
        {/* header */}
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

        {/* Customer logos grid */}
        <div className={`${inHome ? "pt-6 w-full px-4" : "py-10 max-w-7xl mx-auto"}`}>
          <div
            className={`grid ${
              inHome
                ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-4"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 sm:px-8"
            }`}
          >
            {[
              { src: "/logos/Customer-Logos/Incepta.png", alt: "Incepta" },
              { src: "/logos/Customer-Logos/beximco.png", alt: "Beximco" },
              { src: "/logos/Customer-Logos/skf.png", alt: "Eskayef" },
              { src: "/logos/Customer-Logos/popular.png", alt: "Popular" },
              { src: "/logos/customers/ACME.jpg", alt: "ACME" },
              { src: "/logos/Customer-Logos/aci.png", alt: "ACI" },
              { src: "/logos/Customer-Logos/beacon.png", alt: "Beacon" },
              { src: "/logos/Customer-Logos/nipro.png", alt: "Nipro" },
              { src: "/logos/Customer-Logos/ibn-sina.png", alt: "Ibn-Sina" },
              { src: "/logos/Customer-Logos/everest.jpeg", alt: "Everest" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className={`flex justify-center items-center border border-gray-400 dark:border-gray-500 aspect-square ${
                  inHome
                    ? "p-2 sm:p-4 md:p-6 lg:p-10"
                    : "p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20"
                }`}
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
