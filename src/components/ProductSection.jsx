// ProductSection.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FlaskRound as Flask,
  Package,
  Stethoscope,
  FlaskConical,
  TestTube,
} from "lucide-react";
import {
  apiProducts,
  excipientsData,
  primaryPackagingData,
  qcConsumablesData,
  medicalDevicesData,
  categoryDescriptions,
  categoryImages,
  categoryTitles,
} from "../app/products/components/productData";
import CategoryGrid from "../app/products/components/categoryGrid";

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState("api");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const categoryIcons = {
    api: <FlaskConical className="w-12 h-12 text-white" />,
    excipients: <Flask className="w-12 h-12 text-white" />,
    primaryPackaging: <Package className="w-12 h-12 text-white" />,
    qcConsumables: <TestTube className="w-12 h-12 text-white" />,
    medicalDevices: <Stethoscope className="w-12 h-12 text-white" />,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const renderTable = (data) => (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr className="bg-primary dark:bg-gray-700">
            <th className="py-4 px-6 text-sm font-semibold text-white uppercase tracking-wider border-b dark:border-gray-600 w-1/4 sm:w-1/3 text-left">
              Manufacturer
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider border-b dark:border-gray-600 w-1/4 sm:w-1/3">
              Description
            </th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider border-b dark:border-gray-600 w-1/2 sm:w-1/3">
              Products
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
          {data.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className=""
            >
              <td className="py-4 px-6 w-1/4 sm:w-1/3">
                <div className="flex justify-start">
                  <img
                    src={item.logo}
                    alt={`${item.manufacturer} logo`}
                    className="w-16 h-10 sm:w-28 sm:h-20 md:w-40 md:h-24 object-contain rounded-lg"
                  />
                </div>
              </td>
              <td className="py-4 px-6 text-sm sm:text-base font-medium text-gray-900 dark:text-white w-1/4 sm:w-1/3">
                {item.manufacturer}
              </td>
              <td className="py-4 px-6 w-1/2 sm:w-1/3">
                <div className="grid grid-cols-1 gap-2">
                  {item.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex text-sm sm:text-base items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {product}
                      </span>
                    </div>
                  ))}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    switch (selectedCategory) {
      case "api":
        return (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12 items-center">
              {Object.keys(apiProducts).map((letter) => (
                <motion.div
                  key={letter}
                  className={`cursor-pointer font-bold px-3 py-2 rounded-full ${
                    selectedLetter === letter
                      ? "text-primary text-4xl"
                      : "dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-lg transition-all duration-200"
                  }`}
                  onClick={() => handleLetterClick(letter)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>

            {Object.entries(apiProducts).map(
              ([letter, products]) =>
                selectedLetter === letter && (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <div className="flex items-center mb-8 px-2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                        {letter}
                      </div>
                      <div className="ml-4 flex-1 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
                        <h3 className="text-2xl font-bold">Human API's</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 px-6">
                      {products.map((product, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.02 }}
                          className="flex items-start"
                        >
                          <div className="w-3 h-3 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-lg">
                            {product}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </>
        );
      case "excipients":
        return renderTable(excipientsData);
      case "primaryPackaging":
        return renderTable(primaryPackagingData);
      case "qcConsumables":
        return renderTable(qcConsumablesData);
      case "medicalDevices":
        return renderTable(medicalDevicesData);
      default:
        return null;
    }
  };

  return (
    <div className="relative py-16 md:py-24">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <motion.div className="relative container mx-auto px-4">
        <div className="text-center mb-12 mx-auto items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Our{" "}
            <span className="text-primary dark:text-white">
              Product Portfolio
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-primary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl mx-auto leading-relaxed">
            We take great pride in representing the world's foremost
            manufacturers in the pharmaceutical industry. Our partnership with
            these industry leaders demonstrates our unwavering commitment to
            quality, safety, and innovation. By aligning with these top-tier
            manufacturers, we ensure that our clients have access to the most
            cutting-edge and reliable pharmaceutical products available, meeting
            the highest industry standards and fulfilling our mission to enhance
            healthcare worldwide.
          </p>
        </div>

        {/* Category Grid */}
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            Our Product Categories
          </p>
        </div>
        <CategoryGrid
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          categoryImages={categoryImages}
          categoryIcons={categoryIcons}
          categoryTitles={categoryTitles}
        />

        {/* Content Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              A Closer Look
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>

          {renderContent()}
        </div>
      </motion.div>
    </div>
  );
}
