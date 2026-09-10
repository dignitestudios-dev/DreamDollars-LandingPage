"use client";

import Image from "next/image";

export default function IPhoneFrame({
  src,
  alt = "Dream Dollars App Screen",
  className = "",
  imageClassName = "",
  badge = null,
  glow = true,
  priority = false,
  zoom = "scale-[1.09]",
  position = "object-top",
}) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Ambient Glow behind the Phone for Light Theme */}
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-300/25 via-teal-200/20 to-transparent rounded-[54px] blur-2xl opacity-80 pointer-events-none -z-10" />
      )}

      {/* Outer Titanium Chassis (Fixed realistic iPhone proportions, never stretches) */}
      <div className="relative w-[280px] sm:w-[310px] md:w-[325px] rounded-[48px] p-[8px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#020617] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.28),0_0_0_1px_rgba(15,23,42,0.15)]">
        {/* Left Side Physical Buttons */}
        <div className="absolute -left-[3px] top-[95px] w-[3px] h-[24px] bg-[#1E293B] rounded-l-sm border-l border-white/20 pointer-events-none" />
        <div className="absolute -left-[3px] top-[135px] w-[3px] h-[42px] bg-[#1E293B] rounded-l-sm border-l border-white/20 pointer-events-none" />
        <div className="absolute -left-[3px] top-[188px] w-[3px] h-[42px] bg-[#1E293B] rounded-l-sm border-l border-white/20 pointer-events-none" />
        {/* Right Side Power Button */}
        <div className="absolute -right-[3px] top-[145px] w-[3px] h-[60px] bg-[#1E293B] rounded-r-sm border-r border-white/20 pointer-events-none" />

        {/* Inner Screen Bezel - Standard 19.5:9 mobile ratio (never stretches) */}
        <div className="relative w-full rounded-[40px] overflow-hidden bg-[#F4FFE1] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] aspect-[9/19.5]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 768px) 310px, 325px"
            className={`w-full h-full object-cover origin-top ${position} ${zoom} ${imageClassName} block pointer-events-none transition-transform duration-300`}
            priority={priority}
          />

          {/* Subtle Screen Glare Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Badge (Optional decorative widget) */}
      {badge && (
        <div className="absolute -bottom-5 -right-3 sm:-right-5 z-30 animate-float-subtle">
          {badge}
        </div>
      )}
    </div>
  );
}
