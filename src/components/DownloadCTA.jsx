"use client";

import { useState } from "react";
import { Download, Sparkles, Smartphone, ArrowRight, CheckCircle2, ShieldCheck, QrCode } from "lucide-react";

export default function DownloadCTA() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setPhoneNumber("");
    }
  };

  return (
    <section id="download" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#041712] via-[#05261D] to-[#041712] border-t border-white/10 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-gradient-to-br from-[#649809]/25 via-[#36AC62]/30 to-[#EBBD57]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-[#053126] to-[#001914] border border-[#75D47A]/30 rounded-[40px] p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle watermark background logo */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-5 pointer-events-none">
            <img src="/logo.png" alt="Dream Dollars Watermark" className="w-full h-full object-contain" />
          </div>

          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#EBBD57]" />
            <span>Available on iOS & Android</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Your Debt-Free, Wealth-Building Future Starts <span className="text-gradient-emerald">Right Now.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#EEF8F0]/80 max-w-2xl mx-auto leading-relaxed">
            Download Dream Dollars today and let Coach Nia guide you to faster debt freedom, smart budgeting, and real-time net worth growth.
          </p>

          {/* App Store & Google Play Download Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Apple App Store Button */}
            <a
              href="#"
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black border border-white/20 hover:border-white/40 shadow-xl hover:scale-105 transition-all text-left group"
            >
              <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 1.01-2.84-.89.04-1.98.6-2.61 1.34-.56.64-1.04 1.71-1.01 2.74 1 .08 2-.5 2.61-1.24z" />
              </svg>
              <div>
                <div className="text-[10px] text-white/70 font-medium uppercase tracking-wider">
                  Download on the
                </div>
                <div className="text-sm font-bold text-white font-heading">
                  Apple App Store
                </div>
              </div>
            </a>

            {/* Google Play Store Button */}
            <a
              href="#"
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black border border-white/20 hover:border-white/40 shadow-xl hover:scale-105 transition-all text-left group"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M3.609 1.814L13.792 12 3.61 22.186a2.224 2.224 0 0 1-.61-1.58V3.394c0-.606.224-1.168.609-1.58z"
                />
                <path
                  fill="#FBBC04"
                  d="M17.556 8.236l-3.764 3.764 3.764 3.764 4.248-2.428a1.69 1.69 0 0 0 0-2.672l-4.248-2.428z"
                />
                <path
                  fill="#34A853"
                  d="M13.792 12L3.609 22.186c.412.448 1.01.734 1.674.734.468 0 .914-.14 1.288-.354l10.985-6.33-3.764-3.764z"
                />
                <path
                  fill="#EA4335"
                  d="M13.792 12l3.764-3.764L6.571 1.906A2.32 2.32 0 0 0 5.283 1.55c-.664 0-1.262.286-1.674.734L13.792 12z"
                />
              </svg>
              <div>
                <div className="text-[10px] text-white/70 font-medium uppercase tracking-wider">
                  Get it on
                </div>
                <div className="text-sm font-bold text-white font-heading">
                  Google Play Store
                </div>
              </div>
            </a>
          </div>

          {/* SMS / Email Download Dispatcher Form */}
          <div className="mt-10 max-w-md mx-auto pt-8 border-t border-white/10">
            <div className="text-xs text-[#64736A] font-semibold mb-3">
              Or send an instant download link directly to your phone:
            </div>
            <form onSubmit={handleSendLink} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter email or phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full bg-black/40 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#75D47A]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-[#649809] hover:bg-[#75D47A] text-[#041712] text-xs font-extrabold transition-all shrink-0 cursor-pointer shadow-md"
              >
                Send Link
              </button>
            </form>
            {submitted && (
              <div className="mt-3 text-xs text-[#75D47A] font-bold flex items-center justify-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Link sent! Check your inbox or SMS.</span>
              </div>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EEF8F0]/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#75D47A]" /> Free 14-Day Full Access
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#75D47A]" /> No Credit Card Required Upfront
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EBBD57]" /> Cancel Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
