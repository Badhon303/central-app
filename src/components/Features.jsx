import Container from "@/components/Container"

export default function Features() {
  return (
    <Container>
      <div className="md:w-2/3 lg:w-3/4 mx-auto">
        <h2 className="my-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl px-2 text-center">
          Empowering Critical Industries with Integrity, Precision, and Care
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Central Scientific partners closely with industry leaders to meet the
          evolving demands of these vital sectors. Our commitment goes beyond
          supply; we deliver precision, transparency, and reliability that fuel
          innovation and safeguard quality. By aligning with the highest
          standards, we help shape industries that impact lives every day.
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
                Providing advanced solutions with high-quality ingredients for
                food safety, rigorous quality control, and nutritional analysis;
                ensuring full compliance with global standards and strengthening
                consumer confidence.
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
                Original OEM laboratory instruments and consumables, engineered
                for unmatched reliability and accuracy delivering the highest
                precision needed to drive scientific discovery and innovation
                across diverse fields.
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
  )
}
