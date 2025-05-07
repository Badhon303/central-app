"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryGrid({
  selectedCategory,
  handleCategoryClick,
  categoryImages,
  categoryIcons,
  categoryTitles,
}) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-12 p-4 mb-8 sm:mb-16 mx-auto justify-center">
      {Object.entries(categoryTitles).map(([key, title]) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex justify-center"
          onClick={() => handleCategoryClick(key)}
        >
          <Card
            className={`w-36 md:w-44 lg:w-48 h-30 md:h-44 lg:h-48 overflow-hidden relative ${
              selectedCategory === key
                ? "scale-110 sm:scale-115 md:scale-120 lg:scale-125"
                : ""
            } transition-all duration-200`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${categoryImages[key]}')`,
              }}
            />
            <CardContent className="flex flex-col items-center justify-center h-full relative z-20 p-3 sm:p-4 md:p-6">
              <div className="mb-2 md:mb-4 text-white">
                {categoryIcons[key]}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center mb-1 md:mb-2 text-white">
                {title}
              </h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
