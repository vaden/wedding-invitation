import React from "react";

const FloralDecoration = ({ position = "left", className = "" }) => {
  const isLeft = position === "left";

  return (
    <div
      className={`fixed ${
        isLeft ? "left-0" : "right-0"
      } top-0 h-screen pointer-events-none overflow-visible z-10 ${className}`}
      style={{ width: "150px" }}
    >
      <svg
        className={`absolute ${isLeft ? "left-0" : "right-0"} top-0`}
        style={{ height: "100vh", minHeight: "2000px" }}
        viewBox="0 0 150 2000"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Branche principale - Plus longue */}
        <path
          d={
            isLeft
              ? "M30 0 Q50 150 40 300 Q35 450 45 600 Q50 750 40 900 Q35 1050 45 1200 Q50 1350 40 1500 Q35 1650 45 1800 Q50 1950 50 2000"
              : "M120 0 Q100 150 110 300 Q115 450 105 600 Q100 750 110 900 Q115 1050 105 1200 Q100 1350 110 1500 Q115 1650 105 1800 Q100 1950 100 2000"
          }
          stroke="#6B7280"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Fleurs olive - Beaucoup plus de fleurs pour couvrir toute la hauteur */}
        {[
          80, 180, 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280,
          1380, 1480, 1580, 1680, 1780, 1880,
        ].map((y, i) => (
          <g key={`olive-${i}`}>
            {/* Pétales */}
            <circle
              cx={isLeft ? 45 : 105}
              cy={y}
              r="12"
              fill="#556B2F"
              opacity="0.6"
            />
            <circle
              cx={isLeft ? 55 : 95}
              cy={y - 8}
              r="10"
              fill="#6B8E23"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 55 : 95}
              cy={y + 8}
              r="10"
              fill="#6B8E23"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 35 : 115}
              cy={y - 8}
              r="10"
              fill="#6B8E23"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 35 : 115}
              cy={y + 8}
              r="10"
              fill="#6B8E23"
              opacity="0.5"
            />
            {/* Centre doré */}
            <circle
              cx={isLeft ? 45 : 105}
              cy={y}
              r="5"
              fill="#D4AF37"
              opacity="0.7"
            />
          </g>
        ))}

        {/* Petites fleurs lavande - Plus de fleurs */}
        {[
          40, 130, 230, 330, 430, 530, 630, 730, 830, 930, 1030, 1130, 1230,
          1330, 1430, 1530, 1630, 1730, 1830, 1930,
        ].map((y, i) => (
          <g key={`lavender-${i}`}>
            <circle
              cx={isLeft ? 60 : 90}
              cy={y}
              r="8"
              fill="#E6E6FA"
              opacity="0.6"
            />
            <circle
              cx={isLeft ? 68 : 82}
              cy={y - 5}
              r="6"
              fill="#D8BFD8"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 68 : 82}
              cy={y + 5}
              r="6"
              fill="#D8BFD8"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 52 : 98}
              cy={y - 5}
              r="6"
              fill="#D8BFD8"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 52 : 98}
              cy={y + 5}
              r="6"
              fill="#D8BFD8"
              opacity="0.5"
            />
            <circle
              cx={isLeft ? 60 : 90}
              cy={y}
              r="3"
              fill="#D4AF37"
              opacity="0.8"
            />
          </g>
        ))}

        {/* Feuilles - Plus de feuilles */}
        {[
          50, 150, 270, 410, 550, 700, 850, 1000, 1150, 1300, 1450, 1600, 1750,
          1900,
        ].map((y, i) => (
          <g key={`leaf-${i}`}>
            <ellipse
              cx={isLeft ? 25 : 125}
              cy={y}
              rx="8"
              ry="15"
              fill="#556B2F"
              opacity="0.4"
              transform={`rotate(${isLeft ? -30 : 30} ${
                isLeft ? 25 : 125
              } ${y})`}
            />
            <ellipse
              cx={isLeft ? 65 : 85}
              cy={y + 30}
              rx="10"
              ry="18"
              fill="#6B8E23"
              opacity="0.3"
              transform={`rotate(${isLeft ? 20 : -20} ${isLeft ? 65 : 85} ${
                y + 30
              })`}
            />
          </g>
        ))}

        {/* Petites touches dorées - Plus de touches */}
        {[100, 290, 490, 650, 820, 990, 1160, 1330, 1500, 1670, 1840].map(
          (y, i) => (
            <circle
              key={`gold-${i}`}
              cx={isLeft ? 40 : 110}
              cy={y}
              r="3"
              fill="#D4AF37"
              opacity="0.6"
            />
          )
        )}
      </svg>
    </div>
  );
};

export default FloralDecoration;
