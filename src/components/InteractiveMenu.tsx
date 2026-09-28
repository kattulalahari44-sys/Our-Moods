import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, SIGNATURE_BREW_IMAGE } from '../data/cafeData';
import { MenuItem, Dietary } from '../types';
import { Plus, Coffee, Sparkles, Check, Flame } from 'lucide-react';

interface InteractiveMenuProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  onAddToCart,
  cartItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDietFilter, setActiveDietFilter] = useState<Dietary | 'all'>('all');
  const [studentDiscountToggle, setStudentDiscountToggle] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'botanicals', label: 'Botanicals & Elixirs' },
    { id: 'eats', label: 'Warm Eats & Melts' },
    { id: 'bites', label: 'Study Bites' },
    { id: 'combos', label: 'Study Combos' },
  ];

  const dietaryOptions: { id: Dietary | 'all'; label: string }[] = [
    { id: 'all', label: 'All Diets' },
    { id: 'vegan', label: '100% Vegan' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'dairy-free', label: 'Dairy-Free' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesDiet =
        activeDietFilter === 'all' ||
        (item.dietary && item.dietary.includes(activeDietFilter));
      return matchesCategory && matchesDiet;
    });
  }, [activeCategory, activeDietFilter]);

  return (
    <section id="menu" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#fbfaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e5dfd2]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
              Curated Sustenance & Sips
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
              Affordable, nutrient-dense fuel for long workdays.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4a574f] leading-relaxed">
              No stale automated urn coffee or $12 avocado toasts. High-grade single-origins, adaptogenic herbal tonics, and freshly baked focaccia melts priced realistically for student budgets.
            </p>
          </div>

          {/* Student ID Discount Toggle */}
          <div className="bg-white border border-[#ded8cb] p-3 rounded-xl shadow-xs flex items-center gap-3 shrink-0">
            <div>
              <span className="block text-xs font-bold text-[#1b2e26]">
                Campus Student Rates
              </span>
              <span className="block text-[11px] text-[#69766e]">
                {studentDiscountToggle ? 'Showing student savings (-15%)' : 'Standard public rates'}
              </span>
            </div>
            <button
              onClick={() => setStudentDiscountToggle(!studentDiscountToggle)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                studentDiscountToggle ? 'bg-[#2d4a3e]' : 'bg-[#ccc6b8]'
              }`}
              role="switch"
              aria-checked={studentDiscountToggle}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  studentDiscountToggle ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Highlight Banner: The $3.50 Refill Passport */}
        <div className="mt-8 bg-[#1b2e26] text-white rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4945d] mb-1">
              <Coffee className="w-4 h-4" />
              <span>Campus Legend</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              The $3.50 All-Day Refill Passport
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#d4ded7] leading-relaxed">
              Bring any clean reusable tumbler or borrow our deposit cup. Pay $3.50 once, and get unlimited refills of Ethiopian Single-Origin Drip or Kyoto Cold Brew all day while you study. No catch.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="block text-[11px] text-emerald-200 uppercase tracking-wide font-medium">Daily Value</span>
              <span className="text-sm font-semibold text-white">Save ~$14 / study session</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-1 gap-1.5 p-1 bg-[#ede9e0] rounded-xl border border-[#ded8cb]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1b2e26] shadow-xs'
                    : 'text-[#5a675e] hover:text-[#1b2e26]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-[#6c7a70] text-xs font-medium shrink-0">Filter:</span>
            {dietaryOptions.map((diet) => (
              <button
                key={diet.id}
                onClick={() => setActiveDietFilter(diet.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeDietFilter === diet.id
                    ? 'bg-[#2d4a3e] text-white'
                    : 'bg-white hover:bg-[#f0ece3] text-[#55635a] border border-[#e0dbcf]'
                }`}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.has(item.id);
            const displayPrice = studentDiscountToggle && item.studentPrice ? item.studentPrice : item.price;
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#ded8cc] p-5 shadow-xs hover:border-[#b8cdbe] transition-colors flex flex-col justify-between group"
              >
                <div>
                  {item.image && (
                    <div className="mb-4 rounded-lg overflow-hidden aspect-16/9 bg-[#f0ede6] border border-[#e8e4da]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Header & Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-base font-bold text-[#1b2e26] group-hover:text-[#2d4a3e] transition-colors">
                        {item.name}
                      </h4>
                      {/* Dietary metadata */}
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-[#6b7970] capitalize">
                          {item.dietary.map((d, i) => (
                            <React.Fragment key={d}>
                              <span>{d}</span>
                              {i < item.dietary!.length - 1 && <span aria-hidden="true">·</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>

                    {item.popular && (
                      <span className="shrink-0 text-[10px] font-semibold text-[#c97a3e] bg-[#fbf0e4] px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 text-xs text-[#4b5950] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 text-[11px] text-[#2d4a3e] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#d4945d]" />
                    <span>{item.highlights}</span>
                  </div>
                </div>

                {/* Pricing & Add Action */}
                <div className="mt-5 pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5 font-mono-nums">
                      <span className="text-base font-bold text-[#1b2e26]">
                        ${displayPrice.toFixed(2)}
                      </span>
                      {studentDiscountToggle && item.studentPrice && (
                        <span className="text-xs text-[#8c9890] line-through">
                          ${item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {studentDiscountToggle && (
                      <span className="text-[10px] text-[#2d4a3e] font-medium block">
                        Student rate applied
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                      isAdded
                        ? 'bg-[#e7eee8] text-[#2d4a3e] hover:bg-[#d8e5da]'
                        : 'bg-[#1b2e26] text-white hover:bg-[#284237]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Added (+1)</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
