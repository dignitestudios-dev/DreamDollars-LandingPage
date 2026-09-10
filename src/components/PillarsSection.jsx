"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function PillarsSection() {
  const pillars = [
    {
      num: "01",
      title: "Debt Snowball Engine",
      description:
        "Knock out smallest balances first to build immediate momentum, automatically rolling freed-up payments into the next target.",
      link: "#how-it-works",
    },
    {
      num: "02",
      title: "Surplus Budget Rollover",
      description:
        "Every unspent dollar in your category budgets automatically rolls over to fund future goals or accelerate debt payoffs.",
      link: "#budgeting",
    },
    {
      num: "03",
      title: "Living Net Worth Map",
      description:
        "A real-time balance sheet linking liquid cash, property, and investments against declining liabilities in one place.",
      link: "#net-worth",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#F4FFE1]/80 border-t border-b border-[#0A4130]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Headline */}
          <FadeIn className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#649809] font-minor">
              The Method
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B15] leading-tight">
              Why Dream Dollars Works When Budgets Fail.
            </h2>
            <p className="text-xs sm:text-sm text-[#64736A] leading-relaxed">
              Every dollar is given a clear mission: clear what you owe while growing what you own.
            </p>
          </FadeIn>

          {/* Right Column: 3 Clean Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.num} delay={index * 0.1} className="space-y-2.5 group">
                <span className="text-xs font-bold text-[#649809] font-minor tracking-wider">
                  [{pillar.num}]
                </span>
                <h3 className="text-base font-extrabold text-[#0A1B15] group-hover:text-[#0A4130] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64736A] leading-relaxed">
                  {pillar.description}
                </p>
                <a
                  href={pillar.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0A4130] hover:text-[#649809] transition-colors pt-1 font-minor"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
