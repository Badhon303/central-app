"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes.jsx";

export function BackgroundBoxesDemo({ title }) {
  return (
    <div className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-5xl text-3xl text-white relative z-20 uppercase font-semibold"
        )}
      >
        {title}
      </h1>
    </div>
  );
}
