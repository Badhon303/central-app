import Marquee from "react-fast-marquee";
import Container from "@/components/Container";
import Image from "next/image";
import gif from "../app/images/clients/Square.gif";
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
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 text-center lg:text-left p-4 bg-primary flex flex-col justify-center">
              <h1 className="text-balance text-white font-bold text-xl md:text-3xl xl:text-4xl text-center">
                The Journey Evolves...
              </h1>
              <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
              <p className="mt-4 sm:mt-8 text-white items-center text-center">
                Our journey begun as a trading company in supplying to the
                Scientific Research Institutes and Private organisations in
                Bangladesh. Immense dedication and prompt services helped us in
                achieving to be recognised as a leading supplier of Scientific
                Equipment's' throughout our journey which spans over 30 years.
              </p>

              <div className="mt-4 sm:mt-8 flex justify-center">
                <a
                  href="#"
                  className="mt-2 sm:mt-6 text-sm px-4 py-2 text-primary font-semibold bg-white rounded-full hover:scale-110 transition-all duration-200 inline-block"
                >
                  Explore More
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-stretch">
              <div className="w-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={"/logos/gif/HD.gif"}
                  alt="Hero Animation"
                  width={400}
                  height={400}
                  className="w-full h-64 lg:h-96 object-fill"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between py-6 mt-16 gap-4">
            <div className="text-left w-full md:w-1/3 dark:border dark:border-gray-500 p-4 rounded-lg dark:bg-gray-900">
              <div className="flex items-center gap-6">
                <div className="h-1 w-14 bg-secondary rounded-full"></div>
                <h6 className="text-[12px] font-bold uppercase">
                  Out Products
                </h6>
              </div>
              {/* <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">
                Our worldwide partner
              </h2> */}
              <p className="text-gray-600 text-[15px] dark:text-gray-200 mt-4">
                We provide a comprehensive selection of products, including
                various (APIs), Packaging Materials, QC Consumables, and Medical
                Devices, all designed to meet the highest industry standards.
              </p>
              <a
                href="#"
                className="mt-6 text-sm px-4 py-2 text-white bg-primary rounded-full hover:scale-110 transition-all duration-200 inline-block"
              >
                View Page
              </a>
            </div>

            <div className="text-left w-full md:w-1/3 dark:border dark:border-gray-500 p-4 rounded-lg dark:bg-gray-900">
              <div className="flex items-center gap-6">
                <div className="h-1 w-14 bg-secondary rounded-full"></div>
                <h6 className="text-[12px] font-bold uppercase">
                  Our Customers
                </h6>
              </div>
              {/* <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">
                Check out our brands
              </h2> */}
              <p className="text-gray-600 text-[15px] dark:text-gray-200 mt-4">
                Our customers are undisputed leaders in their respective fields,
                setting industry standards for excellence and innovation.
              </p>
              <a
                href="#"
                className="mt-6 text-sm px-4 py-2 text-white bg-primary rounded-full hover:scale-110 transition-all duration-200 inline-block"
              >
                View Page
              </a>
            </div>

            <div className="text-left w-full md:w-1/3 dark:border dark:border-gray-500 p-4 rounded-lg transition-all duration-100 dark:bg-gray-900">
              <div className="flex items-center gap-6">
                <div className="h-1 w-14 bg-secondary rounded-full"></div>
                <h6 className="text-[12px] font-bold uppercase">Our Quality</h6>
              </div>
              {/* <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">
                Health & safety
              </h2> */}
              <p className="text-gray-600 text-[15px] dark:text-gray-200 mt-4">
                We ensure that every product we supply meets the highest
                standards of quality, safety, efficacy, and reliability. We
                understand that in the pharmaceutical industry, the stakes are
                high, and the well-being of patients is paramount.
              </p>
              <a
                href="#"
                className="mt-6 text-sm px-4 py-2 text-white bg-primary rounded-full hover:scale-110 transition-all duration-200 inline-block"
              >
                View Page
              </a>
            </div>
          </div>

          {/* <Marquee className="mt-16 w-full" speed={50} pauseOnHover={true}>
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
          </Marquee> */}
        </div>
      </Container>
    </div>
  );
}
