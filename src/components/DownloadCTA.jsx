"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Mail, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

export default function DownloadCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="waitlist" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4FFE1] to-[#FFDFAC]/60 border-t border-[#0A4130]/10 overflow-hidden">
      {/* Anchor compatibility for legacy hash references */}
      <div id="contact" className="sr-only" aria-hidden="true" />
      <div id="early-access" className="sr-only" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>JOIN THE WAITLIST</span>
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
              Be the first to know when early access launches and claim exclusive founding member perks.
            </p>
          </div>

          {/* Waitlist Form / Success State */}
          <div className="mt-8 max-w-xl mx-auto">
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#F4FFE1] border border-[#649809]/40 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#649809]/20 text-[#0A4130] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#649809]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A1B15]">You&apos;re on the list! 🎉</h3>
                <p className="text-xs sm:text-sm text-[#64736A] mt-1.5 max-w-md mx-auto">
                  Thank you for joining. We&apos;ve reserved your early access spot and will notify <strong className="text-[#0A4130]">{email}</strong> as soon as we open the doors.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail("");
                  }}
                  className="mt-4 text-xs font-bold text-[#0A4130] hover:text-[#649809] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5 bg-white p-2 rounded-2xl sm:rounded-full border-2 border-[#0A4130]/15 focus-within:border-[#649809] shadow-sm transition-all">
                  <div className="relative flex-1 flex items-center pl-3.5 pr-2">
                    <Mail className="w-5 h-5 text-[#64736A] shrink-0 mr-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full text-xs sm:text-sm bg-transparent border-none outline-none text-[#0A1B15] placeholder:text-[#64736A]/70 py-2 sm:py-2.5 font-medium"
                      aria-label="Email address for waitlist"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3 rounded-xl sm:rounded-full bg-[#0A4130] hover:bg-[#649809] text-white hover:text-[#0A1B15] font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 disabled:opacity-70 cursor-pointer shrink-0"
                  >
                    <span>{isLoading ? "Joining..." : "Join Waitlist"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust Badges / Perks */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#64736A] font-medium pt-1">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#649809]" />
                    <span>No spam, guaranteed</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#649809]" />
                    <span>Early beta access</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>Instant priority notification</span>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


