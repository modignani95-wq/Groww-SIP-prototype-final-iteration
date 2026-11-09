import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
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
      {/* Top Header Row of Card: Left Title & Right Circular Action Buttons */}
      <div className="flex items-center justify-between h-8 shrink-0">
        {/* Left Title: Dynamic based on mode */}
        <div className="flex items-center space-x-2">
          {activeMode === 'holdings' ? (
            <span className="text-[11.5px] font-semibold text-[#7C7E8C] uppercase tracking-wider">
              HOLDINGS (2)
            </span>
          ) : (
            <div className="flex items-center space-x-1 text-[#00897B]">
              <span className="text-xs">🔥</span>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider">
                HABIT ENGINE
              </span>
            </div>
          )}
        </div>

        {/* Right Controls: Mode Switcher + Eye Button + Analytics Button */}
        <div className="flex items-center space-x-1.5">
          {/* Subtle Groww Segmented Pill Switcher */}
          <div className="bg-[#F3F4F6] p-0.5 rounded-full flex items-center border border-[#ECEEF0]">
            <button
              onClick={() => handleToggleMode('habit')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold flex items-center space-x-1 transition-all ${
                activeMode === 'habit'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              <span>🔥 Habit</span>
            </button>
            <button
              onClick={() => handleToggleMode('holdings')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold flex items-center space-x-1 transition-all ${
                activeMode === 'holdings'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              <span>📊 Holdings</span>
            </button>
          </div>

          {/* Exact Groww Circular Eye Button */}
          <button
            onClick={handleToggleHide}
            className="w-7.5 h-7.5 rounded-full border border-[#ECEEF0] flex items-center justify-center text-[#7C7E8C] hover:text-[#1F2937] active:scale-95 transition-all bg-white"
            title={isValueHidden ? 'Unhide balance' : 'Hide balance'}
            aria-label="Toggle sensitive values"
          >
            {isValueHidden ? (
              <EyeOff size={15} className="stroke-[1.8]" />
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
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

          {/* Exact Groww Circular Analytics Chart Button */}
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
              width="14"
              height="14"
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

      {/* Main View Transition: Zero-Layout-Shift Fixed Container */}
      <div
        className={`h-[195px] transition-opacity duration-100 ease-out ${
          isFlipping ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {activeMode === 'habit' ? (
          <HabitModeView
            isValueHidden={isValueHidden}
          />
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
