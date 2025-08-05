import React from 'react';

interface HouseVisualizationProps {
  stage: number;
  isCompleted: boolean;
}

const HouseVisualization: React.FC<HouseVisualizationProps> = ({ stage, isCompleted }) => {
  const getHouseElements = () => {
    const elements = [];

    // Base/Foundation (Stage 1)
    if (stage >= 1) {
      elements.push(
        <rect key="foundation" x="50" y="280" width="200" height="20" fill="#8B4513" opacity={isCompleted ? 1 : 0.6} />
      );
      // Mat and plastic cover
      if (isCompleted) {
        elements.push(
          <rect key="mat" x="30" y="290" width="50" height="30" fill="#654321" rx="5" />,
          <rect key="cover" x="220" y="290" width="50" height="30" fill="#2563eb" rx="5" />
        );
      }
    }

    // Wooden Floor (Stage 2)
    if (stage >= 2) {
      elements.push(
        <rect key="floor" x="50" y="260" width="200" height="20" fill="#D2691E" opacity={isCompleted ? 1 : 0.6} />
      );
      // Floor planks pattern
      if (isCompleted) {
        for (let i = 0; i < 8; i++) {
          elements.push(
            <line key={`plank-${i}`} x1={50 + i * 25} y1="260" x2={50 + i * 25} y2="280" stroke="#8B4513" strokeWidth="1" />
          );
        }
      }
    }

    // First Wall (Stage 3)
    if (stage >= 3) {
      elements.push(
        <rect key="wall1" x="50" y="180" width="20" height="80" fill="#B22222" opacity={isCompleted ? 1 : 0.6} />
      );
    }

    // Second Wall + Electricity (Stage 4)
    if (stage >= 4) {
      elements.push(
        <rect key="wall2" x="230" y="180" width="20" height="80" fill="#B22222" opacity={isCompleted ? 1 : 0.6} />
      );
      if (isCompleted) {
        // Light bulb
        elements.push(
          <circle key="bulb" cx="150" cy="170" r="8" fill="#FFD700" />,
          <line key="wire" x1="150" y1="162" x2="150" y2="140" stroke="#333" strokeWidth="2" />
        );
      }
    }

    // Roof (Stage 5)
    if (stage >= 5) {
      elements.push(
        <polygon key="roof" points="40,180 150,120 260,180" fill="#8B0000" opacity={isCompleted ? 1 : 0.6} />
      );
      // Back walls
      elements.push(
        <rect key="backWall" x="70" y="180" width="160" height="80" fill="#CD5C5C" opacity={isCompleted ? 1 : 0.6} />
      );
    }

    // Windows and Door (Stage 6)
    if (stage >= 6) {
      // Door
      elements.push(
        <rect key="door" x="130" y="220" width="40" height="40" fill="#8B4513" opacity={isCompleted ? 1 : 0.6} />
      );
      if (isCompleted) {
        elements.push(
          <circle key="doorknob" cx="165" cy="240" r="2" fill="#FFD700" />
        );
      }

      // Windows
      elements.push(
        <rect key="window1" x="90" y="200" width="25" height="25" fill="#87CEEB" opacity={isCompleted ? 1 : 0.6} />,
        <rect key="window2" x="185" y="200" width="25" height="25" fill="#87CEEB" opacity={isCompleted ? 1 : 0.6} />
      );
      if (isCompleted) {
        elements.push(
          <line key="windowFrame1" x1="102.5" y1="200" x2="102.5" y2="225" stroke="#8B4513" strokeWidth="1" />,
          <line key="windowFrame2" x1="90" y1="212.5" x2="115" y2="212.5" stroke="#8B4513" strokeWidth="1" />,
          <line key="windowFrame3" x1="197.5" y1="200" x2="197.5" y2="225" stroke="#8B4513" strokeWidth="1" />,
          <line key="windowFrame4" x1="185" y1="212.5" x2="210" y2="212.5" stroke="#8B4513" strokeWidth="1" />
        );
      }
    }

    // Furniture (Stage 7)
    if (stage >= 7 && isCompleted) {
      // Bed
      elements.push(
        <rect key="bed" x="75" y="235" width="35" height="20" fill="#4B0082" rx="3" />
      );
      // Chair
      elements.push(
        <rect key="chair" x="190" y="240" width="15" height="15" fill="#8B4513" rx="2" />,
        <rect key="chairBack" x="190" y="235" width="15" height="10" fill="#8B4513" rx="2" />
      );
      // Table lamp
      elements.push(
        <rect key="lampBase" x="210" y="245" width="8" height="10" fill="#2F4F4F" />,
        <ellipse key="lampShade" cx="214" cy="240" rx="6" ry="4" fill="#F0E68C" />
      );
    }

    // Garden and Final Touches (Stage 8)
    if (stage >= 8 && isCompleted) {
      // Garden
      elements.push(
        <ellipse key="garden1" cx="30" cy="310" rx="15" ry="8" fill="#228B22" />,
        <ellipse key="garden2" cx="270" cy="310" rx="15" ry="8" fill="#228B22" />,
        <circle key="flower1" cx="25" cy="308" r="3" fill="#FF69B4" />,
        <circle key="flower2" cx="35" cy="312" r="3" fill="#FF1493" />,
        <circle key="flower3" cx="265" cy="308" r="3" fill="#FF69B4" />,
        <circle key="flower4" cx="275" cy="312" r="3" fill="#FF1493" />
      );
      
      // House number plate
      elements.push(
        <rect key="nameplate" x="110" y="195" width="80" height="15" fill="#FFD700" rx="3" />,
        <text key="nameplateText" x="150" y="205" textAnchor="middle" fontSize="8" fill="#000" fontWeight="bold">
          MY FIRST HOME
        </text>
      );

      // Chimney
      elements.push(
        <rect key="chimney" x="200" y="110" width="20" height="40" fill="#8B0000" />,
        <rect key="chimneyTop" x="195" y="110" width="30" height="8" fill="#696969" />
      );

      // Smoke effect
      elements.push(
        <circle key="smoke1" cx="210" cy="105" r="3" fill="#D3D3D3" opacity="0.7" />,
        <circle key="smoke2" cx="215" cy="100" r="2" fill="#D3D3D3" opacity="0.5" />,
        <circle key="smoke3" cx="212" cy="95" r="2" fill="#D3D3D3" opacity="0.3" />
      );
    }

    return elements;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Your Home Progress</h3>
      
      <div className="relative">
        <svg width="300" height="350" viewBox="0 0 300 350" className="mx-auto">
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={stage >= 6 ? "#87CEEB" : "#2D1B69"} />
              <stop offset="100%" stopColor={stage >= 6 ? "#98FB98" : "#1E1B4B"} />
            </linearGradient>
          </defs>
          
          <rect width="300" height="300" fill="url(#skyGradient)" />
          
          {/* Ground */}
          <rect x="0" y="300" width="300" height="50" fill="#8FBC8F" />
          
          {/* Sun/Moon */}
          <circle 
            cx="250" 
            cy="50" 
            r="20" 
            fill={stage >= 6 ? "#FFD700" : "#F5F5DC"} 
            opacity={stage >= 6 ? 1 : 0.7}
          />
          
          {/* House elements */}
          {getHouseElements()}
          
          {/* Completion glow effect */}
          {isCompleted && (
            <circle 
              cx="150" 
              cy="200" 
              r="120" 
              fill="none" 
              stroke="#FFD700" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 150 200"
                to="360 150 200"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>
        
        {/* Progress indicator */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Progress</span>
            <span>{stage}/8</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(stage / 8) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseVisualization;