"use client";

import { useState } from "react";
import Image from "next/image";
import IPhoneFrame from "./IPhoneFrame";
import {
  LayoutDashboard,
  TrendingDown,
  PieChart,
  Target,
  Landmark,
  RotateCcw,
  LineChart,
  ShieldCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function InteractiveAppShowcase() {
  const screens = [
    {
      id: "home",
      name: "Dashboard",
      icon: LayoutDashboard,
      title: "Dashboard & Net Worth Overview",
      tagline: "Your Complete Financial Command Center",
      image: "/mockups/Home.png",
      bullets: [
        "Real-time consolidated view of your overall net worth and monthly progress",
        "Quick indicators for monthly income, expenses, active debts, and total savings",
        "Fast-action buttons to log income, track expenses, or view savings buckets",
        "Clear monthly trendline illustrating balance improvements over time",
      ],
      accent: "cyan",
    },
    {
      id: "debt",
      name: "Debt Payoff",
      icon: TrendingDown,
      title: "Debt Snowball Payoff Planner",
      tagline: "Systematic, Structured Debt Elimination",
      image: "/mockups/Debt.png",
      bullets: [
        "Organize all active debt accounts by balance, interest rate, and minimum payment",
        "Automated focus targeting: highlights which debt to concentrate surplus payments on",
        "Live progress bars detailing percentage completed on credit cards, store cards, and loans",
        "Seamless rollover calculation when target debt reaches zero",
      ],
      accent: "lime",
    },
    {
      id: "expenses",
      name: "Expenses",
      icon: PieChart,
      title: "Expense Tracking & Spending Analysis",
      tagline: "Granular Visibility into Daily Outflows",
      image: "/mockups/Expense.png",
      bullets: [
        "Effortlessly log daily transactions across customizable expenditure categories",
        "Visual breakdown highlighting primary spending drivers and monthly allocations",
        "Compare ongoing expenses against predefined spending limits to avoid deficits",
        "Identify recurring leaks and opportunities to channel extra funds into debt payoff",
      ],
      accent: "cyan",
    },
    {
      id: "goals",
      name: "Goals",
      icon: Target,
      title: "Goal Creation & Tracking",
      tagline: "Target Milestones with Clear Timelines",
      image: "/mockups/goals.png",
      bullets: [
        "Create customized goals for emergency reserves, home deposits, or milestones",
        "Track saved amount versus target goal with visual completion bars",
        "Target completion forecasting based on current monthly contribution rates",
        "Celebrate achieved milestones and redirect allocations to future targets",
      ],
      accent: "lime",
    },
    {
      id: "savings",
      name: "Savings",
      icon: Landmark,
      title: "Purpose-Driven Savings Buckets",
      tagline: "Every Dollar Assigned to a Priority",
      image: "/mockups/Savings.png",
      bullets: [
        "Segment savings into distinct buckets rather than keeping an unassigned balance",
        "Allocate automatic monthly contributions across different short & long-term buckets",
        "Clear visibility on emergency funds, travel reserves, and future purchases",
        "Safeguard dedicated savings from impulse withdrawals",
      ],
      accent: "cyan",
    },
    {
      id: "insights",
      name: "Budgeting",
      icon: RotateCcw,
      title: "Budgeting Tool with Surplus Rollover",
      tagline: "Adaptive Monthly Budget Planning",
      image: "/mockups/Insights.png",
      bullets: [
        "Construct realistic monthly category spending limits tailored to your lifestyle",
        "Automatic surplus rollover: unspent category funds roll into debt or savings",
        "Comparative monthly trend visualizers showing spending versus target budget",
        "Timely budget alerts before category spending limits are breached",
      ],
      accent: "lime",
    },
    {
      id: "net-worth",
      name: "Net Worth",
      icon: LineChart,
      title: "Consolidated Assets & Liabilities",
      tagline: "Comprehensive Balance Sheet Tracking",
      image: "/mockups/net-worth.png",
      bullets: [
        "Track total liquid assets, real property, and investments in one balance sheet",
        "Monitor debt liabilities decrease while asset equity consistently rises",
        "Historical net worth growth graph charting long-term financial progression",
        "Deepen financial confidence through true transparent net worth visibility",
      ],
      accent: "cyan",
    },
    {
      id: "credit",
      name: "Credit Score",
      icon: ShieldCheck,
      title: "Credit Monitoring & Structured Tips",
      tagline: "Health Monitoring & Score Improvement",
      image: "/mockups/credit-score.png",
      bullets: [
        "Regular credit score status monitoring directly from your mobile dashboard",
        "Breakdown of key factors influencing your credit tier (utilization, payment history)",
        "Structured, actionable financial tips to improve credit health over time",
        "Understand how systematic debt reduction positively impacts credit standing",
      ],
      accent: "lime",
    },
    {
      id: "investments",
      name: "Investments",
      icon: TrendingUp,
      title: "Investment Portfolio Tracking",
      tagline: "Long-term Wealth Building Growth",
      image: "/mockups/investments.png",
      bullets: [
        "Monitor investment portfolio value alongside cash savings and debt paydown",
        "Track total contributions, unrealized gains, and all-time growth metrics",
        "Visual portfolio composition breakdown across asset types",
        "Align long-term retirement and wealth building with daily money habits",
      ],
      accent: "cyan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeScreen = screens[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="relative py-24 sm:py-32 bg-[#050C16] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00BCC5]/10 via-[#75D47A]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2D] border border-[#00BCC5]/30 text-[#00BCC5] text-xs font-extrabold uppercase tracking-widest mb-4">
            <span>Figma Mobile App Mockups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-display text-white">
            EXPLORE THE <span className="text-gradient-lime-cyan">DREAM DOLLARS</span> APP
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8EA1B4] leading-relaxed">
            Take an interactive tour through real application screens — designed for clarity, intentionality, and fast debt freedom.
          </p>
        </div>

        {/* Screen Selector Tabs (Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-12">
          {screens.map((screen, idx) => {
            const Icon = screen.icon;
            const isActive = idx === currentIndex;

            return (
              <button
                key={screen.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#75D47A] to-[#00BCC5] text-[#050C16] shadow-lg shadow-[#00BCC5]/25 scale-105"
                    : "bg-[#0D1B2D]/80 text-[#8EA1B4] hover:text-white hover:bg-[#12243C] border border-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{screen.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Screen Feature Showcase Stage */}
        <div className="glass-panel p-6 sm:p-10 lg:p-14 rounded-3xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Screen Details & Bullets */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#00BCC5]">
                  {activeScreen.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white heading-display mt-2">
                  {activeScreen.title}
                </h3>
              </div>

              {/* Proposal-grounded Feature Bullets */}
              <div className="space-y-3.5 pt-2">
                {activeScreen.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#75D47A]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#75D47A]" />
                    </div>
                    <span className="text-sm text-[#8EA1B4] leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Controls */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8EA1B4]">
                  <span className="text-white font-bold">{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{screens.length}</span>
                  <span className="ml-2 uppercase tracking-wider text-[11px] text-[#75D47A]">
                    {activeScreen.name} Screen
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous screen"
                    className="p-2.5 rounded-full bg-[#081322] border border-white/10 text-white hover:border-[#00BCC5] hover:text-[#00BCC5] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next screen"
                    className="p-2.5 rounded-full bg-[#081322] border border-white/10 text-white hover:border-[#75D47A] hover:text-[#75D47A] transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Screen Image Display inside iPhone Frame */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="relative">
                <IPhoneFrame
                  key={activeScreen.image}
                  src={activeScreen.image}
                  alt={`Dream Dollars Mockup Screen: ${activeScreen.title}`}
                  scrollable={true}
                  glow={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
