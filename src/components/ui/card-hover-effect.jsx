"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const Card = ({ className, children, style }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-6 overflow-hidden bg-white/10 backdrop-blur-sm border border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col",
      className
    )}
    style={style}
  >
    <div className="relative z-50 flex-1 flex flex-col">
      <div className="flex-1">{children}</div>
    </div>
  </div>
);

export const CardTitle = ({ className, children }) => (
  <h4
    className={cn("text-white font-bold tracking-wide text-xl mb-4", className)}
  >
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "text-white/80 tracking-wide leading-relaxed text-sm line-clamp-3",
      className
    )}
    style={{
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {children}
  </p>
);

export const HoverEffect = ({ items, className }) => {
  const [active, setActive] = useState(0);
  const [fixedHeight, setFixedHeight] = useState(undefined);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const MOBILE_BREAKPOINT = 640;
  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const checkScreen = () => {
      const w = window.innerWidth;
      if (w < MOBILE_BREAKPOINT) setScreen("mobile");
      else if (w < 1024) setScreen("medium");
      else setScreen("desktop");
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // fixedHeight for desktop & medium
  useEffect(() => {
    setFixedHeight(undefined);
  }, [screen, items]);

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () => setActive((prev) => (prev + 1) % items.length);

  if (screen === "mobile") {
    return (
      <div className={cn("w-full max-w-md mx-auto pt-4 px-4", className)}>
        <div className="relative">
          <Link href={items[active].link} className="block">
            <Card
              className="min-h-0"
              style={{ minHeight: 0, height: "auto", maxHeight: "none" }}
            >
              <CardTitle>{items[active].title}</CardTitle>
              <CardDescription>{items[active].description}</CardDescription>
            </Card>
          </Link>
          <div className="flex items-center mt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="h-8 w-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next"
                className="h-8 w-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
              </button>
            </div>
            <div className="flex-1" />
            <div className="text-xs text-gray-500">
              {active + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "medium") {
    return (
      <div className={cn("w-full px-4", className)}>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200">
          <div className="grid grid-cols-5 gap-6 min-w-[1200px]">
            {items.map((item, idx) => (
              <div
                key={item?.link}
                className="relative group block h-full min-w-[240px] max-w-[320px]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item?.link}
                  className="block w-full h-full relative"
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        className="absolute inset-0 h-full w-full bg-slate-800/80 block rounded-3xl"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <Card>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full px-4", className)}>
      <div className="grid grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group block w-full h-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={item?.link} className="block w-full h-full relative">
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-slate-800/80 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
