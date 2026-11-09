import React from 'react';

/**
 * Authentic Groww Brand Logo:
 * Circular icon featuring Groww's signature dual-tone wave:
 * - Upper half in Royal / Electric Blue (#5367FF / #3861FB)
 * - Lower wave in Groww Emerald Green / Cyan (#00D09C / #00D5A5)
 * - Separated by a smooth, elegant sweeping diagonal wave
 */
export default function GrowwLogo({ size = 32, className = '' }) {
  return (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="growwBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A65FF" />
            <stop offset="100%" stopColor="#3352F5" />
          </linearGradient>
          <linearGradient id="growwGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5AE" />
            <stop offset="100%" stopColor="#00D09C" />
          </linearGradient>
        </defs>

        {/* Base circle background: Blue */}
        <circle cx="50" cy="50" r="50" fill="url(#growwBlueGrad)" />

        {/* Lower Wave: Emerald Green */}
        <path
          d="M 0 54 C 18 36, 42 72, 68 50 C 82 38, 92 44, 100 48 L 100 100 L 0 100 Z"
          fill="url(#growwGreenGrad)"
        />

        {/* Subtle highlight arc */}
        <path
          d="M 0 54 C 18 36, 42 72, 68 50 C 82 38, 92 44, 100 48"
          stroke="#00F5BA"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
