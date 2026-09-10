"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <span>Subscription Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-display text-slate-900">
            TRANSPARENT PLANS FOR <span className="text-gradient-brand">EVERY BUDGET</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Dream Dollars features a tiered subscription model designed to provide accessible debt freedom tools to everyone, with advanced power features for accelerated wealth planning.
          </p>
        </div>

        {/* 2-Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Free Tier Card */}
          <div className="p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative bg-slate-50/70 border border-slate-200/90 shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">
                  Basic Access
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-200/70 text-slate-700 border border-slate-300">
                  Ad-Supported (Google AdMob)
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 heading-display">
                FREE TIER
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Essential personal finance, expense tracking, and debt tools supported by non-intrusive in-app advertisements via Google AdMob.
              </p>

              {/* Price placeholder */}
              <div className="my-8 pb-6 border-b border-slate-200">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 font-heading">
                  Free
                </div>
                <p className="text-xs text-slate-500 mt-1 font-semibold">
                  No subscription fee required
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dashboard &amp; Net Worth Overview</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Income &amp; Asset Cataloging</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Core Expense Tracking &amp; Analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Standard Debt Snowball Planner</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Goal Creation &amp; Savings Buckets</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Access to Selected Educational Articles</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <a
                href="#download"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs uppercase tracking-wider border border-slate-300 shadow-xs transition-all duration-200"
              >
                <span>Get Started Free</span>
              </a>
            </div>
          </div>

          {/* Premium Tier Card */}
          <div className="p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-700/10">
            {/* Top Highlight Badge */}
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#15803D] text-white shadow-sm">
              Free Trial Available
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
                  Advanced Tools
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>100% Ad-Free</span>
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 heading-display">
                PREMIUM TIER
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Full-featured ad-free experience unlocking advanced debt planning tools, automated rollover mechanisms, and exclusive video tutorials.
              </p>

              {/* Price placeholder */}
              <div className="my-8 pb-6 border-b border-slate-200">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
                  Premium
                </div>
                <p className="text-xs text-emerald-700 mt-1 font-semibold flex items-center gap-1.5">
                  <span>Billed monthly &middot; Includes initial Free Trial period</span>
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-900">Completely Ad-Free Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All Free Tier Features Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Advanced Debt Snowball Rollover Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Budgeting Tool with Automated Surplus Rollover</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive Investment Portfolio Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Exclusive Content Library (Articles + Video Tutorials)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Priority Feature Updates</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <a
                href="#download"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-98 transition-all duration-200"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
