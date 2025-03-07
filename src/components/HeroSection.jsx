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
  const logos = [
    {
      src: "/logos/agrizo.jpg",
      alt: "Agrizo India",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/oneject.jpg",
      alt: "OneJect",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/ravirajFossils.jpg",
      alt: "RaviRaj Fossils",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/alpha-group.jpeg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/arshine.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/autofits.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/borosilLogo.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/carcano.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/CRH.jpg",
      alt: "CRH",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/RC.jpg",
      alt: "RC India",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/svam.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/syntame.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/unimed.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/upi.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/zhunhai.png",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/liveo.jpg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/kinhoo-logo.png",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/dorsan.jpeg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/dr-maisch.jpeg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/KOEL.png",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
    {
      src: "/logos/glaswarenfabrik.jpeg",
      alt: "Microsoft",
      className: "h-12 w-auto mx-8",
    },
  ];

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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-gray-900 text-balance dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Shaping a world with{" "}
                <span className="text-primary dark:text-white">
                  reimagination.
                </span>
              </h1>
              <div className="mx-auto md:mx-0 mt-4 h-1 w-32 md:w-48 bg-primary rounded-full"></div>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                Our journey begun as a trading company in supplying to the
                Scientific Research Institutes and Private organisations in
                Bangladesh. Immense dedication and prompt services helped us in
                achieving to be recognised as a leading supplier of Scientific
                Equipment's' throughout our journey which spans over 30 years.
              </p>

              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-6">
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
            
            <div className="w-4/5 lg:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800">
                <Image
                  src="/logos/gif/square.gif"
                  alt="Hero Animation"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  unoptimized={true}
                />
              </div>
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
          <Marquee className="mt-12 w-full" speed={50} pauseOnHover={true}>
            <div className="flex items-center justify-between w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    className={logo.className}
                    loading="lazy"
                    alt={logo.alt}
                    width={150}
                    height={150}
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