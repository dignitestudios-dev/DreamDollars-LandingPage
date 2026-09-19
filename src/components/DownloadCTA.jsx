"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Mail } from "lucide-react";
import FadeIn from "./FadeIn";

export default function DownloadCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4FFE1] to-[#FFDFAC]/60 border-t border-[#0A4130]/10 overflow-hidden">
      <div id="early-access" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#0A4130]/15 shadow-xl text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDFAC]/50 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4FFE1] rounded-full blur-[80px] pointer-events-none" />

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white border border-[#0A4130]/10 shadow-sm p-2">
              <Image
                src="/logo.png"
                alt="DreamDollars Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFDFAC] border border-[#0A4130]/15 text-[#0A4130] text-xs font-bold uppercase font-minor tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
            <span>DREAMDOLLARS IS LAUNCHING SOON</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B15] tracking-tight leading-tight max-w-2xl mx-auto">
            Your Dreams Need Dollars. <br />
            <span className="text-[#649809]">Your Dollars Need Direction.</span>
          </h2>

          {/* Description */}
          <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#64736A] max-w-xl mx-auto leading-relaxed">
            <p>
              DreamDollars is the digital financial wellness tool designed to help you put the principles of ASCEND into practice—one decision, one dollar, and one goal at a time.
            </p>
            <p className="font-bold text-[#0A4130]">
              Get clear. Create structure. Align your money. Build your prosperity.
            </p>
          </div>

          {/* Email Waitlist Form */}
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-[#64736A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-[#0A4130]/20 bg-[#F4FFE1]/30 focus:bg-white focus:outline-none focus:border-[#0A4130] text-xs sm:text-sm text-[#0A1B15] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-full bg-[#0A4130] hover:bg-[#649809] text-white hover:text-[#0A1B15] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>JOIN THE DREAMDOLLARS WAITLIST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-3 rounded-xl bg-[#F4FFE1] border border-[#649809]/30 text-xs text-[#0A4130] font-bold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-[#649809] shrink-0" />
                <span>You&apos;re on the DreamDollars waitlist! We will notify you first at launch.</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

