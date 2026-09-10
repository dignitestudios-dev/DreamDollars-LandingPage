"use client";

import { useState } from "react";
import IPhoneFrame from "./IPhoneFrame";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  CreditCard,
  Target,
  Bot,
  UserCheck,
} from "lucide-react";

export default function OnboardingFlowSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      stepNumber: "Step 01",
      title: "Tell Us About Your Financial Baseline",
      subtitle: "Currency, Identity, & Core Goals",
      desc: "Get started in 30 seconds. Choose your native currency, financial aspirations, and whether you're focusing on debt elimination, aggressive wealth accumulation, or effortless budgeting.",
      image: "/mockups/onboarding-step-1.png",
      icon: UserCheck,
      highlight: "Personalized from Day 1",
    },
    {
      stepNumber: "Step 02",
      title: "Input Your Monthly Income Streams",
      subtitle: "Salaries, Freelance, & Side Hustles",
      desc: "Set up regular pay cycles, freelance revenue, or fluctuating income streams. Dream Dollars automatically computes your baseline disposable income.",
      image: "/mockups/onboarding-step-2.png",
      icon: DollarSign,
      highlight: "Supports Variable Incomes",
    },
    {
      stepNumber: "Step 03",
      title: "List Your Debts & Balances",
      subtitle: "Credit Cards, Student Loans, & Vehicles",
      desc: "Easily input your existing debts, interest rates (APRs), and minimum payments. Coach Nia prepares your custom Snowball attack plan instantly.",
      image: "/mockups/onboarding-step-3.png",
      icon: CreditCard,
      highlight: "Instant Snowball Strategy",
    },
    {
      stepNumber: "Step 04",
      title: "Balance Your Needs vs. Wants",
      subtitle: "Guilt-Free Spending Framework",
      desc: "Establish flexible limits for living essentials (rent, groceries, bills) vs lifestyle luxuries (dining out, travel, entertainment) using our smart 50/30/20 algorithm.",
      image: "/mockups/onboarding-step-4.png",
      icon: Target,
      highlight: "Custom Category Caps",
    },
    {
      stepNumber: "Step 05",
      title: "Lock In Your Savings Targets",
      subtitle: "Emergency Fund & Big Dreams",
      desc: "Set up dedicated savings buckets for 3-6 month emergency buffers, dream vacations, or a home downpayment with automatic progress milestones.",
      image: "/mockups/onboarding-step-5.png",
      icon: Sparkles,
      highlight: "High-Yield Buckets",
    },
    {
      stepNumber: "Step 06",
      title: "Meet Coach Nia & Launch Your Plan",
      subtitle: "Your AI Financial Blueprint is Live",
      desc: "Your customized dashboard is generated! Coach Nia greets you with your first strategic tips, streak tracker, and debt-free target countdown.",
      image: "/mockups/onboarding-step-6.png",
      icon: Bot,
      highlight: "Ready in Under 2 Minutes",
    },
  ];

  const active = steps[currentStep];
  const Icon = active.icon;

  return (
    <section id="onboarding" className="relative py-24 sm:py-32 bg-[#041712] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#649809]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Up & Running in <span className="text-gradient-emerald">6 Simple Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            No complicated spreadsheets or financial jargon. Set up your customized wealth roadmap in under 2 minutes.
          </p>
        </div>

        {/* Step Progress Bar Navigator */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between gap-2 max-w-4xl mx-auto overflow-x-auto no-scrollbar pb-2">
          {steps.map((s, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isCurrent
                    ? "bg-[#75D47A] text-[#041712] shadow-md shadow-[#36AC62]/30 scale-105"
                    : isCompleted
                    ? "bg-[#053126] text-[#75D47A] border border-[#75D47A]/30"
                    : "bg-white/[0.03] text-[#64736A] hover:text-white border border-white/5"
                }`}
              >
                <span>{s.stepNumber}</span>
                <span className="hidden sm:inline-block">
                  {idx === 0
                    ? "Profile"
                    : idx === 1
                    ? "Income"
                    : idx === 2
                    ? "Debts"
                    : idx === 3
                    ? "Budget"
                    : idx === 4
                    ? "Savings"
                    : "Launch"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="mt-10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-[36px] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Interactive Mockup in iPhone */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <IPhoneFrame
                  src={active.image}
                  alt={active.title}
                  key={currentStep}
                  scrollable={false}
                  className="animate-in fade-in zoom-in-95 duration-400"
                />
              </div>
            </div>

            {/* Right: Step Description & Controls */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#649809]/30 border border-[#75D47A]/40 text-[#75D47A] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#75D47A] uppercase tracking-wider">
                    {active.stepNumber} · {active.highlight}
                  </span>
                  <div className="text-xs text-[#64736A] font-medium">{active.subtitle}</div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#EEF8F0]/80 leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {/* Navigation Back & Next Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                  className={`px-5 py-3 rounded-full border text-xs font-bold flex items-center gap-2 transition-all ${
                    currentStep === 0
                      ? "opacity-30 border-white/10 text-white cursor-not-allowed"
                      : "border-white/20 text-white hover:bg-white/10 cursor-pointer"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#649809] to-[#36AC62] text-[#041712] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#36AC62]/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <span>{currentStep === steps.length - 1 ? "Start From Step 1" : "Next Step"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
