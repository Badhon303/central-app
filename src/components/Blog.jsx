import Image from "next/image";
import Container from "@/components/Container";

export default function CallToAction() {
  return (
    <Container>
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Latest Insights in Pharmaceutical Innovation
        </h2>
        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Discover how advancements in pharmaceutical research are transforming
          healthcare. From breakthrough treatments to innovative drug delivery
          systems, explore the latest developments shaping the industry.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
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
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Advancements in Personalized Medicine
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Learn how personalized medicine is revolutionizing healthcare by
              tailoring treatments to individual genetic profiles, leading to more
              effective and targeted therapies.
            </p>
            {/* <a className="inline-block" href="#">
              <span className="text-info dark:text-blue-300">Read more</span>
            </a> */}
          </div>
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
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
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Innovations in Pharmaceutical Manufacturing
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Explore the latest advancements in pharmaceutical manufacturing,
              including novel production techniques and technologies that enhance
              efficiency and product quality.
            </p>
            {/* <a className="inline-block" href="#">
              <span className="text-info dark:text-blue-300">Read more</span>
            </a> */}
          </div>
        </div>
        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
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
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Collaborative Research Initiatives
            </h3>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Discover how collaborative research initiatives are driving progress
              in pharmaceutical innovation, fostering partnerships between
              academia, industry, and regulatory bodies.
            </p>
            {/* <a className="inline-block" href="#">
              <span className="text-info dark:text-blue-300">Read more</span>
            </a> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
