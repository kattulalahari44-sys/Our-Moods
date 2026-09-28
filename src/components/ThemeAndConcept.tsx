import React from 'react';
import { Leaf, DollarSign, Layout, Repeat, Check, X } from 'lucide-react';

export const ThemeAndConcept: React.FC = () => {
  return (
    <section id="concept" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#fbfaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            The Café Paradigm Shift
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            Rethinking the coffee shop for modern student life.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            Most commercial cafés treat students as unwanted table squatters who order one latte and nurse it for six hours. Kinetic Grounds inverts this: we designed an entire ecosystem around extended creative focus, transparent low prices, and regenerative community habits.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#e4dfd4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e7eee8] text-[#2d4a3e] flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26]">
                Biophilic Sanctuaries
              </h3>
              <p className="mt-2 text-sm text-[#4d5c52] leading-relaxed">
                Over 80 living air-purifying plant varieties, skylight sun wells, and circadian warmth lamps prevent screen fatigue during long study sessions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#2d4a3e]">
              <span>Proven 24% stress reduction</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#e4dfd4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f9eee2] text-[#c97a3e] flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26]">
                Student-First Pricing
              </h3>
              <p className="mt-2 text-sm text-[#4d5c52] leading-relaxed">
                $3.50 all-day drip refills with your own cup, $5 warm focaccias, and free filtered sparkling alkaline water on tap for everyone. No $9 drink gouging.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#c97a3e]">
              <span>Fair margins, high daily volume</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#e4dfd4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e8eaf0] text-[#364968] flex items-center justify-center mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26]">
                Decibel-Zoned Layout
              </h3>
              <p className="mt-2 text-sm text-[#4d5c52] leading-relaxed">
                No more wondering if you can talk or if typing is too loud. Clearly contracted zones: Library-silent focus pods, collaborative design tables, and social steps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#364968]">
              <span>100W USB-C PD at every seat</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#e4dfd4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e5f1ec] text-[#20634b] flex items-center justify-center mb-4">
                <Repeat className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26]">
                Closed-Loop Circularity
              </h3>
              <p className="mt-2 text-sm text-[#4d5c52] leading-relaxed">
                Zero disposable paper cups. Oat milk on draft kegs. Spent espresso pucks transformed into free dorm plant fertilizer for students.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#20634b]">
              <span>100% deposit or BYOC model</span>
            </div>
          </div>
        </div>

        {/* The Comparison Matrix: Ordinary Cafe vs Kinetic Grounds */}
        <div className="mt-14 bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ece7dc]">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1b2e26]">
                The Direct Comparison
              </h3>
              <p className="text-sm text-[#5a6860] mt-0.5">
                Why standard coffee chains fail the modern student experience
              </p>
            </div>
            <div className="text-xs text-[#5a6860] font-medium">
              Verified campus survey of 650 university students
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#f0ede6] text-xs font-semibold text-[#66736a] uppercase tracking-wider">
                  <th className="py-3 pr-4">Dimension</th>
                  <th className="py-3 px-4 text-[#8a5d5d]">Traditional Coffee Chain</th>
                  <th className="py-3 pl-4 text-[#2d4a3e] bg-[#f4f7f4] rounded-t-lg">Kinetic Grounds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2efe8]">
                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1b2e26]">Power & Connectivity</td>
                  <td className="py-3.5 px-4 text-[#665e5e] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>2 hidden wall outlets taped over or fought over</span>
                  </td>
                  <td className="py-3.5 pl-4 font-semibold text-[#1b2e26] bg-[#f4f7f4]">
                    <div className="flex items-center gap-1.5 text-[#2d4a3e]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated 100W USB-C PD & AC at 100% of seats</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1b2e26]">Pricing on Refills</td>
                  <td className="py-3.5 px-4 text-[#665e5e] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Full price ($6.50+) for every new cup</span>
                  </td>
                  <td className="py-3.5 pl-4 font-semibold text-[#1b2e26] bg-[#f4f7f4]">
                    <div className="flex items-center gap-1.5 text-[#2d4a3e]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>$3.50 All-Day Refill Passport with BYOC tumbler</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1b2e26]">Acoustic Environment</td>
                  <td className="py-3.5 px-4 text-[#665e5e] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Clattering blenders, steam wands, chaotic shouting</span>
                  </td>
                  <td className="py-3.5 pl-4 font-semibold text-[#1b2e26] bg-[#f4f7f4]">
                    <div className="flex items-center gap-1.5 text-[#2d4a3e]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>4 distinct decibel zones + soundproof pods</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1b2e26]">Waste & Footprint</td>
                  <td className="py-3.5 px-4 text-[#665e5e] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>500+ plastic-lined cups trashed per store daily</span>
                  </td>
                  <td className="py-3.5 pl-4 font-semibold text-[#1b2e26] bg-[#f4f7f4]">
                    <div className="flex items-center gap-1.5 text-[#2d4a3e]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero single-use paper cups; 100% circular system</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1b2e26]">Customer Welcoming</td>
                  <td className="py-3.5 px-4 text-[#665e5e] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Wi-Fi cut after 90 mins, uncomfy hard wood stools</span>
                  </td>
                  <td className="py-3.5 pl-4 font-semibold text-[#1b2e26] bg-[#f4f7f4] rounded-b-lg">
                    <div className="flex items-center gap-1.5 text-[#2d4a3e]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Ergonomic chairs, free loaner chargers, open till 12 AM</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
