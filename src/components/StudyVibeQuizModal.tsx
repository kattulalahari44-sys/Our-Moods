import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CAFE_ZONES } from '../data/cafeData';

interface StudyVibeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  onScrollToZone: (zoneId: string) => void;
}

export const StudyVibeQuizModal: React.FC<StudyVibeQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onScrollToZone,
}) => {
  const [step, setStep] = useState<number>(1);
  const [task, setTask] = useState<string>('solo');
  const [energy, setEnergy] = useState<string>('calm');
  const [sound, setSound] = useState<string>('quiet');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setTask('solo');
    setEnergy('calm');
    setSound('quiet');
  };

  // Compute recommendation
  const getRecommendation = () => {
    let zoneId = 'greenhouse';
    let menuItemId = 'm1';

    if (task === 'group') {
      zoneId = 'atelier';
      menuItemId = 'm13'; // Cram combo
    } else if (task === 'coding' || sound === 'silence') {
      zoneId = 'pods';
      menuItemId = 'm3'; // Kyoto cold brew
    } else if (task === 'chill') {
      zoneId = 'amphitheatre';
      menuItemId = 'm4'; // Uji Matcha Dew
    }

    if (energy === 'jittery') {
      menuItemId = 'm5'; // Lion's Mane Golden Turmeric
    } else if (energy === 'hungry') {
      menuItemId = 'm7'; // Rosemary Focaccia
    }

    const recommendedZone = CAFE_ZONES.find((z) => z.id === zoneId) || CAFE_ZONES[0];
    const recommendedItem = MENU_ITEMS.find((m) => m.id === menuItemId) || MENU_ITEMS[0];

    return { recommendedZone, recommendedItem };
  };

  const { recommendedZone, recommendedItem } = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fbfaf8] rounded-2xl border border-[#ded8cb] shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#65736b] hover:text-[#1b2e26] hover:bg-[#edeae1] transition-colors"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {step < 4 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#c97a3e]" />
              <span>Study Matchmaker · Step {step} of 3</span>
            </div>

            {/* Step 1: Task */}
            {step === 1 && (
              <div className="mt-3">
                <h3 className="font-display text-xl font-bold text-[#1b2e26]">
                  What are you focusing on today?
                </h3>
                <p className="mt-1 text-xs text-[#526057]">
                  Helps us calibrate noise levels and desk dimensions.
                </p>

                <div className="mt-5 space-y-2.5 text-xs sm:text-sm">
                  {[
                    { id: 'solo', label: 'Solo thesis / reading / exam revision', desc: 'Need deep focus, no interruptions' },
                    { id: 'coding', label: 'Intensive coding or research crunch', desc: 'Need monitor, outlets, ergonomic chair' },
                    { id: 'group', label: 'Group project / hackathon / club meetup', desc: 'Need whiteboard, open collaboration' },
                    { id: 'chill', label: 'Casual reading, sketching or decompressing', desc: 'Low-key vibe, soft cushions, lo-fi' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setTask(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                        task === opt.id
                          ? 'border-[#2d4a3e] bg-[#eef4ef] text-[#1b2e26]'
                          : 'border-[#ded8cc] bg-white hover:bg-[#f6f4ee] text-[#4d5c52]'
                      }`}
                    >
                      <strong className="block font-semibold text-[#1b2e26]">{opt.label}</strong>
                      <span className="text-[11px] text-[#6d7c72]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Energy */}
            {step === 2 && (
              <div className="mt-3">
                <h3 className="font-display text-xl font-bold text-[#1b2e26]">
                  How is your body and brain feeling?
                </h3>
                <p className="mt-1 text-xs text-[#526057]">
                  Matches the right caffeine or adaptogen blend.
                </p>

                <div className="mt-5 space-y-2.5 text-xs sm:text-sm">
                  {[
                    { id: 'exhausted', label: 'Sleep deprived / need heavy caffeine', desc: 'Slow-drip or nitro cold brew' },
                    { id: 'calm', label: 'Need smooth sustained focus (no jitters)', desc: 'Ceremonial matcha or pistachio cortado' },
                    { id: 'jittery', label: 'Already had too much coffee / need calm clarity', desc: 'Mushroom adaptogen or hibiscus tonic' },
                    { id: 'hungry', label: 'Need substantial food to power through', desc: 'Warm rosemary focaccia or brioche melt' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setEnergy(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                        energy === opt.id
                          ? 'border-[#2d4a3e] bg-[#eef4ef] text-[#1b2e26]'
                          : 'border-[#ded8cc] bg-white hover:bg-[#f6f4ee] text-[#4d5c52]'
                      }`}
                    >
                      <strong className="block font-semibold text-[#1b2e26]">{opt.label}</strong>
                      <span className="text-[11px] text-[#6d7c72]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Sound */}
            {step === 3 && (
              <div className="mt-3">
                <h3 className="font-display text-xl font-bold text-[#1b2e26]">
                  What sound atmosphere do you work best in?
                </h3>
                <p className="mt-1 text-xs text-[#526057]">
                  Places you in the acoustically matched zone.
                </p>

                <div className="mt-5 space-y-2.5 text-xs sm:text-sm">
                  {[
                    { id: 'silence', label: 'Acoustic silence (< 35 dB)', desc: 'Insulated focus pods' },
                    { id: 'quiet', label: 'Soft whisper & plant rustle (38–44 dB)', desc: 'Skylight greenhouse' },
                    { id: 'buzz', label: 'Creative buzz & conversation allowed (55–60 dB)', desc: 'Co-Lab design atelier' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSound(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                        sound === opt.id
                          ? 'border-[#2d4a3e] bg-[#eef4ef] text-[#1b2e26]'
                          : 'border-[#ded8cc] bg-white hover:bg-[#f6f4ee] text-[#4d5c52]'
                      }`}
                    >
                      <strong className="block font-semibold text-[#1b2e26]">{opt.label}</strong>
                      <span className="text-[11px] text-[#6d7c72]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-7 pt-4 border-t border-[#ede9df] flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-3.5 py-2 text-xs font-semibold text-[#4f5c53] hover:text-[#1b2e26]"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={() => setStep(step + 1)}
                className="px-5 py-2.5 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>{step === 3 ? 'See My Match' : 'Next'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Step 4: Result */
          <div>
            <div className="text-center pb-4 border-b border-[#ece7dc]">
              <span className="inline-block p-2 rounded-full bg-[#e7eee8] text-[#2d4a3e] mb-2">
                <Check className="w-5 h-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1b2e26]">
                Your Custom Study Formula
              </h3>
              <p className="text-xs text-[#59665e] mt-1">
                Based on your project goals and energy state.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {/* Matched Zone */}
              <div className="p-4 rounded-xl bg-white border border-[#ded8cc] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#2d4a3e] block">
                  Recommended Study Zone
                </span>
                <h4 className="font-display text-base font-bold text-[#1b2e26] mt-0.5">
                  {recommendedZone.name}
                </h4>
                <p className="text-xs text-[#526057] mt-1">
                  {recommendedZone.tagline}
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-[#2d4a3e] font-medium">
                  <span className="font-mono-nums">{recommendedZone.noiseLevel}</span>
                  <span>·</span>
                  <span>{recommendedZone.availableSeats} desks open now</span>
                </div>
              </div>

              {/* Matched Fuel */}
              <div className="p-4 rounded-xl bg-white border border-[#ded8cc] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#c97a3e] block">
                  Recommended Sustenance
                </span>
                <div className="flex items-center justify-between mt-0.5">
                  <h4 className="font-display text-base font-bold text-[#1b2e26]">
                    {recommendedItem.name}
                  </h4>
                  <span className="font-mono-nums font-bold text-sm text-[#1b2e26]">
                    ${recommendedItem.studentPrice?.toFixed(2) || recommendedItem.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-[#526057] mt-1">
                  {recommendedItem.description}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#ede9df] flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  onAddToCart(recommendedItem);
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#1b2e26] hover:bg-[#284237] text-white text-xs font-semibold transition-colors text-center"
              >
                Add {recommendedItem.name} to Fuel Pack
              </button>

              <button
                onClick={() => {
                  onScrollToZone(recommendedZone.id);
                  onClose();
                }}
                className="py-2.5 px-4 rounded-lg border border-[#cfc9be] bg-white hover:bg-[#f6f4ee] text-[#1b2e26] text-xs font-semibold transition-colors"
              >
                View {recommendedZone.name}
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 rounded-lg text-[#65736b] hover:bg-[#edeae1] transition-colors"
                title="Retake Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
