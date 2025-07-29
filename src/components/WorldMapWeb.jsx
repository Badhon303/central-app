"use client"

import WorldMap from "@/components/ui/world-map"
import { motion } from "framer-motion"
import { InfiniteSlider } from "./ui/infinite-slider"
import { CustomerSection } from "./CustomerSection"

const partnerLogos = {
  "UNITED PHARMA INDUSTRIES CO., LTD": "/logos/united-pharma.png",
  "KINHOO PHARMACEUTICAL CO., LTD": "/logos/kinhoo-logo.jpg",
  "SUZHOU CRH NEW MATERIAL TECHNOLOGY CO., LTD": "/logos/CRH.png",
  "GLOBE QUIMICA": "/logos/globe-cumica.png",
  "ZHUHAI UNITED LABORATORIES CO., LTD": "/logos/Manufacturer-Logos/zuhai.png",
  "ALPHA GROUP": "/logos/Manufacturer-Logos/alpha.png",
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

const countryConnections = [
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 51.1657,
      lng: 10.4515,
      name: "Germany",
      flag: "https://flagcdn.com/de.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 37.0902,
      lng: -95.7129,
      name: "United States",
      flag: "https://flagcdn.com/us.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 20.5937,
      lng: 78.9629,
      name: "India",
      flag: "https://flagcdn.com/in.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 35.8617,
      lng: 104.1954,
      name: "China",
      flag: "https://flagcdn.com/cn.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 36.2048,
      lng: 138.2529,
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 46.8182,
      lng: 8.2275,
      name: "Switzerland",
      flag: "https://flagcdn.com/ch.svg",
    },
  },
  {
    start: {
      lat: 10.685,
      lng: 90.3563,
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
    },
    end: {
      lat: 1.3521,
      lng: 103.8198,
      name: "Singapore",
      flag: "https://flagcdn.com/sg.svg",
    },
  },
]

export default function WorldMapWeb({ inHome = false }) {
  // Sorting connections by longitude
  const sortedConnections = [...countryConnections].sort(
    (a, b) => a.start.lng - b.start.lng
  )

  return (
    <div className="dark:bg-gray-950 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl px-2 text-center">
          Remote{" "}
          <span className="text-gray-800 dark:text-white">
            {"Connectivity".split("").map((word, index) => (
              <motion.span
                key={`connectivity-letter-${index}`}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-5xl mx-auto py-4 px-4">
          With a global network of trusted pharmaceutical manufacturers, we
          unite expertise from around the world to deliver trusted
          pharmaceutical solutions. At Central Scientific, our strategic global
          partnerships enable seamless integration across markets, ensuring full
          regulatory compliance and uncompromising quality at every stage.
        </p>
      </div>
      <WorldMap dots={sortedConnections} lineColor="#0ea5e9" />
      <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center">
        <div>
          <h2 className="text-center text-2xl md:text-3xl font-bold dark:text-white text-black mt-8">
            Global Partners
          </h2>

          <div className="max-w-[350px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-4 px-4">
            <InfiniteSlider
              duration={80}
              durationOnHover={120}
              className="py-4"
            >
              {Object.entries(partnerLogos).map(([name, logo]) => (
                <div
                  key={name}
                  className="flex flex-col items-center p-2 sm:p-4 rounded-lg mx-1 sm:mx-2"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 dark:border-gray-400 object-fit rounded-sm"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
        <div className="">
          <h2 className="text-center text-2xl md:text-3xl font-bold dark:text-white text-black mt-8">
            Our Clients
          </h2>
          <CustomerSection inHome={inHome} />
        </div>
      </div>
    </div>
  )
}
