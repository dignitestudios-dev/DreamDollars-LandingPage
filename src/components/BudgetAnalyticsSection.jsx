"use client";

import IPhoneFrame from "./IPhoneFrame";
import {
  PieChart,
  Shield,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Wallet,
  ShoppingBag,
  Home,
  Utensils,
  Car,
  Tv,
  HeartPulse,
  Lightbulb,
} from "lucide-react";

export default function BudgetAnalyticsSection() {
  const categories = [
    { name: "Rent & Housing", spent: "$1,750", limit: "$1,800", percent: 97, color: "#36AC62", icon: Home },
    { name: "Food & Dining", spent: "$214.40", limit: "$600", percent: 35, color: "#00BCC5", icon: Utensils },
    { name: "Shopping", spent: "$320.00", limit: "$400", percent: 80, color: "#EBBD57", icon: ShoppingBag },
    { name: "Utilities", spent: "$189.00", limit: "$220", percent: 85, color: "#966CD7", icon: Lightbulb },
    { name: "Entertainment", spent: "$74.99", limit: "$180", percent: 41, color: "#EF6661", icon: Tv },
    { name: "Transportation", spent: "$62.15", limit: "$200", percent: 31, color: "#649809", icon: Car },
    { name: "Healthcare", spent: "$96.30", limit: "$150", percent: 64, color: "#36AC62", icon: HeartPulse },
    { name: "Bills & Subscriptions", spent: "$0.00", limit: "$260", percent: 0, color: "#0A4130", icon: Wallet },
  ];

  return (
    <section id="budgeting" className="relative py-24 sm:py-32 bg-[#051C16] border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#00BCC5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Category Limits */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00BCC5]/20 text-[#00BCC5] text-xs font-bold border border-[#00BCC5]/40 mb-4">
                <PieChart className="w-3.5 h-3.5" />
                <span>Zero-Based Needs vs. Wants Budgeting</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
                Know Exactly Where <br />
                <span className="text-gradient-emerald">Every Dollar Goes.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#EEF8F0]/80 leading-relaxed">
                Stop guessing how much you can spend. Dream Dollars dynamically divides your budget into essential Needs and guilt-free Wants, warning you before you overspend.
              </p>
            </div>

            {/* Needs vs Wants Overview Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#36AC62]" />
                    <span>🛡️ Essential Needs</span>
                  </span>
                  <span className="text-xs text-[#75D47A] font-extrabold">72% Used</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-heading">
                  $2,311.85{" "}
                  <span className="text-xs font-medium text-[#64736A]">/ $3,200</span>
                </div>
                <div className="w-full bg-[#041712] h-2.5 rounded-full mt-3 overflow-hidden p-0.5 border border-white/10">
                  <div className="bg-[#36AC62] h-full rounded-full w-[72%]" />
                </div>
                <p className="text-[11px] text-[#64736A] mt-2">Rent, Utilities, Food & Prescriptions</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#EBBD57]" />
                    <span>✨ Guilt-Free Wants</span>
                  </span>
                  <span className="text-xs text-[#EBBD57] font-extrabold">36% Used</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-heading">
                  $394.99{" "}
                  <span className="text-xs font-medium text-[#64736A]">/ $1,100</span>
                </div>
                <div className="w-full bg-[#041712] h-2.5 rounded-full mt-3 overflow-hidden p-0.5 border border-white/10">
                  <div className="bg-[#EBBD57] h-full rounded-full w-[36%]" />
                </div>
                <p className="text-[11px] text-[#64736A] mt-2">Shopping, Dining out & Entertainment</p>
              </div>
            </div>

            {/* Category Limits Grid */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-[#64736A] tracking-wider">
                Live Category Limits (Synchronized with Bank Feeds)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-white">{cat.name}</span>
                        </div>
                        <span className="font-bold text-[#EEF8F0]">
                          {cat.spent}{" "}
                          <span className="text-[10px] text-[#64736A]">/ {cat.limit}</span>
                        </span>
                      </div>
                      <div className="w-full bg-[#041712] h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(cat.percent, 100)}%`,
                            backgroundColor: cat.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: iPhone Mockup for Expense.png */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/Expense.png"
                alt="Dream Dollars Expense Category Limits Screen"
                scrollable={true}
                badge={
                  <div className="bg-[#053126] border border-[#00BCC5]/40 backdrop-blur-xl p-4 rounded-3xl shadow-2xl text-left max-w-[220px]">
                    <div className="text-[10px] uppercase font-bold text-[#00BCC5]">
                      Left to Spend This Month
                    </div>
                    <div className="text-2xl font-extrabold text-white font-heading mt-0.5">
                      $953.16
                    </div>
                    <p className="text-[11px] text-[#75D47A] font-semibold mt-1">
                      Surplus automatically rolls to savings!
                    </p>
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
