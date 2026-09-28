import React, { useState } from 'react';
import { SPECIAL_FEATURES, COMMUNITY_NOTES } from '../data/cafeData';
import { Moon, Sun, MessageSquarePlus, Share2, Sparkles, Check } from 'lucide-react';

interface SpecialExperienceProps {
  isNightMode: boolean;
  onToggleNightMode: () => void;
}

export const SpecialExperience: React.FC<SpecialExperienceProps> = ({
  isNightMode,
  onToggleNightMode,
}) => {
  // Coaster interactive simulator state
  const [coasterSide, setCoasterSide] = useState<'open' | 'focus'>('open');
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);

  const handleCopyContact = (id: string, contact: string) => {
    navigator.clipboard.writeText(contact).catch(() => {});
    setCopiedNoteId(id);
    setTimeout(() => setCopiedNoteId(null), 2500);
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#e6e2d8] bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2d4a3e]">
            The Customer Experience
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#16221c]">
            Designed to solve real student problems.
          </h2>
          <p className="mt-4 text-base text-[#4a574f] leading-relaxed">
            Cafés are traditionally transactional: buy coffee, look for a plug, get judged for sitting too long. We engineered micro-rituals that build psychological safety, ease loneliness, and encourage deep work.
          </p>
        </div>

        {/* Feature 1 Interactive Showcase: The Dual-Sided Coaster */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
              Signature Touchpoint
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold text-[#1b2e26]">
              Dual-Sided "Social Signal" Coasters
            </h3>
            <p className="mt-3 text-sm text-[#4b5950] leading-relaxed">
              University life can feel isolating, yet approaching someone studying can feel awkward or invasive. Every table at Kinetic Grounds features a solid birchwood coaster. Simply flip it to communicate your intention without uttering a word.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div
                onClick={() => setCoasterSide('open')}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  coasterSide === 'open'
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                    : 'border-[#e4dfd4] bg-[#fbfaf8] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-emerald-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  Green: Open to Table Sharing
                </div>
                <p className="mt-1.5 text-[#4e5c53]">
                  "Feel free to sit here! I’m open to quick chat, study buddy questions, or sharing power sockets."
                </p>
              </div>

              <div
                onClick={() => setCoasterSide('focus')}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  coasterSide === 'focus'
                    ? 'border-amber-600 bg-amber-50/70 shadow-xs'
                    : 'border-[#e4dfd4] bg-[#fbfaf8] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-amber-900">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  Amber: Deep Focus Flow
                </div>
                <p className="mt-1.5 text-[#5e5349]">
                  "In the zone preparing an exam or coding sprint. Please respect quiet focus; no interruptions."
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#78857d]">
              Click either side to test how the table indicator shifts for your peers.
            </p>
          </div>

          {/* Interactive Coaster Visual Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#f7f5ef] rounded-xl border border-[#ded8cb]">
            <div
              onClick={() => setCoasterSide(coasterSide === 'open' ? 'focus' : 'open')}
              className={`w-44 h-44 rounded-full border-4 flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-500 shadow-md hover:scale-105 select-none ${
                coasterSide === 'open'
                  ? 'bg-emerald-700 border-emerald-800 text-white'
                  : 'bg-[#a35e2e] border-[#844920] text-white'
              }`}
            >
              <span className="text-[10px] uppercase font-mono tracking-widest opacity-80">
                Kinetic Coaster
              </span>
              <span className="font-display text-xl font-bold mt-1">
                {coasterSide === 'open' ? 'SAY HELLO' : 'DEEP FLOW'}
              </span>
              <span className="text-[11px] mt-1 opacity-90">
                {coasterSide === 'open'
                  ? 'Table sharing & study partner welcome'
                  : 'Exam focus · Do not disturb'}
              </span>
              <span className="mt-2 text-[9px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                Tap to Flip
              </span>
            </div>

            <div className="mt-4 text-xs font-medium text-[#4f5c53]">
              Active desk status: <span className="font-semibold underline">{coasterSide === 'open' ? 'Community Open' : 'Focus Shield Active'}</span>
            </div>
          </div>
        </div>

        {/* Feature 2: Night Owl Atmosphere Simulator */}
        <div className="mt-12 bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ece7dc]">
            <div>
              <span className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                Circadian Lighting & Sound Shift
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#1b2e26]">
                The 7:00 PM "Night Owl" Transformation
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#546258]">
                At dusk, our space shifts to support late-night focus without harsh fluorescent blue light.
              </p>
            </div>

            {/* Atmosphere toggle control */}
            <div className="flex items-center gap-2 p-1 bg-[#ede9e0] rounded-xl border border-[#ded8cb]">
              <button
                onClick={onToggleNightMode}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  !isNightMode
                    ? 'bg-white text-[#1b2e26] shadow-xs'
                    : 'text-[#647268] hover:text-[#1b2e26]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-[#c97a3e]" />
                <span>Daylight Studio (7 AM – 7 PM)</span>
              </button>

              <button
                onClick={onToggleNightMode}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isNightMode
                    ? 'bg-[#1b2e26] text-white shadow-xs'
                    : 'text-[#647268] hover:text-[#1b2e26]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-300" />
                <span>Night Owl Shift (7 PM – 12 AM)</span>
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ebe7df]">
              <strong className="block text-[#1b2e26] font-semibold text-sm mb-1">
                Warm 2200K Amber Lighting
              </strong>
              <p className="text-[#515f55] leading-relaxed">
                Ceiling luminaires dim, soft amber brass table lamps activate. Eliminates eye strain and protects circadian rhythms so you can still sleep after cramming.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ebe7df]">
              <strong className="block text-[#1b2e26] font-semibold text-sm mb-1">
                Binaural & Lo-Fi Vinyl Audio
              </strong>
              <p className="text-[#515f55] leading-relaxed">
                Bespoke playlists curated with slow 60-70 BPM study tempos, alpha wave textures, and smooth vinyl jazz to foster sustained flow state.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ebe7df]">
              <strong className="block text-[#1b2e26] font-semibold text-sm mb-1">
                Late-Night Adaptogens & Toasts
              </strong>
              <p className="text-[#515f55] leading-relaxed">
                Coffee cutoff option: Golden Milk, Chamomile Honey Blossom, decaf pour-overs, and warm sourdough sandwiches discounted to $4.50 past 9 PM.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Live Community Barter & Study Swap Board */}
        <div className="mt-12 bg-white rounded-2xl border border-[#ded8cc] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ece7dc]">
            <div>
              <span className="text-xs font-semibold text-[#2d4a3e] uppercase tracking-wider">
                Peer-to-Peer Campus Life
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#1b2e26]">
                Physical & Digital Barter Board
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#546258]">
                A real-time bulletin for study groups, project collaborators, textbook swaps, and dorm plant cuttings.
              </p>
            </div>

            <div className="text-xs text-[#546258] flex items-center gap-1.5">
              <MessageSquarePlus className="w-4 h-4 text-[#2d4a3e]" />
              <span>Free to pin on the corkboard at the café entrance</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMUNITY_NOTES.map((note) => {
              const isCopied = copiedNoteId === note.id;
              return (
                <div
                  key={note.id}
                  className="bg-[#faf9f6] rounded-xl border border-[#e5dfd4] p-4 flex flex-col justify-between hover:border-[#b5c7ba] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 text-[11px] mb-2">
                      <span className="font-semibold text-[#2d4a3e]">{note.badge}</span>
                      <span className="text-[#849289] font-mono-nums">{note.timeAgo}</span>
                    </div>

                    <h4 className="font-semibold text-sm text-[#1b2e26] line-clamp-2">
                      {note.title}
                    </h4>

                    <div className="mt-2 text-xs text-[#526056]">
                      <span className="font-medium text-[#2d3a31]">{note.author}</span>
                      <span className="block text-[11px] text-[#718076]">{note.major}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede9df] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#4f5c53] truncate max-w-[170px]" title={note.contact}>
                      {note.contact}
                    </span>
                    <button
                      onClick={() => handleCopyContact(note.id, note.contact)}
                      className="p-1.5 rounded-md hover:bg-[#e8e4da] text-[#2d4a3e] transition-colors shrink-0"
                      title="Copy details"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
