import React from 'react';
import { X, PieChart, CheckCircle2 } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function AnalyticsDrawer({ isOpen, onClose }) {
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
        className="w-full bg-white rounded-t-3xl max-h-[82%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#5367FF] flex items-center justify-center">
              <PieChart size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Portfolio Analytics</h2>
              <p className="text-[10.5px] text-[#6B7280]">Asset Allocation & Diversification</p>
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

        {/* Scrollable Content */}
        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3.5 flex-1 text-xs">
          {/* Allocation Breakdown */}
          <div className="bg-[#F8F9FA] rounded-xl p-3 border border-[#ECEEF0] space-y-2.5">
            <span className="text-[11px] font-bold text-[#1F2937] uppercase tracking-wide">Category Split</span>
            
            {/* Visual Bar */}
            <div className="w-full h-2.5 rounded-full flex overflow-hidden">
              <div style={{ width: '57%' }} className="bg-[#3370EB] h-full" title="Flexi Cap 57%" />
              <div style={{ width: '43%' }} className="bg-[#E05338] h-full" title="Mid Cap 43%" />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5 text-[11.5px]">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#3370EB]" />
                <span className="font-medium text-[#1F2937]">Flexi Cap (57%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#E05338]" />
                <span className="font-medium text-[#1F2937]">Mid Cap (43%)</span>
              </div>
            </div>
          </div>

          {/* Market Cap Spread */}
          <div className="bg-[#F8F9FA] rounded-xl p-3 border border-[#ECEEF0] space-y-2 text-xs">
            <span className="text-[11px] font-bold text-[#1F2937] uppercase tracking-wide">Market Cap Exposure</span>
            
            <div className="space-y-2 pt-1 text-[11px]">
              <div>
                <div className="flex justify-between text-[#6B7280] mb-0.5">
                  <span>Large Cap (Bluechips)</span>
                  <span className="font-semibold text-[#1F2937]">46%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#00D09C] h-full w-[46%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#6B7280] mb-0.5">
                  <span>Mid Cap (Growth Engines)</span>
                  <span className="font-semibold text-[#1F2937]">38%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[38%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#6B7280] mb-0.5">
                  <span>Small Cap & Cash</span>
                  <span className="font-semibold text-[#1F2937]">16%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#5367FF] h-full w-[16%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Health Score */}
          <div className="bg-[#E6F9F5] rounded-xl p-3 border border-[#B3EBDC] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} className="text-[#00897B]" />
              <div>
                <h4 className="text-[11.5px] font-bold text-[#00897B]">Optimal Diversification</h4>
                <p className="text-[10.5px] text-[#00897B]/80">Balanced profile for beginner investors.</p>
              </div>
            </div>
            <span className="text-xs font-extrabold text-[#00897B]">8.8/10</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs active:scale-[0.99]"
          >
            Close Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
