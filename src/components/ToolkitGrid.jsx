import FadeIn from "./FadeIn";

export default function ToolkitGrid() {
  const tools = [
    {
      num: "01",
      title: "Net Worth Dashboard",
      description: "Live balance sheet aggregating accounts, property, and debts into one clear view.",
      tag: "Core",
    },
    {
      num: "02",
      title: "Debt Snowball Engine",
      description: "Automated ranking by balance with compounding rollover payments.",
      tag: "Signature",
    },
    {
      num: "03",
      title: "Surplus Rollover Budgeting",
      description: "Category limits where every unspent dollar auto-routes into debt payoff.",
      tag: "Budget",
    },
    {
      num: "04",
      title: "Dedicated Savings Buckets",
      description: "Visual goal allocations for emergencies, travel, and future milestones.",
      tag: "Savings",
    },
    {
      num: "05",
      title: "Fast Expense Categorization",
      description: "Log and visualize daily outflows to catch spending leaks early.",
      tag: "Tracking",
    },
    {
      num: "06",
      title: "Gamified Badges & Milestones",
      description: "Earn unlockable victory badges and track consistency streaks as you crush debt.",
      tag: "Rewards",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#F4FFE1]/50 border-t border-b border-[#0A4130]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#649809] font-minor">
              Toolkit
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] mt-1.5">
              Built for <span className="text-[#649809]">Real Results.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64736A] max-w-sm leading-relaxed">
            Eliminating financial anxiety with structured momentum and zero guesswork.
          </p>
        </FadeIn>

        {/* 6 Clean Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tools.map((tool, index) => (
            <FadeIn
              key={tool.num}
              delay={index * 0.05}
              className="p-6 rounded-2xl bg-white border border-[#0A4130]/10 shadow-xs hover:border-[#649809]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#649809] font-minor tracking-wider">
                    {tool.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#F4FFE1] text-[#0A4130] font-minor">
                    {tool.tag}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0A1B15] group-hover:text-[#0A4130] transition-colors mb-2">
                  {tool.title}
                </h3>

                <p className="text-xs text-[#64736A] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#64736A]">
                <span className="text-[11px]">Included in App</span>
                <span className="text-[#0A4130] group-hover:text-[#649809] font-bold">&rarr;</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
