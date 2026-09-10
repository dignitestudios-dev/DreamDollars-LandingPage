"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveAppShowcase from "@/components/InteractiveAppShowcase";
import AICoachSection from "@/components/AICoachSection";
import DebtSnowballSection from "@/components/DebtSnowballSection";
import BudgetAnalyticsSection from "@/components/BudgetAnalyticsSection";
import OnboardingFlowSection from "@/components/OnboardingFlowSection";
import DebtCalculator from "@/components/DebtCalculator";
import GamificationSection from "@/components/GamificationSection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#041712] text-[#EEF8F0] overflow-x-hidden selection:bg-[#36AC62]/30 selection:text-[#EEF8F0]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero with 3D iPhone Presentation */}
        <Hero />

        {/* Interactive App Screen Switcher (All Mockups) */}
        <InteractiveAppShowcase />

        {/* Feature Deep Dive 1: AI Coach Nia & Voice AI */}
        <AICoachSection />

        {/* Feature Deep Dive 2: Debt Snowball Accelerator */}
        <DebtSnowballSection />

        {/* Feature Deep Dive 3: Needs vs. Wants Budgeting */}
        <BudgetAnalyticsSection />

        {/* Feature Deep Dive 4: 6-Step Onboarding Walkthrough */}
        <OnboardingFlowSection />

        {/* Interactive Debt Freedom & Interest Savings Calculator */}
        <DebtCalculator />

        {/* Gamification & Trophy Badges */}
        <GamificationSection />

        {/* Enterprise Security & Privacy Assurance */}
        <SecuritySection />

        {/* Real Customer Success Stories */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Download App & SMS Link Dispatcher */}
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
