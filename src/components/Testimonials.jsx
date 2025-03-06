import Image from "next/image";
import Container from "@/components/Container";
import avatar1 from "@/app/images/avatars/avatar-2.webp";
import avatar2 from "@/app/images/avatars/avatar-2.webp";
import avatar3 from "@/app/images/avatars/avatar-2.webp";
import avatar4 from "@/app/images/avatars/avatar-2.webp";
import avatar5 from "@/app/images/avatars/avatar-2.webp";
import avatar6 from "@/app/images/avatars/avatar-2.webp";

export default function Testimonials() {
  const testimonials = [
    {
      avatar: avatar1,
      name: "Dr. Maria Rodriguez",
      role: "Pharmaceutical Researcher",
      testimonial:
        "I've been working with Central Scientific CO for several years now, and their commitment to quality and innovation in pharmaceutical research has been invaluable.",
    },
    {
      avatar: avatar2,
      name: "Emily Chen",
      role: "Quality Control Specialist",
      testimonial:
        "The QC consumables provided by Central Scientific CO have been instrumental in maintaining high standards in our laboratory testing. Their products are reliable and efficient, ensuring accurate results every time.  Their expertise in API development has significantly enhanced our projects.",
    },
    {
      avatar: avatar3,
      name: "Dr. John Lee",
      role: "Clinical Trials Manager",
      testimonial:
"Central Scientific CO's support during our clinical trials has been exceptional. Their ability to provide customized solutions for data management and analysis has streamlined our processes, improved trial outcomes, and significantly enhanced our team's productivity."    },
    {
      avatar: avatar4,
      name: "Samantha Patel",
      role: "Supply Chain Manager",
      testimonial:
        "Their pharmaceutical supply chain solutions have optimized our logistics, ensuring timely delivery of critical materials. This has significantly reduced costs and enhanced our overall operational efficiency.",
    },
    {
      avatar: avatar5,
      name: "Michael Kim",
      role: "Regulatory Affairs Specialist",
      testimonial:
        "Central Scientific CO's compliance with regulatory standards is impressive. Their guidance on navigating complex regulatory landscapes has been invaluable to our team.",
    },
    {
      avatar: avatar6,
      name: "Lisa Nguyen",
      role: "Formulation Scientist",
      testimonial:
        "The excipient analysis services provided by Central Scientific CO have helped us refine our formulations, leading to more stable and effective products. Their expertise in this area is unmatched.",
    },
  ];

  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
