"use client";

import IPhoneFrame from "./IPhoneFrame";
import {
  CreditCard,
  Flame,
  CheckCircle2,
  TrendingDown,
  Trophy,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";

export default function DebtSnowballSection() {
  const snowballSteps = [
    {
      step: "01",
      title: "Consolidate & Rank Your Debts",
      desc: "Connect credit cards, student loans, medical bills, and auto loans. Dream Dollars automatically sorts them by balance or APR.",
    },
    {
      step: "02",
      title: "Attack The Smallest Balance",
      desc: "Pay minimums on everything else while throwing all surplus funds at Debt #1 to achieve your fast 'First Strike' victory.",
    },
    {
      step: "03",
      title: "Roll Payments Into the Next Target",
      desc: "When Debt #1 is gone, its full payment rolls into Debt #2. Your payoff snowball grows heavier with every debt eliminated.",
    },
    {
      step: "04",
      title: "Celebrate Complete Debt Freedom",
      desc: "Unlock the 'Debt Free' trophy and redirect your entire monthly payment stream into wealth-building savings & investments!",
    },
  ];

  return (
    <section id="debt-snowball" className="relative py-24 sm:py-32 bg-[#041712] border-t border-white/10 overflow-hidden">
      {/* Background Red & Green Accent Gradients */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#DE3B3D]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#36AC62]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: iPhone Mockup for Debt.png */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/Debt.png"
                alt="Dream Dollars Debt Snowball Payoff Tracker"
                scrollable={true}
                badge={
                  <div className="bg-[#0A1B15] border border-[#DE3B3D]/50 backdrop-blur-xl p-4 rounded-3xl shadow-2xl text-left max-w-[240px]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#DE3B3D] uppercase">
                      <Zap className="w-4 h-4 text-[#EBBD57]" />
                      <span>Accelerated Snowball</span>
                    </div>
                    <div className="text-xl font-extrabold text-white font-heading mt-1">
                      -$12,400 Paid Off
                    </div>
                    <p className="text-[11px] text-[#64736A] mt-0.5">
                      3 Debts Eliminated · 14 Months Ahead of Bank Schedule
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Right Column: Copy, Strategy, & Snowball Flow */}
          <div className="lg:col-span-6 space-y-8 text-left order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE3B3D]/20 text-[#DE3B3D] text-xs font-bold border border-[#DE3B3D]/40 mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>Proven Debt Elimination Engine</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Crush Debt Fast. <br />
                <span className="text-gradient-emerald">Keep Your Momentum.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#EEF8F0]/80 leading-relaxed">
                Paying only minimums keeps you trapped in compound interest. Dream Dollars unleashes the **Debt Snowball Accelerator** to systematically knock out debt after debt until you owe zero dollars to anyone.
              </p>
            </div>

            {/* Snowball Step Pipeline */}
            <div className="space-y-4">
              {snowballSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#75D47A]/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#053126] border border-[#75D47A]/30 text-[#75D47A] font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#649809] group-hover:text-[#041712] transition-all">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64736A] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Snowball vs Minimum Comparison Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-[#053126] to-[#001914] border border-[#36AC62]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#75D47A] uppercase tracking-wider">
                  Dream Dollars Difference
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  Save an average of <span className="text-[#EBBD57]">$6,400+</span> in interest
                </div>
              </div>
              <a
                href="#calculator"
                className="px-5 py-2.5 rounded-full bg-[#649809] hover:bg-[#75D47A] text-[#041712] text-xs font-extrabold whitespace-nowrap shadow-md hover:scale-105 transition-all"
              >
                Calculate My Payoff Date →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
