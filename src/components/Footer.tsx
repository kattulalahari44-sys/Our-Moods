import React from 'react';
import { Sprout } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#ded8cb] bg-[#16221c] text-[#d1ded6] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              Kinetic Grounds
            </span>
            <p className="mt-3 text-xs sm:text-sm text-[#a3b5aa] leading-relaxed max-w-sm">
              A biophilic study sanctuary & botanical brew lab built for students, thinkers, and nocturnal creators. Radical affordability, zero single-use waste, and deep acoustic focus.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300 font-medium">
              <Sprout className="w-4 h-4 text-[#d4945d]" />
              <span>100% Zero-Landfill Certified Dining Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Spatial Zones
            </h4>
            <ul className="space-y-2 text-xs text-[#a3b5aa]">
              <li>
                <a href="#zones" className="hover:text-white transition-colors">Skylight Greenhouse</a>
              </li>
              <li>
                <a href="#zones" className="hover:text-white transition-colors">Acoustic Focus Pods</a>
              </li>
              <li>
                <a href="#zones" className="hover:text-white transition-colors">Co-Lab Atelier</a>
              </li>
              <li>
                <a href="#zones" className="hover:text-white transition-colors">Sunken Amphitheatre</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Campus Life
            </h4>
            <ul className="space-y-2 text-xs text-[#a3b5aa]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">$3.50 Refill Passport</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Social Signal Coasters</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Community Barter Board</a>
              </li>
              <li>
                <a href="#growth" className="hover:text-white transition-colors">Student Artist Residency</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-3 text-xs text-[#a3b5aa] space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Sanctuary Hours
            </h4>
            <p className="text-white font-medium">
              Daily: 7:00 AM – 12:00 Midnight
            </p>
            <p className="text-[#849a8d] text-[11px]">
              Midterm & Finals Weeks: Open 24/7 with midnight pancake drops
            </p>
            <div className="pt-2">
              <span className="block text-white font-medium">Campus Location</span>
              <span>420 University Avenue, Creative Quad, Building 4B</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d9386]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Kinetic Grounds Co-Study Lab</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-white transition-colors cursor-pointer">Student Work-Study Positions</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sustainability Report</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Community Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
