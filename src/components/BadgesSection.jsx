"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IPhoneFrame from "./IPhoneFrame";
import FadeIn from "./FadeIn";
import { 
  Trophy, 
  Award, 
  Zap, 
  Flame, 
  ShieldCheck, 
  Crown, 
  TrendingUp, 
  RotateCcw, 
  CheckCircle2, 
  Lock, 
  Sparkles 
} from "lucide-react";

export default function BadgesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const badges = [
    {
      id: "first-strike",
      title: "First Strike",
      subtitle: "Debt Snowball",
      description: "Made your first extra payment beyond minimums toward target debt.",
      icon: Zap,
      category: "debt",
      unlocked: true,
      tier: "Bronze",
      tierColor: "bg-[#649809]/15 text-[#0A4130] border-[#649809]/30",
      progress: "100%",
    },
    {
      id: "snowball-smasher",
      title: "Snowball Smasher",
      subtitle: "Milestone",
      description: "Eliminated 3 individual credit or loan balances completely.",
      icon: Flame,
      category: "debt",
      unlocked: true,
      tier: "Silver",
      tierColor: "bg-[#649809]/20 text-[#0A4130] border-[#649809]/35",
      progress: "3 / 3 Debts",
    },
    {
      id: "surplus-master",
      title: "Surplus Master",
      subtitle: "Budgeting",
      description: "Stayed under monthly budget caps and rolled unspent dollars forward.",
      icon: RotateCcw,
      category: "budget",
      unlocked: true,
      tier: "Gold",
      tierColor: "bg-[#FFDFAC] text-[#0A4130] border-[#0A4130]/20",
      progress: "100%",
    },
    {
      id: "emergency-shield",
      title: "Emergency Shield",
      subtitle: "Savings",
      description: "Funded 3 full months of living expenses into a dedicated bucket.",
      icon: ShieldCheck,
      category: "savings",
      unlocked: true,
      tier: "Gold",
      tierColor: "bg-[#FFDFAC] text-[#0A4130] border-[#0A4130]/20",
      progress: "$8,250 / $8,250",
    },
    {
      id: "net-positive",
      title: "Positive Horizon",
      subtitle: "Net Worth",
      description: "Crossed zero net equity line as total assets surpassed debts.",
      icon: TrendingUp,
      category: "milestone",
      unlocked: true,
      tier: "Platinum",
      tierColor: "bg-[#0A4130] text-[#F4FFE1] border-[#0A4130]",
      progress: "Unlocked",
    },
    {
      id: "debt-zero",
      title: "Total Freedom",
      subtitle: "Ultimate Crown",
      description: "Crushed all non-mortgage liabilities to achieve 100% debt freedom.",
      icon: Crown,
      category: "debt",
      unlocked: false,
      tier: "Diamond",
      tierColor: "bg-slate-100 text-[#64736A] border-slate-200",
      progress: "78% Complete",
    },
  ];

  const filteredBadges = activeCategory === "all" 
    ? badges 
    : badges.filter(b => b.category === activeCategory);

  return (
    <section id="badges" className="relative py-20 sm:py-28 bg-[#F4FFE1]/40 border-t border-[#0A4130]/10 overflow-hidden">
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FFDFAC]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#649809]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#649809]" />
            <span>Gamified Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15]">
            Celebrate Every Win. <span className="text-[#649809]">Stay Motivated.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64736A] leading-relaxed">
            Eliminating debt takes perseverance. Dream Dollars turns consistency into a rewarding game with milestone badges, streak awards, and progress tiers.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mt-7 flex-wrap">
            {[
              { id: "all", label: "All Achievements" },
              { id: "debt", label: "Debt Crusher" },
              { id: "savings", label: "Savings Goals" },
              { id: "budget", label: "Budget Streaks" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#0A4130] text-white shadow-xs"
                    : "bg-white text-[#64736A] border border-[#0A4130]/10 hover:border-[#649809]/50 hover:text-[#0A1B15]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Showcase Grid: Badges + App Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 7 Columns: Badges Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <FadeIn
                  key={badge.id}
                  delay={index * 0.05}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-md flex flex-col justify-between relative overflow-hidden group ${
                    badge.unlocked
                      ? "border-[#0A4130]/15 hover:border-[#649809]/40"
                      : "border-dashed border-slate-300 opacity-80"
                  }`}
                >
                  {/* Top Bar inside Card: Icon + Tier Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                        badge.unlocked
                          ? "bg-[#F4FFE1] text-[#0A4130] border border-[#0A4130]/10"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full font-minor border uppercase tracking-wider ${badge.tierColor}`}
                    >
                      {badge.tier}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-sm font-bold text-[#0A1B15] flex items-center gap-1.5">
                      {badge.title}
                      {badge.unlocked ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#649809]" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </h3>
                    <p className="text-[11px] font-medium text-[#649809] font-minor mt-0.5">
                      {badge.subtitle}
                    </p>
                    <p className="text-xs text-[#64736A] mt-2 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>

                  {/* Bottom Status / Progress */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[#64736A]">
                      {badge.unlocked ? "Status" : "Progress"}
                    </span>
                    <span
                      className={`font-bold font-minor ${
                        badge.unlocked ? "text-[#0A4130]" : "text-amber-700"
                      }`}
                    >
                      {badge.progress}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right 5 Columns: App Mockup featuring Goals & Milestones */}
          <FadeIn delay={0.15} className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/goals.png"
                alt="Dream Dollars Goals and Milestone Badges"
                glow={true}
                badge={
                  <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3.5 shadow-xl max-w-[210px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
                      <span>Reward Unlocked</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                      MacBook Goal Met
                    </p>
                    <p className="text-[10px] text-[#64736A]">
                      +$2,600 Cash Funded
                    </p>
                  </div>
                }
              />
            </div>
            <p className="text-[11px] text-[#64736A] mt-4 font-minor text-center">
              Real-time milestone sync across mobile &amp; cloud
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
