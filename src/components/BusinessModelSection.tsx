import React, { useState } from 'react';
import { BUSINESS_MODEL_PILLARS } from '../data/cafeData';
import { TrendingUp, PieChart, CheckCircle2, DollarSign } from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const [selectedPillarIdx, setSelectedPillarIdx] = useState<number>(0);
  const currentPillar = BUSINESS_MODEL_PILLARS[selectedPillarIdx];

  return (
    <section id="business" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#fbfaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            Operational Viability
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            A simple, resilient 4-pillar business model.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            How can a café offer $3.50 refills and stay financially profitable? Traditional cafes rely solely on a 3-minute counter transaction. Kinetic Grounds blends high-volume beverage speed with recurring membership MRR and evening space monetization.
          </p>
        </div>

        {/* 4 Pillars Interactive Tab Selector */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BUSINESS_MODEL_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillarIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedPillarIdx(idx)}
                className={`p-5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1b2e26] text-white border-[#1b2e26] shadow-md'
                    : 'bg-white text-[#1b2e26] border-[#ded8cb] hover:border-[#b5c5b9]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-nums mb-2">
                    <span className={isSelected ? 'text-[#d4945d] font-bold' : 'text-[#2d4a3e] font-semibold'}>
                      Pillar 0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-semibold ${isSelected ? 'text-emerald-200' : 'text-[#707e74]'}`}>
                      {pillar.revenueShare}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <div className={`mt-4 text-xs font-medium ${isSelected ? 'text-[#c6d4cc]' : 'text-[#58675d]'}`}>
                  {pillar.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Deep Dive Box */}
        <div className="mt-8 bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Revenue Engine Analysis</span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#1b2e26]">
                {currentPillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#c97a3e]">
                {currentPillar.subtitle}
              </p>

              <p className="mt-4 text-sm text-[#4b5950] leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#f8f7f4] border border-[#ece8df]">
                <strong className="block text-xs uppercase tracking-wider font-semibold text-[#1b2e26] mb-1">
                  Operational Efficiency Secret
                </strong>
                <p className="text-xs sm:text-sm text-[#505f55]">
                  {currentPillar.operationalSecret}
                </p>
              </div>
            </div>

            {/* Financial Health Snapshot Right */}
            <div className="lg:col-span-4 bg-[#f8f7f4] rounded-xl p-5 border border-[#ded8cb] space-y-4 text-xs">
              <h4 className="font-display text-sm font-bold text-[#1b2e26] pb-2 border-b border-[#e5dfd4] flex items-center justify-between">
                <span>Unit Economics Factsheet</span>
                <PieChart className="w-4 h-4 text-[#2d4a3e]" />
              </h4>

              <div>
                <span className="text-[#6d7b73] block text-[11px] uppercase tracking-wide">Gross Margin on Brews</span>
                <span className="font-bold text-base text-[#1b2e26] font-mono-nums">68% – 72%</span>
                <p className="text-[11px] text-[#5e6b63] mt-0.5">Bulk direct-trade coffee beans + in-house batch brewing.</p>
              </div>

              <div>
                <span className="text-[#6d7b73] block text-[11px] uppercase tracking-wide">Zero Packaging Savings</span>
                <span className="font-bold text-base text-[#2d4a3e] font-mono-nums">+$1,250 / mo</span>
                <p className="text-[11px] text-[#5e6b63] mt-0.5">100% deposit or BYOC tumblers eliminate disposable cup inventory costs.</p>
              </div>

              <div>
                <span className="text-[#6d7b73] block text-[11px] uppercase tracking-wide">Break-Even Velocity</span>
                <span className="font-bold text-base text-[#1b2e26] font-mono-nums">Month 4 Target</span>
                <p className="text-[11px] text-[#5e6b63] mt-0.5">Focus Club subscriptions provide non-cyclical baseline MRR through semester breaks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
