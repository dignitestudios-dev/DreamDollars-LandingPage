"use client";

import { useState } from "react";
import Image from "next/image";

export default function IPhoneFrame({
  src,
  alt = "Dream Dollars App Screen",
  className = "",
  badge = null,
  scrollable = true,
  glow = true,
  priority = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative inline-block select-none group ${className}`}>
      {/* Ambient Glow behind the Phone */}
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#649809]/30 via-[#36AC62]/30 to-[#EBBD57]/20 rounded-[60px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      )}

      {/* Outer Titanium Chassis */}
      <div className="relative w-[290px] sm:w-[320px] md:w-[340px] aspect-[9/19] rounded-[52px] p-[10px] bg-gradient-to-b from-[#2A3731] via-[#15231D] to-[#0A1410] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(0,0,0,0.8)]">
        {/* Left Side Buttons (Volume Up, Volume Down, Action Button) */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-[26px] bg-[#2A3731] rounded-l-sm border-l border-white/20" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-[45px] bg-[#2A3731] rounded-l-sm border-l border-white/20" />
        <div className="absolute -left-[3px] top-[195px] w-[3px] h-[45px] bg-[#2A3731] rounded-l-sm border-l border-white/20" />
        {/* Right Side Power Button */}
        <div className="absolute -right-[3px] top-[150px] w-[3px] h-[65px] bg-[#2A3731] rounded-r-sm border-r border-white/20" />

        {/* Inner Bezel Border */}
        <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#0A1B15] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.9)] border border-white/10">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-3 w-[100px] h-[26px] bg-black rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.8)] border border-white/5 pointer-events-none">
            {/* Camera Lens with reflection */}
            <div className="w-3 h-3 rounded-full bg-[#0d131a] ring-1 ring-white/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1b2b3a]/80" />
            </div>
            {/* Sensor Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#080d0a] ring-1 ring-white/5" />
          </div>

          {/* Screen Content Container with Smooth Scroll-on-Hover for Long Figma Exports */}
          <div
            className="relative w-full h-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Screen Image */}
            <img
              src={src}
              alt={alt}
              className={`w-full h-auto min-h-full object-cover object-top transition-transform duration-[4000ms] ease-in-out ${
                scrollable && isHovered ? "-translate-y-[calc(100%-100%)] sm:-translate-y-[45%]" : "translate-y-0"
              }`}
              loading={priority ? "eager" : "lazy"}
            />

            {/* Subtle Screen Glare Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

            {/* Hover indicator hint if scrollable */}
            {scrollable && (
              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[10px] font-medium text-[#EEF8F0]/80 border border-white/10 flex items-center gap-1.5 transition-all duration-300 pointer-events-none ${
                  isHovered ? "opacity-0 translate-y-2" : "opacity-90"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#75D47A] animate-ping" />
                <span>Hover to explore</span>
              </div>
            )}
          </div>

          {/* iOS Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-30 pointer-events-none backdrop-blur-sm" />
        </div>
      </div>

      {/* Floating Badge (Optional decorative widget) */}
      {badge && (
        <div className="absolute -bottom-5 -right-4 sm:-right-6 z-40 animate-float">
          {badge}
        </div>
      )}
    </div>
  );
}
