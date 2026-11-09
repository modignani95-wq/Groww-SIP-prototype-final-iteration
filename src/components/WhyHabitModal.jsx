import React from 'react';
import { X, Flame, Shield, Sparkles, Brain } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function WhyHabitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
      }}
    >
      <div 
        className="w-full bg-white rounded-t-3xl max-h-[85%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00897B] flex items-center justify-center">
              <Brain size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Why "Habit & Momentum" Mode?</h2>
              <p className="text-[10.5px] text-[#6B7280]">First-Time Investor Retention Thesis</p>
            </div>
          </div>
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="p-1 text-[#6B7280] hover:text-[#1F2937] rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3 text-xs text-[#44475B] leading-relaxed flex-1">
          {/* Problem Statement */}
          <div className="p-3 bg-red-50/60 border border-red-200/70 rounded-xl space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">The Year-1 Churn Problem</span>
            <h3 className="font-bold text-red-950 text-xs">Why 42% of First-Time Investors Cancel Early</h3>
            <p className="text-red-900 text-[11px]">
              New investors open Groww <strong>2 to 4 times a week</strong>. In Months 1–3, ₹7,000 invested yields mere ₹84 or temporary dips, triggering panic and mandate cancellations.
            </p>
          </div>

          {/* Solution */}
          <div className="p-3 bg-[#E6F9F5] border border-[#B3EBDC] rounded-xl space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00897B]">The Innovation</span>
            <h3 className="font-bold text-[#00897B] text-xs">Shift Dopamine to Compounding Streaks</h3>
            <p className="text-[#00897B]/90 text-[11px]">
              Habit Mode anchors dopamine around the <strong>compounding streak (Day 47)</strong>, verified autopay, and countdowns — rewarding discipline rather than market noise.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-1.5 pt-0.5">
            <span className="font-bold text-[#1F2937] text-xs block">Key Behavioral Pillars:</span>
            
            <div className="flex items-start space-x-2 p-2 bg-[#F8F9FA] rounded-lg">
              <Flame size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F2937] block font-semibold text-[11.5px]">Loss Aversion Shield:</strong>
                <span className="text-[11px] text-[#6B7280]">Framing daily holding as compounding gives users reason not to sell.</span>
              </div>
            </div>

            <div className="flex items-start space-x-2 p-2 bg-[#F8F9FA] rounded-lg">
              <Shield size={14} className="text-[#00D09C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F2937] block font-semibold text-[11.5px]">Mandate Reassurance:</strong>
                <span className="text-[11px] text-[#6B7280]">Real-time autopay verification stops debit anxiety.</span>
              </div>
            </div>

            <div className="flex items-start space-x-2 p-2 bg-[#F8F9FA] rounded-lg">
              <Sparkles size={14} className="text-[#5367FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F2937] block font-semibold text-[11.5px]">12-Month Discipline Roadmap:</strong>
                <span className="text-[11px] text-[#6B7280]">Milestones guide users through the initial 365 days of compounding.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs"
          >
            Explore in App
          </button>
        </div>
      </div>
    </div>
  );
}
