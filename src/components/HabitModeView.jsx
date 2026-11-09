import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationFanfare, playTapSound, triggerHaptic } from '../utils/audio';

const INSIGHTS = [
  "Insight: Every 24h capital stays invested, loss probability drops",
  "Insight: Over 7 years, probability of negative SIP return is < 1%",
  "Insight: Unbroken SIPs beat 94% of active market timers",
  "Insight: Down market days give your SIP cheaper NAV purchase units"
];

export default function HabitModeView({ isValueHidden }) {
  const [insightIndex, setInsightIndex] = useState(0);
  const [liveAccrued, setLiveAccrued] = useState(1.48);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveAccrued((prev) => +(prev + 0.01).toFixed(2));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleStreakClick = () => {
    playCelebrationFanfare();
    triggerHaptic([20, 40, 20]);
    confetti({
      particleCount: 40,
      spread: 45,
      origin: { y: 0.35 }
    });
  };

  const nextInsight = () => {
    playTapSound();
    triggerHaptic(10);
    setInsightIndex((prev) => (prev + 1) % INSIGHTS.length);
  };

  return (
    <div className="h-[195px] flex flex-col justify-between select-none">
      {/* 1. Day 47 Compounding Counter Hero Row - Clean Groww Typography with 2D Flame Icon */}
      <div className="h-8 flex items-center justify-between">
        <div 
          onClick={handleStreakClick}
          className="flex items-center space-x-1.5 cursor-pointer active:scale-98 transition-transform"
          title="Tap to celebrate streak"
        >
          <span className="text-[28px] font-bold text-[#1F2937] tracking-tight leading-none font-sans">
            Day 47
          </span>
          {/* Flat 2D Vector Flame Icon */}
          <Flame size={20} className="text-[#FF7A00] fill-[#FF7A00] shrink-0 stroke-[1.5]" />
        </div>

        {/* Live Accrual Counter */}
        <div className="text-right">
          <span className="text-[13px] font-semibold text-[#00D09C]">
            {isValueHidden ? '••••••' : `+₹${liveAccrued} today`}
          </span>
        </div>
      </div>

      {/* 2. Groww Dashed Divider Line */}
      <div className="w-full border-t border-dashed border-[#E5E7EB] my-2.5" />

      {/* 3. 4-Row Metric Grid - Strictly Groww Design System */}
      <div className="space-y-2 text-[13.5px]">
        {/* Row 1: Streak Status */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Compounding Streak</span>
          <span className="text-[#1F2937] font-medium tracking-tight">
            47 Days Unbroken
          </span>
        </div>

        {/* Row 2: Next SIP Debit Countdown */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Next SIP Debit</span>
          <div className="flex items-center space-x-1.5">
            <span className="text-[#1F2937] font-medium tracking-tight">
              {isValueHidden ? '••••••' : '14 Days (₹2,500 on 1st)'}
            </span>
            <span className="text-[10px] font-semibold text-[#6B7280]">
              (53%)
            </span>
          </div>
        </div>

        {/* Row 3: SIP Consistency */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">SIP Consistency</span>
          <span className="text-[#00D09C] font-semibold tracking-tight">
            100% On-Time Debits
          </span>
        </div>

        {/* Row 4: Mandate Health */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Mandate Health</span>
          <span className="text-[#00D09C] font-medium tracking-tight">
            Autopay Active & Verified
          </span>
        </div>
      </div>

      {/* 4. Reassurance Insight Banner (Clean Typography) */}
      <div 
        onClick={nextInsight}
        className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#6B7280] cursor-pointer hover:text-[#1F2937] transition-colors h-5"
        title="Tap to cycle tips"
      >
        <span className="truncate pr-2 font-normal">{INSIGHTS[insightIndex]}</span>
        <span className="text-[10px] text-[#9CA3AF] shrink-0 font-medium">
          {insightIndex + 1}/{INSIGHTS.length}
        </span>
      </div>
    </div>
  );
}
