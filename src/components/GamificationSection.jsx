"use client";

import { Award, Trophy, Target, Flame, Sparkles, CheckCircle2, Lock } from "lucide-react";

export default function GamificationSection() {
  const badges = [
    {
      emoji: "🎯",
      title: "Goal Crusher",
      desc: "Create and hit your first primary savings milestone.",
      unlocked: true,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/40",
      tag: "Unlocked",
    },
    {
      emoji: "🔨",
      title: "First Strike",
      desc: "Make your first extra payment towards debt snowball.",
      unlocked: true,
      color: "from-green-500/20 to-emerald-500/10",
      border: "border-green-500/40",
      tag: "Unlocked",
    },
    {
      emoji: "🕊️",
      title: "Debt Free",
      desc: "Clear every single liability on your debt tracker.",
      unlocked: false,
      color: "from-amber-500/10 to-yellow-500/5",
      border: "border-white/10",
      tag: "Ultimate Trophy",
    },
    {
      emoji: "🦸",
      title: "Savings Hero",
      desc: "Maintain a 50%+ monthly savings rate for 3 months.",
      unlocked: true,
      color: "from-lime-500/20 to-green-500/10",
      border: "border-lime-500/40",
      tag: "Unlocked",
    },
    {
      emoji: "🧭",
      title: "Budget Master",
      desc: "Create & stay strictly within monthly category caps.",
      unlocked: false,
      color: "from-cyan-500/10 to-blue-500/5",
      border: "border-white/10",
      tag: "In Progress (75%)",
    },
    {
      emoji: "📈",
      title: "Investor",
      desc: "Log your first brokerage or high-yield asset holding.",
      unlocked: true,
      color: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/40",
      tag: "Unlocked",
    },
    {
      emoji: "🔥",
      title: "Financial Streak",
      desc: "Log 20 consecutive days of transactions and check-ins.",
      unlocked: false,
      color: "from-red-500/10 to-orange-500/5",
      border: "border-white/10",
      tag: "16 / 20 Days",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#041712] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-[#649809]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBBD57]/20 text-[#EBBD57] text-xs font-bold border border-[#EBBD57]/40 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Gamified Wealth Building</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Level Up Your Money Habits with{" "}
            <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            Building wealth doesn't have to be a chore. Dream Dollars celebrates every small win, extra payment, and smart decision.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-gradient-to-br ${badge.color} border ${badge.border} backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group`}
            >
              {/* Top Row: Emoji & Status Tag */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#041712]/70 border border-white/10 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
                    {badge.emoji}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      badge.unlocked
                        ? "bg-[#36AC62]/20 text-[#75D47A] border border-[#36AC62]/40"
                        : "bg-white/5 text-[#64736A] border border-white/10"
                    }`}
                  >
                    {badge.unlocked ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Unlocked</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3 h-3" />
                        <span>{badge.tag}</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Badge Title & Description */}
                <h3 className="text-lg font-bold font-heading text-white mt-5">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#64736A] mt-1.5 leading-relaxed">
                  {badge.desc}
                </p>
              </div>

              {/* Progress Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#EEF8F0]/70">
                <span>Milestone {idx + 1}</span>
                <span className="font-semibold text-white">
                  {badge.unlocked ? "Completed" : "Locked"}
                </span>
              </div>
            </div>
          ))}

          {/* Callout Card: Level 2 Money Master */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#053126] to-[#001914] border border-[#75D47A]/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#649809] flex items-center justify-center text-white text-xl font-bold shadow-md shadow-[#649809]/40 mb-4">
                👑
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                Money Master Level 2
              </h3>
              <p className="text-xs text-[#EEF8F0]/80 mt-2 leading-relaxed">
                Unlock all 7 badges to achieve financial mastery and personalized VIP coaching strategies from Coach Nia!
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-[#75D47A]">
              3 of 7 Badges Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
