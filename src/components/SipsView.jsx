import React from 'react';
import { Calendar, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function SipsView({ onSelectFund }) {
  return (
    <div className="p-4 space-y-4 animate-in fade-in duration-200">
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Total Monthly Commitment</span>
          <div className="text-xl font-extrabold text-emerald-950 font-mono mt-0.5">₹2,500 / mo</div>
          <span className="text-xs text-emerald-700">Next debit in 14 days (1st of month)</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
          <Calendar size={20} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Scheduled SIPs (2 Active)</h3>

        <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-900">Sample Flexi Cap Fund</span>
            <span className="text-xs font-bold text-gray-900 font-mono">₹1,500</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span>Autopay: HDFC Bank •••• 4821</span>
            <span className="text-emerald-600 font-semibold">1st of every month</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-900">Sample Midcap Fund</span>
            <span className="text-xs font-bold text-gray-900 font-mono">₹1,000</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span>Autopay: HDFC Bank •••• 4821</span>
            <span className="text-emerald-600 font-semibold">1st of every month</span>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={() => {
            playTapSound();
            alert('Redirecting to Start New SIP catalog');
          }}
          className="w-full py-3 bg-[#00D09C] text-gray-950 font-bold rounded-xl text-xs hover:bg-emerald-400 transition-all flex items-center justify-center space-x-1.5 shadow-sm"
        >
          <span>+ Start New SIP</span>
        </button>
      </div>
    </div>
  );
}

