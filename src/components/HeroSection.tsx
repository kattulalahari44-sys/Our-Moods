import React from 'react';
import { HERO_IMAGE } from '../data/cafeData';
import { Sparkles, ArrowRight, Clock, MapPin, Volume2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuiz: () => void;
  onScrollToMenu: () => void;
  onScrollToZones: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuiz,
  onScrollToMenu,
  onScrollToZones,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Subtle unboxed metadata kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#5a6860] mb-4">
          <span className="text-[#2d4a3e] font-semibold">New Hospitality Concept</span>
          <span aria-hidden="true">·</span>
          <span>Biophilic Co-Study Sanctuary</span>
          <span aria-hidden="true">·</span>
          <span>Zero Single-Use Waste</span>
          <span aria-hidden="true">·</span>
          <span>Student-First Pricing</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16221c] leading-[1.1] text-balance">
              Where high-focus study meets living botanical culture.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#404c44] leading-relaxed max-w-2xl">
              Traditional coffee shops rush you out, charge $7 for a latte, and lack power sockets. Kinetic Grounds is engineered for students and creators: soundproof focus pods, botanical greenhouse air, $3.50 all-day drip refills, and a warm community that values deep flow.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToZones}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Tour The 4 Work Zones</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToMenu}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-[#cfc9bc] bg-white hover:bg-[#f0ede6] text-[#1b2e26] text-sm font-semibold transition-colors"
              >
                Explore Sips & $5 Meals
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-[#2d4a3e] hover:text-[#1b2e26] text-sm font-medium hover:underline underline-offset-4"
              >
                <Sparkles className="w-4 h-4 text-[#c97a3e]" />
                <span>Find Your Seat & Sip Quiz</span>
              </button>
            </div>

            {/* Live Atmosphere Status Bar (Human and authentic) */}
            <div className="mt-10 pt-6 border-t border-[#e2ddd3] grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block text-[#67746c] text-[11px] uppercase tracking-wider">Atmosphere</span>
                <span className="font-semibold text-[#1b2e26] flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Natural Daylight & Focus
                </span>
              </div>
              <div>
                <span className="block text-[#67746c] text-[11px] uppercase tracking-wider">Sound Profile</span>
                <span className="font-semibold text-[#1b2e26] flex items-center gap-1 mt-0.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#5a6860]" />
                  <span className="font-mono-nums">41 dB</span> · Quiet Hush
                </span>
              </div>
              <div>
                <span className="block text-[#67746c] text-[11px] uppercase tracking-wider">Desk Availability</span>
                <span className="font-semibold text-[#1b2e26] font-mono-nums mt-0.5 block">
                  38 of 124 open now
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#ded8cb] bg-[#e8e4da] aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
              <img
                src={HERO_IMAGE}
                alt="Sunlit architectural greenhouse cafe with students studying under lush hanging foliage"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c17]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs font-medium text-emerald-200">The Central Skylight Atrium</p>
                <p className="text-sm font-semibold tracking-tight mt-0.5">
                  80+ living botanical species filtering air, lowering cortisol by 24%
                </p>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-white/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4945d]" /> Campus North District
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#d4945d]" /> 7 AM – Midnight Daily
                  </span>
                </div>
              </div>
            </div>

            {/* Quick floating highlight note */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-[#ffffff] border border-[#dcd7cb] rounded-xl p-3.5 shadow-md max-w-xs text-xs">
              <p className="font-semibold text-[#1b2e26]">Zero Single-Use Packaging</p>
              <p className="text-[#59665d] text-[11px] mt-0.5">
                Bring your own tumbler or borrow an insulated deposit cup for $2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
