"use client";
import { Globe } from "@/components/ui/globe";
import React from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export function GlobeDemo() {
  const partnerCountries = [
    {
      name: "China",
      code: "CN",
      partners: [
        "UNITED PHARMA INDUSTRIES CO., LTD",
        "KINHOO PHARMACEUTICAL CO., LTD",
        "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD",
        "Acetar Bio-Tech Inc",
      ],
    },
    { name: "Brazil", code: "BR", partners: ["GLOBE QUIMICA"] },
    {
      name: "Hong Kong",
      code: "HK",
      partners: ["ZHUHAI UNITED LABORATORIES CO., LTD"],
    },
    { name: "Netherlands", code: "NL", partners: ["ALPHA GROUP"] },
    {
      name: "India",
      code: "IN",
      partners: [
        "KOEL",
        "RC ENTERPRISE",
        "BOROSIL SCIENTIFIC LIMITED",
        "SVAM TOYAL PACKAGING INDUSTRIES LTD",
        "RAVI RAJ FOILS LTD",
      ],
    },
    {
      name: "Germany",
      code: "DE",
      partners: ["DR. MAISCH", "KARL HECHT GMBH"],
    },
    { name: "Spain", code: "ES", partners: ["DORSAN FILTRATION"] },
    { name: "Singapore", code: "SG", partners: ["LIVEO RESEARCH"] },
    { name: "Indonesia", code: "ID", partners: ["PT. ONEJECT"] },
  ];

  // partner names to their logo file paths
  const partnerLogos = {
    "UNITED PHARMA INDUSTRIES CO., LTD": "/logos/united-pharma.png",
    "KINHOO PHARMACEUTICAL CO., LTD": "/logos/kinhoo-logo.png",
    "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD": "/logos/sozhou.png",
    "GLOBE QUIMICA": "/logos/globe-cumica.png",
    "ZHUHAI UNITED LABORATORIES CO., LTD":
      "/logos/Manufacturer-Logos/zuhai.png",
    "ALPHA GROUP": "/logos/Manufacturer-Logos/alpha.png",
    KOEL: "/logos/KOEL.png",
    "RC ENTERPRISE": "/logos/Manufacturer-Logos/rc.png",
    "BOROSIL SCIENTIFIC LIMITED": "/logos/Manufacturer-Logos/borossil.png",
    "SVAM TOYAL PACKAGING INDUSTRIES LTD": "/logos/Manufacturer-Logos/svam.png",
    "RAVI RAJ FOILS LTD": "/logos/Manufacturer-Logos/raviraj.jpg",
    "DR. MAISCH": "/logos/dr-maisch.jpeg",
    "KARL HECHT GMBH": "/logos/Manufacturer-Logos/assistent.png",
    "DORSAN FILTRATION": "/logos/Manufacturer-Logos/dorsan.jpg",
    "LIVEO RESEARCH": "/logos/liveo.jpeg",
    "PT. ONEJECT": "/logos/Manufacturer-Logos/oneject.png",
    "Acetar Bio-Tech Inc": "/logos/Manufacturer-Logos/acetar.png",
  };

  return (
    <div className="relative py-16 md:py-24 ">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <motion.div className="relative container mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            About Our{" "}
            <span className="text-primary dark:text-white">
              Global Partners
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl leading-relaxed">
            At Central Scientific CO, we combine cutting-edge technology with
            groundbreaking research to deliver solutions that drive progress in
            science and industry. Our features are designed to empower
            researchers, streamline processes, and accelerate discovery. We have
            partnered with leading companies across the globe to provide the
            best solutions to our customers. Some of our honored partners are as
            follows
          </p>
        </div>

        {/* Globe component */}
        <div className="relative w-full h-96 bg-transparent rounded-lg overflow-hidden mb-16">
          <Globe />
        </div>

        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Honored Partners Accross the Globe
          </h2>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-10 items-center">
          {partnerCountries.flatMap((country) =>
            country.partners.map((partner, idx) => (
              <div
                key={`${country.name}-${idx}`}
                className="flex flex-col items-center cursor-pointer w-48 h-48 sm:w-72 sm:h-72  mx-auto"
              >
                {/* Card */}
                <div className="size-40 sm:w-48 sm:h-48 bg-white dark:bg-gray-800 rounded-lg shadow-md relative flex flex-col justify-center items-center p-4">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "3em",
                      height: "1.5em",
                      position: "absolute",
                      top: "0.5em",
                      left: "0.5em",
                    }}
                    title={country.name}
                  />
                  {/* Logo */}
                  <img
                    src={partnerLogos[partner] || "/logos/default-logo.png"}
                    alt={`Logo`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                {/* Name */}
                <div className="text-center mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-400 truncate max-w-full">
                    {partner}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
