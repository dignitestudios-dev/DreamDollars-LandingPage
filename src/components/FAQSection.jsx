"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: "ASCEND & DreamDollars",
      q: "How does DreamDollars connect with ASCEND?",
      a: "DreamDollars is the digital financial wellness tool powered by ASCEND. It provides a practical, real-time application for the ASCEND curriculum, coaching, and CA$H Framework so you can manage real money, real goals, and real life.",
    },
    {
      category: "CA$H Framework",
      q: "What is the ASCEND CA$H Framework?",
      a: "CA$H stands for Clarity, Alignment, Structure, and Handle. DreamDollars organizes your entire financial life across these four pillars: seeing your total picture, giving every dollar a purpose, creating repeatable systems, and tracking progress into prosperity.",
    },
    {
      category: "Spending Plan",
      q: "What is the Financial Freedom Spending Plan?",
      a: "Rather than restrictive budgeting, the Financial Freedom Spending Plan gives every dollar direction. You categorize expenses, identify leaks, and intentionally redirect surplus money toward savings, debt reduction, or personal goals.",
    },
    {
      category: "Core Features",
      q: "What tools are included in DreamDollars?",
      a: "The complete toolkit includes the Net Worth Dashboard, Debt Reduction Tracker, Financial Freedom Spending Plan, Purpose-Based Savings Buckets, Expense Categorization, and Milestones & Progress Celebrations.",
    },
    {
      category: "Security & Privacy",
      q: "How is my personal financial data protected?",
      a: "DreamDollars employs bank-grade encryption protocols, verified email/social sign-in, and optional Two-Factor Authentication (2FA). Your data is never sold or monetized.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white border-t border-[#0A4130]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4FFE1] border border-[#0A4130]/15 text-[#0A4130] text-[11px] font-bold uppercase font-minor mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#649809]" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15]">
            Frequently Asked <span className="text-[#649809]">Questions.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64736A]">
            Learn how DreamDollars helps you put ASCEND financial principles into practice.
          </p>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={0.1} className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                layout
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className={`rounded-2xl transition-colors duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-[#F4FFE1]/50 border-[#649809]/40 shadow-xs"
                    : "bg-white border-[#0A4130]/10 hover:border-[#0A4130]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white text-[#0A4130] border border-[#0A4130]/10 font-minor w-fit">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0A1B15]">
                      {faq.q}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-[#0A4130] text-white" : "bg-slate-100 text-[#0A1B15]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25, delay: 0.08 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#64736A] leading-relaxed border-t border-[#0A4130]/10 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
