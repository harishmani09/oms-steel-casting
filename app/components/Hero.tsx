"use client";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-foundry.jpg"
          alt="Steel foundry background"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/1920x1080/1a1a1a/333333?text=.";
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
        {/* Orange glow effect simulating molten metal */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">
              Adityapur Industrial Hub, Jamshedpur
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            OMS{" "}
            <span className="text-orange-500">Steel</span>
            <br />
            Castings
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
            Precision Casting Solutions
            <br />
            <span className="text-orange-400 font-medium">
              for Heavy Industries
            </span>
          </p>

          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Manufacturing high-quality wear-resistant castings for steel plants,
            cement plants, thermal power, mining, and general engineering
            sectors since inception.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "11+", label: "Product Lines" },
              { value: "6+", label: "Industries Served" },
              { value: "IS:276", label: "Grade Certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-orange-500">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded font-semibold text-base transition-all hover:shadow-lg hover:shadow-orange-600/30 cursor-pointer"
            >
              Request a Quote
            </button>
            <button
              onClick={() => scrollTo("#products")}
              className="border border-zinc-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-3.5 rounded font-semibold text-base transition-all cursor-pointer"
            >
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
