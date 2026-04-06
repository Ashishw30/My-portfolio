import React from 'react';

/**
 * Version 6: Clear Architectural Monogram
 * A high-definition logo focusing on maximum legibility of 'A' and 'W'.
 * Features sharp, geometric strokes, sequential drawing animation, and a 'Verification Pulse'.
 */
export const Logo = ({ size = 44, className = "" }) => {
  return (
    <div 
      className={`relative flex items-center justify-center group ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size * 0.9} 
        height={size * 0.9} 
        viewBox="0 0 120 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >
        <defs>
          <style>
            {`
              @keyframes pathDraw {
                to { stroke-dashoffset: 0; opacity: 1; }
              }
              
              .clear-path {
                stroke-dasharray: 200;
                stroke-dashoffset: 200;
                opacity: 0;
                animation: pathDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }

              @keyframes pointPulse {
                0%, 100% { transform: scale(1); opacity: 0.2; }
                50% { transform: scale(3); opacity: 0.6; }
              }

              .pulse-dot {
                fill: var(--accent);
                animation: pointPulse 2s ease-in-out infinite;
                filter: blur(1.5px);
              }

              .underline-anim {
                stroke-dasharray: 60;
                stroke-dashoffset: 60;
                animation: pathDraw 0.8s ease-out 1.5s forwards;
              }
            `}
          </style>
        </defs>

        {/* Clear Letter 'A' */}
        <path 
           d="M10 85 L35 15 L60 85" 
           stroke="var(--text-primary)" 
           strokeWidth="10" 
           strokeLinecap="round" 
           strokeLinejoin="round" 
           className="clear-path"
           style={{ animationDelay: '0.1s' }}
        />
        {/* 'A' Crossbar */}
        <path 
           d="M22 60 H48" 
           stroke="var(--accent)" 
           strokeWidth="8" 
           strokeLinecap="round" 
           className="clear-path"
           style={{ animationDelay: '0.6s' }}
        />

        {/* Clear Letter 'W' */}
        <path 
           d="M65 15 L78 85 L90 35 L102 85 L115 15" 
           stroke="var(--text-primary)" 
           strokeWidth="10" 
           strokeLinecap="round" 
           strokeLinejoin="round" 
           className="clear-path"
           style={{ animationDelay: '0.4s' }}
        />

        {/* Verification Underline (Subtle Brand Detail) */}
        <path 
           d="M35 95 H90" 
           stroke="var(--accent)" 
           strokeWidth="3" 
           strokeLinecap="round" 
           className="underline-anim"
           opacity="0.3"
        />

        {/* The 'Stability Index' Pulse (QA Theme) */}
        <circle cx="90" cy="35" r="3" className="pulse-dot" />
        <circle cx="35" cy="15" r="2" className="pulse-dot" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Surface Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};
