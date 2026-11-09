import React, { useState, useEffect } from 'react';
import HabitModeView from './HabitModeView';
import HoldingsModeView from './HoldingsModeView';
import { playSwitchSound, playTapSound, triggerHaptic } from '../utils/audio';

export default function HeroCard({ onOpenXirr, onOpenAnalytics }) {
  const [activeMode, setActiveMode] = useState(() => {
    try {
      return localStorage.getItem('groww_mf_hero_mode') || 'habit';
    } catch {
      return 'habit';
    }
  });

  const [isValueHidden, setIsValueHidden] = useState(false);
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

  const handleToggleHide = () => {
    playTapSound();
    triggerHaptic(10);
    setIsValueHidden(!isValueHidden);
  };

  return (
    <div className="mx-4 mt-3 bg-white rounded-2xl border border-[#ECEEF0] p-3.5 shadow-2xs select-none h-[258px] flex flex-col justify-between overflow-hidden">
      {/* Top Header Row: Pure Groww Typography (Zero Emojis) */}
      <div className="flex items-center justify-between h-8 shrink-0">
        {/* Left Title: Clean muted gray uppercase */}
        <span className="text-[11.5px] font-semibold text-[#7C7E8C] uppercase tracking-wider">
          {activeMode === 'holdings' ? 'HOLDINGS (2)' : 'HABIT ENGINE'}
        </span>

        {/* Right Controls: Clean Text Toggle + Eye Button + Analytics Button */}
        <div className="flex items-center space-x-1.5">
          {/* Clean Segmented Pill Switcher without emojis */}
          <div className="bg-[#F3F4F6] p-0.5 rounded-full flex items-center border border-[#ECEEF0]">
            <button
              onClick={() => handleToggleMode('habit')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                activeMode === 'habit'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Habit
            </button>
            <button
              onClick={() => handleToggleMode('holdings')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                activeMode === 'holdings'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Holdings
            </button>
          </div>

          {/* Clean Circular Eye Button */}
          <button
            onClick={handleToggleHide}
            className="w-7.5 h-7.5 rounded-full border border-[#ECEEF0] flex items-center justify-center text-[#7C7E8C] hover:text-[#1F2937] active:scale-95 transition-all bg-white"
            title={isValueHidden ? 'Unhide balance' : 'Hide balance'}
            aria-label="Toggle sensitive values"
          >
            {isValueHidden ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>

          {/* Clean Circular Analytics Chart Button */}
          <button
            onClick={() => {
              playTapSound();
              triggerHaptic(10);
              onOpenAnalytics();
            }}
            className="w-7.5 h-7.5 rounded-full border border-[#ECEEF0] flex items-center justify-center text-[#7C7E8C] hover:text-[#1F2937] active:scale-95 transition-all bg-white"
            title="Portfolio Analytics"
            aria-label="Portfolio Analytics"
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 18v-4" />
              <path d="M12 18V7" />
              <path d="M18 18v-9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main View Transition: Zero Layout Shift */}
      <div
        className={`h-[195px] transition-opacity duration-100 ease-out ${
          isFlipping ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {activeMode === 'habit' ? (
          <HabitModeView isValueHidden={isValueHidden} />
        ) : (
          <HoldingsModeView
            isValueHidden={isValueHidden}
            onOpenXirr={onOpenXirr}
          />
        )}
      </div>
    </div>
  );
}
