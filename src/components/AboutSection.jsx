"use client";
import React from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative py-16 md:py-24" id="about">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="relative">
          {/* heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              About <span className="text-primary dark:text-white">Us</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-28 bg-primary rounded-full"></div>
          </div>

          {/* Who We Are */}
          <div className="mb-16 max-w-5xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl leading-relaxed">
              Central Scientific Company was incorporated in the year 1990,
              Central is a transparent trader, providing highly competitive,
              faster, efficient, and professional services. It facilitates a
              smooth flow of goods and services from the world-class
              manufacturers to the customers, giving value to all. We meet
              business challenges innovatively and pride in our ears on the
              ground thus responding proactively to our customers' problems in
              current volatile markets. Our passion is to provide top class
              solutions, second to none by collaborating with our foreign
              principals and partners in helping our customers to meet their
              requirements.
            </p>
          </div>

          {/* Mission and Vision*/}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side */}
              <motion.div
                className="p-4 md:p-6 flex flex-col justify-center order-2 lg:order-1"
                variants={itemVariants}
              >
                <motion.div className="mb-10" variants={itemVariants}>
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Achieving customer outmost satisfaction as well as
                    operational and organizational excellence without
                    compromising from our values and business ethics. We aim to
                    contribute to the advancement of healthcare by ensuring a
                    secure and efficient supply chain, facilitating easy access
                    to essential medications, and providing the pharmaceutical
                    industry with advanced, high-quality products.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Together, with our team, partners, and the global networks,
                    we aim to build a future where the supplier not only solves
                    problems but also inspires hope and transparent trade
                    environment. We aim to be at the forefront of positive
                    change, setting the standard for technological excellence,
                    and leaving a lasting legacy of progress.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right side */}
              <motion.div
                className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2 p-4 md:p-6"
                variants={itemVariants}
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-lg"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/logos/About/about_top.jpeg"
                    alt="CSCO Team"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional */}
          <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                  Shaping the future through innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of experts is committed to pushing the boundaries of
                  what's possible. We believe in the power of technology to
                  transform businesses and create meaningful experiences for
                  users around the world.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  With a focus on quality, creativity, and cutting-edge
                  solutions, we help our clients stay ahead in a rapidly
                  evolving digital landscape. Our collaborative approach ensures
                  that we understand your unique challenges and deliver tailored
                  solutions that drive real results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-white">
                      Learn more
                    </span>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={10} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years of experience
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={200} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Projects completed
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={50} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Team members
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={100} duration={7} delay={1} />%
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Client satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}