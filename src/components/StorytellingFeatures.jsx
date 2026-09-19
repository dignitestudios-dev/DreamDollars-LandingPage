"use client";

import IPhoneFrame from "./IPhoneFrame";
import FadeIn from "./FadeIn";
import { CheckCircle2, RotateCcw, TrendingDown, Zap, Landmark, LineChart, Sparkles, Shield, ArrowUpRight } from "lucide-react";

export default function StorytellingFeatures() {
  return (
    <section id="features" className="relative py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* ============================================================ */}
      {/* 5. DEBT REDUCTION SECTION (Image Left, Copy Right)           */}
      {/* ============================================================ */}
      <div id="debt-reduction" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Phone Mockup (Debt.png) */}
          <FadeIn className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <IPhoneFrame
              src="/mockups/Debt.png"
              alt="DreamDollars Debt Reduction Tracker"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Build Momentum</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    Debt Payoff Strategy
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Room for your future
                  </p>
                </div>
              }
            />
          </FadeIn>

          {/* Right: Copy & 3 Features */}
          <FadeIn delay={0.1} className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor tracking-wider">
              <span>BUILD MOMENTUM</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Create a Clear <span className="text-[#649809]">Path Out of Debt.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#64736A] leading-relaxed">
              Debt can feel overwhelming when you don&apos;t know where to begin. DreamDollars helps you organize what you owe, choose a payoff strategy, and see your progress along the way.
            </p>

            {/* 3 Features */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  01
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    PRIORITIZE YOUR DEBTS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Organize balances so you know exactly where to focus first.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#649809] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  02
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    CREATE YOUR PAYOFF PLAN
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    See how your payments and additional dollars can move you toward becoming debt-free.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  03
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    BUILD MOMENTUM
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    As balances are eliminated, redirect those dollars toward the next debt and keep moving forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Highlight */}
            <p className="text-xs sm:text-sm font-bold text-[#0A4130] bg-[#F4FFE1] p-3 rounded-xl border border-[#0A4130]/10">
              You&apos;re not just paying off debt. You&apos;re creating room for your future.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. SPENDING CLARITY SECTION (Copy Left, Image Right)          */}
      {/* ============================================================ */}
      <div id="spending-plan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <FadeIn className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor tracking-wider">
              <span>FINANCIAL FREEDOM SPENDING PLAN</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Know Where Your Money Goes <span className="text-[#649809]">Before It &ldquo;Just Goes.&rdquo;</span>
            </h2>

            <div className="space-y-2 text-sm sm:text-base text-[#64736A] leading-relaxed">
              <p>
                DreamDollars helps you turn budgeting into something more meaningful—a Financial Freedom Spending Plan designed to give your money direction.
              </p>
              <p className="text-xs sm:text-sm">
                Track your everyday expenses against the categories you&apos;ve created and identify where your money is helping—or hindering—your financial goals.
              </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center shrink-0">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    TRACK YOUR SPENDING
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Quickly categorize expenses and see where your money is actually going.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#649809] flex items-center justify-center shrink-0">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    IDENTIFY THE LEAKS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Recognize spending patterns that may be quietly reducing your available cash flow.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    REDIRECT THE SURPLUS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    When money remains in a category, intentionally redirect those dollars toward savings, debt reduction, or another financial priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Highlight */}
            <p className="text-xs sm:text-sm font-bold text-[#0A4130] bg-[#F4FFE1] p-3 rounded-xl border border-[#0A4130]/10">
              Every dollar deserves direction.
            </p>
          </FadeIn>

          {/* Right: Phone Mockup (Expense.png) */}
          <FadeIn delay={0.1} className="lg:col-span-6 flex justify-center">
            <IPhoneFrame
              src="/mockups/Expense.png"
              alt="DreamDollars Financial Freedom Spending Plan interface"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Surplus Found</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    +$953.16 Remaining
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Ready to redirect
                  </p>
                </div>
              }
            />
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 7. SAVINGS ARCHITECTURE SECTION (Image Left, Copy Right)      */}
      {/* ============================================================ */}
      <div id="savings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Phone Mockup (Savings.png) */}
          <FadeIn className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <IPhoneFrame
              src="/mockups/Savings.png"
              alt="DreamDollars Purpose-Based Savings Buckets"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <Landmark className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Save with Purpose</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    $45,550 Saved
                  </p>
                  <p className="text-[10px] text-[#64736A]">
                    Emergency · Goals · Buffer
                  </p>
                </div>
              }
            />
          </FadeIn>

          {/* Right: Copy */}
          <FadeIn delay={0.1} className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor tracking-wider">
              <span>SAVE WITH PURPOSE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Give Every Savings <span className="text-[#649809]">Dollar a Job.</span>
            </h2>

            <div className="space-y-2 text-sm sm:text-base text-[#64736A] leading-relaxed">
              <p>
                Saving isn&apos;t just about accumulating money. It&apos;s about preparing for the life you&apos;re building.
              </p>
              <p className="text-xs sm:text-sm">
                DreamDollars lets you create dedicated savings buckets so you can see exactly what you&apos;re saving for and how close you&apos;re getting.
              </p>
            </div>

            {/* 3 Features */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  01
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    EMERGENCY RESERVE
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Build a financial cushion for life&apos;s unexpected expenses.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#649809] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  02
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    PERSONAL GOALS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Save intentionally for travel, education, homeownership, major purchases, business goals, or whatever matters to you.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-[#F4FFE1] text-[#0A4130] font-bold text-xs flex items-center justify-center shrink-0 font-minor">
                  03
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    VISUAL MILESTONES
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Watch your progress and celebrate as each savings goal gets closer.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Highlight */}
            <p className="text-xs sm:text-sm font-bold text-[#0A4130] bg-[#F4FFE1] p-3 rounded-xl border border-[#0A4130]/10">
              Your savings should have purpose—not just a balance.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 8. NET WORTH SECTION (Copy Left, Image Right)                 */}
      {/* ============================================================ */}
      <div id="net-worth" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <FadeIn className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor tracking-wider">
              <span>BUILD WHAT YOU OWN</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] leading-tight">
              Don&apos;t Just Track What You Owe. <span className="text-[#649809]">Track What You&apos;re Building.</span>
            </h2>

            <div className="space-y-2 text-sm sm:text-base text-[#64736A] leading-relaxed">
              <p>
                Financial progress isn&apos;t measured only by how much debt disappears.
              </p>
              <p className="text-xs sm:text-sm">
                DreamDollars brings your assets and liabilities together so you can see the bigger picture—what you own, what you owe, and how your financial position changes over time.
              </p>
            </div>

            {/* 3 Features */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center shrink-0">
                  <LineChart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    ASSET &amp; LIABILITY SNAPSHOT
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Track cash, property, investments, and other assets alongside your outstanding liabilities.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#649809] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    NET WORTH PROGRESS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    See how reducing debt and increasing assets work together to strengthen your financial future.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0A4130]/10 flex items-start gap-3.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1B15] uppercase tracking-wide">
                    CREDIT AWARENESS
                  </h4>
                  <p className="text-xs text-[#64736A] mt-0.5">
                    Record your credit score and access helpful guidance for strengthening your overall financial profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Highlight */}
            <p className="text-xs sm:text-sm font-bold text-[#0A4130] bg-[#F4FFE1] p-3 rounded-xl border border-[#0A4130]/10">
              The goal isn&apos;t simply to owe less. It&apos;s to own more and build lasting prosperity.
            </p>
          </FadeIn>

          {/* Right: Phone Mockup (net-worth.png) */}
          <FadeIn delay={0.1} className="lg:col-span-6 flex justify-center">
            <IPhoneFrame
              src="/mockups/net-worth.png"
              alt="DreamDollars Net Worth and Asset Overview"
              glow={true}
              badge={
                <div className="bg-white/95 border border-[#0A4130]/10 rounded-2xl p-3 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#649809] font-minor tracking-wider">
                    <LineChart className="w-3.5 h-3.5 text-[#0A4130]" />
                    <span>Build What You Own</span>
                  </div>
                  <p className="text-xs font-extrabold text-[#0A1B15] mt-0.5">
                    Assets vs. Liabilities
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

