"use client";

import { useState } from "react";

const WorldMapTooltip = ({ x, y, name, flag, color }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return (
    <g className="cursor-pointer">
      {/* Interactive hitbox area */}
      <circle
        cx={x}
        cy={y}
        r="10"
        fill="transparent"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onClick={showTooltip}
      />

      {/* Visible point */}
      <circle cx={x} cy={y} r="2" fill={color} />

      {/* Pulsing animation */}
      {/* <circle
        cx={x}
        cy={y}
        r="2"
        fill={color}
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
      </circle> */}

      {/* Tooltip */}
      {isTooltipVisible && (
        <foreignObject
          x={x - 60}
          y={y - 40}
          width="120"
          height="30"
          style={{ overflow: "visible", zIndex: 50 }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "max-content",
            }}
          >
            <img
              src={flag}
              alt={name}
              style={{ width: "16px", height: "12px" }}
            />
            <span>{name}</span>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

export default WorldMapTooltip;
