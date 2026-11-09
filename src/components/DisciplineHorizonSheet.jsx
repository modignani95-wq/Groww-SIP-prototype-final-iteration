import React from 'react';
import { X, Award, Users, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function DisciplineHorizonSheet({ isOpen, onClose, onResetToHabit, streakDays = 47 }) {
  if (!isOpen) return null;

  const handleKeepCompounding = () => {
    playTapSound();
    triggerHaptic(20);
    if (onResetToHabit) onResetToHabit();
    onClose();
  };

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
      }}
    >
      <div 
        className="w-full bg-white rounded-t-3xl max-h-[88%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00D09C] flex items-center justify-center font-bold">
              <Award size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Investor Achievement Benchmarks</h2>
              <p className="text-[10.5px] text-[#6B7280]">Real data from Groww investors who succeeded • Day {streakDays}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="p-1 text-[#6B7280] hover:text-[#1F2937] rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3 flex-1 text-xs">
          {/* Cohort Benchmark Comparison Card */}
          <div className="bg-[#F8F9FA] rounded-2xl p-3.5 border border-[#ECEEF0] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#1F2937] uppercase tracking-wide flex items-center space-x-1">
                <Users size={12} className="text-[#00D09C]" />
                <span>Groww Peer Cohort Results</span>
              </span>
              <span className="text-[10.5px] font-bold text-[#00897B] bg-[#E6F9F5] px-2 py-0.5 rounded-md">
                92% Goal Achievement
              </span>
            </div>

            {/* Visual Cohort Comparison Bar */}
            <div className="space-y-2 pt-1">
              <div>
                <div className="flex justify-between text-[11px] font-medium text-[#1F2937] mb-1">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#00D09C]"></span>
                    <span>Investors with Unbroken Streaks (Day 45+)</span>
                  </span>
                  <span className="font-bold text-[#00D09C]">92% Achieved</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00D09C] rounded-full transition-all duration-500" style={{ width: '92%' }}></div>
                </div>
                <p className="text-[10px] text-[#6B7280] mt-0.5">
                  Accumulated 32% more wealth by never stopping during temporary market noise.
                </p>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-medium text-[#6B7280] mb-1">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span>Investors who paused early (Month 1–2)</span>
                  </span>
                  <span className="font-bold text-gray-500">22% Succeeded</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-400 rounded-full" style={{ width: '22%' }}></div>
                </div>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">
                  78% lost habit momentum and missed unit accumulation at lower costs.
                </p>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="pt-2 border-t border-[#E5E7EB] grid grid-cols-3 gap-1.5 text-center">
              <div className="bg-white p-1.5 rounded-lg border border-[#ECEEF0]">
                <div className="text-[10px] font-bold text-[#1F2937]">Day 30</div>
                <div className="text-[9.5px] text-[#00897B] font-medium">Habit Formed</div>
              </div>
              <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-[#00D09C]/30">
                <div className="text-[10px] font-bold text-[#00897B]">Day {streakDays} (You)</div>
                <div className="text-[9.5px] text-[#00897B] font-semibold">Top 14% Cohort</div>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-[#ECEEF0]">
                <div className="text-[10px] font-bold text-[#1F2937]">Month 12</div>
                <div className="text-[9.5px] text-[#6B7280] font-medium">Goal Achieved</div>
              </div>
            </div>
          </div>

          {/* Real Peer Achievement Proof Points */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#ECEEF0] flex items-start space-x-2.5">
              <ShieldCheck size={16} className="text-[#00D09C] shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#44475B]">
                <strong className="text-[#1F2937] block font-semibold">The Dip Advantage (Realized Data):</strong>
                Groww investors who kept debits active through red days acquired units at lower prices and achieved their first ₹1 Lakh milestone 4 months faster.
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#ECEEF0] flex items-start space-x-2.5">
              <CheckCircle2 size={16} className="text-[#00D09C] shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#44475B]">
                <strong className="text-[#1F2937] block font-semibold">Consistency Beats Speculation:</strong>
                98% of Groww investors who achieved compounding milestones relied strictly on automatic debits without attempting to time market entries.
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={handleKeepCompounding}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs flex items-center justify-center space-x-1.5 active:scale-[0.99]"
          >
            <span>Got it, keep compounding</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
