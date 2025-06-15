"use client";
import React from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customMarker = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Real images from freepik
const officeImages = [
  "https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Singapore - Office
  "https://img.freepik.com/free-photo/treatment-study-genetically-engineered-strawberries-laboratory-by-group-scientist-test-tubes-with-green-solutions_482257-34487.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Munich - Office
  "https://img.freepik.com/free-photo/building-lake_1127-3460.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Boston - Office
  "https://img.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Mumbai
];

// Sustainable features images
const sustainableFeatureImages = [
  "https://img.freepik.com/free-photo/sustainable-energy-campaign-hand-holding-tree-light-bulb-media-remix_53876-104824.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Energy Efficiency
  "https://img.freepik.com/free-vector/wind-turbine-trees-landscape_1048-962.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Green Design
  "https://img.freepik.com/free-vector/hand-drawn-flat-design-circular-economy-infographic_23-2149208724.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Circular Economy
  "https://img.freepik.com/free-photo/rearview-diverse-people-hugging-each-other_53876-105340.jpg?uid=R118361244&ga=GA1.1.936594189.1730622765&semt=ais_hybrid", // Community Impact
];
const RegionalOfficesSection = () => {
  const officeData = [
    {
      id: 1,
      name: "Singapore Biotech Hub",
      location: "Singapore",
      image: officeImages[0],
      history:
        "Established in 2022, our Singapore office serves as a strategic gateway to the Asia-Pacific pharmaceutical market, focusing on innovative drug distribution and research collaboration.",
      objective:
        "To accelerate pharmaceutical supply chain efficiency and support emerging medical technologies in the APAC region.",
      sustainableFeatures: [
        "Green building certification",
        "Solar panel integration",
        "Rainwater harvesting system",
      ],
      coordinates: [1.3521, 103.8198],
    },
    {
      id: 2,
      name: "Munich Pharmaceutical Research Center",
      location: "Germany",
      image: officeImages[1],
      history:
        "Our Munich facility, launched in 2023, represents our commitment to European pharmaceutical innovation and precision medicine.",
      objective:
        "Developing cutting-edge pharmaceutical solutions with a focus on personalized healthcare and advanced research methodologies.",
      sustainableFeatures: [
        "Energy-efficient lab design",
        "Circular economy principles",
        "Carbon-neutral operations",
      ],
      coordinates: [48.1351, 11.582],
    },
    {
      id: 3,
      name: "Boston Innovative Pharma Campus",
      location: "United States",
      image: officeImages[2],
      history:
        "Opened in late 2023, our Boston campus is strategically positioned in the heart of the pharmaceutical innovation ecosystem.",
      objective:
        "Fostering collaborative research, supporting startup incubation, and driving breakthrough pharmaceutical technologies.",
      sustainableFeatures: [
        "LEED Platinum certification",
        "Regenerative design",
        "Zero-waste research facilities",
      ],
      coordinates: [42.3601, -71.0589],
    },
    {
      id: 4,
      name: "Mumbai Pharmaceutical Distribution Center",
      location: "India",
      image: officeImages[3],
      history:
        "Established to enhance pharmaceutical accessibility in the rapidly growing Indian healthcare market.",
      objective:
        "Streamlining medication distribution, supporting local healthcare infrastructure, and ensuring affordable access to essential medicines.",
      sustainableFeatures: [
        "Renewable energy powered",
        "Smart logistics infrastructure",
        "Community health initiatives",
      ],
      coordinates: [19.076, 72.8777],
    },
  ];

  const sustainableFeatures = [
    {
      title: "Energy Efficiency",
      description:
        "Our buildings utilize advanced energy management systems, reducing consumption by up to 40% compared to conventional facilities.",
      image: sustainableFeatureImages[0],
    },
    {
      title: "Green Design",
      description:
        "Biophilic design principles integrate natural elements, improving air quality and employee wellbeing.",
      image: sustainableFeatureImages[1],
    },
    {
      title: "Circular Economy",
      description:
        "We recycle up to 98% of construction waste and implement zero-waste policies in daily operations.",
      image: sustainableFeatureImages[2],
    },
    {
      title: "Community Impact",
      description:
        "Each facility supports local initiatives, from educational programs to healthcare accessibility projects.",
      image: sustainableFeatureImages[3],
    },
  ];

  const additionalLocations = [
    { name: "China", coordinates: [35.8617, 104.1954] },
    { name: "Japan", coordinates: [36.2048, 138.2529] },
    { name: "Switzerland", coordinates: [46.8182, 8.2275] },
  ];

  return (
    <div className="relative py-16 md:py-24" id="regional-offices">
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div> */}

      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Our{" "}
            <span className="text-primary dark:text-white">
              Global Presence
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
        </div>

        {/* Regional Offices */}
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
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white">
                      {office.location}
                    </div>
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
                <div className="bg-white/10 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Regional Objective
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {office.objective}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sustainability Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-xl overflow-hidden"
        >
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-10 rounded-t-xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gray-700 dark:text-white">
                  Sustainable Infrastructure Commitment
                </span>
              </h3>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                Our regional offices are more than just locations – they're a
                testament to our commitment to sustainable, innovative
                pharmaceutical infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sustainableFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h4 className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative bar */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-primary to-blue-400"></div>
        </motion.div>

        {/* Global Locations Map */}
        {/* 
                <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl p-8 shadow-xl"
        >
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold">
              <span className="text-gray-700 dark:text-white">
                Our Global Footprint
              </span>
            </h3>
          </div>
          <div className="h-[500px] w-full rounded-xl overflow-hidden">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {officeData.concat(additionalLocations).map((location, index) => (
                <Marker
                  key={index}
                  position={location.coordinates}
                  icon={customMarker}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>
         */}
      </Container>
    </div>
  );
};

export default RegionalOfficesSection;
