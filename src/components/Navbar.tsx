import React from 'react';
import { ShoppingBag, Compass } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e6e2d8] bg-[#f7f6f2]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight text-[#1b2e26] hover:opacity-90 transition-opacity"
        >
          Kinetic Grounds
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4b554e]">
          <a
            href="#concept"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            The Concept
          </a>
          <a
            href="#zones"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            Interior & Pods
          </a>
          <a
            href="#menu"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            Menu & Sips
          </a>
          <a
            href="#experience"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            Experience
          </a>
          <a
            href="#business"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            Business Model
          </a>
          <a
            href="#growth"
            className="hover:text-[#1b2e26] transition-colors py-1 hover:underline underline-offset-8"
          >
            Student Culture
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d4a3e] bg-[#e7eee8] hover:bg-[#d8e3da] px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Find My Vibe</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label={`View Study Fuel Order with ${cartCount} items`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1b2e26] hover:bg-[#284237] px-4 py-2 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Fuel Pack</span>
            {cartCount > 0 && (
              <span className="font-mono-nums bg-[#d4945d] text-[#1b2e26] font-bold text-[11px] px-1.5 py-0.2 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
