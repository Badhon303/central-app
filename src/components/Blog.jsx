"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getInsights from "../../actions/getInsights";

export default function CallToAction() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        setLoading(true);
        const insightsData = await getInsights();
        setInsights(insightsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching insights:", err);
        setError("Failed to load insights. Please try again later.");
        setLoading(false);
      }
    }

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <section className="mb-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Loading insights...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row-reverse items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          Latest Insights
        </h3>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative overflow-hidden rounded-xl">
              {insight.img ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${insight.img.url}`}
                  alt={insight.img.alt || insight.title}
                  loading="lazy"
                  width={insight.img.width || 1000}
                  height={insight.img.height || 667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <div className="p-6 relative z-20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {insight.title}
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                {insight.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}