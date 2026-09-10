"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import IPhoneFrame from "./IPhoneFrame";
import FadeIn from "./FadeIn";

export default function Hero() {
  const phoneContainerRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!phoneContainerRef.current) return;
    const rect = phoneContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#FFDFAC]/60 via-[#F4FFE1]/50 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Concise Editorial Content */}
          <FadeIn className="lg:col-span-7 text-center lg:text-left space-y-5" y={25} duration={0.5}>
            {/* Headline - Major Font */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1B15] leading-[1.12]">
              Achieve Financial Freedom with{" "}
              <span className="text-[#649809]">Smart Debt Management.</span>
            </h1>

            {/* Subheadline - Less content, concise & punchy */}
            <p className="text-base sm:text-lg text-[#64736A] max-w-xl leading-relaxed mx-auto lg:mx-0">
              The all-in-one mobile app for debt reduction snowballing, budgeting with surplus rollover, and live net worth tracking.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#early-access"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A4130] hover:bg-[#649809] text-white hover:text-[#0A1B15] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300"
              >
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#0A1B15] font-bold text-xs uppercase tracking-wider border border-[#0A4130]/15 shadow-xs transition-all"
              >
                <span>How It Works</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#649809]" />
              </a>
            </div>

            {/* Concise Highlights */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#64736A] font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#649809]" />
                Debt Snowball Engine
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A4130]" />
                Surplus Rollover
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#649809]" />
                Net Worth Map
              </span>
            </div>
          </FadeIn>

          {/* Right Column: Phone Mockup Frame */}
          <FadeIn className="lg:col-span-5 flex justify-center items-center" delay={0.15} y={25} duration={0.5}>
            <div
              ref={phoneContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              }}
            >
              <IPhoneFrame
                src="/mockups/Home.png"
                alt="Dream Dollars Mobile App Dashboard"
                priority={true}
                glow={true}
                zoom=""
                badge={
                  <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F4FFE1] flex items-center justify-center text-[#649809]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#64736A] font-minor">
                        Snowball Active
                      </p>
                      <p className="text-xs font-extrabold text-[#0A4130]">
                        Accelerated Payoff
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
