"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "API",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/products#api",
  },
  {
    title: "Excipient",
    description:
      "A streaming service that offers a wide variety of award-winning shows on thousands of internet-connected devices.",
    link: "/products#excipients",
  },
  {
    title: "Primary Packaging",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/products#primaryPackaging",
  },
  {
    title: "QC Consumables",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/products#qcConsumables",
  },
  {
    title: "Medical device",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/products#medicalDevices",
  },
];