"use client";

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function PillarsSection() {
  const pillars = [
    {
      num: "01",
      code: "CLARITY",
      title: "See Your Complete Financial Picture.",
      description:
        "Bring your income, expenses, spending, savings, debt, and net worth into one place so you can finally see where you stand.",
      tagline: "See it. Understand it. Change it.",
      link: "#net-worth",
    },
    {
      num: "02",
      code: "ALIGNMENT",
      title: "Give Your Money a Purpose.",
      description:
        "Connect your dollars to the things that matter most—building savings, eliminating debt, preparing for emergencies, and reaching your personal financial goals.",
      tagline: "Your money should support the life you're building.",
      link: "#savings",
    },
    {
      num: "03",
      code: "STRUCTURE",
      title: "Create a System for Your Money.",
      description:
        "Build realistic spending categories, track expenses, organize savings, and create a repeatable system for managing your money month after month.",
      tagline: "Because when money isn't given direction, it just goes.",
      link: "#spending-plan",
    },
    {
      num: "04",
      code: "HANDLE",
      title: "Turn Your Plan Into Progress.",
      description:
        "Take action on what your money needs today while building toward what you want tomorrow. Track progress, adjust when life changes, and keep moving forward.",
      tagline: "Handle today. Build tomorrow.",
      link: "#debt-reduction",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#F4FFE1]/80 border-t border-b border-[#0A4130]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#649809]" />
              <span>HOW IT WORKS</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#649809] font-minor">
              Clarity • Alignment • Structure • Handle
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B15] tracking-tight leading-tight">
              Put the ASCEND CA$H Framework Into Action.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-2 text-xs sm:text-base text-[#64736A] leading-relaxed max-w-2xl mx-auto">
              <p>
                DreamDollars takes the financial principles you learn through ASCEND and gives you a practical place to use them with your real money, real goals, and real life.
              </p>
              <p className="font-semibold text-[#0A4130]">
                Every dollar gets direction. Every goal gets a plan. Every step moves you toward greater financial stability and prosperity.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 4 Clean Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.num}
              delay={index * 0.08}
              className="p-6 rounded-2xl bg-white border border-[#0A4130]/10 shadow-xs hover:border-[#649809]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#649809] font-minor tracking-wider">
                    0{index + 1} — {pillar.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0A4130]/20 group-hover:bg-[#649809] transition-colors" />
                </div>

                <h3 className="text-base font-extrabold text-[#0A1B15] group-hover:text-[#0A4130] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#64736A] leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-[11px] font-bold text-[#0A4130] bg-[#F4FFE1] p-2 rounded-lg border border-[#0A4130]/10">
                  {pillar.tagline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={pillar.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0A4130] group-hover:text-[#649809] transition-colors font-minor"
                >
                  <span>Explore in app</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

