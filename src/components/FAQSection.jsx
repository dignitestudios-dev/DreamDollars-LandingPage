"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How is my Net Worth calculated?",
      a: "Your Net Worth is calculated in real time by summing all your confirmed assets (cash in savings buckets, high-yield accounts, investment portfolios, and property equity) and subtracting all outstanding liabilities (credit card balances, auto loans, personal loans, and student debt).",
    },
    {
      q: "Can I change my snowball debt payoff order?",
      a: "Yes! By default, Dream Dollars uses the classic Snowball Method (sorting from smallest balance to largest) because it provides fast psychological momentum. However, you can switch to the Avalanche Method (highest interest APR first) or set a custom payoff priority anytime in your settings.",
    },
    {
      q: "Does the Voice AI Assistant move real money?",
      a: "No. The Voice AI Assistant (Coach Nia) is strictly for expense logging, checking budget headroom, and strategic advisory. Dream Dollars operates on secure read-only bank feeds and will never initiate external bank transfers without explicit multi-factor verification.",
    },
    {
      q: "What happens to my monthly budget surplus?",
      a: "When you spend less than your allocated Needs and Wants limits, your surplus is highlighted on your dashboard. With one tap, you can auto-route this surplus directly to your active snowball debt target or your high-yield emergency fund bucket.",
    },
    {
      q: "Is my personal and financial data private?",
      a: "100% yes. Dream Dollars utilizes bank-grade 256-bit AES encryption with biometric FaceID/TouchID security. We do not sell your data, monetize your transaction history, or share your profile with advertising brokers.",
    },
    {
      q: "How does Coach Nia give personalized financial tips?",
      a: "Coach Nia analyzes your real transaction patterns, interest rates, and budget category limits. She identifies high-interest refinance opportunities, subscription leaks, and surplus allocation strategies tailored specifically to your financial goals.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#051C16] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#649809]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            Have questions about Dream Dollars? Here are answers to the most common questions from our community.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#041712] border-[#75D47A]/40 shadow-xl shadow-[#36AC62]/10"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-heading">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#649809] text-[#041712] rotate-180"
                        : "bg-white/5 text-white/70"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#EEF8F0]/80 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#649809]/30 text-[#75D47A] flex items-center justify-center font-bold">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">Still have questions?</div>
              <div className="text-xs text-[#64736A]">Our certified advisory team is always ready to assist.</div>
            </div>
          </div>
          <a
            href="mailto:support@dreamdollars.app"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-colors whitespace-nowrap"
          >
            Message Support →
          </a>
        </div>
      </div>
    </section>
  );
}
