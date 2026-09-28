import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, CheckCircle2, Coffee, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [useBYOCTumbler, setUseBYOCTumbler] = useState<boolean>(true);
  const [orderConfirmedNumber, setOrderConfirmedNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, ci) => {
    const unitPrice = ci.item.studentPrice || ci.item.price;
    return acc + unitPrice * ci.quantity;
  }, 0);

  // BYOC discount ($0.50 per drink item)
  const drinkItemCount = cartItems.reduce((acc, ci) => {
    if (ci.item.category === 'coffee' || ci.item.category === 'botanicals') {
      return acc + ci.quantity;
    }
    return acc;
  }, 0);

  const byocDiscount = useBYOCTumbler ? drinkItemCount * 0.50 : 0;
  const finalTotal = Math.max(0, subtotal - byocDiscount);

  const handleCheckout = () => {
    const randomOrderNum = `KG-${Math.floor(100 + Math.random() * 900)}`;
    setOrderConfirmedNumber(randomOrderNum);
  };

  const handleResetOrder = () => {
    setOrderConfirmedNumber(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbfaf8] border-l border-[#ded8cb] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#ece7dc] flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-[#1b2e26]">
                Study Fuel Pack
              </h2>
              <p className="text-xs text-[#5f6d64] mt-0.5">
                {cartItems.length} item{cartItems.length === 1 ? '' : 's'} selected · Express Bar Counter Pickup
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#65736b] hover:text-[#1b2e26] hover:bg-[#edeae1] transition-colors"
              aria-label="Close Order Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderConfirmedNumber ? (
              /* Order Confirmation State */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#e7eee8] text-[#2d4a3e] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1b2e26]">
                  Order Confirmed!
                </h3>
                <div className="inline-block px-4 py-2 bg-white rounded-xl border border-[#ded8cb] shadow-xs">
                  <span className="text-[11px] text-[#69766e] uppercase tracking-wide block">Pickup Ticket</span>
                  <span className="font-display text-3xl font-bold font-mono-nums text-[#1b2e26]">
                    #{orderConfirmedNumber}
                  </span>
                </div>
                <p className="text-xs text-[#526057] max-w-xs mx-auto leading-relaxed">
                  Head over to the Barista Pickup station in the central Skylight Greenhouse. Your drinks and warm toast will be ready in ~3 minutes!
                </p>

                {useBYOCTumbler && (
                  <div className="p-3 bg-[#eaf4ec] rounded-lg border border-[#c4dec8] text-xs text-[#204e2d] font-medium flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Bring your tumbler to the counter for zero-waste pouring.</span>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={handleResetOrder}
                    className="w-full py-3 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-xs font-semibold transition-colors"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center text-xs text-[#6e7d73] space-y-3">
                <Coffee className="w-10 h-10 mx-auto text-[#94a199]" />
                <p className="text-sm font-medium text-[#1b2e26]">Your fuel pack is empty</p>
                <p className="max-w-xs mx-auto">
                  Add a single-origin slow drip, a pistachio cortado, or a warm rosemary focaccia from the menu.
                </p>
              </div>
            ) : (
              /* Items List */
              <>
                <div className="space-y-3">
                  {cartItems.map((ci) => {
                    const price = ci.item.studentPrice || ci.item.price;
                    return (
                      <div
                        key={ci.item.id}
                        className="bg-white rounded-xl border border-[#ded8cc] p-4 shadow-xs flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-sm font-bold text-[#1b2e26] truncate">
                            {ci.item.name}
                          </h4>
                          <span className="text-xs font-mono-nums text-[#4a584f]">
                            ${price.toFixed(2)} each
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-[#d8d2c4] rounded-lg bg-[#fbfaf8]">
                            <button
                              onClick={() => onUpdateQuantity(ci.item.id, -1)}
                              className="p-1 hover:text-[#1b2e26] text-[#69776e] transition-colors"
                              title="Decrease"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-bold font-mono-nums text-[#1b2e26]">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(ci.item.id, 1)}
                              className="p-1 hover:text-[#1b2e26] text-[#69776e] transition-colors"
                              title="Increase"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(ci.item.id)}
                            className="p-1.5 text-[#929f96] hover:text-red-600 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* BYOC Cup Toggle */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#ded8cb] shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="block text-xs font-bold text-[#1b2e26]">
                        Bring Your Own Cup / Deposit Tumbler
                      </strong>
                      <span className="text-[11px] text-[#69766e]">
                        Save $0.50 per drink & eliminate paper cup waste
                      </span>
                    </div>

                    <button
                      onClick={() => setUseBYOCTumbler(!useBYOCTumbler)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        useBYOCTumbler ? 'bg-[#2d4a3e]' : 'bg-[#ccc6b8]'
                      }`}
                      role="switch"
                      aria-checked={useBYOCTumbler}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          useBYOCTumbler ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cartItems.length > 0 && !orderConfirmedNumber && (
            <div className="p-6 border-t border-[#ece7dc] bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#627067]">
                  <span>Item Subtotal</span>
                  <span className="font-mono-nums">${subtotal.toFixed(2)}</span>
                </div>
                {byocDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>BYOC Zero-Waste Rebate</span>
                    <span className="font-mono-nums">-${byocDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#1b2e26] font-bold text-base pt-2 border-t border-[#f0ede6]">
                  <span>Total Due at Counter</span>
                  <span className="font-mono-nums text-lg">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                Send Order to Express Counter (${finalTotal.toFixed(2)})
              </button>
              <p className="text-[11px] text-center text-[#78857c]">
                Pay at counter via Student Card, Apple Pay, or Cash on pickup.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
