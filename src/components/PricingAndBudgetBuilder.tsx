import React, { useState } from 'react';
import { Coffee, Heart, Gift, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface PricingAndBudgetBuilderProps {
  onQuickAddBundle: (items: MenuItem[]) => void;
}

export const PricingAndBudgetBuilder: React.FC<PricingAndBudgetBuilderProps> = ({
  onQuickAddBundle,
}) => {
  const [selectedBudget, setSelectedBudget] = useState<number>(8);
  const [suspendedCount, setSuspendedCount] = useState<number>(23);
  const [hasClaimed, setHasClaimed] = useState<boolean>(false);
  const [hasDonated, setHasDonated] = useState<boolean>(false);

  // Pre-configured budget bundles for quick adding
  const budgetPacks = {
    5: {
      title: 'The Quick Spark',
      cost: 5.25,
      items: [
        'Daybreak Slow-Drip Filter (with refill)',
        'Matcha Pistachio Brain Truffle Pack',
      ],
      description: 'Ideal for a 90-minute between-class revision sprint. High caffeine, zero sugar crash.',
    },
    8: {
      title: 'The 4-Hour Study Marathon',
      cost: 7.95,
      items: [
        'Single Origin Drip or Kyoto Cold Brew',
        'Warm Rosemary Focaccia Melt',
        'Free filtered sparkling oat water tap',
      ],
      description: 'Full meal plus all-day study focus. Keeps you energized through afternoon lectures.',
    },
    12: {
      title: 'The All-Day Thesis Crunch Pack',
      cost: 11.50,
      items: [
        'Unlimited $3.50 Refill Passport',
        'Smoked Sea Salt Avocado Brioche',
        'Overnight Chia Berry Compote Pod',
        'Reserved soundproof pod access',
      ],
      description: 'Zero hunger interruptions from 10 AM to 6 PM. Sustained balanced macros.',
    },
  };

  const currentPack = budgetPacks[selectedBudget as 5 | 8 | 12] || budgetPacks[8];

  const handleClaim = () => {
    if (suspendedCount > 0 && !hasClaimed) {
      setSuspendedCount((prev) => prev - 1);
      setHasClaimed(true);
    }
  };

  const handleDonate = () => {
    setSuspendedCount((prev) => prev + 1);
    setHasDonated(true);
    setTimeout(() => setHasDonated(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#fbfaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            Transparent Economics
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            Real specialty quality at prices students can sustain.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            Corporate coffee relies on $8 sweet dessert drinks to offset sky-high franchise markups. By sourcing beans directly from micro-roaster co-ops and eliminating disposable packaging overhead, we pass every cent back to students.
          </p>
        </div>

        {/* Pricing Architecture Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-[#ded8cb] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wide">
                Daily Study Routine
              </span>
              <div className="mt-3 flex items-baseline gap-1 font-mono-nums">
                <span className="font-display text-3xl font-bold text-[#1b2e26]">$3.50</span>
                <span className="text-xs text-[#627067]">/ day pass</span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26] mt-2">
                All-Day Drip Refill Passport
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4d5b51] leading-relaxed">
                Bring your own cup. Enjoy infinite freshly brewed single-origin drip coffee or cold brew while seated in any of our 4 study zones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#2d4a3e]">
              Average cost per cup drops to ~$0.85
            </div>
          </div>

          <div className="bg-[#1b2e26] text-white rounded-xl p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider bg-[#d4945d] text-[#1b2e26] px-2 py-0.5 rounded-sm">
              Most Popular
            </div>
            <div>
              <span className="text-xs font-semibold text-[#d4945d] uppercase tracking-wide">
                Monthly Subscription
              </span>
              <div className="mt-3 flex items-baseline gap-1 font-mono-nums">
                <span className="font-display text-3xl font-bold text-white">$19.00</span>
                <span className="text-xs text-emerald-200">/ month</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mt-2">
                The Kinetic Focus Pass
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#cbd7cf] leading-relaxed">
                1 free specialty brew daily, unlimited drip refills, 15% off all hot food & melts, 60-minute bookable access to soundproof pods, and gigabit Wi-Fi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-medium text-emerald-300">
              Covers its cost after just 4 visits
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#ded8cb] p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#364968] uppercase tracking-wide">
                Casual Visits
              </span>
              <div className="mt-3 flex items-baseline gap-1 font-mono-nums">
                <span className="font-display text-3xl font-bold text-[#1b2e26]">$2.75 – $4.50</span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#1b2e26] mt-2">
                A La Carte Student Menu
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4d5b51] leading-relaxed">
                Pistachio cortados, Kyoto cold brews, and mushroom adaptogens. Plus complimentary sparkling spring water on tap for anyone studying.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0ede6] text-xs font-medium text-[#364968]">
              No purchase shaming, ever
            </div>
          </div>
        </div>

        {/* Interactive Student Budget Planner */}
        <div className="mt-14 bg-white rounded-2xl border border-[#ded8cb] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ece7dc]">
            <div>
              <span className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                Interactive Study Fuel Planner
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#1b2e26]">
                What can you get for your study budget?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#546258]">
                Select your target budget for the day and see how much genuine fuel it unlocks.
              </p>
            </div>

            {/* Budget Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#ede9e0] rounded-xl border border-[#ded8cb]">
              {[5, 8, 12].map((budget) => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors font-mono-nums ${
                    selectedBudget === budget
                      ? 'bg-[#1b2e26] text-white shadow-xs'
                      : 'text-[#4e5c53] hover:text-[#1b2e26]'
                  }`}
                >
                  ${budget} Budget
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-baseline gap-2">
                <h4 className="font-display text-xl font-bold text-[#1b2e26]">
                  {currentPack.title}
                </h4>
                <span className="text-sm font-bold text-[#2d4a3e] font-mono-nums">
                  Total: ${currentPack.cost.toFixed(2)}
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-[#526057]">
                {currentPack.description}
              </p>

              <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#69766e]">
                  Included in this bundle:
                </span>
                <ul className="mt-2 space-y-1.5">
                  {currentPack.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#27342d]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a3e]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#f7f5ef] rounded-xl p-5 border border-[#ded8cb] text-center">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#738077] block">
                All-Day Sustained Energy
              </span>
              <span className="font-display text-2xl font-bold text-[#1b2e26] block mt-1">
                ${currentPack.cost.toFixed(2)}
              </span>
              <p className="text-[11px] text-[#5c6960] mt-1">
                Full access to power, Wi-Fi, and botanical study zones included.
              </p>
            </div>
          </div>
        </div>

        {/* The Suspended Coffee Community System */}
        <div className="mt-12 bg-[#2d4a3e] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4945d]">
              <Heart className="w-4 h-4 text-[#d4945d]" />
              <span>Campus Mutual Aid</span>
            </div>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold">
              The "Suspended Coffee" Token Wall
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#d4ded8] leading-relaxed">
              Based on the historic Neapolitan tradition: when students or faculty have a good week, they can pre-purchase a $2.00 drip coffee token. Anyone experiencing financial stress or exam crunch can claim a token from the wooden board, no questions asked.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <div className="bg-white/10 px-4 py-2.5 rounded-xl text-center">
              <span className="text-[11px] text-emerald-200 block uppercase tracking-wide">Available on Wall</span>
              <span className="font-display text-2xl font-bold font-mono-nums text-white">
                {suspendedCount} Coffees
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleDonate}
                className="px-4 py-2 rounded-lg bg-[#d4945d] hover:bg-[#c2844e] text-[#1b2e26] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>{hasDonated ? 'Thank you! (+1 gifted)' : 'Gift a $2 Coffee'}</span>
              </button>

              <button
                onClick={handleClaim}
                disabled={hasClaimed || suspendedCount === 0}
                className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  hasClaimed
                    ? 'border-emerald-400 text-emerald-300 cursor-default'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                {hasClaimed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Token Claimed! Show Barista</span>
                  </>
                ) : (
                  <span>Claim a Free Coffee</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
