import React, { useState, useEffect } from 'react';
import HabitModeView from './HabitModeView';
import HoldingsModeView from './HoldingsModeView';
import { playSwitchSound, triggerHaptic } from '../utils/audio';

export default function HeroCard({ onOpenXirr }) {
  const [activeMode, setActiveMode] = useState(() => {
    try {
      return localStorage.getItem('groww_mf_hero_mode') || 'habit';
    } catch {
      return 'habit';
    }
  });

  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('groww_mf_hero_mode', activeMode);
    } catch {
      // storage unavailable
    }
  }, [activeMode]);

  const handleToggleMode = (mode) => {
    if (mode === activeMode) return;
    playSwitchSound();
    triggerHaptic(15);
    setIsFlipping(true);
    setTimeout(() => {
      setActiveMode(mode);
      setIsFlipping(false);
    }, 100);
  };

  return (
    <div className="mx-4 mt-3 bg-white rounded-2xl border border-[#ECEEF0] p-3.5 shadow-2xs select-none h-[258px] flex flex-col justify-between overflow-hidden">
      {/* Top Header Row of Card: Pure Clean Typography (Zero Icons) */}
      <div className="flex items-center justify-between h-8 shrink-0">
        {/* Left Title: Clean text */}
        <span className="text-[11.5px] font-semibold text-[#7C7E8C] uppercase tracking-wider">
          {activeMode === 'holdings' ? 'HOLDINGS (2)' : 'HABIT ENGINE'}
        </span>

        {/* Right: Clean Text-Only Segmented Pill Switcher (No Icons) */}
        <div className="bg-[#F3F4F6] p-0.5 rounded-full flex items-center border border-[#ECEEF0]">
          <button
            onClick={() => handleToggleMode('habit')}
            className={`px-3 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
              activeMode === 'habit'
                ? 'bg-white text-[#1F2937] shadow-xs'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            Habit
          </button>
          <button
            onClick={() => handleToggleMode('holdings')}
            className={`px-3 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
              activeMode === 'holdings'
                ? 'bg-white text-[#1F2937] shadow-xs'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            Holdings
          </button>
        </div>
      </div>

      {/* Main View Transition: Zero-Layout-Shift Fixed Container */}
      <div
        className={`h-[195px] transition-opacity duration-100 ease-out ${
          isFlipping ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {activeMode === 'habit' ? (
          <HabitModeView />
        ) : (
          <HoldingsModeView onOpenXirr={onOpenXirr} />
        )}
      </div>
    </div>
  );
}
