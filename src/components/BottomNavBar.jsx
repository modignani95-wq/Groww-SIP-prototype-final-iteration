import React from 'react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function BottomNavBar({ activeBottomTab, onSelectBottomTab }) {
  const handleClick = (id) => {
    playTapSound();
    triggerHaptic(12);
    onSelectBottomTab(id);
  };

  return (
    <nav className="w-full bg-white border-t border-[#ECEEF0] px-3 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-around select-none z-20 shrink-0">
      {/* 1. Stocks */}
      <button
        onClick={() => handleClick('stocks')}
        className={`min-w-[60px] min-h-[44px] flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 focus:outline-hidden ${
          activeBottomTab === 'stocks' ? 'text-[#5367FF]' : 'text-[#8C8E9E] hover:text-[#1F2937]'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 15l3.5-3.5 3 3L17 9" />
        </svg>
        <span className="text-[10.5px] font-medium leading-none">Stocks</span>
      </button>

      {/* 2. F&O */}
      <button
        onClick={() => handleClick('fno')}
        className={`min-w-[60px] min-h-[44px] flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 focus:outline-hidden ${
          activeBottomTab === 'fno' ? 'text-[#5367FF]' : 'text-[#8C8E9E] hover:text-[#1F2937]'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 15l3-4 4 3 3-5" />
        </svg>
        <span className="text-[10.5px] font-medium leading-none">F&O</span>
      </button>

      {/* 3. Mutual Funds (Active by default in Groww) */}
      <button
        onClick={() => handleClick('mf')}
        className={`min-w-[60px] min-h-[44px] flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 focus:outline-hidden ${
          activeBottomTab === 'mf' ? 'text-[#5367FF]' : 'text-[#8C8E9E] hover:text-[#1F2937]'
        }`}
      >
        {/* Pie / Donut Chart Icon */}
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" fill={activeBottomTab === 'mf' ? '#5367FF' : 'none'} fillOpacity="0.2" />
        </svg>
        <span className="text-[10.5px] font-semibold leading-none">Mutual Funds</span>
      </button>

      {/* 4. Loans */}
      <button
        onClick={() => handleClick('loans')}
        className={`min-w-[60px] min-h-[44px] flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 focus:outline-hidden ${
          activeBottomTab === 'loans' ? 'text-[#5367FF]' : 'text-[#8C8E9E] hover:text-[#1F2937]'
        }`}
      >
        {/* Banknote Cash Icon */}
        <svg
          viewBox="0 0 24 24"
          width="21"
          height="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
        <span className="text-[10.5px] font-medium leading-none">Loans</span>
      </button>
    </nav>
  );
}
