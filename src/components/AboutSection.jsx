"use client"
import React from "react"
import Container from "@/components/Container"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import Image from "next/image"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

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
  }

  return (
    <div className="relative py-16 md:py-24" id="about">
      <Container>
        <div className="relative">
          {/* heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              About <span className="text-primary dark:text-white">Us</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-28 bg-secondary rounded-full"></div>
          </div>

          {/* Who We Are */}
          <div className="mb-16 max-w-5xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 text-center sm:px-8 mt-8 max-w-5xl leading-relaxed">
              Established in 1990, Central Scientific Company has built a
              reputation as a transparent and reliable trading partner,
              delivering highly competitive, fast, and professional services. We
              streamline the flow of goods from world-class manufacturers to our
              customers, ensuring value at every step. With a deep understanding
              of market dynamics, we respond proactively to evolving challenges;
              guided by real-time insight and close customer engagement. Our
              passion lies in delivering exceptional solutions through strong
              collaborations with our international principals and partners,
              helping clients meet their goals with precision and confidence.
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
                <motion.div className="mb-10 space-y-3" variants={itemVariants}>
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Central Scientific, our mission is to achieve the highest
                    level of customer satisfaction while pursuing operational
                    and organizational excellence. We remain steadfast in
                    upholding our core values of transparency, integrity, and
                    ethical conduct. Through a secure, efficient supply chain
                    and access to high-quality, advanced solutions, we aim to
                    contribute meaningfully to the progress of healthcare,
                    science, and industry — today and into the future.
                  </p>
                </motion.div>

                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Central Scientific, our vision is to build a future where
                    suppliers do more than deliver — they lead with integrity,
                    inspire confidence, and cultivate a transparent,
                    collaborative trade environment. Together with our team,
                    partners, and global networks, we strive to be at the
                    forefront of meaningful progress, setting benchmarks for
                    technological excellence and leaving a lasting legacy of
                    trust, impact, and innovation.
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
                    className="object-fit sm:object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional */}
          <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                  Driving Progress Through Trusted Connections
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe that lasting success is built on selecting the
                  right partners, adopting the right approach, and continuously
                  strengthening our teams. Our expert team is committed to push
                  boundaries and unlock new possibilities guided by clarity,
                  trust, and collaboration. We value transparent connections
                  that turn business relationships into long-term partnerships.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  By combining deep industry insight with cutting-edge
                  solutions, we help our clients stay ahead in a rapidly
                  evolving landscape. Our focus on quality, creativity, and
                  integrity ensures that every solution is tailored to real
                  challenges driving results, fostering growth, and building
                  stronger bonds between all parties involved.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/our-products"
                    className="mt-6 text-sm px-4 py-2 text-white font-semibold bg-primary rounded-full hover:scale-110 transition-all duration-200 inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={30} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years of experience
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={100} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Projects completed
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={30} duration={7} delay={1} />+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ongoing Development
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp start={0} end={100} duration={7} delay={1} />%
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
