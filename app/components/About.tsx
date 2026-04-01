"use client";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/about-foundry.jpg"
                alt="OMS Steel Castings foundry operations"
                className="w-full h-80 lg:h-[420px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/700x500/1c1c1c/2a2a2a?text=Foundry+Operations";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-transparent to-orange-900/20" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-700 rounded-lg p-5 shadow-xl">
              <p className="text-orange-500 font-black text-3xl">IS:276</p>
              <p className="text-gray-400 text-xs mt-1">Grade Steel Castings</p>
            </div>
            {/* Accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-600 via-orange-400 to-transparent rounded-full" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
              About OMS Steel Castings
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Built on Industrial{" "}
              <span className="text-orange-500">Precision</span> &amp; Proven
              Durability
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              OMS Steel Castings is a Jamshedpur-based steel foundry located in
              Adityapur, established to support the ongoing maintenance and
              critical operational requirements of heavy industries across India.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We specialize in manufacturing high-quality wear-resistant
              castings that perform under extreme working conditions. Our
              products are trusted by steel plants, cement manufacturers,
              thermal power plants, and mining operations for their consistency,
              durability, and precision engineering.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "⚙️",
                  title: "Custom Manufacturing",
                  desc: "Castings as per client drawings",
                },
                {
                  icon: "🏭",
                  title: "Industrial Hub Location",
                  desc: "Adityapur, Jamshedpur, Jharkhand",
                },
                {
                  icon: "🔩",
                  title: "High Chrome & Mn Steel",
                  desc: "Premium alloy materials used",
                },
                {
                  icon: "📦",
                  title: "Reliable Supply",
                  desc: "Consistent delivery for OEM & MRO",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-orange-600/50 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-white font-semibold text-sm mt-2">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
