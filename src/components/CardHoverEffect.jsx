"use client"
import { HoverEffect } from "./ui/card-hover-effect"

export function CardHoverEffect() {
  return (
    <div className="w-full pb-4 mx-auto px-4 sm:px-6 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
  {
    title: "API",
    description:
      "Providing consistent, high-quality APIs for pharmaceutical manufacturing success.",
    link: "/our-products#api",
  },
  {
    title: "Excipient",
    description:
      "Delivering consistent, high-quality excipients for formulation excellence.",
    link: "/our-products#excipients",
  },
  {
    title: "Primary Packaging",
    description:
      "Protecting pharmaceuticals with superior primary packaging solutions.",
    link: "/our-products#packaging",
  },
  {
    title: "QC Consumables",
    description:
      "Empowering quality control with dependable laboratory consumable solutions.",
    link: "/our-products#consumables",
  },
  {
    title: "Medical device",
    description:
      "Trusted source for reliable, compliant medical device solutions.",
    link: "/our-products#devices",
  },
]
