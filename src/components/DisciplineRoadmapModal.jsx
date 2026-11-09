import React from 'react';
import { X, CheckCircle2, Lock, Flame, Award, Sparkles, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationFanfare, playTapSound } from '../utils/audio';

const MILESTONES = [
  {
    month: 'Month 1',
    title: 'The Seed: First SIP Debit',
    status: 'completed',
    badge: 'Initiator',
    description: 'First ₹2,500 successfully debited and units allocated.',
    reward: 'Unlocked Portfolio Tracker',
    dayRange: 'Day 1–30'
  },
  {
    month: 'Month 2',
    title: 'Habit Anchor: Discipline Builder',
    status: 'current',
    badge: 'Discipline Builder',
    description: 'You are currently on Day 47. The neural habit loop for monthly investing is locking in.',
    reward: 'Top 8% Consistency Badge',
    dayRange: 'Day 31–60'
  },
  {
    month: 'Month 3',
    title: 'Quarter 1: The First Shield',
    status: 'upcoming',
    badge: 'Resilient Saver',
    description: '3 consecutive debits completed. You survive your first quarterly volatility swing.',
    reward: 'Emergency Cushion Analysis',
    dayRange: 'Day 61–90'
  },
  {
    month: 'Month 6',
    title: 'Half-Year: Market Shockproof',
    status: 'locked',
    badge: 'Shockproof Investor',
    description: 'Rupee Cost Averaging takes effect — red days bought you discount units.',
    reward: 'Custom Portfolio Health Report',
    dayRange: 'Day 91–180'
  },
  {
    month: 'Month 9',
    title: 'Compounding Flywheel',
    status: 'locked',
    badge: 'Flywheel Cruiser',
    description: 'Reinvested dividends and compounding gains begin outpacing standard bank FD returns.',
    reward: 'Zero AMC Priority Support',
    dayRange: 'Day 181–270'
  },
  {
    month: 'Month 12',
    title: 'Year 1: Master Disciplined Investor',
    status: 'locked',
    badge: 'Master Disciplined Investor',
    description: 'The golden milestone. 12 months without breaking your mandate. You beat 82% of retail timers.',
    reward: 'Groww Elite Investor Certificate & Exclusive Webinar',
    dayRange: 'Day 271–365'
  }
];

export default function DisciplineRoadmapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleCelebrate = () => {
    playCelebrationFanfare();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
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
        className="w-full bg-white rounded-t-3xl max-h-[85%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00D09C] flex items-center justify-center font-bold">
              <Award size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">12-Month Discipline Roadmap</h2>
              <p className="text-[10.5px] text-[#6B7280]">Year-1 Behavioral Retention Journey</p>
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

        {/* Scrollable Roadmap Body */}
        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-4 flex-1">
          {/* Top Active Streak Card */}
          <div className="bg-[#1F2937] text-white p-3.5 rounded-2xl relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10.5px] font-bold text-[#00D09C] uppercase tracking-wider">
                  Active Milestone
                </span>
                <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full font-mono text-emerald-200">
                  Day 47 of 365
                </span>
              </div>
              <h3 className="text-[14px] font-bold text-white">Level 2: Discipline Builder</h3>
              <p className="text-[11.5px] text-gray-300 mt-0.5 leading-snug">
                Most first-time investors churn in Month 2–3 when returns look small. You are building the habit!
              </p>
              <button
                onClick={handleCelebrate}
                className="mt-2.5 px-3 py-1 bg-[#00D09C] text-black rounded-lg text-[11px] font-bold flex items-center space-x-1.5 hover:bg-emerald-400 active:scale-95 transition-all shadow-xs"
              >
                <Sparkles size={13} />
                <span>Celebrate 47 Days Streak 🎉</span>
              </button>
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative pl-5 space-y-3.5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {MILESTONES.map((item) => {
              const isCompleted = item.status === 'completed';
              const isCurrent = item.status === 'current';

              return (
                <div key={item.month} className="relative">
                  {/* Indicator Icon */}
                  <div
                    className={`absolute -left-[24px] top-1 w-5 h-5 rounded-full flex items-center justify-center ring-3 ring-white ${
                      isCompleted
                        ? 'bg-[#00D09C] text-white shadow-2xs'
                        : isCurrent
                        ? 'bg-amber-500 text-white ring-amber-100 shadow-xs animate-pulse'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={12} className="stroke-[2.5]" />
                    ) : isCurrent ? (
                      <Flame size={11} className="fill-white" />
                    ) : (
                      <Lock size={9} />
                    )}
                  </div>

                  {/* Card Content */}
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-amber-50/40 border-amber-300/70 shadow-2xs'
                        : isCompleted
                        ? 'bg-emerald-50/25 border-emerald-200/50'
                        : 'bg-[#F9FAFB] border-[#ECEEF0] opacity-85'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        {item.month} • {item.dayRange}
                      </span>
                      <span
                        className={`text-[9.5px] font-bold px-1.5 py-0.2 rounded-sm ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800'
                            : isCurrent
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-[12.5px] font-bold text-gray-900">{item.title}</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">{item.description}</p>

                    <div className="mt-1.5 pt-1.5 border-t border-gray-200/50 flex items-center space-x-1.5 text-[10.5px] text-[#5367FF] font-medium">
                      <Shield size={11} className="text-[#5367FF] shrink-0" />
                      <span>Reward: {item.reward}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs active:scale-[0.99]"
          >
            Got It! Keep Compounding
          </button>
        </div>
      </div>
    </div>
  );
}
