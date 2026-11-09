import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function BankBalanceModal({ isOpen, onClose, daysLeft = 2, amount = '₹2,500' }) {
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
        className="w-full bg-white rounded-t-3xl max-h-[75%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00D09C] flex items-center justify-center font-bold">
              <ShieldCheck size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Cash-Flow Sentinel Check</h2>
              <p className="text-[10.5px] text-[#6B7280]">Autopay Mandate Readiness</p>
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

        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3.5 flex-1 text-xs">
          <div className="bg-[#E6F9F5] p-3 rounded-xl border border-[#B3EBDC] space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#00897B] flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                Mandate Active & Verified
              </span>
              <span className="text-[10px] font-bold text-[#00897B] bg-white px-1.5 py-0.2 rounded-sm">
                e-NACH Ready
              </span>
            </div>
            <p className="text-[11.5px] text-[#00897B]">
              Scheduled Debit: <strong className="font-semibold">{amount}</strong> in <strong>{daysLeft} days</strong> (1st of month).
            </p>
          </div>

          <div className="p-3 rounded-xl border border-[#ECEEF0] space-y-1.5 text-[11.5px] text-[#44475B]">
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Linked Bank Account:</span>
              <strong className="text-[#1F2937] font-mono">HDFC Bank •••• 4821</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Max Mandate Limit:</span>
              <strong className="text-[#1F2937] font-mono">₹25,000 / month</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Bounce Fee Protection:</span>
              <span className="text-[#00D09C] font-semibold">Active Shield</span>
            </div>
          </div>

          <p className="text-[11px] text-[#6B7280] leading-relaxed">
            💡 Proactive tip: Keep at least {amount} in your HDFC account before the 1st to ensure your unbroken compounding streak remains uninterrupted.
          </p>
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs active:scale-[0.99]"
          >
            Confirmed, Bank Balance Ready
          </button>
        </div>
      </div>
    </div>
  );
}

