"use client";

import { useState } from "react";
import IPhoneFrame from "./IPhoneFrame";
import {
  Sparkles,
  Mic,
  MessageSquare,
  Zap,
  TrendingDown,
  ShieldCheck,
  Bot,
  ArrowRight,
  Headphones,
  CheckCircle,
} from "lucide-react";

export default function AICoachSection() {
  const [activeVoicePrompt, setActiveVoicePrompt] = useState(0);

  const voicePrompts = [
    {
      userVoice: '"Hey Nia, I just spent $42.50 at Trader Joe\'s for groceries."',
      aiReply: 'Logged $42.50 under Food (Needs). You still have $385.60 left in your monthly Food budget!',
      category: 'Instant Voice Expense Logging',
      icon: Mic,
    },
    {
      userVoice: '"Can I afford to spend $200 on new shoes this weekend?"',
      aiReply: 'Your Wants budget has $394.99 available. You can afford it, but saving it saves 1 extra week on your snowball debt goal!',
      category: 'Smart Purchase Advisory',
      icon: Sparkles,
    },
    {
      userVoice: '"How can I crush my car loan 6 months faster?"',
      aiReply: 'Refinancing from 7.2% to 4.5% + adding $75/mo extra drops 7 months off your term and saves $1,280 in interest.',
      category: 'Proactive Refinance Analysis',
      icon: TrendingDown,
    },
  ];

  return (
    <section id="ai-coach" className="relative py-24 sm:py-32 bg-[#051C16] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#649809]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#36AC62]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Features */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-4">
                <Bot className="w-3.5 h-3.5" />
                <span>Certified Financial AI Partner</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
                Meet Coach Nia. <br />
                <span className="text-gradient-emerald">Your 24/7 Personal CFO.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#EEF8F0]/80 leading-relaxed">
                Traditional budgeting apps just show past mistakes. Coach Nia actively helps you make smarter choices in real time—analyzing your debts, protecting your essential needs, and finding money you didn't know you had.
              </p>
            </div>

            {/* Coach Profile Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md flex items-center gap-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#649809] flex items-center justify-center text-white text-xl font-bold shadow-md shadow-[#649809]/40">
                NR
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white font-heading">Nia Roberts</h4>
                  <span className="px-2 py-0.5 rounded-full bg-[#36AC62]/20 text-[#75D47A] text-[10px] font-bold border border-[#36AC62]/40">
                    Certified Financial Coach
                  </span>
                </div>
                <p className="text-xs text-[#64736A] mt-0.5">
                  Trained on fiduciary financial planning, snowball debt strategies, and behavioral psychology.
                </p>
              </div>
            </div>

            {/* Interactive Voice AI Demo Switcher */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-[#64736A] tracking-wider flex items-center gap-2">
                <Mic className="w-3.5 h-3.5 text-[#75D47A]" />
                <span>Test Drive Voice & Conversational AI</span>
              </h4>

              <div className="space-y-2.5">
                {voicePrompts.map((prompt, idx) => {
                  const isSelected = activeVoicePrompt === idx;
                  const Icon = prompt.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveVoicePrompt(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-[#053126] border-[#75D47A]/60 shadow-lg shadow-[#36AC62]/20 scale-[1.02]"
                          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-[#75D47A] flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          {prompt.category}
                        </span>
                        <span className="text-[10px] text-[#64736A] font-semibold">
                          {isSelected ? "Active Demo" : "Click to view"}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white italic">
                        {prompt.userVoice}
                      </div>
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-start gap-2.5 text-xs text-[#EEF8F0]/90 animate-in fade-in duration-300">
                          <div className="w-5 h-5 rounded-full bg-[#649809] text-[#041712] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            NR
                          </div>
                          <p className="leading-relaxed">{prompt.aiReply}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#EEF8F0]/85">
                <CheckCircle className="w-4 h-4 text-[#75D47A]" />
                <span>Zero judgment, 100% actionable</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EEF8F0]/85">
                <CheckCircle className="w-4 h-4 text-[#75D47A]" />
                <span>Hands-free voice expense logging</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EEF8F0]/85">
                <CheckCircle className="w-4 h-4 text-[#75D47A]" />
                <span>Automated refinance savings alerts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EEF8F0]/85">
                <CheckCircle className="w-4 h-4 text-[#75D47A]" />
                <span>Safe read-only financial privacy</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mockup in iPhone */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/financial-coach-chat.png"
                alt="Coach Nia Roberts Chat Interface in iPhone"
                scrollable={true}
                badge={
                  <div className="bg-[#041712] border border-[#75D47A]/50 backdrop-blur-xl p-4 rounded-3xl shadow-2xl text-left max-w-[240px]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#75D47A]">
                      <Sparkles className="w-4 h-4 text-[#EBBD57]" />
                      <span>Smart Surplus Optimization</span>
                    </div>
                    <p className="text-xs text-[#EEF8F0] mt-1.5 leading-snug">
                      Coach Nia found <span className="text-[#75D47A] font-bold">$150/mo</span> in unused subscriptions to accelerate your debt snowball!
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
