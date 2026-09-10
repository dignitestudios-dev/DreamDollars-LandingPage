"use client";

import IPhoneFrame from "./IPhoneFrame";
import FadeIn from "./FadeIn";
import { CheckCircle2, RotateCcw, TrendingDown, Zap, Landmark, LineChart, Sparkles } from "lucide-react";

export default function StorytellingFeatures() {
  return (
    <section id="features" className="relative py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* ============================================================ */}
      {/* STORY 1: Debt Snowball Method (Image Left, Copy Right)       */}
      {/* ============================================================ */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Phone Mockup (Debt.png) */}
          <FadeIn className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <IPhoneFrame
              src="/mockups/Debt.png"
              alt="Dream Dollars Debt Snowball Payoff Plan"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Snowball Plan</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    Target: Store Card
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Clearing frees $45/mo
                  </p>
                </div>
              }
            />
          </FadeIn>

          {/* Right: Concise Copy & 3 Steps */}
          <FadeIn delay={0.1} className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor">
              <span>Signature Differentiator</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Crush Debt with the <span className="text-[#649809]">Snowball Method.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64736A] leading-relaxed">
              Paying only minimums keeps you trapped. Dream Dollars organizes debts smallest to largest, rolling cleared payments forward to compound payoff speed.
            </p>

            {/* 3 Steps - Concise */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  01
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                    Prioritize Debts by Balance
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Tackle smallest balances first for immediate momentum.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#649809] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  02
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                    Auto-Generate Payment Schedule
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Maintain minimums everywhere while targeting extra funds on #1.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  03
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                    Automatic Payment Rollover
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    As debts clear, 100% of their payments roll into the next target.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* STORY 2: Budgeting & Surplus Rollover (Copy Left, Image Right) */}
      {/* ============================================================ */}
      <div id="budgeting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <FadeIn className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor">
              <span>Smart Budgeting</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Spending Clarity with <span className="text-[#649809]">Surplus Rollover.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64736A] leading-relaxed">
              Track daily expenses against realistic category limits. When you spend less, your unspent surplus automatically rolls into your debt target or savings.
            </p>

            {/* 2 Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 shadow-xs space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center">
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                  Zero-Waste Rollover
                </h4>
                <p className="text-xs text-[#64736A]">
                  Unspent category balances roll directly into savings or debts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 shadow-xs space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#649809] flex items-center justify-center">
                  <TrendingDown className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                  Expense Analysis
                </h4>
                <p className="text-xs text-[#64736A]">
                  Log expenses in seconds and identify leaks before they hurt.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Phone Mockup (Expense.png) */}
          <FadeIn delay={0.1} className="lg:col-span-6 flex justify-center">
            <IPhoneFrame
              src="/mockups/Expense.png"
              alt="Dream Dollars Expense Tracking interface"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Surplus Found</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    +$953.16 Remaining
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Auto-routes to goals
                  </p>
                </div>
              }
            />
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* STORY 3: Savings Buckets & Goals (Image Left, Copy Right)     */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Phone Mockup (Savings.png) */}
          <FadeIn className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <IPhoneFrame
              src="/mockups/Savings.png"
              alt="Dream Dollars Savings Buckets"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Landmark className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Dedicated Funds</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    $45,550 Saved
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Emergency · House · Trip
                  </p>
                </div>
              }
            />
          </FadeIn>

          {/* Right: Copy */}
          <FadeIn delay={0.1} className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor">
              <span>Savings Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Assign Every Dollar to a <span className="text-[#649809]">Purpose.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64736A] leading-relaxed">
              Undifferentiated savings accounts get spent accidentally. Dream Dollars divides liquid savings into dedicated buckets with visual milestones.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#64736A]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#649809] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0A1B15]">Emergency Buffer:</strong> Safeguard 3–6 months of living expenses.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A4130] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0A1B15]">Target Milestones:</strong> Track target amounts with automated completion forecasts.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#649809] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0A1B15]">Impulse Protection:</strong> Keep dedicated funds separate from daily spend.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* STORY 4: Net Worth & Balance Sheet (Copy Left, Image Right)   */}
      {/* ============================================================ */}
      <div id="net-worth" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <FadeIn className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor">
              <span>Balance Sheet</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Living Snapshot of Your <span className="text-[#649809]">Total Net Worth.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64736A] leading-relaxed">
              Consolidate liquid accounts, real estate, investments, and debt liabilities on one live balance sheet that charts your journey over time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 shadow-xs space-y-1">
                <div className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center">
                  <LineChart className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                  Asset &amp; Liability Map
                </h4>
                <p className="text-xs text-[#64736A]">
                  Watch debts decrease as net equity steadily grows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 shadow-xs space-y-1">
                <div className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#649809] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15]">
                  Credit Score Tips
                </h4>
                <p className="text-xs text-[#64736A]">
                  Actionable guidance to systematically improve your credit.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Phone Mockup (net-worth.png) */}
          <FadeIn delay={0.1} className="lg:col-span-6 flex justify-center">
            <IPhoneFrame
              src="/mockups/net-worth.png"
              alt="Dream Dollars Net Worth Overview"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <LineChart className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Equity Growing</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    Assets vs. Debts
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Live net worth tracking
                  </p>
                </div>
              }
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
