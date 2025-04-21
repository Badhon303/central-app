"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="w-full pb-4 mx-auto px-4 sm:px-6 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "API",
    description:
      "We specialize in providing premium Active Pharmaceutical Ingredients (APIs) that are the cornerstone of therapeutic efficacy. Sourced from esteemed manufacturers, our APIs undergo meticulous testing to guarantee unparalleled purity, potency, and compliance with stringent industry standards, ensuring the highest quality for pharmaceutical formulations.",
    link: "/products#api",
  },
  {
    title: "Excipient",
    description:
      "As a trusted partner, we offer high-quality excipients such as lactose, binding agents, and color coatings to enhance pharmaceutical formulations. Lactose serves as a filler, while binders ensure tablet integrity, and color coatings improve product identification and patient compliance. Our excipients are carefully selected to meet global safety and regulatory standards, ensuring the effectiveness and stability of your final product.",
    link: "/products#excipients",
  },
  {
    title: "Primary Packaging",
    description:
      "Our range of primary packaging solutions is expertly crafted to safeguard pharmaceutical products from environmental hazards, such as contamination, light, and moisture. With a variety of innovative materials, including Alu Alu Cold Form Foil, Top Blister Foil, Tubular Vials and Ampoules , PVC/PVdC, we ensure that your products maintain their integrity and stability throughout the supply chain, all while adhering to rigorous regulatory requirements.",
    link: "/products#primaryPackaging",
  },
  {
    title: "QC Consumables",
    description:
      "We offer a comprehensive selection of laboratory consumables designed to support precise research and quality check analysis. From Chromatography Columns, Filters, to high quality glassware. Our products ensure sterile environments and optimal performance in laboratory testing, contributing to the accurate development and quality assurance of pharmaceutical innovations.",
    link: "/products#qcConsumables",
  },
  {
    title: "Medical device",
    description:
      "Our diverse portfolio of medical devices includes auto-disable syringes, radiology equipment, and in vitro diagnostic instruments. In collaboration with P.T. OneJect Indonesia, we ensure that each device undergoes meticulous testing to meet the highest standards of safety, performance, and regulatory compliance.",
    link: "/products#medicalDevices",
  },
];