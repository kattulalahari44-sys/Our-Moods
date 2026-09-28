import React from 'react';
import { GROWTH_STRATEGIES } from '../data/cafeData';
import { Megaphone, Users, Sparkles, HeartHandshake } from 'lucide-react';

export const GrowthPlaybook: React.FC = () => {
  const icons = [Sparkles, Users, HeartHandshake, Megaphone];

  return (
    <section id="growth" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            Organic Campus Virality
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            How Kinetic Grounds wins and retains young people.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            Students ignore corporate marketing billboards and generic coupon mailers. Instead, we architect unforgettable campus rituals, collaborative mutual aid, and organic word-of-mouth that turns students into lifelong evangelists.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {GROWTH_STRATEGIES.map((strat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ded8cb] p-6 sm:p-7 shadow-xs hover:border-[#b4c7b8] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#e7eee8] text-[#2d4a3e] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d4945d]">
                      Tactic 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1b2e26]">
                    {strat.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5a6b60] mt-0.5">
                    {strat.subtitle}
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#4d5b51] leading-relaxed">
                    {strat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0ece4] flex items-center justify-between text-xs text-[#2d4a3e] font-medium">
                  <span>Viral Word-of-Mouth Engine</span>
                  <span className="text-[#6d7b73] text-[11px]">Organic & Community-Led</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Testimonial Proof Bar */}
        <div className="mt-12 bg-white rounded-2xl border border-[#ded8cb] p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#1b2e26] mb-4">
            Voice of the Campus Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ece8df]">
              <p className="text-[#3b473f] italic leading-relaxed">
                "The 7 PM lo-fi transition literally saved my GPA during organic chemistry. I don’t feel rushed or guilty for taking up a table, and the $3.50 refill passport fits my budget."
              </p>
              <div className="mt-3 font-semibold text-[#1b2e26] text-xs">
                Maya S. <span className="font-normal text-[#6f7e75]">· 3rd Year Biology & Pre-Med</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ece8df]">
              <p className="text-[#3b473f] italic leading-relaxed">
                "The dual-sided coaster is genius. When I was new on campus, putting it on green helped me meet two project partners who are now my best friends."
              </p>
              <div className="mt-3 font-semibold text-[#1b2e26] text-xs">
                Liam Chen <span className="font-normal text-[#6f7e75]">· 2nd Year Computer Engineering</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ece8df]">
              <p className="text-[#3b473f] italic leading-relaxed">
                "Being able to sell my art prints on the wall with 0% commission paid my textbook fees this semester. Kinetic Grounds feels like an actual campus home."
              </p>
              <div className="mt-3 font-semibold text-[#1b2e26] text-xs">
                Chloe V. <span className="font-normal text-[#6f7e75]">· Senior Fine Arts & Graphic Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
