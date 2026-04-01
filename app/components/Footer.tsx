const productLinks = [
  "Blow Bars",
  "Beaters",
  "Hammers",
  "Grinding Media",
  "Cylpebs",
  "Jaw Plates",
  "Liners",
  "Grinding Ribs",
  "Ring Hammers",
  "Side Plates",
  "Toothed Rollers",
];

const industryLinks = [
  "Steel Plants",
  "Cement Plants",
  "Thermal Power",
  "Sugar Mills",
  "Mining",
  "General Engineering",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-black text-white text-lg">
                OMS
              </div>
              <div>
                <p className="font-bold text-white text-sm">OMS Steel Castings</p>
                <p className="text-orange-400 text-xs">Jamshedpur</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Precision wear-resistant castings for India&apos;s heavy industries.
              Trusted by steel, cement, power, and mining sectors.
            </p>
            <p className="text-gray-600 text-xs">
              IS:276 | High Chrome | Mn Steel | Hyper Steel
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.slice(0, 7).map((p) => (
                <li key={p}>
                  <span className="text-gray-500 text-xs hover:text-orange-400 transition-colors cursor-default">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((i) => (
                <li key={i}>
                  <span className="text-gray-500 text-xs hover:text-orange-400 transition-colors cursor-default">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li>
                Shakuntala Palace, Behind M.P. Complex,
                <br />
                Shere Punjab, Dindli Basti Road,
                <br />
                Adityapur – 831013, Jharkhand
              </li>
              <li>
                <a
                  href="tel:06572200331"
                  className="hover:text-orange-400 transition-colors"
                >
                  0657-2200331
                </a>
              </li>
              <li>
                <a
                  href="tel:+917488396229"
                  className="hover:text-orange-400 transition-colors"
                >
                  +91 74883 96229
                </a>
              </li>
              <li>
                <a
                  href="mailto:omssteelcasting@gmail.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  omssteelcasting@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} OMS Steel Castings. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Adityapur Industrial Area, Jamshedpur, Jharkhand, India
          </p>
        </div>
      </div>
    </footer>
  );
}
