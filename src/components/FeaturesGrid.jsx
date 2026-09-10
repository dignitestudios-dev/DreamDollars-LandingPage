"use client";

import {
  LayoutDashboard,
  Target,
  Wallet,
  PieChart,
  TrendingDown,
  Landmark,
  RotateCcw,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: "Dashboard & Net Worth Overview",
      description:
        "Get a clear, real-time snapshot of your entire financial standing with consolidated assets, liabilities, and live net worth metrics.",
      accent: "cyan",
    },
    {
      id: "goals",
      icon: Target,
      title: "Goal Creation & Tracking",
      description:
        "Define target milestones for emergency funds, major purchases, or milestones with automatic progress monitoring and timeline forecasts.",
      accent: "lime",
    },
    {
      id: "income-assets",
      icon: Wallet,
      title: "Income & Assets Management",
      description:
        "Catalog multiple income streams, property, bank accounts, and physical assets in one centralized balance sheet.",
      accent: "cyan",
    },
    {
      id: "expenses",
      icon: PieChart,
      title: "Expense Tracking & Spending Analysis",
      description:
        "Log and categorize daily expenditures effortlessly while visual charts uncover spending patterns and opportunities to trim costs.",
      accent: "lime",
    },
    {
      id: "debt-snowball",
      icon: TrendingDown,
      title: "Debt Snowball Payoff Planner",
      description:
        "Systematically eliminate loans and balances using the proven snowball method, rolling freed-up payments into the next debt for faster payoff.",
      accent: "cyan",
      badge: "Signature Feature",
    },
    {
      id: "savings-buckets",
      icon: Landmark,
      title: "Savings Buckets",
      description:
        "Organize your savings into dedicated, purpose-driven buckets so every dollar is assigned to a specific future priority.",
      accent: "lime",
    },
    {
      id: "budgeting",
      icon: RotateCcw,
      title: "Budgeting Tool with Surplus Rollover",
      description:
        "Create realistic monthly budgets where unspent category surplus automatically rolls over to fund goals or accelerate debt reduction.",
      accent: "cyan",
    },
    {
      id: "investments",
      icon: TrendingUp,
      title: "Investment Portfolio Tracking",
      description:
        "Monitor your stocks, retirement accounts, and portfolio valuations over time with clear performance visualizers.",
      accent: "lime",
    },
    {
      id: "credit",
      icon: ShieldCheck,
      title: "Credit Monitoring & Tips",
      description:
        "Keep watch over your credit score health and receive actionable, structured tips to improve your rating systematically.",
      accent: "cyan",
    },
    {
      id: "education",
      icon: BookOpen,
      title: "Educational Content Library",
      description:
        "Expand your financial literacy with curated articles and in-depth video tutorials covering debt management, budgeting, and wealth strategy.",
      accent: "lime",
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#050C16] border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00BCC5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#75D47A]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2D] border border-[#00BCC5]/30 text-[#00BCC5] text-xs font-extrabold uppercase tracking-widest mb-4">
            <span>Features for User Role</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-display text-white">
            COMPLETE TOOLS TO MASTER <span className="text-gradient-lime-cyan">YOUR MONEY</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8EA1B4] leading-relaxed">
            Every feature in Dream Dollars is purposefully built around your financial journey — from day-to-day spending clarity to complete debt freedom.
          </p>
        </div>

        {/* 10 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isCyan = feature.accent === "cyan";

            return (
              <div
                key={feature.id}
                className={`glass-card p-7 rounded-2xl relative flex flex-col justify-between group ${
                  feature.badge ? "border-[#00BCC5]/40 bg-[#0D1B2D]/90" : ""
                }`}
              >
                <div>
                  {/* Top Row: Icon & Optional Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isCyan
                          ? "bg-[#00BCC5]/15 text-[#00BCC5] border border-[#00BCC5]/30"
                          : "bg-[#75D47A]/15 text-[#75D47A] border border-[#75D47A]/30"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {feature.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#75D47A]/20 to-[#00BCC5]/20 text-[#75D47A] border border-[#75D47A]/40">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-white tracking-tight heading-display mb-3 group-hover:text-[#75D47A] transition-colors">
                    {feature.title}
                  </h3>

                  {/* 1-Sentence Description */}
                  <p className="text-sm text-[#8EA1B4] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#8EA1B4]/70">
                  <span className="font-mono text-[11px] font-semibold text-[#8EA1B4]/50">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      isCyan ? "group-hover:text-[#00BCC5]" : "group-hover:text-[#75D47A]"
                    }`}
                  >
                    Built-in
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
