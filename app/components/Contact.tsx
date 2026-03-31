"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = new URLSearchParams({
      "form-name": "contact",
      ...form,
    }).toString();
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Request a{" "}
            <span className="text-orange-500">Quote</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your requirements and we&apos;ll get back to you with
            pricing and availability. Custom orders welcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-6">
              <h3 className="text-white font-bold text-lg mb-6">
                Office Address
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Shakuntala Palace, Behind M.P. Complex
                      <br />
                      Shere Punjab, Dimna Basti Road
                      <br />
                      Adityapur – 831013
                      <br />
                      Jharkhand, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">
                      0657-2200331
                    </p>
                    <p className="text-gray-400 text-sm">
                      +91 74883 96229
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      omssteelcasting@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-zinc-800 h-56 bg-zinc-900 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-10 h-10 text-zinc-700 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-zinc-600 text-sm">
                  Adityapur, Jamshedpur
                </p>
                <p className="text-zinc-700 text-xs">Jharkhand, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thank you for your enquiry. We&apos;ll respond within 24
                  business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a product...</option>
                    <option>Blow Bars</option>
                    <option>Beaters</option>
                    <option>Hammers</option>
                    <option>Grinding Media</option>
                    <option>Cylpebs</option>
                    <option>Jaw Plates</option>
                    <option>Liners</option>
                    <option>Grinding Ribs</option>
                    <option>Ring Hammers</option>
                    <option>Side Plates</option>
                    <option>Toothed Rollers</option>
                    <option>Custom Casting</option>
                    <option>Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">
                    Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement — quantity, material grade, dimensions, application..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-gray-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg text-sm transition-colors hover:shadow-lg hover:shadow-orange-600/30 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
