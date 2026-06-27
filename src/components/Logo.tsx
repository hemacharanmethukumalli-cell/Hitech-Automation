import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const pixelSizes = {
    sm: 40,
    md: 56,
    lg: 112
  };
  
  const currentSize = pixelSizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Fidelity SVG Replication of Hitech Automation Circular Emblem */}
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-105 duration-300 drop-shadow-md"
        id="hitech-automation-logo-svg"
      >
        {/* White Base Circle Background */}
        <circle cx="100" cy="100" r="95" fill="white" stroke="#e2e8f0" strokeWidth="1" />

        {/* Central Plant Clipping Mask Circle */}
        <defs>
          <clipPath id="center-circle-clip">
            <circle cx="100" cy="100" r="50" />
          </clipPath>
          {/* Gradients */}
          <linearGradient id="sky-grad" x1="100" y1="50" x2="100" y2="150">
            <stop offset="0%" stopColor="#87ceeb" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
          <linearGradient id="cooling-tower-grad" x1="100" y1="90" x2="100" y2="150">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
          <linearGradient id="green-arrow-grad" x1="30" y1="30" x2="90" y2="100">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="blue-arrow-grad" x1="100" y1="40" x2="170" y2="100">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="orange-arrow-grad" x1="170" y1="100" x2="100" y2="170">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="red-arrow-grad" x1="100" y1="170" x2="30" y2="100">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* 1. GREEN ARROW (Top-Left): Industrial Instrumentation */}
        <path
          d="M 45 45 A 72 72 0 0 1 85 24 L 92 14 L 62 10 L 52 35 L 58 26 A 62 62 0 0 0 25 80 L 15 88 Z"
          fill="url(#green-arrow-grad)"
        />
        {/* Text inside Green Arrow Area */}
        <path id="greenTextPath" d="M 32 82 A 67 67 0 0 1 90 28" fill="none" />
        <text className="font-sans" fontSize="9" fontWeight="bold" fill="white">
          <textPath href="#greenTextPath" startOffset="51%" textAnchor="middle">
            INDUSTRIAL INSTRUMENTATION
          </textPath>
        </text>

        {/* 2. BLUE ARROW (Top-Right): PLC */}
        <path
          d="M 120 20 A 75 75 0 0 1 176 76 L 186 68 L 180 98 L 150 90 L 160 82 A 64 64 0 0 0 114 30 Z"
          fill="url(#blue-arrow-grad)"
        />
        {/* Text inside Blue Arrow Area */}
        <path id="blueTextPath" d="M 108 30 A 68 68 0 0 1 168 88" fill="none" />
        <text fontSize="18" fontWeight="bold" fill="white" fontFamily="system-ui, sans-serif">
          <textPath href="#blueTextPath" startOffset="50%" textAnchor="middle">
            PLC
          </textPath>
        </text>

        {/* 3. ORANGE ARROW (Bottom-Right): SCADA */}
        <path
          d="M 180 120 A 75 75 0 0 1 120 180 L 112 190 L 142 194 L 152 168 L 146 178 A 64 64 0 0 0 178 114 Z"
          fill="url(#orange-arrow-grad)"
        />
        {/* Text inside Orange Arrow Area */}
        <path id="orangeTextPath" d="M 172 110 A 68 68 0 0 1 114 172" fill="none" />
        <text fontSize="18" fontWeight="bold" fill="white" fontFamily="system-ui, sans-serif">
          <textPath href="#orangeTextPath" startOffset="50%" textAnchor="middle">
            SCADA
          </textPath>
        </text>

        {/* 4. RED/CRIMSON ARROW (Bottom-Left): VFD */}
        <path
          d="M 80 180 A 75 75 0 0 1 24 124 L 14 132 L 20 102 L 50 110 L 40 118 A 64 64 0 0 0 86 170 Z"
          fill="url(#red-arrow-grad)"
        />
        {/* Text inside Red Arrow Area */}
        <path id="redTextPath" d="M 92 170 A 68 68 0 0 1 30 112" fill="none" />
        <text fontSize="18" fontWeight="bold" fill="white" fontFamily="system-ui, sans-serif">
          <textPath href="#redTextPath" startOffset="50%" textAnchor="middle">
            VFD
          </textPath>
        </text>

        {/* INNER FACTORY LANDSCAPE WITH WATER COOLING TOWERS */}
        <g clipPath="url(#center-circle-clip)">
          {/* Sky background */}
          <rect x="40" y="40" width="120" height="120" fill="url(#sky-grad)" />
          
          {/* Soft White Cloud/Smoke puffing out */}
          <circle cx="80" cy="74" r="10" fill="white" opacity="0.6" filter="blur(1px)" />
          <circle cx="85" cy="68" r="12" fill="white" opacity="0.8" />
          <circle cx="95" cy="66" r="14" fill="white" opacity="0.75" />
          <circle cx="125" cy="62" r="11" fill="white" opacity="0.7" />
          
          {/* Far river/landscape line */}
          <rect x="40" y="125" width="120" height="35" fill="#34d399" />
          <rect x="40" y="132" width="120" height="28" fill="#1e40af" /> {/* water body */}

          {/* Tall Chimney stacks */}
          <rect x="135" y="65" width="4" height="60" fill="#dc2626" />
          <rect x="135" y="75" width="4" height="6" fill="white" />
          <rect x="135" y="90" width="4" height="6" fill="white" />
          <rect x="135" y="105" width="4" height="6" fill="white" />

          <rect x="120" y="78" width="3" height="47" fill="#6b7280" />
          <rect x="120" y="85" width="3" height="4" fill="white" />
          <rect x="120" y="95" width="3" height="4" fill="white" />

          {/* Main Cooling Towers (Plant Towers) */}
          {/* Left Tower */}
          <path
            d="M 60 125 L 64 95 Q 68 95 72 95 L 76 125 Z"
            fill="url(#cooling-tower-grad)"
            stroke="#9ca3af"
            strokeWidth="0.5"
          />
          {/* Center Tower */}
          <path
            d="M 85 125 L 90 85 Q 96 85 102 85 L 107 125 Z"
            fill="url(#cooling-tower-grad)"
            stroke="#4b5563"
            strokeWidth="0.5"
          />

          {/* Foreground details */}
          <rect x="110" y="115" width="22" height="10" fill="#374151" />
          <rect x="114" y="110" width="8" height="5" fill="#4b5563" />
        </g>

        {/* Outer Circular border for alignment */}
        <circle cx="100" cy="100" r="50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="#059669" strokeWidth="2.5" />
      </svg>

      {/* Title Text */}
      {showText && (
        <div className="flex flex-col select-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0f172a] uppercase font-sans leading-none">
            HITECH AUTOMATION
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#0ea5e9] uppercase font-sans mt-1">
            PLC | SCADA | HMI | VFD Training in Vijayawada
          </span>
        </div>
      )}
    </div>
  );
}
