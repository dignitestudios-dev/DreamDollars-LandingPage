"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calculator,
  Flame,
  Sparkles,
  TrendingDown,
  Zap,
  CheckCircle2,
  DollarSign,
  Calendar,
  Award,
} from "lucide-react";

export default function DebtCalculator() {
  const [debtAmount, setDebtAmount] = useState(27490);
  const [interestRate, setInterestRate] = useState(18.5);
  const [extraPayment, setExtraPayment] = useState(250);

  // Minimum payment calculation assumption: ~2.5% of balance or $50 minimum
  const minMonthlyPayment = Math.max(50, Math.round(debtAmount * 0.025));
  const totalMonthlySnowball = minMonthlyPayment + extraPayment;

  // Simple amortization math estimate
  const monthlyRate = interestRate / 100 / 12;

  // Months with minimum only
  const minMonths = Math.min(
    180,
    Math.round(
      -Math.log(1 - (debtAmount * monthlyRate) / minMonthlyPayment) /
        Math.log(1 + monthlyRate)
    ) || 84
  );

  // Months with Dream Dollars snowball accelerator
  const snowballMonths = Math.max(
    6,
    Math.round(
      -Math.log(1 - (debtAmount * monthlyRate) / totalMonthlySnowball) /
        Math.log(1 + monthlyRate)
    ) || 22
  );

  const monthsSaved = Math.max(0, minMonths - snowballMonths);
  const totalMinInterest = Math.round(minMonthlyPayment * minMonths - debtAmount);
  const totalSnowballInterest = Math.round(totalMonthlySnowball * snowballMonths - debtAmount);
  const interestSaved = Math.max(500, totalMinInterest - totalSnowballInterest);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#36AC62", "#649809", "#75D47A", "#FFDFAC", "#EBBD57"],
    });
  };

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-[#051C16] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#36AC62]/10 via-[#649809]/15 to-[#DE3B3D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#36AC62]/20 text-[#75D47A] text-xs font-bold border border-[#36AC62]/40 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Savings Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            See How Fast You Can Become{" "}
            <span className="text-gradient-emerald">100% Debt-Free</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            Adjust the sliders below to calculate how much time and hard-earned cash Dream Dollars can save you.
          </p>
        </div>

        {/* Calculator Card Grid */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 rounded-[36px] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-7 text-left">
              {/* Slider 1: Debt Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#DE3B3D]" />
                    <span>Total Outstanding Debt</span>
                  </span>
                  <span className="text-lg font-extrabold text-[#EEF8F0] font-heading">
                    ${debtAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="500"
                  value={debtAmount}
                  onChange={(e) => setDebtAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#041712] rounded-lg appearance-none cursor-pointer accent-[#36AC62]"
                />
                <div className="flex justify-between text-[10px] text-[#64736A] font-semibold">
                  <span>$2,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate APR */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-white flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#EBBD57]" />
                    <span>Average Interest Rate (APR)</span>
                  </span>
                  <span className="text-lg font-extrabold text-[#EBBD57] font-heading">
                    {interestRate}% APR
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="32"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#041712] rounded-lg appearance-none cursor-pointer accent-[#EBBD57]"
                />
                <div className="flex justify-between text-[10px] text-[#64736A] font-semibold">
                  <span>3% (Low)</span>
                  <span>18% (Credit Cards)</span>
                  <span>32% (High)</span>
                </div>
              </div>

              {/* Slider 3: Extra Snowball Contribution */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-white flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#75D47A]" />
                    <span>Extra Snowball Monthly Boost</span>
                  </span>
                  <span className="text-lg font-extrabold text-[#75D47A] font-heading">
                    +${extraPayment}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="1500"
                  step="25"
                  value={extraPayment}
                  onChange={(e) => setExtraPayment(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#041712] rounded-lg appearance-none cursor-pointer accent-[#75D47A]"
                />
                <div className="flex justify-between text-[10px] text-[#64736A] font-semibold">
                  <span>+$25/mo</span>
                  <span>+$250/mo</span>
                  <span>+$1,500/mo</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#64736A] flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#EBBD57] shrink-0" />
                <span>
                  Minimum payment estimate: <strong className="text-white">${minMonthlyPayment}/mo</strong>. Total monthly attack: <strong className="text-[#75D47A]">${totalMonthlySnowball}/mo</strong>.
                </span>
              </div>
            </div>

            {/* Right Results: Projected Savings Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#053126] to-[#001914] border border-[#36AC62]/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#649809]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#75D47A] tracking-wider">
                  Dream Dollars Projection
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#649809]/30 text-[#75D47A] text-[11px] font-bold">
                  Snowball Mode
                </span>
              </div>

              {/* Big Metric: Interest Saved */}
              <div className="mt-4">
                <div className="text-xs text-[#64736A] uppercase font-bold">Estimated Interest Saved</div>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#EBBD57] font-heading mt-1">
                  ${interestSaved.toLocaleString()}
                </div>
              </div>

              {/* Payoff Time Comparison */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10">
                  <div className="text-[11px] text-[#64736A] font-bold uppercase">Standard Minimums</div>
                  <div className="text-xl font-extrabold text-[#EEF8F0] font-heading mt-1">
                    {Math.round(minMonths / 12)} Yrs ({minMonths} Mo)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#053126] border border-[#75D47A]/40">
                  <div className="text-[11px] text-[#75D47A] font-bold uppercase">With Dream Dollars</div>
                  <div className="text-xl font-extrabold text-white font-heading mt-1">
                    {Math.round((snowballMonths / 12) * 10) / 10} Yrs ({snowballMonths} Mo)
                  </div>
                </div>
              </div>

              {/* Time Saved Badge */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#649809]/20 border border-[#649809]/40 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#75D47A] shrink-0" />
                <div className="text-xs text-[#EEF8F0]">
                  You shave <strong className="text-[#75D47A] font-bold">{monthsSaved} Months</strong> off your debt and become debt-free years sooner!
                </div>
              </div>

              {/* Celebrate Button */}
              <button
                onClick={triggerConfetti}
                className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-[#649809] to-[#36AC62] text-[#041712] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#36AC62]/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Celebrate My Freedom Plan 🎉</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
