// CategoryGrid.js
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryGrid({ selectedCategory, handleCategoryClick, categoryImages, categoryIcons, categoryTitles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-4 gap-12 sm:gap-10 mb-16">
      {Object.entries(categoryTitles).map(([key, title]) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.0 }}
          className="cursor-pointer flex justify-center"
          onClick={() => handleCategoryClick(key)}
        >
          <Card
            className={`h-48 w-48 sm:w-60 overflow-hidden relative ${
              selectedCategory === key ? "scale-125 sm:scale-125" : ""
            } transition-all duration-200`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${categoryImages[key]}')`,
              }}
            />
            <CardContent className="flex flex-col items-center justify-center h-full relative z-20 p-6">
              <div className="mb-4">{categoryIcons[key]}</div>
              <h3 className="text-2xl font-bold text-center mb-2 text-white">
                {title}
              </h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}