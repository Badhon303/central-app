import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";

export default function CallToAction() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="pharmaceutical research"
              loading="lazy"
              width="1000"
              height="667"
              className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 relative z-20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Advancements in Personalized Medicine
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Learn how personalized medicine is revolutionizing healthcare by
              tailoring treatments to individual genetic profiles, leading to more
              effective and targeted therapies.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="pharmaceutical manufacturing"
              loading="lazy"
              width="1000"
              height="667"
              className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 relative z-20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Innovations in Pharmaceutical Manufacturing
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Explore the latest advancements in pharmaceutical manufacturing,
              including novel production techniques and technologies that enhance
              efficiency and product quality.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="pharmaceutical research collaboration"
              loading="lazy"
              width="1000"
              height="667"
              className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 relative z-20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Collaborative Research Initiatives
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Discover how collaborative research initiatives are driving progress
              in pharmaceutical innovation, fostering partnerships between
              academia, industry, and regulatory bodies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}