import React, { useState, useEffect } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationFanfare, playTapSound, triggerHaptic } from '../utils/audio';

export default function HabitModeView({ 
  isValueHidden, 
  aiState, 
  context, 
  onOpenHorizon,
  onOpenBalanceCheck 
}) {
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

  const daysLeft = context?.daysToNextDebit ?? 14;
  const isApproaching = daysLeft <= 3;
  const copyText = aiState?.copy || "Every 24 hours your capital stays invested, your probability of negative return drops.";
  const aiBadge = aiState?.badge || "Momentum Active";

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
            Day {context?.streakDays || 47}
          </span>
          {/* Flat 2D Vector Flame Icon */}
          <Flame size={20} className="text-[#FF7A00] fill-[#FF7A00] shrink-0 stroke-[1.5]" />
        </div>

        {/* Live Accrual Counter & AI State Badge */}
        <div className="text-right flex items-center space-x-1.5">
          <span className="text-[10px] font-semibold text-[#00897B] bg-[#E6F9F5] px-1.5 py-0.5 rounded-sm">
            {aiBadge}
          </span>
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
            {context?.streakDays || 47} Days Unbroken
          </span>
        </div>

        {/* Row 2: Next SIP Debit Countdown */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Next SIP Debit</span>
          <div className="flex items-center space-x-1.5">
            <span className="text-[#1F2937] font-medium tracking-tight">
              {isValueHidden ? '••••••' : `${daysLeft} Days (₹2,500 on 1st)`}
            </span>
            <span className="text-[10px] font-semibold text-[#6B7280]">
              ({Math.round(((30 - daysLeft) / 30) * 100)}%)
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

        {/* Row 4: Mandate Health with Cash-Flow Sentinel Nudge */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Mandate Health</span>
          {isApproaching ? (
            <button
              onClick={() => {
                playTapSound();
                if (onOpenBalanceCheck) onOpenBalanceCheck();
              }}
              className="text-[#00897B] font-semibold tracking-tight underline hover:text-[#00D09C] flex items-center space-x-1"
            >
              <span>Autopay Ready • Verify Balance</span>
            </button>
          ) : (
            <span className="text-[#00D09C] font-medium tracking-tight">
              Autopay Active & Verified
            </span>
          )}
        </div>
      </div>

      {/* 4. Dynamic AI Reassurance Micro-Copy Banner */}
      <div 
        onClick={() => {
          playTapSound();
          if (onOpenHorizon) onOpenHorizon();
        }}
        className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#44475B] cursor-pointer hover:text-[#1F2937] transition-colors h-5 group"
        title="Tap to see Groww Investor Achievement Benchmarks"
      >
        <div className="flex items-center space-x-1 truncate pr-2">
          <Sparkles size={11} className="text-[#00D09C] shrink-0" />
          <span className="truncate font-normal group-hover:text-black">
            {copyText}
          </span>
        </div>
        <span className="text-[10px] text-[#00897B] shrink-0 font-medium group-hover:underline">
          Peer Data &gt;
        </span>
      </div>
    </div>
  );
}
