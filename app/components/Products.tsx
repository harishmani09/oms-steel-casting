"use client";

const products = [
  {
    name: "Blow Bars",
    material: "IS:276 / High Chrome",
    desc: "High-impact blow bars for impact crushers used in aggregate and mineral processing.",
    img: "/images/product-blow-bars.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Blow+Bars",
    tag: "High Chrome",
  },
  {
    name: "Beaters",
    material: "IS:276 / High Chrome",
    desc: "Impact beaters for hammer mills and coal crushers, engineered for maximum wear life.",
    img: "/images/product-beaters.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Beaters",
    tag: "Impact Grade",
  },
  {
    name: "Hammers",
    material: "IS:276",
    desc: "Crusher hammers in IS:276 grade for coal, limestone, and ore crushing applications.",
    img: "/images/product-hammers.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Hammers",
    tag: "IS:276",
  },
  {
    name: "Grinding Media",
    material: "Hyper Steel / High Chrome",
    desc: "Precision cast grinding balls for ball mills used in cement and mining industries.",
    img: "/images/product-grinding-media.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Grinding+Media",
    tag: "Hyper Steel",
  },
  {
    name: "Cylpebs",
    material: "Hyper Steel / High Chrome",
    desc: "Cylindrical grinding media (cylpebs) for fine grinding in cement and mineral processing.",
    img: "/images/product-cylpebs.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Cylpebs",
    tag: "Hyper Steel",
  },
  {
    name: "Jaw Plates",
    material: "Manganese Steel",
    desc: "High manganese steel jaw plates for primary and secondary jaw crushers.",
    img: "/images/product-jaw-plates.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Jaw+Plates",
    tag: "Mn Steel",
  },
  {
    name: "Liners",
    material: "IS:276 / High Chrome",
    desc: "Mill liners in high chrome and IS:276 grade for ball mills and tube mills.",
    img: "/images/product-liners.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Liners",
    tag: "High Chrome",
  },
  {
    name: "Grinding Ribs",
    material: "IS:276 / High Chrome",
    desc: "Cast grinding ribs for vertical mills and roller presses in cement production.",
    img: "/images/product-grinding-ribs.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Grinding+Ribs",
    tag: "High Chrome",
  },
  {
    name: "Ring Hammers",
    material: "IS:276",
    desc: "Durable ring hammers for ring hammer mills in coal and limestone crushing.",
    img: "/images/product-ring-hammers.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Ring+Hammers",
    tag: "IS:276",
  },
  {
    name: "Side Plates",
    material: "IS:276",
    desc: "Wear-resistant side plates for crushers and mills in heavy industrial applications.",
    img: "/images/product-side-plates.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Side+Plates",
    tag: "IS:276",
  },
  {
    name: "Toothed Rollers",
    material: "IS:276",
    desc: "Heavy-duty toothed rollers for shredders, crushers, and material handling equipment.",
    img: "/images/product-toothed-rollers.jpg",
    fallback: "https://placehold.co/400x280/1a1a1a/2d2d2d?text=Toothed+Rollers",
    tag: "IS:276",
  },
];

const tagColors: Record<string, string> = {
  "High Chrome": "bg-orange-900/40 text-orange-400 border-orange-700/40",
  "IS:276": "bg-blue-900/40 text-blue-400 border-blue-700/40",
  "Mn Steel": "bg-green-900/40 text-green-400 border-green-700/40",
  "Hyper Steel": "bg-purple-900/40 text-purple-400 border-purple-700/40",
  "Impact Grade": "bg-red-900/40 text-red-400 border-red-700/40",
};

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Engineered for{" "}
            <span className="text-orange-500">Extreme Performance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            All castings are manufactured using premium alloy grades — High
            Chrome, Hyper Steel, Manganese Steel, and IS:276 — to deliver
            maximum wear resistance and service life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-orange-600/50 hover:shadow-xl hover:shadow-zinc-900/80 transition-all group"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = product.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-base">
                    {product.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border whitespace-nowrap ${tagColors[product.tag] ?? "bg-zinc-700 text-gray-300"}`}
                  >
                    {product.tag}
                  </span>
                </div>
                <p className="text-orange-500/80 text-xs font-medium mb-2">
                  {product.material}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 border border-orange-600/50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p className="text-white font-bold text-base mb-2">
              Custom Requirements?
            </p>
            <p className="text-orange-200 text-xs mb-5">
              We manufacture castings as per your drawings and specifications.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-orange-700 font-bold text-sm px-5 py-2.5 rounded hover:bg-orange-50 transition-colors cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
