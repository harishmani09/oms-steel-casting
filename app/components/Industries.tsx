const industries = [
  {
    name: "Steel Manufacturing Plants",
    icon: "🏗️",
    desc: "Blow bars, liners, hammers, and grinding ribs for steel production equipment",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Cement Plants",
    icon: "🏭",
    desc: "Grinding media, cylpebs, jaw plates, and wear liners for cement grinding mills",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Thermal Power Plants",
    icon: "⚡",
    desc: "High-chrome and IS:276 grade castings for coal handling and crushing systems",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Sugar Mills",
    icon: "🌾",
    desc: "Durable castings for sugar processing equipment and cane crushing machinery",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "Mining Industry",
    icon: "⛏️",
    desc: "Heavy-duty jaw plates, toothed rollers, and beaters for mining and ore processing",
    color: "from-zinc-800 to-zinc-900",
  },
  {
    name: "General Engineering",
    icon: "🔧",
    desc: "Custom castings for OEM manufacturers and MRO requirements across sectors",
    color: "from-zinc-800 to-zinc-900",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Trusted Across{" "}
            <span className="text-orange-500">Heavy Industries</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our wear-resistant castings are relied upon by some of India&apos;s
            most demanding industrial operations for consistent performance and
            longevity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`bg-gradient-to-br ${industry.color} border border-zinc-700 rounded-xl p-6 hover:border-orange-600/60 hover:shadow-lg hover:shadow-orange-900/20 transition-all group`}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
