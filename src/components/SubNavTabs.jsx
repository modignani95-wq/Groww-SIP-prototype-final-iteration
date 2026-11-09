import React from 'react';
import { playTapSound, triggerHaptic } from '../utils/audio';

const TABS = ['Explore', 'Dashboard', 'SIPs', 'Watchlist'];

export default function SubNavTabs({ activeTab, onSelectTab }) {
  const handleClick = (tab) => {
    playTapSound();
    triggerHaptic(10);
    onSelectTab(tab);
  };

  return (
    <nav className="w-full bg-white border-b border-[#ECEEF0] px-4 select-none">
      <div className="flex items-center space-x-7 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`py-3 relative text-[14px] font-medium transition-colors whitespace-nowrap focus:outline-hidden ${
                isActive ? 'text-[#1F2937] font-semibold' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1F2937] rounded-t-sm" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
