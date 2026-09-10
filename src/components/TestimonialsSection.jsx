"use client";

import { Star, Quote, CheckCircle2, TrendingUp, Trophy } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Amara Bennett",
      role: "Product Designer · amara@dreamdollars.app",
      debtEliminated: "$27,490 Paid Off",
      netWorth: "$396,527 Net Worth",
      quote:
        "Dream Dollars literally changed my life. I went from feeling overwhelmed by high-APR card balances to having an automated snowball plan. Coach Nia gave me real tips that saved me $1,280 on my car loan in the first week!",
      rating: 5,
      avatar: "AB",
      badge: "Debt Free Hero",
    },
    {
      name: "Marcus Vance",
      role: "Software Engineer",
      debtEliminated: "$18,200 Paid Off",
      netWorth: "$142,000 Net Worth",
      quote:
        "The Needs vs Wants framework is genius. Other budgeting apps made me feel guilty for buying a coffee. Dream Dollars lets me enjoy my Wants while ensuring my snowball and emergency fund are funded automatically.",
      rating: 5,
      avatar: "MV",
      badge: "Snowball Champion",
    },
    {
      name: "Elena & David Chen",
      role: "Homeowners & Investors",
      debtEliminated: "Mortgage Accelerated",
      netWorth: "$520,000 Net Worth",
      quote:
        "Tracking our unified net worth and savings buckets in one mobile view gives us total clarity. The Voice AI feature makes logging on the go effortless. We hit our 60% savings rate goal 4 months early!",
      rating: 5,
      avatar: "EC",
      badge: "Goal Crusher",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#041712] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#649809]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#649809]/20 text-[#75D47A] text-xs font-bold border border-[#649809]/40 mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-[#EBBD57]" />
            <span>Real Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Loved by Thousands of <br />
            <span className="text-gradient-emerald">Debt-Free Wealth Builders</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64736A]">
            Discover how real people are escaping the minimum payment trap and building generational wealth.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-[#75D47A]/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between text-left relative group hover:scale-[1.02]"
            >
              <div>
                {/* Rating & Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#EBBD57]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#36AC62]/20 text-[#75D47A] text-[10px] font-bold border border-[#36AC62]/40">
                    {rev.badge}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-6 text-sm text-[#EEF8F0]/90 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Bio & Milestone Footer */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#649809] to-[#0A4130] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-heading">
                      {rev.name}
                    </div>
                    <div className="text-[11px] text-[#64736A] font-medium">
                      {rev.role}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-bold bg-[#053126]/60 p-2.5 rounded-xl border border-[#75D47A]/20">
                  <span className="text-[#DE3B3D]">{rev.debtEliminated}</span>
                  <span className="text-[#75D47A]">{rev.netWorth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
