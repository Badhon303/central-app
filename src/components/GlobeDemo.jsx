"use client";
import { Globe } from "@/components/ui/globe";
import React from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export function GlobeDemo() {
  const partnerCountries = [
    { name: "China", code: "CN", partners: ["UNITED PHARMA INDUSTRIES CO., LTD", "KINHOO PHARMACEUTICAL CO., LTD", "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD"] },
    { name: "Brazil", code: "BR", partners: ["GLOBE QUIMICA"] },
    { name: "Hong Kong", code: "HK", partners: ["ZHUHAI UNITED LABORATORIES CO., LTD"] },
    { name: "Netherlands", code: "NL", partners: ["ALPHA GROUP"] },
    { name: "India", code: "IN", partners: ["KOEL", "RC ENTERPRISE", "BOROSIL SCIENTIFIC LIMITED", "SVAM TOYAL PACKAGING INDUSTRIES LTD", "RAVI RAJ FOILS LTD"] },
    { name: "Germany", code: "DE", partners: ["DR. MAISCH", "KARL HECHT GMBH"] },
    { name: "Spain", code: "ES", partners: ["DORSAN FILTRATION"] },
    { name: "Singapore", code: "SG", partners: ["LIVEO RESEARCH"] },
    { name: "Indonesia", code: "ID", partners: ["PT. ONEJECT"] }
  ];

  // Map of partner names to their logo file paths
  const partnerLogos = {
    "UNITED PHARMA INDUSTRIES CO., LTD": "/logos/united-pharma.png",
    "KINHOO PHARMACEUTICAL CO., LTD": "/logos/kinhoo-logo.png",
    "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD": "/logos/sozhou.png",
    "GLOBE QUIMICA": "/logos/globe-cumica.png",
    "ZHUHAI UNITED LABORATORIES CO., LTD": "/logos/zhunhai.png",
    "ALPHA GROUP": "/logos/alpha-group.jpeg",
    "KOEL": "/logos/koel.png",
    "RC ENTERPRISE": "/logos/RC-enterprises.jpg",
    "BOROSIL SCIENTIFIC LIMITED": "/logos/borosil.jpeg",
    "SVAM TOYAL PACKAGING INDUSTRIES LTD": "/logos/svam.jpeg",
    "RAVI RAJ FOILS LTD": "/logos/raviraj.png",
    "DR. MAISCH": "/logos/dr-maisch.jpeg",
    "KARL HECHT GMBH": "/logos/glaswarenfabrik.jpeg",
    "DORSAN FILTRATION": "/logos/dorsan.jpeg",
    "LIVEO RESEARCH": "/logos/liveo.jpeg",
    "PT. ONEJECT": "/logos/oneject.jpeg"
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

      <motion.div className="relative container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Our <span className="text-primary dark:text-white">Global Partners</span></h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
        </div>

        {/* Globe component */}
        <div className="relative w-full h-96 bg-transparent rounded-lg overflow-hidden mb-16">
          <Globe />
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {partnerCountries.flatMap((country) =>
            country.partners.map((partner, idx) => (
              <div key={`${country.name}-${idx}`} className="flex flex-col items-center cursor-pointer">
                <div className="w-40 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-md relative">
                  {/* Country Flag */}
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: '3em',
                      height: '1.5em',
                      position: 'absolute',
                      top: '0.5em',
                      left: '0.5em'
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
                <div className="text-center">
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 truncate max-w-full mt-2">{partner}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
