import React from 'react';
import { Search } from 'lucide-react';
import GrowwLogo from './GrowwLogo';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function GrowwHeader({ onOpenSearch, onOpenProfile, onOpenNotifications }) {
  const handleAction = (cb) => {
    playTapSound();
    triggerHaptic(10);
    cb();
  };

  return (
    <header className="px-4 py-2.5 flex items-center justify-between bg-white select-none">
      {/* Left: Groww logo + Mutual Funds title */}
      <div className="flex items-center space-x-2.5">
        <GrowwLogo size={32} />
        <h1 className="text-[18px] font-semibold text-[#1F2937] tracking-tight">Mutual Funds</h1>
      </div>

      {/* Right icons: Search, QR / Scanner Aperture, Profile Avatar */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <button
          onClick={() => handleAction(onOpenSearch)}
          className="p-1 text-[#44475B] hover:text-[#1F2937] active:scale-95 transition-transform"
          aria-label="Search mutual funds"
        >
          <Search size={20} className="stroke-[2.1]" />
        </button>

        {/* Groww Scanner / Shutter / Aperture icon */}
        <button
          onClick={() => handleAction(onOpenNotifications)}
          className="p-1 text-[#44475B] hover:text-[#1F2937] active:scale-95 transition-transform relative"
          aria-label="Scanner / Notifications"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 2v3" />
            <path d="M12 19v3" />
            <path d="M20.66 7l-2.6 1.5" />
            <path d="M5.94 15.5L3.34 17" />
            <path d="M20.66 17l-2.6-1.5" />
            <path d="M5.94 8.5L3.34 7" />
          </svg>
        </button>

        {/* Profile Avatar "R" */}
        <button
          onClick={() => handleAction(onOpenProfile)}
          className="w-7 h-7 rounded-full bg-[#00897B] text-white font-medium text-[13px] flex items-center justify-center hover:opacity-95 active:scale-95 transition-all shadow-xs"
          aria-label="User Profile"
        >
          R
        </button>
      </div>
    </header>
  );
}
