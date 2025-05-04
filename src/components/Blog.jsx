import Image from "next/image";
import { motion } from "framer-motion";

export default function CallToAction() {
  const latestInsightsData = [
    {
      id: 1,
      title: "Advancements in Personalized Medicine",
      description: "Learn how personalized medicine is revolutionizing healthcare by tailoring treatments to individual genetic profiles, leading to more effective and targeted therapies.",
      imageUrl: "https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      altText: "pharmaceutical research"
    },
    {
      id: 2,
      title: "Innovations in Pharmaceutical Manufacturing",
      description: "Explore the latest advancements in pharmaceutical manufacturing, including novel production techniques and technologies that enhance efficiency and product quality.",
      imageUrl: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      altText: "pharmaceutical manufacturing"
    },
    {
      id: 3,
      title: "Collaborative Research Initiatives",
      description: "Discover how collaborative research initiatives are driving progress in pharmaceutical innovation, fostering partnerships between academia, industry, and regulatory bodies.",
      imageUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      altText: "pharmaceutical research collaboration"
    }
  ];

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
        {latestInsightsData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={card.imageUrl}
                alt={card.altText}
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 relative z-20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}