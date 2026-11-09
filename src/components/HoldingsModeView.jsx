import React from 'react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function HoldingsModeView({ onOpenXirr }) {
  const handleXirrClick = () => {
    playTapSound();
    triggerHaptic(10);
    onOpenXirr();
  };

  return (
    <div className="h-[195px] flex flex-col justify-between select-none">
      {/* 1. Total Current Value Header */}
      <div className="h-8 flex items-center">
        <div className="text-[28px] font-bold text-[#1F2937] tracking-tight leading-none font-sans">
          ₹7,084
        </div>
      </div>

      {/* 2. Exact Groww Dashed Divider Line */}
      <div className="w-full border-t border-dashed border-[#E5E7EB] my-2.5" />

      {/* 3. Key Financial Metrics Grid - Exact 4 Rows (No Icons) */}
      <div className="space-y-2 text-[13.5px]">
        {/* Row 1: 1D returns */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">1D returns</span>
          <span className="text-[#00D09C] font-medium tracking-tight">
            +₹21 (0.30%)
          </span>
        </div>

        {/* Row 2: Total returns */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Total returns</span>
          <span className="text-[#00D09C] font-medium tracking-tight">
            +₹84 (1.20%)
          </span>
        </div>

        {/* Row 3: Invested */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Invested</span>
          <span className="text-[#1F2937] font-medium tracking-tight">
            ₹7,000
          </span>
        </div>

        {/* Row 4: XIRR (Clean text link, no icon) */}
        <div className="flex items-center justify-between h-5">
          <button
            onClick={handleXirrClick}
            className="text-[#6B7280] hover:text-[#1F2937] active:scale-95 transition-transform"
          >
            <span className="border-b border-dashed border-[#9CA3AF] pb-[0.5px]">XIRR</span>
          </button>
          <span className="text-[#1F2937] font-medium tracking-tight">
            6.10%
          </span>
        </div>
      </div>

      {/* 4. Subtle status line */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#6B7280] h-5">
        <span>2 SIPs active • Debited monthly</span>
        <span className="text-[#00897B] font-medium">Portfolio on track</span>
      </div>
    </div>
  );
}
