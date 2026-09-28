import React, { useState } from 'react';
import { ECO_INITIATIVES, ECO_TUMBLER_IMAGE } from '../data/cafeData';
import { Trees, Recycle, Sprout, ShieldCheck, Calculator } from 'lucide-react';

export const EcoInitiatives: React.FC = () => {
  const [weeklyCoffees, setWeeklyCoffees] = useState<number>(5);

  // Impact calculations
  const cupsDiverted = weeklyCoffees * 50; // 50 weeks/year
  const moneySaved = (weeklyCoffees * 50 * 0.5).toFixed(0); // 50c BYOC discount
  const co2AvoidedKg = (cupsDiverted * 0.11).toFixed(1); // approx 110g CO2 per disposable cup lifecycle

  return (
    <section className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            Closed-Loop Circularity
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            A café where zero trash leaves the door.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            Paper coffee cups are lined with polyethylene plastic that takes 30+ years to decompose and rarely gets recycled. We made a bold design choice: eliminate single-use packaging entirely, replacing it with a community deposit loop.
          </p>
        </div>

        {/* 4 Eco Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECO_INITIATIVES.map((eco, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#ded8cc] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-3xl font-bold font-mono-nums text-[#2d4a3e]">
                  {eco.stat}
                </div>
                <div className="text-xs font-semibold text-[#6d7b72] uppercase tracking-wide mt-0.5">
                  {eco.statLabel}
                </div>
                <h3 className="font-display text-base font-bold text-[#1b2e26] mt-4">
                  {eco.title}
                </h3>
                <p className="mt-2 text-xs text-[#4e5c53] leading-relaxed">
                  {eco.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ede6] flex items-center gap-1.5 text-xs text-[#2d4a3e] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Audited monthly</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Impact Calculator & Visual Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          {/* Visual Left */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-[#e8e4da] border border-[#d8d3c5]">
              <img
                src={ECO_TUMBLER_IMAGE}
                alt="Reusable stainless steel coffee tumbler and botanical seeds"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 text-xs text-[#57645b] text-center italic">
              Our 100% deposit tumbler library: borrow on campus, return anywhere.
            </div>
          </div>

          {/* Calculator Right */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Personal Footprint & Savings Calculator</span>
              </div>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#1b2e26]">
                See your annual impact by switching to BYOC.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#505e54]">
                Drag the slider to your average coffee consumption during the academic semester:
              </p>

              {/* Slider */}
              <div className="mt-6 p-4 bg-[#f8f7f4] rounded-xl border border-[#ece8df]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#1b2e26] mb-2">
                  <span>How many coffees / teas per week?</span>
                  <span className="font-mono-nums text-sm text-[#2d4a3e] font-bold">
                    {weeklyCoffees} cups / week
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={weeklyCoffees}
                  onChange={(e) => setWeeklyCoffees(Number(e.target.value))}
                  className="w-full accent-[#2d4a3e] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#78857c] mt-1 font-mono-nums">
                  <span>1 cup</span>
                  <span>7 cups</span>
                  <span>15 cups</span>
                </div>
              </div>

              {/* Impact readout */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#e7eee8] rounded-xl border border-[#c9d9cc]">
                  <span className="block font-display text-xl sm:text-2xl font-bold font-mono-nums text-[#1b2e26]">
                    {cupsDiverted}
                  </span>
                  <span className="text-[11px] text-[#344b3c] font-medium leading-tight block mt-0.5">
                    Paper cups spared
                  </span>
                </div>

                <div className="p-3 bg-[#fdf5eb] rounded-xl border border-[#edd7bf]">
                  <span className="block font-display text-xl sm:text-2xl font-bold font-mono-nums text-[#c97a3e]">
                    ${moneySaved}
                  </span>
                  <span className="text-[11px] text-[#7a481e] font-medium leading-tight block mt-0.5">
                    Saved via BYOC discount
                  </span>
                </div>

                <div className="p-3 bg-[#e8eef6] rounded-xl border border-[#cddbeb]">
                  <span className="block font-display text-xl sm:text-2xl font-bold font-mono-nums text-[#294c77]">
                    {co2AvoidedKg} kg
                  </span>
                  <span className="text-[11px] text-[#243d5c] font-medium leading-tight block mt-0.5">
                    CO₂ footprint prevented
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f0ede6] flex items-center gap-2 text-xs text-[#526057]">
              <Sprout className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Plus: pick up a free 500g bag of dehydrated espresso soil enricher at the counter anytime!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
