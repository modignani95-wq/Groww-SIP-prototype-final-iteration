import React from 'react';
import { ChevronDown } from 'lucide-react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function HoldingsModeView({ isValueHidden, onOpenXirr, context }) {
  const handleXirrClick = () => {
    playTapSound();
    triggerHaptic(10);
    onOpenXirr();
  };

  const returnPct = context?.oneDayReturnPct ?? 0.3;
  const isNegative = returnPct < 0;
  const isFlat = Math.abs(returnPct) <= 0.05;

  let currentValFormatted = '₹7,084';
  let oneDayText = '+₹21 (0.30%)';
  let totalReturnsText = '+₹84 (1.20%)';
  let returnColor = 'text-[#00D09C]';

  if (isNegative) {
    currentValFormatted = '₹6,978';
    oneDayText = '-₹106 (-1.50%)';
    totalReturnsText = '-₹22 (-0.31%)';
    returnColor = 'text-[#EB5B5B]';
  } else if (isFlat) {
    currentValFormatted = '₹7,063';
    oneDayText = '₹0 (0.00%)';
    totalReturnsText = '+₹63 (0.90%)';
    returnColor = 'text-[#6B7280]';
  }

  return (
    <div className="h-[195px] flex flex-col justify-between select-none">
      {/* 1. Total Current Value Header */}
      <div className="h-8 flex items-center">
        <div className="text-[28px] font-bold text-[#1F2937] tracking-tight leading-none font-sans">
          {isValueHidden ? '••••••' : currentValFormatted}
        </div>
      </div>

      {/* 2. Exact Groww Dashed Divider Line */}
      <div className="w-full border-t border-dashed border-[#E5E7EB] my-2.5" />

      {/* 3. Key Financial Metrics Grid - Exact 4 Rows */}
      <div className="space-y-2 text-[13.5px]">
        {/* Row 1: 1D returns */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">1D returns</span>
          <span className={`${returnColor} font-medium tracking-tight`}>
            {isValueHidden ? '••••••' : oneDayText}
          </span>
        </div>

        {/* Row 2: Total returns */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Total returns</span>
          <span className={`${isNegative ? 'text-[#EB5B5B]' : 'text-[#00D09C]'} font-medium tracking-tight`}>
            {isValueHidden ? '••••••' : totalReturnsText}
          </span>
        </div>

        {/* Row 3: Invested */}
        <div className="flex items-center justify-between h-5">
          <span className="text-[#6B7280] font-normal">Invested</span>
          <span className="text-[#1F2937] font-medium tracking-tight">
            {isValueHidden ? '••••••' : '₹7,000'}
          </span>
        </div>

        {/* Row 4: XIRR with dropdown chevron */}
        <div className="flex items-center justify-between h-5">
          <button
            onClick={handleXirrClick}
            className="flex items-center space-x-1 text-[#6B7280] hover:text-[#1F2937] active:scale-95 transition-transform"
          >
            <span>XIRR</span>
            <ChevronDown size={14} className="text-[#9CA3AF] stroke-[2.2]" />
          </button>
          <span className="text-[#1F2937] font-medium tracking-tight">
            {isValueHidden ? '••••••' : (isNegative ? '4.80%' : '6.10%')}
          </span>
        </div>
      </div>

      {/* 4. Subtle status line matching Habit Mode height */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#6B7280] h-5">
        <span>2 SIPs active • Debited monthly</span>
        <span className={isNegative ? 'text-[#EB5B5B] font-medium' : 'text-[#00897B] font-medium'}>
          {isNegative ? 'Rupee Cost Averaging in effect' : 'Portfolio on track'}
        </span>
      </div>
    </div>
  );
}
