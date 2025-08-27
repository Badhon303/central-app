"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getWhatsNew } from "../../actions/getWhatsNew";

export default function WhatsNew() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getWhatsNew();
      setNews(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="mb-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Loading whats new...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeIn}
        className="flex flex-col md:flex-row items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          What's New
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((newsItem, index) => (
          <motion.div
            key={newsItem.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
            style={{ borderColor: "#4361EE" }}
          >
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-primary transition-colors duration-300">
                {newsItem.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {new Date(newsItem.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {newsItem.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
