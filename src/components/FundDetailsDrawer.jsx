import React, { useState } from 'react';
import { X, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function FundDetailsDrawer({ fund, isOpen, onClose }) {
  if (!isOpen || !fund) return null;

  const [activeDuration, setActiveDuration] = useState('3Y');

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
        {/* Header */}
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className={`w-8 h-8 rounded-lg ${fund.iconBg} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
              {fund.iconLetter}
            </div>
            <div>
              <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-wider">{fund.category}</span>
              <h2 className="text-[13px] font-bold text-[#1F2937] line-clamp-1">{fund.name}</h2>
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

        {/* Content */}
        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3.5 flex-1 text-xs">
          {/* Quick Metrics */}
          <div className="bg-[#F8F9FA] rounded-xl p-3 border border-[#ECEEF0] flex items-center justify-between">
            <div>
              <span className="text-[10.5px] text-[#9CA3AF] font-medium">Your Current Value</span>
              <div className="text-lg font-bold text-[#1F2937] font-mono mt-0.5">{fund.current}</div>
              <span className="text-[10.5px] text-[#00D09C] font-semibold">{fund.oneDayReturn}</span>
            </div>
            <div className="text-right">
              <span className="text-[10.5px] text-[#9CA3AF] font-medium">XIRR Return</span>
              <div className="text-lg font-bold text-[#00D09C] font-mono mt-0.5">{fund.returnVal}</div>
              <span className="text-[10.5px] text-[#6B7280]">Invested {fund.invested}</span>
            </div>
          </div>

          {/* Return Period Tabs */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#1F2937]">Historical Returns</span>
              <span className="text-[11px] font-bold text-[#00D09C] flex items-center gap-0.5">
                <TrendingUp size={12} />
                +21.4% p.a.
              </span>
            </div>

            <div className="flex bg-[#F3F4F6] p-0.5 rounded-lg justify-between text-[11px]">
              {['1M', '6M', '1Y', '3Y', '5Y', 'ALL'].map((dur) => (
                <button
                  key={dur}
                  onClick={() => {
                    playTapSound();
                    setActiveDuration(dur);
                  }}
                  className={`px-2.5 py-0.5 font-bold rounded-md transition-all ${
                    activeDuration === dur
                      ? 'bg-white text-black shadow-xs'
                      : 'text-[#6B7280] hover:text-black'
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>

            {/* Sparkline chart */}
            <div className="h-24 w-full bg-emerald-50/30 rounded-xl border border-emerald-100 p-2.5 flex flex-col justify-end relative overflow-hidden">
              <svg viewBox="0 0 300 80" className="w-full h-14 stroke-[#00D09C] fill-emerald-500/10">
                <path d="M0,60 Q40,55 70,40 T140,45 T210,25 T280,10 L300,8 L300,80 L0,80 Z" />
                <path d="M0,60 Q40,55 70,40 T140,45 T210,25 T280,10 L300,8" fill="none" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="flex justify-between text-[10px] text-[#9CA3AF] font-mono mt-1">
                <span>NAV: {fund.nav}</span>
                <span>Rating: {fund.rating}</span>
              </div>
            </div>
          </div>

          {/* SIP Schedule Card */}
          <div className="bg-indigo-50/30 rounded-xl p-3 border border-indigo-100 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <Calendar size={14} className="text-[#5367FF]" />
                <span className="text-[11.5px] font-bold text-[#1F2937]">Active Monthly SIP</span>
              </div>
              <span className="text-[9.5px] font-bold bg-[#E6F9F5] text-[#00897B] px-1.5 py-0.2 rounded-sm">
                Autopay Active
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
              <span>Amount: <strong className="text-[#1F2937]">{fund.sipAmount} / month</strong></span>
              <span>Next Debit: <strong className="text-[#1F2937]">{fund.nextSipDate}</strong></span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-3 border-t border-[#ECEEF0] bg-white flex items-center space-x-2.5 shrink-0">
          <button
            onClick={() => {
              playTapSound();
              triggerHaptic(10);
              alert(`Managing SIP for ${fund.name}.`);
            }}
            className="flex-1 py-2.5 bg-white border border-[#ECEEF0] text-[#1F2937] font-bold rounded-xl text-xs hover:bg-gray-50 transition-all shadow-2xs"
          >
            Manage SIP
          </button>
          <button
            onClick={() => {
              playTapSound();
              triggerHaptic(15);
              alert(`One-time top-up order created for ${fund.name}.`);
            }}
            className="flex-1 py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs flex items-center justify-center space-x-1"
          >
            <span>Invest More</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
