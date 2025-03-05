"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const teamImages = [
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

export default function JoinCSCOSection() {
  return (
    <div className="mb-20">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Images collage */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 h-full">
              <div className="relative overflow-hidden">
                <Image
                  src={teamImages[0]}
                  alt="CSCO Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={teamImages[1]}
                  alt="CSCO Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden col-span-2">
                <Image
                  src={teamImages[2]}
                  alt="CSCO Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-blue-700 dark:to-indigo-800 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Launch your career with CSCO
            </h3>
            <p className="text-white/90 text-lg mb-8">
              We believe great businesses treat their employees like people,
              not ID numbers — and that starts right here in our offices.
              From hands-on training to our vibrant work environment and
              truly supportive community, CSCO is the best place to kickstart
              your career.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-md font-medium">
                Apply today
              </Button>
            </div>
            <div className="mt-8 text-white/80">
              <p className="text-xl font-medium">
                We're looking for amazing talent to join CSCO in 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
