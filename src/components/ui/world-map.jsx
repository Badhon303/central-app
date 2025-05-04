"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/world-map-tooltip";

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const svgMap = map.getSVG({
    radius: 0.22,
    color: currentTheme === "dark" ? "#ffffff73" : "#180d86",
    shape: "circle",
    backgroundColor: currentTheme === "dark" ? "#030712" : "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <TooltipProvider>
      <div className="w-full aspect-[2/1] dark:bg-background bg-white rounded-lg relative font-sans">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          height="495"
          width="856"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0"
        >
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                  key={`start-upper-${i}`}
                ></motion.path>
              </g>
            );
          })}

          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              {/* Start Point with Tooltip */}
              <foreignObject
                x={projectPoint(dot.start.lat, dot.start.lng).x - 10}
                y={projectPoint(dot.start.lat, dot.start.lng).y - 10}
                width="20"
                height="20"
                className="overflow-visible pointer-events-auto"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-full h-full cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-black/80 text-white px-3 py-1.5 text-sm rounded"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={dot.start.flag}
                        alt={dot.start.name}
                        className="w-4 h-3"
                      />
                      <span>{dot.start.name}</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </foreignObject>
              <g key={`start-${i}`} pointerEvents="none">
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* End Point with Tooltip */}
              <foreignObject
                x={projectPoint(dot.end.lat, dot.end.lng).x - 10}
                y={projectPoint(dot.end.lat, dot.end.lng).y - 10}
                width="20"
                height="20"
                className="overflow-visible pointer-events-auto"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-full h-full cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-black/80 text-white px-3 py-1.5 text-sm rounded"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={dot.end.flag}
                        alt={dot.end.name}
                        className="w-4 h-3"
                      />
                      <span>{dot.end.name}</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </foreignObject>
              <g key={`end-${i}`} pointerEvents="none">
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </TooltipProvider>
  );
}
