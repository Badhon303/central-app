import React from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function AboutSection() {
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
          {/* Section heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              About{" "}
              <span className="text-primary dark:text-white">The Company</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-32  bg-primary rounded-full"></div>
          </div>

          {/* Who We Are - Directly under the title */}
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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

          {/* Enhanced Mission and Vision with more eye-catching design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#375eca]/90 to-[#3b82f6]/90 opacity-95 group-hover:opacity-100 transition-opacity duration-300 dark:from-slate-900 dark:to-slate-800"></div>

              {/* Content */}
              <div className="relative p-10 z-10 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                      <path d="M2 17 12 22 22 17"></path>
                      <path d="M2 12 12 17 22 12"></path>
                    </svg>
                  </div>
                  <h3 className="ml-4 text-3xl font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <div className="w-16 h-1 bg-white/60 rounded mb-6"></div>
                <p className="text-white/90 leading-relaxed">
                  Achieving customer outmost satisfaction as well as operational
                  and organizational excellence without compromising from our
                  values and business ethics. We aim to contribute to the
                  advancement of healthcare by ensuring a secure and efficient
                  supply chain, ultimately helping pharmaceutical industry to
                  make easy access for people to essential medications to most
                  advanced quality products. We thrive to be a innovational hub
                  of pharmaceutical supplier, dedicated to providing our clients
                  with a comprehensive range of pharmaceutical raw materials,
                  ingredients, and products.
                </p>
                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 blur-xl"></div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#375eca]/90 to-[#3b82f6]/90 opacity-95 group-hover:opacity-100 transition-opacity duration-300 dark:from-slate-900 dark:to-slate-800"></div>

              {/* Content */}
              <div className="relative p-10 z-10 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 p-4 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <h3 className="ml-4 text-3xl font-bold text-white">
                    Our Vision
                  </h3>
                </div>
                <div className="w-16 h-1 bg-white/60 rounded mb-6"></div>
                <p className="text-white/90 leading-relaxed">
                  Together, with our team, partners, and the global networks, we
                  aim to build a future where the supplier not only solves
                  problems but also inspires hope and transparent trade
                  environment. We aim to be at the forefront of positive change,
                  setting the standard for technological excellence, and leaving
                  a lasting legacy of progress.
                </p>
                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Additional "About Us" content */}
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
                    10+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years of experience
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    200+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Projects completed
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Team members
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
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
