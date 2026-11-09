import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationFanfare, playTapSound, triggerHaptic } from '../utils/audio';

const INSIGHTS = [
  "💡 Every 24h capital stays invested, loss probability drops",
  "💡 Over 7 years, probability of negative SIP return is < 1%",
  "💡 Unbroken SIPs beat 94% of active market timers",
  "💡 Down market days give your SIP cheaper NAV purchase units"
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
      particleCount: 50,
      spread: 50,
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
      {/* 1. Day 47 Compounding Counter Hero Row - Exact height matching ₹7,084 */}
      <div className="h-8 flex items-center justify-between">
        <div 
          onClick={handleStreakClick}
          className="flex items-center space-x-1.5 cursor-pointer active:scale-95 transition-transform"
          title="Tap to celebrate streak!"
        >
          <span className="text-[28px] font-bold text-[#1F2937] tracking-tight leading-none font-sans">
            Day 47
          </span>
          <span className="text-xl animate-flame">🔥</span>
        </div>

        {/* Live Micro-accrual Counter */}
        <div className="text-right">
          <span className="text-[12.5px] font-semibold text-[#00D09C] inline-flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D09C] mr-1.5 animate-pulse"></span>
            {isValueHidden ? '••••••' : `+₹${liveAccrued} today`}
          </span>
        </div>
      </div>

      {/* 2. Exact Groww Dashed Divider Line */}
      <div className="w-full border-t border-dashed border-[#E5E7EB] my-2.5" />

      {/* 3. 4-Row Metric Grid - Exact match with Holdings height */}
      <div className="space-y-2 text-[13.5px]">
        {/* Row 1: Streak Status */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Compounding Streak</span>
          <span className="text-[#00897B] font-medium tracking-tight">
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
            <span className="text-[9.5px] font-bold bg-[#E6F9F5] text-[#00897B] px-1.5 py-0.2 rounded-sm">
              53%
            </span>
          </div>
        </div>

        {/* Row 3: SIP Consistency (Universal for all investors, beginner & multi-year) */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">SIP Consistency</span>
          <div className="flex items-center space-x-1.5">
            <span className="text-[#00897B] font-semibold">100%</span>
            <span className="text-[#1F2937] font-medium tracking-tight">On-Time Debits</span>
          </div>
        </div>

        {/* Row 4: Mandate Health Indicator */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Mandate Health</span>
          <span className="text-[#00D09C] font-medium tracking-tight flex items-center gap-1">
            <span>● Autopay Active & Verified</span>
          </span>
        </div>
      </div>

      {/* 4. Reassurance Micro-Copy Banner - Exact match with Holdings status line */}
      <div 
        onClick={nextInsight}
        className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#44475B] cursor-pointer hover:text-black transition-colors h-5"
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
