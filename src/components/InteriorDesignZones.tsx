import React, { useState } from 'react';
import { CAFE_ZONES } from '../data/cafeData';
import { Volume2, Sun, Zap, CheckCircle2, Headphones, Laptop, BatteryCharging } from 'lucide-react';

export const InteriorDesignZones: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>(CAFE_ZONES[0].id);
  const [reservedSeatNotice, setReservedSeatNotice] = useState<string | null>(null);

  const activeZone = CAFE_ZONES.find((z) => z.id === activeZoneId) || CAFE_ZONES[0];

  const handleSimulateReserve = (zoneName: string) => {
    setReservedSeatNotice(`Desk pass held in ${zoneName} for the next 15 minutes! Check in at the Barista counter.`);
    setTimeout(() => {
      setReservedSeatNotice(null);
    }, 6000);
  };

  return (
    <section id="zones" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            Architectural & Spatial Layout
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            Four intentional zones. Zero acoustic conflicts.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            In standard coffee shops, a loud conference call ruins everyone’s concentration, while solitary readers glare at chatty study groups. We solved this with physical spatial zoning and acoustic engineering.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="mt-10 flex overflow-x-auto pb-2 gap-2 border-b border-[#ded9cd]">
          {CAFE_ZONES.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1b2e26] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-[#4a574f] border border-[#e1dcd2]'
                }`}
              >
                {zone.name}
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-2xl border border-[#ded8cb] p-6 sm:p-8 shadow-xs">
          {/* Visual Canvas Left */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-16/10 bg-[#e7e3d9] border border-[#d8d3c5]">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#1b2e26]/85 backdrop-blur-xs text-white text-[11px] font-mono-nums px-2.5 py-1 rounded-md">
                {activeZone.noiseLevel}
              </div>
            </div>

            {/* Quick decibel & seat stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 p-4 bg-[#f8f7f4] rounded-xl border border-[#ece8df] text-xs">
              <div>
                <span className="block text-[#69766e] text-[11px] uppercase tracking-wide">Sound Profile</span>
                <span className="font-semibold text-[#1b2e26] flex items-center gap-1 mt-0.5 font-mono-nums">
                  <Volume2 className="w-3.5 h-3.5 text-[#2d4a3e]" />
                  {activeZone.decibel} dB
                </span>
              </div>
              <div>
                <span className="block text-[#69766e] text-[11px] uppercase tracking-wide">Available Desks</span>
                <span className="font-semibold text-[#1b2e26] font-mono-nums mt-0.5 block">
                  {activeZone.availableSeats} of {activeZone.capacity} open
                </span>
              </div>
              <div>
                <span className="block text-[#69766e] text-[11px] uppercase tracking-wide">Power Matrix</span>
                <span className="font-semibold text-[#1b2e26] flex items-center gap-1 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#c97a3e]" />
                  100W PD
                </span>
              </div>
            </div>
          </div>

          {/* Zone Specs Right */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                Zone Deep Dive
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#1b2e26]">
                {activeZone.name}
              </h3>
              <p className="mt-2 text-sm text-[#4d5c52] italic">
                "{activeZone.tagline}"
              </p>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Sun className="w-4 h-4 text-[#c97a3e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b2e26] font-semibold">Lighting & Atmosphere: </strong>
                    <span className="text-[#4d5c52]">{activeZone.lighting}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Laptop className="w-4 h-4 text-[#2d4a3e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b2e26] font-semibold">Engineered For: </strong>
                    <span className="text-[#4d5c52]">{activeZone.idealFor}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BatteryCharging className="w-4 h-4 text-[#364968] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b2e26] font-semibold">Connectivity: </strong>
                    <span className="text-[#4d5c52]">{activeZone.powerOutlets}</span>
                  </div>
                </div>
              </div>

              {/* Architectural features list */}
              <div className="mt-6 pt-5 border-t border-[#f0ede6]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#69766e] mb-3">
                  Spatial Specifications
                </h4>
                <ul className="space-y-2">
                  {activeZone.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3b473f]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-8 pt-4 border-t border-[#f0ede6] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#5f6d64]">
                Free entry with any beverage or Focus Pass
              </div>
              <button
                onClick={() => handleSimulateReserve(activeZone.name)}
                className="px-5 py-2.5 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Hold a Seat in this Zone
              </button>
            </div>
          </div>
        </div>

        {/* Temporary toast confirmation */}
        {reservedSeatNotice && (
          <div className="mt-4 p-4 rounded-xl bg-[#e7eee8] border border-[#c6d7ca] text-xs sm:text-sm font-medium text-[#1b2e26] flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-[#2d4a3e] shrink-0" />
            <span>{reservedSeatNotice}</span>
          </div>
        )}

        {/* The Student Equipment Lending Hub Bar */}
        <div className="mt-12 bg-[#23352c] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4945d]">
              <Headphones className="w-4 h-4" />
              <span>Complimentary Equipment Hub</span>
            </div>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold">
              Forgot your laptop charger or stylus? Borrow ours.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#cbd6cf] leading-relaxed">
              We stock 40+ loaner items: 100W Anker USB-C laptop chargers, MagSafe cables, Apple Pencils, mechanical keyboards, noise-dampening over-ear headphones, and ergonomic laptop risers. Free with student ID.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-2 text-xs">
            <div className="bg-white/10 px-3.5 py-2 rounded-lg text-emerald-200 font-mono-nums">
              34 loaner tools available now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
