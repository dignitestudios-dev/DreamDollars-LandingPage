"use client";

import { useState } from "react";
import IPhoneFrame from "./IPhoneFrame";
import {
  Sparkles,
  TrendingUp,
  CreditCard,
  Target,
  PiggyBank,
  LineChart,
  Award,
  ShieldCheck,
  Mic,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Flame,
} from "lucide-react";

export default function InteractiveAppShowcase() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeSubScreen, setActiveSubScreen] = useState(0);

  const showcaseTabs = [
    {
      id: "home",
      label: "Home & Net Worth",
      icon: TrendingUp,
      tag: "Live Dashboard",
      color: "emerald",
      screens: [
        {
          title: "Complete Financial Snapshot",
          subtitle: "Total Net Worth & Daily Pulse",
          image: "/mockups/Home.png",
          screenName: "Home Dashboard",
          metrics: [
            { label: "Net Worth", value: "$396,527.58", change: "+$128K since Feb" },
            { label: "Savings Rate", value: "60%", change: "Healthy" },
            { label: "Monthly Income", value: "$7,150", change: "Northwind Studio" },
          ],
          bullets: [
            "Consolidated real-time net worth calculation with interactive monthly trend chart",
            "One-tap quick actions: Add Expense, Income, Debt, Savings, or Ask Voice AI",
            "Real-time breakdown of remaining monthly spend ($953.16 left)",
            "Dynamic daily financial tips powered by Coach Nia",
          ],
        },
        {
          title: "Detailed Net Worth & Asset Map",
          subtitle: "Assets vs Liabilities Breakdown",
          image: "/mockups/net-worth.png",
          screenName: "Net Worth Breakdown",
          metrics: [
            { label: "Total Assets", value: "$424,017.58", change: "Investments + Cash" },
            { label: "Total Liabilities", value: "$27,490.00", change: "-$12.4K YTD" },
            { label: "Debt-to-Asset", value: "6.4%", change: "Excellent" },
          ],
          bullets: [
            "Track liquid savings, retirement accounts, real estate, and liabilities in one place",
            "Visual asset distribution chart with historical monthly checkpoints",
            "Automatic equity calculation as you pay down mortgages and vehicle loans",
          ],
        },
      ],
    },
    {
      id: "coach",
      label: "AI Money Coach",
      icon: Sparkles,
      tag: "Certified AI",
      color: "gold",
      screens: [
        {
          title: "Nia Roberts, Certified Financial Coach",
          subtitle: "24/7 Context-Aware Financial Advice",
          image: "/mockups/financial-coach-chat.png",
          screenName: "Coach Nia Chat",
          metrics: [
            { label: "Refinancing Tip", value: "$1,280", change: "Annual Savings" },
            { label: "Budget Trim", value: "-$150/mo", change: "Shopping & Dining" },
            { label: "Response Time", value: "< 1 sec", change: "Always Available" },
          ],
          bullets: [
            "Context-aware AI analyzes your real transaction history to give personalized strategies",
            "Natural conversation: Ask 'What do I cut?' or 'Can I afford this trip?'",
            "Automated refinancing opportunities and subscription leak detection",
            "Voice-first logging: Tell Coach Nia what you spent and she logs it automatically",
          ],
        },
      ],
    },
    {
      id: "debt",
      label: "Debt Snowball",
      icon: CreditCard,
      tag: "Debt Freedom",
      color: "red",
      screens: [
        {
          title: "Accelerated Snowball Payoff",
          subtitle: "Clear Every Debt on Your List",
          image: "/mockups/Debt.png",
          screenName: "Snowball Engine",
          metrics: [
            { label: "Debt Remaining", value: "$27,490", change: "-$8,200 this year" },
            { label: "Monthly Snowball", value: "$850/mo", change: "Extra Principal" },
            { label: "Debt-Free Target", value: "18 Months", change: "12 Mo Ahead" },
          ],
          bullets: [
            "Order debts by smallest balance (Snowball) or highest APR (Avalanche) effortlessly",
            "Interactive progress bars for Credit Cards, Student Loans, and Car Loans",
            "Automatic rollover of paid-off payments into the next target balance",
            "Milestone badges: 'First Strike' for your first extra payment and 'Debt Free' trophy",
          ],
        },
      ],
    },
    {
      id: "budget",
      label: "Budget & Spending",
      icon: PieChart,
      tag: "50/30/20 Smart",
      color: "cyan",
      screens: [
        {
          title: "Needs vs. Wants Category Limits",
          subtitle: "Visual Budgeting That Actually Works",
          image: "/mockups/Expense.png",
          screenName: "Expense Tracker",
          metrics: [
            { label: "Needs Spent", value: "$2,311.85", change: "of $3,200" },
            { label: "Wants Spent", value: "$394.99", change: "of $1,100" },
            { label: "Budget Surplus", value: "$1,103.16", change: "Routed to Savings" },
          ],
          bullets: [
            "Clear separation of Needs (Rent, Utilities, Food) vs Wants (Shopping, Fun)",
            "Dynamic donut charts showing exactly where every dollar went",
            "Live progress bars for each category: Food, Bills, Rent, Shopping, Transportation",
            "Surplus auto-routing into debt snowball or high-yield savings buckets",
          ],
        },
        {
          title: "Dream Goals & Target Milestones",
          subtitle: "Automate Your Future Desires",
          image: "/mockups/goals.png",
          screenName: "Goals Planner",
          metrics: [
            { label: "Emergency Fund", value: "$15,000", change: "100% Funded" },
            { label: "Europe Trip", value: "$3,450", change: "70% Complete" },
            { label: "Home Downpayment", value: "$25,000", change: "Target 2027" },
          ],
          bullets: [
            "Create dedicated goal buckets with automated recurring deposit allocation",
            "Estimated completion dates dynamically adjust with your savings rate",
            "Celebrate goal completions with gamified rewards and badges",
          ],
        },
      ],
    },
    {
      id: "savings",
      label: "Savings & Buckets",
      icon: PiggyBank,
      tag: "Wealth Building",
      color: "emerald",
      screens: [
        {
          title: "Multi-Bucket Savings System",
          subtitle: "Keep Your Money Organized & Growing",
          image: "/mockups/Savings.png",
          screenName: "Savings Buckets",
          metrics: [
            { label: "Total Saved", value: "$45,550", change: "+$6,200 recent salary" },
            { label: "Active Buckets", value: "4 Funds", change: "Emergency, Auto, Travel" },
            { label: "Avg APY", value: "4.85%", change: "High-Yield Growth" },
          ],
          bullets: [
            "Partition savings into dedicated emergency, tax, vacation, and repair buckets",
            "Automated paycheck split: Direct portions of incoming salary automatically",
            "Instant liquidity overview with visual target progress rings",
          ],
        },
      ],
    },
    {
      id: "investments",
      label: "Investments & Credit",
      icon: LineChart,
      tag: "Growth & Health",
      color: "purple",
      screens: [
        {
          title: "Investment Portfolio Tracker",
          subtitle: "Monitor Stocks, ETFs, & Crypto",
          image: "/mockups/investments.png",
          screenName: "Investments",
          metrics: [
            { label: "Portfolio Value", value: "$52,567.58", change: "+$14K all time" },
            { label: "Monthly Growth", value: "+3.8%", change: "Above benchmark" },
            { label: "Asset Allocation", value: "ETFs (65%)", change: "Equities (35%)" },
          ],
          bullets: [
            "Track all your brokerage and retirement holdings in a clean unified portfolio",
            "All-time returns visualization with performance comparison",
            "Asset allocation breakdown to prevent over-exposure",
          ],
        },
        {
          title: "Credit Score Health Monitor",
          subtitle: "Understand & Elevate Your Score",
          image: "/mockups/credit-score.png",
          screenName: "Credit Monitor",
          metrics: [
            { label: "Credit Score", value: "782", change: "Excellent (+18 pts)" },
            { label: "Utilization", value: "9%", change: "Target < 10%" },
            { label: "Payment History", value: "100%", change: "0 Missed" },
          ],
          bullets: [
            "Real-time credit score updates with score simulator and impact alerts",
            "Personalized tips from Coach Nia to optimize utilization before loan applications",
            "Zero impact on your credit score during monitoring",
          ],
        },
      ],
    },
    {
      id: "gamification",
      label: "Achievements",
      icon: Award,
      tag: "Gamified Habits",
      color: "gold",
      screens: [
        {
          title: "Financial Streaks & Trophy Room",
          subtitle: "Turn Smart Money Habits Into a Game",
          image: "/mockups/Insights.png",
          screenName: "Achievements & Badges",
          metrics: [
            { label: "Badges Earned", value: "3 / 7", change: "Level 2 Money Master" },
            { label: "Current Streak", value: "20 Days", change: "Transactions Logged" },
            { label: "Debt Destroyed", value: "First Strike", change: "Unlocked!" },
          ],
          bullets: [
            "Earn badges like 'Goal Crusher', 'First Strike', 'Debt Free', and 'Savings Hero'",
            "Maintain your Daily Financial Streak to build indestructible financial discipline",
            "Unlock detailed monthly insight retrospectives and spending pattern reports",
          ],
        },
      ],
    },
  ];

  const currentTab = showcaseTabs.find((t) => t.id === activeTab) || showcaseTabs[0];
  const currentScreen = currentTab.screens[activeSubScreen] || currentTab.screens[0];

  return (
    <section id="showcase" className="relative py-24 sm:py-32 bg-[#041712] border-t border-white/10">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#649809]/10 via-[#36AC62]/15 to-[#EBBD57]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Mobile App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Explore Every Screen of <span className="text-gradient-emerald">Dream Dollars</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            Select an area below to experience how Dream Dollars simplifies wealth building, debt elimination, and budgeting inside our iOS & Android app.
          </p>
        </div>

        {/* Tab Navigation Chips */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {showcaseTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveSubScreen(0);
                }}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#649809] to-[#36AC62] text-[#041712] shadow-lg shadow-[#36AC62]/25 scale-105"
                    : "bg-white/[0.04] text-[#EEF8F0]/80 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#041712]" : "text-[#75D47A]"}`} />
                <span>{tab.label}</span>
                {tab.tag && (
                  <span
                    className={`hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-[#041712]/20 text-[#041712]"
                        : "bg-white/10 text-[#EEF8F0]/70"
                    }`}
                  >
                    {tab.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid (Phone Mockup + Feature Details) */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-[36px] p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          {/* Sub-Screen switcher (if tab has multiple screens) */}
          {currentTab.screens.length > 1 && (
            <div className="flex items-center justify-center gap-2 mb-8 pb-6 border-b border-white/10">
              <span className="text-xs text-[#64736A] font-semibold mr-2">Screen View:</span>
              {currentTab.screens.map((screen, idx) => (
                <button
                  key={screen.screenName}
                  onClick={() => setActiveSubScreen(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeSubScreen === idx
                      ? "bg-[#75D47A] text-[#041712] shadow-sm"
                      : "bg-white/5 text-[#EEF8F0]/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {screen.screenName}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Interactive iPhone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <IPhoneFrame
                  src={currentScreen.image}
                  alt={currentScreen.title}
                  key={`${activeTab}-${activeSubScreen}`}
                  scrollable={true}
                  className="animate-in fade-in zoom-in-95 duration-500"
                />
              </div>
            </div>

            {/* Right: Feature Breakdown & Live App Insights */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold uppercase tracking-wider mb-2 border border-[#649809]/30">
                  {currentScreen.screenName}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {currentScreen.title}
                </h3>
                <p className="text-sm sm:text-base text-[#64736A] font-medium mt-2">
                  {currentScreen.subtitle}
                </p>
              </div>

              {/* Real App Metrics Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentScreen.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#053126]/60 border border-[#75D47A]/20 backdrop-blur-md"
                  >
                    <div className="text-[11px] font-bold text-[#64736A] uppercase">
                      {metric.label}
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-white font-heading mt-0.5">
                      {metric.value}
                    </div>
                    <div className="text-[11px] font-semibold text-[#75D47A] mt-0.5">
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Points from Figma Spec */}
              <div className="space-y-3 pt-2">
                {currentScreen.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#36AC62]/20 text-[#75D47A] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#EEF8F0]/85 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Action Button */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A1B15] font-extrabold text-xs sm:text-sm hover:bg-[#F4FFE1] shadow-lg hover:scale-105 transition-all"
                >
                  <span>Experience on Mobile</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-[#64736A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#75D47A]" />
                  Free 14-day trial included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
