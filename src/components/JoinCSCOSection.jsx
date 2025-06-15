"use client";
import React from "react";
import Image from "next/image";

export default function JoinCSCOSection() {
  return (
    <div className="mb-20">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[600px]">
        {/* background Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* mobile */}
          <Image
            src="/logos/Career/career_top_mobile_2.jpeg"
            alt="CSCO Team"
            fill
            className="object-cover sm:hidden filter blur-[2px]"
            priority
          />

          {/* Medium screens */}
          <Image
            src="/logos/Career/career_top_mobile_1.png"
            alt="CSCO Team"
            fill
            className="object-cover hidden sm:block md:hidden"
            priority
          />

          {/* desktop */}
          <Image
            src="/logos/Career/career_top.jpeg"
            alt="CSCO Team"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/40 to-black/10 sm:to-transparent w-full h-full" />

        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            <div className="max-w-xl ml-auto text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Launch your career with CSCO
              </h3>
              <p className="text-white/90 text-lg mb-8">
                We believe great businesses treat their employees like people,
                not ID numbers — and that starts right here in our offices. From
                hands-on training to our vibrant work environment and truly
                supportive community, CSCO is the best place to kickstart your
                career.
              </p>
              {/* <div className="flex flex-wrap gap-4 justify-end">
                <Button className="bg-white text-blue-600 text-primary font-semibold rounded-full hover:scale-110 hover:text-white transition-all duration-200 px-6 py-4">
                  Apply today
                </Button>
              </div> */}
              <div className="mt-8 text-white/80">
                {/* <p className="text-xl font-medium">
                  We're looking for amazing talent to join CSCO in 2025.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
