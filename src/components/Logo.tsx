import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto", color = "#6d3921" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      className={className}
      fill="none"
      aria-label="Charlène Ahoueffa Rey Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      
      {/* Monogram AR - Stylized */}
      <g stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* A */}
        <path d="M15 65 L40 15 L65 65" />
        <path d="M28 45 Q40 35 52 45" strokeWidth="6" />
        
        {/* R */}
        <path d="M75 15 L75 65" />
        <path d="M75 15 H95 C115 15 115 45 95 45 H75" />
        <path d="M90 45 L110 65" />
      </g>
      
      {/* Text */}
      <g fill={color} style={{ fontFamily: "'Inter', sans-serif" }}>
        <text x="135" y="38" fontSize="28" fontWeight="500" letterSpacing="-0.5">Ahoueffa</text>
        <text x="135" y="68" fontSize="28" fontWeight="800" letterSpacing="1">REY</text>
      </g>
    </svg>
  );
};

export default Logo;
