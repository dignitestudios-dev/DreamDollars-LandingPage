"use client";

import { ArrowRight, Sparkles, ShieldCheck, Download, Star, TrendingUp, Zap, ChevronRight, Mic, CheckCircle2 } from "lucide-react";
import IPhoneFrame from "./IPhoneFrame";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-mesh">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-br from-[#649809]/20 via-[#36AC62]/20 to-[#EBBD57]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00BCC5]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FFDFAC]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-[#75D47A]/30 backdrop-blur-md shadow-lg shadow-[#36AC62]/10 mb-6 group hover:border-[#75D47A]/60 transition-all cursor-pointer">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75D47A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#36AC62]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#EEF8F0] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EBBD57]" />
              Meet Nia — Your 24/7 AI Certified Financial Coach
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#75D47A] group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading max-w-5xl leading-[1.08]">
            Take Control of Your Money.{" "}
            <span className="text-gradient-emerald">Crush Debt.</span>{" "}
            <span className="text-gradient-gold">Build Real Wealth.</span>
          </h1>

          {/* Subheadline grounded in app features */}
          <p className="mt-6 text-base sm:text-xl text-[#EEF8F0]/80 max-w-3xl leading-relaxed">
            The intelligent mobile wealth companion that combines{" "}
            <span className="text-white font-semibold">Automated Debt Snowballing</span>,{" "}
            <span className="text-white font-semibold">Needs vs. Wants Budgeting</span>,{" "}
            <span className="text-white font-semibold">Net Worth Tracking</span>, and a{" "}
            <span className="text-[#75D47A] font-semibold">Voice AI Coach</span> to guide every financial decision.
          </p>

          {/* Call to Actions & Download Badges */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#download"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#649809] via-[#36AC62] to-[#21BFA0] text-[#041712] font-extrabold text-base shadow-xl shadow-[#36AC62]/30 hover:shadow-[#36AC62]/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Download className="w-5 h-5 text-[#041712]" />
              <span>Get Dream Dollars Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-base border border-white/15 backdrop-blur-md transition-all duration-200"
            >
              <span>Explore App Mockups</span>
              <span className="px-2 py-0.5 rounded-full bg-[#649809]/30 text-[#75D47A] text-xs font-semibold">
                17 Screens
              </span>
            </a>
          </div>

          {/* Trust and Social Proof Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#EEF8F0]/70">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#EBBD57]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span>on iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#75D47A]" />
              <span>Bank-Grade 256-Bit Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#EBBD57]" />
              <span>$4.2M+ Debt Crushed</span>
            </div>
          </div>
        </div>

        {/* 3D-Angled Multi-iPhone Showcase Presentation */}
        <div className="mt-16 lg:mt-24 relative max-w-6xl mx-auto">
          {/* Ambient center spotlight glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#649809]/20 via-[#36AC62]/30 to-transparent rounded-[60px] blur-3xl opacity-50 -z-10" />

          {/* Triple Phone Composition */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-8">
            {/* Left Phone: AI Money Coach Chat with Coach Nia */}
            <div className="hidden lg:block transform -rotate-6 translate-y-8 hover:rotate-0 hover:translate-y-0 transition-all duration-700 ease-out">
              <div className="relative">
                <IPhoneFrame
                  src="/mockups/financial-coach-chat.png"
                  alt="Dream Dollars AI Financial Coach Nia"
                  glow={false}
                />
                {/* Floating Chat Alert Pill */}
                <div className="absolute -top-4 -left-6 bg-[#053126]/90 border border-[#75D47A]/40 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl shadow-black/40 text-left max-w-[210px] animate-float">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#75D47A] uppercase tracking-wide">
                    <Mic className="w-3.5 h-3.5 text-[#36AC62]" />
                    <span>Coach Nia AI</span>
                  </div>
                  <p className="text-xs text-[#EEF8F0] font-medium mt-1">
                    "Trim Shopping by $100 & save $1,280 this month."
                  </p>
                </div>
              </div>
            </div>

            {/* Center Phone: Main Home Dashboard with Net Worth & Quick Actions */}
            <div className="relative z-20 transform hover:scale-[1.02] transition-transform duration-500">
              <IPhoneFrame
                src="/mockups/Home.png"
                alt="Dream Dollars Home Dashboard"
                priority={true}
                badge={
                  <div className="bg-gradient-to-br from-[#053126] to-[#001914] border border-[#75D47A]/40 backdrop-blur-xl p-4 rounded-3xl shadow-2xl shadow-black/60 text-left min-w-[210px]">
                    <span className="text-[10px] uppercase font-bold text-[#64736A] tracking-wider block">
                      Current Net Worth
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#EEF8F0] block font-heading">
                      $396,527.58
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#75D47A] mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>▲ +$128,527 since Feb</span>
                    </div>
                  </div>
                }
              />

              {/* Floating Savings Rate Pill (Left side of main phone) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 z-30 bg-white text-[#0A1B15] p-3 rounded-2xl shadow-2xl border border-[#36AC62]/30 flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-xl bg-[#E9F4EA] flex items-center justify-center font-bold text-base text-[#36AC62]">
                  60%
                </div>
                <div>
                  <div className="text-[11px] text-[#64736A] font-medium uppercase">Savings Rate</div>
                  <div className="text-sm font-extrabold text-[#0A1B15]">$7,150 Monthly Income</div>
                </div>
              </div>
            </div>

            {/* Right Phone: Snowball Debt Payoff Tracker */}
            <div className="hidden lg:block transform rotate-6 translate-y-8 hover:rotate-0 hover:translate-y-0 transition-all duration-700 ease-out">
              <div className="relative">
                <IPhoneFrame
                  src="/mockups/Debt.png"
                  alt="Dream Dollars Snowball Debt Tracker"
                  glow={false}
                />
                {/* Floating Debt Milestone Pill */}
                <div className="absolute -top-4 -right-6 bg-[#053126]/90 border border-[#DE3B3D]/50 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl shadow-black/40 text-left max-w-[210px] animate-float">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#DE3B3D] uppercase tracking-wide">
                    <span>🪓 Snowball Active</span>
                  </div>
                  <p className="text-xs text-[#EEF8F0] font-medium mt-1">
                    $27,490 Debt Remaining · Debt-Free in 18 Months!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature quick icons strip */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold font-heading text-white">100%</span>
            <span className="text-xs text-[#64736A] font-medium mt-1">Snowball Automated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold font-heading text-[#75D47A]">24/7 AI</span>
            <span className="text-xs text-[#64736A] font-medium mt-1">Certified Financial Coach</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold font-heading text-[#EBBD57]">50 / 30 / 20</span>
            <span className="text-xs text-[#64736A] font-medium mt-1">Needs vs Wants Budget</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold font-heading text-white">7 Badges</span>
            <span className="text-xs text-[#64736A] font-medium mt-1">Gamified Milestones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
