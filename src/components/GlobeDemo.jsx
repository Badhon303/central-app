"use client"
import { Globe } from "@/components/ui/globe"
import React from "react"
import { motion } from "framer-motion"
import ReactCountryFlag from "react-country-flag"
import Image from "next/image"

export function GlobeDemo() {
  // Real images from freepik
  const officeImages = [
    "https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Singapore - Office
    "https://img.freepik.com/free-photo/treatment-study-genetically-engineered-strawberries-laboratory-by-group-scientist-test-tubes-with-green-solutions_482257-34487.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Munich - Office
    "https://img.freepik.com/free-photo/building-lake_1127-3460.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Boston - Office
    "https://img.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Mumbai
  ]

  const officeData = [
    {
      id: 1,
      name: "Sourcing and Procurement",
      // location: "Singapore",
      image: officeImages[0],
      history:
        "The vital strength depends on identifying and ensuring the right product from the right source through reliability, efficiency, and ethics. Our vast global network consists of manufacturers who meet international quality standards. Through this network, we offer all kinds of APIs, excipients, primary packaging, and medical devices.",
      // objective:
      //   "To accelerate pharmaceutical supply chain efficiency and support emerging medical technologies in the APAC region.",
      // sustainableFeatures: [
      //   "Green building certification",
      //   "Solar panel integration",
      //   "Rainwater harvesting system",
      // ],
      // coordinates: [1.3521, 103.8198],
    },
    {
      id: 2,
      name: "Market and Product Knowledge",
      // location: "Germany",
      image: officeImages[1],
      history:
        "Our team brings access along with insight on new product developments, new molecules, and new inventions around the globe. Whether you are scaling an existing product line or entering a new therapeutic category, our insights empower better decisions and faster time to market.",
      // objective:
      //   "Developing cutting-edge pharmaceutical solutions with a focus on personalized healthcare and advanced research methodologies.",
      // sustainableFeatures: [
      //   "Energy-efficient lab design",
      //   "Circular economy principles",
      //   "Carbon-neutral operations",
      // ],
      // coordinates: [48.1351, 11.582],
    },
    {
      id: 3,
      name: "Relationship and Partnership Management",
      // location: "United States",
      image: officeImages[2],
      history:
        "At the core of our success is our ability to build and nurture lasting partnerships with both clients and manufacturers. We serve as the vital link between international producers and local pharmaceutical companies, balancing interests, expectations, and goals.",
      // objective:
      //   "Fostering collaborative research, supporting startup incubation, and driving breakthrough pharmaceutical technologies.",
      // sustainableFeatures: [
      //   "LEED Platinum certification",
      //   "Regenerative design",
      //   "Zero-waste research facilities",
      // ],
      // coordinates: [42.3601, -71.0589],
    },
    // {
    //   id: 4,
    //   name: "Mumbai Pharmaceutical Distribution Center",
    //   location: "India",
    //   image: officeImages[3],
    //   history:
    //     "Established to enhance pharmaceutical accessibility in the rapidly growing Indian healthcare market.",
    //   objective:
    //     "Streamlining medication distribution, supporting local healthcare infrastructure, and ensuring affordable access to essential medicines.",
    //   sustainableFeatures: [
    //     "Renewable energy powered",
    //     "Smart logistics infrastructure",
    //     "Community health initiatives",
    //   ],
    //   coordinates: [19.076, 72.8777],
    // },
  ]
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
        "Patel Chem Specialties Limited",
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
  ]

  // partner names to their logo file paths
  const partnerLogos = {
    "UNITED PHARMA INDUSTRIES CO., LTD": "/logos/united-pharma.png",
    "KINHOO PHARMACEUTICAL CO., LTD": "/logos/kinhoo-logo.jpg",
    "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD": "/logos/CRH.png",
    "GLOBE QUIMICA": "/logos/globe-cumica.png",
    "ZHUHAI UNITED LABORATORIES CO., LTD":
      "/logos/Manufacturer-Logos/zuhai.png",
    "ALPHA GROUP": "/logos/Manufacturer-Logos/alpha.png",
    "Patel Chem Specialties Limited": "/logos/patel-chem-specialist.png",
    KOEL: "/logos/koel.jpg",
    "RC ENTERPRISE": "/logos/Manufacturer-Logos/rc.jpg",
    "BOROSIL SCIENTIFIC LIMITED": "/logos/Manufacturer-Logos/borossil.jpg",
    "SVAM TOYAL PACKAGING INDUSTRIES LTD": "/logos/Manufacturer-Logos/svam.png",
    "RAVI RAJ FOILS LTD": "/logos/Manufacturer-Logos/raviraj.jpg",
    "DR. MAISCH": "/logos/dr-maisch.jpeg",
    "KARL HECHT GMBH": "/logos/Manufacturer-Logos/assistent.png",
    "DORSAN FILTRATION": "/logos/Manufacturer-Logos/dorsan.jpg",
    "LIVEO RESEARCH": "/logos/liveo.jpeg",
    "PT. ONEJECT": "/logos/Manufacturer-Logos/oneject.jpg",
    "Acetar Bio-Tech Inc": "/logos/Manufacturer-Logos/acetar.jpg",
  }

  return (
    <div className="relative py-16 md:py-24 ">
      {/* <motion.div className="relative container mx-auto max-w-6xl px-6 md:px-12"> */}
      <div className="relative container mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            About Our{" "}
            <span className="text-primary dark:text-white">
              Global Presence
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl leading-relaxed">
            With years of specialized experience in the pharmaceutical raw
            material, excipients, primary packaging, and medical devices supply
            chain, our expertise spans from sourcing to partnership building. We
            don’t just connect buyers and manufacturers; we add value at every
            stage of the supply chain process.
          </p>
        </div>

        {/* Globe component */}
        <div className="relative w-full h-96 bg-transparent rounded-lg overflow-hidden mb-36">
          <Globe />
        </div>

        {/* <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Honored Partners Across the Globe
          </h2>
        </div> */}

        {/* Partner logos grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-10 items-center">
          {partnerCountries.flatMap((country) =>
            country.partners.map((partner, idx) => (
              <div
                key={`${country.name}-${idx}`}
                className="flex flex-col items-center cursor-pointer w-48 h-48 sm:w-72 sm:h-72  mx-auto"
              >
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
                  <img
                    src={partnerLogos[partner] || "/logos/default-logo.png"}
                    alt={`Logo`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
=                <div className="text-center mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-400 truncate max-w-full">
                    {partner}
                  </p>
                </div>
              </div>
            ))
          )}
        </div> */}
        <div className="space-y-20">
          {officeData.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div
                className={`${index % 2 === 0 ? "order-first" : "order-last"}`}
              >
                <div className="relative">
                  {/* Main image with enhanced styling */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
                    <Image
                      src={office.image}
                      alt={`${office.name} office`}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Location badge */}
                    {/* <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white">
                      {office.location}
                    </div> */}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-xl"></div>
                </div>
              </div>
              <div
                className={`${index % 2 === 0 ? "order-last" : "order-first"}`}
              >
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-gray-700 dark:text-white">
                    {office.name}{" "}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {office.history}
                </p>
                {/* <div className="bg-white/10 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Regional Objective
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {office.objective}
                  </p>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  )
}
