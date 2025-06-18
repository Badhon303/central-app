import React, { useRef, useState } from "react";
import WorldMapTooltip from "./WorldMapTooltip";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

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

  // unique locations from connections
  const getUniqueLocations = () => {
    const locations = new Map();

    dots.forEach((connection) => {
      if (!locations.has(connection.start.name)) {
        locations.set(connection.start.name, connection.start);
      }
      if (!locations.has(connection.end.name)) {
        locations.set(connection.end.name, connection.end);
      }
    });

    return Array.from(locations.values());
  };

  return (
    <div className="w-full max-w-7xl mx-auto aspect-[2/1] dark:bg-background bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="856"
        draggable={false}
        priority
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
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* location points and tooltips */}
        {getUniqueLocations().map((location, index) => {
          const point = projectPoint(location.lat, location.lng);
          return (
            <WorldMapTooltip
              key={`location-${location.name}-${index}`}
              x={point.x}
              y={point.y}
              name={location.name}
              flag={location.flag}
              color={lineColor}
            />
          );
        })}
      </svg>
    </div>
  );
}
