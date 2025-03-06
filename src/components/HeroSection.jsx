import Marquee from "react-fast-marquee";

import Container from "@/components/Container";
import Image from "next/image";
import microsoft from "@/app/images/clients/microsoft.svg";
import airbnb from "@/app/images/clients/airbnb.svg";
import google from "@/app/images/clients/google.svg";
import ge from "@/app/images/clients/ge.svg";
import netflix from "@/app/images/clients/netflix.svg";
import googleCloud from "@/app/images/clients/google-cloud.svg";

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 text-balance dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Shaping a world with{" "}
              <span className="text-primary dark:text-white">
                reimagination.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Our journey begun as a trading company in supplying to the
              Scientific Research Institutes and Private organisations in
              Bangladesh. Immense dedication and prompt services helped us in
              achieving to be recognised as a leading supplier of Scientific
              Equipment's' throughout our journey which spans over 30 years.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary">
                  Learn More
                </span>
              </a>
            </div>
            
          </div>
          <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Primary Packaging Materials
                </h6>
                <p className="mt-2 text-gray-500">
                  High-quality materials designed for safe and efficient
                  pharmaceutical packaging.
                </p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Pharmaceuticals Ingredients
                </h6>
                <p className="mt-2 text-gray-500">
                  Essential ingredients sourced from trusted suppliers to ensure
                  product efficacy.
                </p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Laboratory Consumables
                </h6>
                <p className="mt-2 text-gray-500">
                  Reliable consumables for precise laboratory testing and
                  analysis.
                </p>
              </div>
            </div>
          <Marquee className="mt-12 w-full">
            <div className="flex items-center justify-between w-full">
              {[
                {
                  src: microsoft,
                  alt: "Microsoft",
                  className: "h-12 w-auto mx-8",
                },
                { src: airbnb, alt: "Airbnb", className: "h-12 w-auto mx-8" },
                { src: google, alt: "Google", className: "h-9 w-auto mx-8" },
                { src: ge, alt: "GE", className: "h-12 w-auto mx-8" },
                { src: netflix, alt: "Netflix", className: "h-8 w-auto mx-8" },
                {
                  src: googleCloud,
                  alt: "Google Cloud",
                  className: "h-12 w-auto mx-8",
                },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    className={logo.className}
                    loading="lazy"
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
}
