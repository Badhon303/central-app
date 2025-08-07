"use client"

import { useState, useRef, useEffect } from "react"

const WorldMapTooltip = ({ x, y, name, flag, color }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const groupRef = useRef(null)

  const showTooltip = () => {
    setTooltipVisible(true)

    // Bring the group to the front (end of parent SVG)
    if (groupRef.current && groupRef.current.parentNode) {
      groupRef.current.parentNode.appendChild(groupRef.current)
    }
  }

  const hideTooltip = () => {
    setTooltipVisible(false)
  }

  return (
    <g
      ref={groupRef}
      className="cursor-pointer"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={showTooltip}
    >
      {isTooltipVisible && (
        <foreignObject
          x={x - 60}
          y={y - 40}
          width="120"
          height="30"
          style={{ overflow: "visible" }}
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
              pointerEvents: "none",
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
      <circle cx={x} cy={y} r="2" fill={color} />
    </g>
  )
}

export default WorldMapTooltip
