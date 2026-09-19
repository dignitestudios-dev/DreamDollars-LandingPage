"use client";

import { useState } from "react";
import IPhoneFrame from "./IPhoneFrame";
import FadeIn from "./FadeIn";
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Landmark, 
  Zap, 
  TrendingUp, 
  RotateCcw, 
  ShieldCheck,
  Flame,
  ArrowRight
} from "lucide-react";

export default function BadgesSection() {
  const milestoneExamples = [
    {
      id: "savings-reached",
      icon: Landmark,
      title: "A savings goal reached",
      subtitle: "Dedicated Purpose Bucket",
      description: "Celebrating when your emergency reserve or personal dream bucket is 100% funded.",
      tag: "Savings Win",
    },
    {
      id: "debt-eliminated",
      icon: Zap,
      title: "A debt eliminated",
      subtitle: "Debt Reduction Tracker",
      description: "Crossing off a credit card or loan balance completely and redirecting that cash flow.",
      tag: "Debt Freedom",
    },
    {
      id: "intentional-spending",
      icon: RotateCcw,
      title: "A month of intentional spending",
      subtitle: "Financial Freedom Spending Plan",
      description: "Staying within your categories and intentionally routing surplus dollars to your priorities.",
      tag: "Cash Flow Win",
    },
    {
      id: "improved-position",
      icon: ShieldCheck,
      title: "An improved financial position",
      subtitle: "Financial Profile & Credit",
      description: "Strengthening your financial foundation and watching your overall health profile rise.",
      tag: "Stability Win",
    },
    {
      id: "net-worth-milestone",
      icon: TrendingUp,
      title: "A new net worth milestone",
      subtitle: "Net Worth Dashboard",
      description: "Reaching a higher tier of total equity as you own more and owe less month over month.",
      tag: "Prosperity Win",
    },
  ];

  return (
    <section id="milestones" className="relative py-20 sm:py-28 bg-[#F4FFE1]/40 border-t border-[#0A4130]/10 overflow-hidden">
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FFDFAC]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#649809]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#649809]" />
            <span>CELEBRATE YOUR PROGRESS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B15]">
            Every Win Matters.
          </h2>

          <div className="space-y-2 text-xs sm:text-base text-[#64736A] leading-relaxed max-w-2xl mx-auto">
            <p>
              Financial transformation doesn&apos;t happen in one giant leap. It happens through the decisions you make again and again.
            </p>
            <p className="font-semibold text-[#0A4130]">
              DreamDollars helps you recognize those moments.
            </p>
          </div>
        </FadeIn>

        {/* Showcase Grid: Milestone Cards + Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 7 Columns: Milestone Highlight Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64736A] font-minor mb-1">
              Moments DreamDollars Helps You Celebrate:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {milestoneExamples.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={item.id}
                    delay={index * 0.05}
                    className="p-4 rounded-2xl bg-white border border-[#0A4130]/10 shadow-xs hover:border-[#649809]/40 hover:shadow-md transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#F4FFE1] text-[#0A4130] group-hover:bg-[#649809] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FFDFAC]/60 text-[#0A4130] font-minor">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#649809] shrink-0" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-[11px] font-semibold text-[#649809] font-minor mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-[#64736A] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* 5th Card spanning width */}
            <FadeIn delay={0.2} className="p-4 rounded-2xl bg-white border border-[#0A4130]/10 shadow-xs hover:border-[#649809]/40 hover:shadow-md transition-all flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-xl bg-[#F4FFE1] text-[#0A4130] group-hover:bg-[#649809] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#649809] shrink-0" />
                    <span>{milestoneExamples[4].title}</span>
                  </h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FFDFAC]/60 text-[#0A4130] font-minor">
                    {milestoneExamples[4].tag}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#649809] font-minor mt-0.5">
                  {milestoneExamples[4].subtitle}
                </p>
                <p className="text-xs text-[#64736A] mt-1 leading-relaxed">
                  {milestoneExamples[4].description}
                </p>
              </div>
            </FadeIn>

            <p className="text-xs font-bold text-[#0A4130] italic pt-1">
              Each one is evidence that you&apos;re moving forward.
            </p>

            {/* Closing Message Banner */}
            <FadeIn delay={0.25} className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#0A4130] to-[#0D523D] text-white space-y-2 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFDFAC] font-minor">
                <Sparkles className="w-4 h-4 text-[#FFDFAC]" />
                <span>Stay the Course.</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F4FFE1]/90 leading-relaxed">
                Progress may not always happen as quickly as you want—but consistency creates change.
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-[#FFDFAC] pt-1 tracking-wide uppercase font-minor">
                Keep going. Keep building. Keep ASCENDing.
              </p>
            </FadeIn>
          </div>

          {/* Right 5 Columns: App Mockup */}
          <FadeIn delay={0.15} className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/goals.png"
                alt="DreamDollars Goals and Progress Milestones"
                glow={true}
                badge={
                  <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3.5 shadow-xl max-w-[210px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
                      <span>Win Recognized</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                      Goal Funded
                    </p>
                    <p className="text-[10px] text-[#64736A]">
                      Keep ASCENDing
                    </p>
                  </div>
                }
              />
            </div>
            <p className="text-[11px] text-[#64736A] mt-4 font-minor text-center">
              Real-time progress recognition across your financial journey
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

