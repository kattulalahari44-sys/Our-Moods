/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ThemeAndConcept } from './components/ThemeAndConcept';
import { InteriorDesignZones } from './components/InteriorDesignZones';
import { InteractiveMenu } from './components/InteractiveMenu';
import { SpecialExperience } from './components/SpecialExperience';
import { PricingAndBudgetBuilder } from './components/PricingAndBudgetBuilder';
import { EcoInitiatives } from './components/EcoInitiatives';
import { BusinessModelSection } from './components/BusinessModelSection';
import { GrowthPlaybook } from './components/GrowthPlaybook';
import { Footer } from './components/Footer';
import { StudyVibeQuizModal } from './components/StudyVibeQuizModal';
import { OrderDrawer } from './components/OrderDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1, hasBYOCTumbler: true }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleQuickAddBundle = (items: MenuItem[]) => {
    items.forEach((item) => handleAddToCart(item));
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);
  const cartItemIds = new Set(cartItems.map((ci) => ci.item.id));

  // Navigation scroll helpers
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToZones = () => {
    const el = document.getElementById('zones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToZone = (_zoneId: string) => {
    const el = document.getElementById('zones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        isNightMode ? 'bg-[#18201b] text-[#e3ece6]' : 'bg-[#f7f6f2] text-[#1a221e]'
      }`}
    >
      {/* Top Bar Contract compliant navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenQuiz={() => setIsQuizOpen(true)}
          onScrollToMenu={handleScrollToMenu}
          onScrollToZones={handleScrollToZones}
        />

        {/* 2. Theme & Concept (Why it's different from standard cafes) */}
        <ThemeAndConcept />

        {/* 3. Interior Design & Spatial Zones (Floorplan, Sound, Pods) */}
        <InteriorDesignZones />

        {/* 4. Menu & Combos ($3.50 Refills, Artisan Sips, $5 Melts) */}
        <InteractiveMenu
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 5. Special Features & Unique Experience (Coaster, 7PM Shift, Barter Wall) */}
        <SpecialExperience
          isNightMode={isNightMode}
          onToggleNightMode={() => setIsNightMode(!isNightMode)}
        />

        {/* 6. Pricing Strategy & Student Budget Builder */}
        <PricingAndBudgetBuilder onQuickAddBundle={handleQuickAddBundle} />

        {/* 7. Eco-Friendly Circular Initiatives & Impact Calculator */}
        <EcoInitiatives />

        {/* 8. Simple Business Model & Unit Economics */}
        <BusinessModelSection />

        {/* 9. Customer Attraction & Retention Playbook */}
        <GrowthPlaybook />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <StudyVibeQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
        onScrollToZone={handleScrollToZone}
      />

      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
