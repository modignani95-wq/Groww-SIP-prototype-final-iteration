import React from 'react';
import { X } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function XirrModal({ isOpen, onClose }) {
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
        className="w-full bg-white rounded-t-3xl max-h-[80%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00D09C] flex items-center justify-center font-bold text-xs">
              %
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Understanding XIRR (6.10%)</h2>
              <p className="text-[10.5px] text-[#6B7280]">Extended Internal Rate of Return</p>
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
          <div className="bg-[#E6F9F5] p-3 rounded-xl border border-[#B3EBDC]">
            <h3 className="font-bold text-[#00897B] text-xs mb-1">Why XIRR instead of simple return?</h3>
            <p className="text-[#00897B]/90 text-[11.5px]">
              In a SIP, you invest in multiple installments across different dates. XIRR calculates annualized returns on every single installment based on the exact days it stayed invested.
            </p>
          </div>

          <div className="space-y-1.5 border border-[#ECEEF0] rounded-xl p-3 text-[11.5px]">
            <h4 className="font-bold text-[#1F2937] text-xs">Early Investor Note 💡</h4>
            <p className="text-[#6B7280]">
              In months 1–6, XIRR fluctuates with day-to-day market moves because tenure is short. Groww's <strong>Habit Mode</strong> anchors your attention to uninterrupted compounding streaks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-[#F8F9FA] p-2.5 rounded-xl border border-[#ECEEF0]">
              <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Invested</span>
              <div className="text-[14px] font-bold text-[#1F2937] font-mono mt-0.5">₹7,000</div>
            </div>
            <div className="bg-[#F8F9FA] p-2.5 rounded-xl border border-[#ECEEF0]">
              <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Total Returns</span>
              <div className="text-[14px] font-bold text-[#00D09C] font-mono mt-0.5">+₹84 (1.20%)</div>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#1F2937] text-white font-bold rounded-xl text-xs hover:bg-black transition-all shadow-2xs"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
