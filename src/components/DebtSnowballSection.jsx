"use client";

import IPhoneFrame from "./IPhoneFrame";
import {
  Layers,
  Sparkles,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  ListOrdered,
  Calculator,
  LineChart,
} from "lucide-react";

export default function DebtSnowballSection() {
  const steps = [
    {
      num: "01",
      icon: ListOrdered,
      title: "Prioritize Debts",
      description:
        "Input your loans and credit balances. The Debt Snowball algorithm organizes them from smallest to largest balance to ignite immediate momentum with fast payoff wins.",
      accent: "cyan",
    },
    {
      num: "02",
      icon: Calculator,
      title: "Auto-Generate Payment Plan",
      description:
        "Dream Dollars automatically calculates your custom monthly payment schedule — allocating minimums to secondary debts while concentrating surplus funds onto your primary target.",
      accent: "lime",
    },
    {
      num: "03",
      icon: LineChart,
      title: "Track Visual Progress",
      description:
        "Watch your remaining balances shrink in real time. As each debt is eliminated, its monthly payment automatically rolls into the next, accelerating your debt freedom date.",
      accent: "cyan",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#081322] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow highlights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00BCC5]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#75D47A]/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2D] border border-[#75D47A]/40 text-[#75D47A] text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00BCC5]" />
            <span>Signature Differentiator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-display text-white">
            HOW IT WORKS: <span className="text-gradient-lime-cyan">THE DEBT SNOWBALL METHOD</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8EA1B4] leading-relaxed">
            Dream Dollars leverages the proven Debt Snowball reduction methodology to turn fragmented debts into an organized, automated path to total freedom.
          </p>
        </div>

        {/* Core Layout: 3-Step Visual & Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3-Step Visual Journey */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isLime = step.accent === "lime";

              return (
                <div
                  key={step.num}
                  className="glass-card p-6 sm:p-7 rounded-2xl relative flex items-start gap-5 group"
                >
                  {/* Step Number & Icon Badge */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-base transition-all duration-300 group-hover:scale-110 ${
                        isLime
                          ? "bg-[#75D47A]/15 text-[#75D47A] border border-[#75D47A]/30"
                          : "bg-[#00BCC5]/15 text-[#00BCC5] border border-[#00BCC5]/30"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="mt-2 text-[10px] font-mono font-bold tracking-widest text-[#8EA1B4]/70 uppercase">
                      Step {step.num}
                    </span>
                  </div>

                  {/* Step Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white heading-display group-hover:text-[#75D47A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#8EA1B4] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Bottom summary callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0D1B2D] to-[#12243C] border border-[#00BCC5]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#75D47A]/20 flex items-center justify-center text-[#75D47A] shrink-0">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-extrabold text-[#75D47A] tracking-wider">
                    Compound Momentum
                  </p>
                  <p className="text-xs text-[#8EA1B4]">
                    Each cleared debt rolls 100% of its allocation forward into the next.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Debt.png Mockup Screen */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative">
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00BCC5]/25 via-[#75D47A]/20 to-transparent rounded-[60px] blur-3xl opacity-70 pointer-events-none" />

              <IPhoneFrame
                src="/mockups/Debt.png"
                alt="Dream Dollars Debt Snowball Payoff interface showing active debts, snowball method, and focus debt"
                glow={true}
                badge={
                  <div className="bg-[#0D1B2D]/95 border border-[#00BCC5]/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 max-w-[220px]">
                    <div className="w-8 h-8 rounded-xl bg-[#00BCC5]/20 flex items-center justify-center text-[#00BCC5]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-[#8EA1B4]">
                        Snowball Active
                      </p>
                      <p className="text-xs font-bold text-white">Focus: Store Card</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
