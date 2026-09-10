import { useState } from "react";
import Image from "next/image";
import { Bell, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import FadeIn from "./FadeIn";

export default function DownloadCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail("");
    }
  };

  return (
    <section id="early-access" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4FFE1] to-[#FFDFAC]/60 border-t border-[#0A4130]/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#0A4130]/15 shadow-xl text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDFAC]/50 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4FFE1] rounded-full blur-[80px] pointer-events-none" />

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white   ">
              <Image
                src="/logo.png"
                alt="Dream Dollars Logo"
                width={156}
                height={156}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Coming Soon Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFDFAC] border border-[#0A4130]/15 text-[#0A4130] text-xs font-bold uppercase font-minor tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#0A4130]" />
            <span>Coming Soon</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B15] tracking-tight leading-tight max-w-xl mx-auto">
            Dream Dollars is <span className="text-[#649809]">Launching Soon.</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#64736A] max-w-md mx-auto leading-relaxed">
            We are putting the finishing touches on the mobile app. 
          </p>

          {/* Email Waitlist Form */}
          <div className="mt-7 max-w-md mx-auto">
            {submitted && (
              <div className="mt-3 text-xs text-[#0A4130] font-bold flex items-center justify-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-[#649809]" />
                <span>You are on the early access list! We will notify you at launch.</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
