import Container from "@/components/Container";

export default function Features() {
  return (
    <Container>
      <div className="md:w-2/3 lg:w-3/4 mx-auto">
        <h2 className="my-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl px-2 text-center">
          A technology-first approach to scientific innovation
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          At Central Scientific CO, we combine cutting-edge technology with
          groundbreaking research to deliver solutions that drive progress in
          science and industry. Our features are designed to empower
          researchers, streamline processes, and accelerate discovery.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        {/* Pharmaceuticals */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-900">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="/logos/icons/pharmaceutical.png"
              className="w-12"
              width="512"
              height="512"
              alt="pharmaceutical solutions"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary">
                Pharmaceuticals
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized solutions for drug discovery, formulation, and
                development, enhancing pharmaceutical research and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Food */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-900">
          <div className="relative space-y-8 py-12 p-8 dark:text-white">
            <img
              src="/logos/icons/food.png"
              className="w-12 dark:text-white"
              width="512"
              height="512"
              alt="food solutions illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary">
                Food
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced solutions for food safety, quality control, and
                nutritional analysis, ensuring compliance with global standards
                and enhancing consumer trust.
              </p>
            </div>
          </div>
        </div>

        {/* Laboratory & Research */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-900">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="/logos/icons/lab.png"
              className="w-12"
              width="512"
              height="512"
              alt="laboratory and research illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary">
                Laboratory
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Cutting-edge laboratory equipment, consumables, and research
                tools to support scientific discovery and innovation across
                various disciplines.
              </p>
            </div>
          </div>
        </div>

        {/* Healthcare */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-900">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="/logos/icons/healthcare.png"
              className="w-12"
              width="512"
              height="512"
              alt="healthcare solutions illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary">
                Healthcare
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive healthcare solutions, including diagnostic tools,
                medical devices, and patient care technologies, to improve
                outcomes and streamline operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}