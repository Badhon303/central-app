import Marquee from "react-fast-marquee"
import Container from "@/components/Container"
import Image from "next/image"

export default function HeroSection() {
  const cardContent = [
    {
      title: "Our Products",
      text: "We provide a comprehensive selection of products, including various (APIs), Packaging Materials, QC Consumables, and Medical Devices, all designed to meet the highest industry standards.",
      link: "/our-products",
    },
    {
      title: "Our Customers",
      text: "Our customers are recognized leaders in their respective fields, setting benchmarks for excellence and innovation. We stand by them as dedicated partners, supporting their growth and driving progress across the industry.",
      link: "/our-clients",
    },
    {
      title: "Our Quality",
      text: "We ensure that every product we supply meets the highest standards of quality, safety, efficacy, and reliability. Our commitment runs deep in industries where the stakes are high and the well-being of humans and all living beings is of utmost importance.",
      link: "/our-commitment",
    },
  ]

  return (
    <div className="relative" id="home">
      {/* Background elements */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div> */}

      <Container>
        <div className="flex flex-col justify-center items-center">
          {/* Hero section */}
          {/* <div className="flex flex-col lg:flex-row items-stretch"> */}
          <div className="text-center rounded-md lg:text-left px-4 py-10 bg-primary flex flex-col justify-center">
            <h1 className="text-balance text-white font-bold text-2xl md:text-3xl xl:text-4xl text-center">
              The Journey Evolves...
            </h1>
            <div className="mx-auto mt-4 h-1 w-32 md:w-48 bg-secondary rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-white items-center text-center px-2 md:px-4">
              Our story began humbly in the 1990s, as a small trading business
              supplying chemicals and laboratory items to educational and
              research institutions at the time, one of the country’s main
              sources for such essential materials. As the nation’s industrial
              landscape expanded, so did our vision. With the second generation
              stepping in, Central has grown into a dynamic, diversified
              company, reaching new heights across pharmaceuticals, food, and
              healthcare sectors. Yet, despite our growth, our core values
              remain unchanged: to be a transparent, honest, and reliable name
              that our partners can always trust.
            </p>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <a
                href="/who-we-are"
                className="mt-2 sm:mt-6 text-sm px-4 py-2 text-primary font-semibold bg-white rounded-full hover:scale-110 transition-all duration-200 inline-block"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* <div className="lg:w-1/2 flex items-stretch">
              <div className="w-full overflow-hidden bg-white flex items-center justify-center border-none shadow-none">
                <video
                  src="/logos/video/central.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </div> */}
          {/* </div> */}

          <div className="flex md:flex-row flex-col justify-between py-6 mt-16 gap-4">
            {cardContent.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-1/3 dark:border dark:border-gray-500 p-4 rounded-lg dark:bg-gray-900"
              >
                <div className="flex items-center gap-6">
                  <div className="h-1 w-14 bg-secondary rounded-full"></div>
                  <h6 className="text-[12px] font-bold uppercase">
                    {card.title}
                  </h6>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 text-[15px] dark:text-gray-200 mt-4 min-h-[120px] text-justify">
                    {card.text}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={card.link}
                    className="text-sm px-4 py-2 text-white bg-primary rounded-full hover:scale-110 transition-all duration-200 inline-block"
                  >
                    View Page
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Logo marquee (commented out) */}
          {/* <Marquee className="mt-16 w-full" speed={50} pauseOnHover={true}>
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
          </Marquee> */}
        </div>
      </Container>
    </div>
  )
}
