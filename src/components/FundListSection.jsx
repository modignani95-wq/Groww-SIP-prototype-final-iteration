import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { playTapSound, triggerHaptic } from '../utils/audio';

const INITIAL_FUNDS = [
  {
    id: 'flexi-cap',
    name: 'Sample Flexi Cap Fund Direct Growth',
    type: 'SIP',
    returnVal: '6.34%',
    returnNum: 6.34,
    invested: '₹4,000',
    current: '₹4,054',
    oneDayReturn: '+₹12 (0.30%)',
    iconLetter: 'S',
    iconBg: 'bg-[#3370EB]', // Groww Flexi Cap Blue
    nav: '₹68.42',
    category: 'Equity - Flexi Cap',
    risk: 'Very High Risk',
    rating: '5 ★',
    nextSipDate: '1st of next month',
    sipAmount: '₹1,500'
  },
  {
    id: 'mid-cap',
    name: 'Sample Midcap Fund Direct Growth',
    type: 'SIP',
    returnVal: '5.92%',
    returnNum: 5.92,
    invested: '₹3,000',
    current: '₹3,030',
    oneDayReturn: '+₹9 (0.30%)',
    iconLetter: 'S',
    iconBg: 'bg-[#E05338]', // Groww Midcap Red/Orange
    nav: '₹112.18',
    category: 'Equity - Mid Cap',
    risk: 'Very High Risk',
    rating: '4 ★',
    nextSipDate: '1st of next month',
    sipAmount: '₹1,000'
  }
];

export default function FundListSection({ onSelectFund, onOpenImport }) {
  const [funds, setFunds] = useState(INITIAL_FUNDS);
  const [sortOrder, setSortOrder] = useState('desc');

  const toggleSort = () => {
    playTapSound();
    triggerHaptic(10);
    const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newOrder);
    setFunds((prev) =>
      [...prev].sort((a, b) =>
        newOrder === 'desc' ? b.returnNum - a.returnNum : a.returnNum - b.returnNum
      )
    );
  };

  const handleFundClick = (fund) => {
    playTapSound();
    triggerHaptic(12);
    onSelectFund(fund);
  };

  return (
    <section className="px-4 py-2 mt-1 select-none">
      {/* Exact Groww Filter & Sort Bar */}
      <div className="flex items-center justify-between py-2.5">
        {/* Left: 3-tier horizontal funnel icon */}
        <button
          onClick={() => {
            playTapSound();
            triggerHaptic(10);
          }}
          className="p-1 text-[#1F2937] hover:opacity-80 active:scale-95 transition-transform"
          aria-label="Filter funds"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="9" y1="18" x2="15" y2="18" />
          </svg>
        </button>

        {/* Right: <> XIRR with dashed underline */}
        <button
          onClick={toggleSort}
          className="flex items-center space-x-1.5 text-[13px] font-semibold text-[#1F2937] active:scale-95 transition-transform"
        >
          <span className="text-[12px] text-[#6B7280] font-mono tracking-tighter">&lt;&gt;</span>
          <span className="border-b border-dashed border-[#1F2937] pb-[0.5px]">
            XIRR
          </span>
        </button>
      </div>

      {/* Fund List Items */}
      <div className="space-y-4 mt-2">
        {funds.map((fund) => (
          <div
            key={fund.id}
            onClick={() => handleFundClick(fund)}
            className="flex items-center justify-between cursor-pointer active:opacity-85 transition-opacity py-0.5"
          >
            {/* Left: Square logo + Name & SIP badge */}
            <div className="flex items-center space-x-3 pr-2">
              <div
                className={`w-9 h-9 rounded-lg ${fund.iconBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
              >
                {fund.iconLetter}
              </div>

              <div>
                <h2 className="text-[13.5px] font-medium text-[#1F2937] leading-snug line-clamp-1">
                  {fund.name}
                </h2>
                <div className="mt-0.5">
                  <span className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wide">
                    {fund.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: XIRR return value */}
            <div className="text-right shrink-0">
              <span className="text-[13.5px] font-medium text-[#1F2937]">
                {fund.returnVal}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary CTA: Import external funds. */}
      <div className="mt-14 flex justify-center">
        <button
          onClick={() => {
            playTapSound();
            triggerHaptic(15);
            onOpenImport();
          }}
          className="py-2.5 px-6 border border-[#E5E7EB] rounded-xl text-[13.5px] font-medium text-[#44475B] hover:text-[#1F2937] hover:border-gray-300 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 bg-white shadow-2xs"
        >
          {/* Download Tray Icon */}
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Import external funds.</span>
        </button>
      </div>

      {/* Disclaimer footer */}
      <div className="mt-6 text-center pb-8">
        <p className="text-[11px] text-[#9CA3AF] font-normal">
          Information only, not investment advice.
        </p>
      </div>
    </section>
  );
}
