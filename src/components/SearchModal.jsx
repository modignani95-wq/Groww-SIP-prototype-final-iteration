import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { playTapSound } from '../utils/audio';

const ALL_SEARCH_FUNDS = [
  { name: 'Sample Flexi Cap Fund Direct Growth', cat: 'Equity • Flexi Cap', returns: '24.2%', rating: '5 ★' },
  { name: 'Sample Midcap Fund Direct Growth', cat: 'Equity • Mid Cap', returns: '28.6%', rating: '4 ★' },
  { name: 'Sample Small Cap Fund Direct Growth', cat: 'Equity • Small Cap', returns: '32.1%', rating: '5 ★' },
  { name: 'Sample Nifty 50 Index Fund Direct Growth', cat: 'Index • Large Cap', returns: '16.8%', rating: '5 ★' },
  { name: 'Sample ELSS Tax Saver Fund Direct Growth', cat: 'ELSS • Tax Saving 80C', returns: '19.4%', rating: '4 ★' },
  { name: 'Sample Arbitrage Fund Direct Growth', cat: 'Hybrid • Low Risk', returns: '7.8%', rating: '4 ★' }
];

export default function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'High Return', 'Index Funds', 'Tax Saver', 'Large Cap'];

  const filtered = ALL_SEARCH_FUNDS.filter((f) => {
    return f.name.toLowerCase().includes(query.toLowerCase()) || f.cat.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div 
      className="absolute inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
      }}
    >
      <div 
        className="w-full bg-white max-h-[85%] flex flex-col overflow-hidden shadow-2xl rounded-b-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-[#ECEEF0] flex items-center space-x-2.5 bg-white shrink-0">
          <Search size={18} className="text-[#9CA3AF] shrink-0" />
          <input
            type="text"
            placeholder="Search funds, AMC, stocks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-xs font-medium text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-hidden"
          />
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="p-1 text-[#6B7280] hover:text-[#1F2937] rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-3.5 py-2 flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-[#ECEEF0] shrink-0">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                playTapSound();
                setSelectedTag(tag);
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-[#E6F9F5] text-[#00897B] border border-[#B3EBDC]'
                  : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="px-3.5 py-2 overflow-y-auto no-scrollbar flex-1 divide-y divide-[#ECEEF0]">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-[#9CA3AF] text-xs">
              No mutual funds found matching "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  playTapSound();
                  alert(`Selected: ${item.name}`);
                  onClose();
                }}
                className="py-2.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg px-1.5 transition-colors"
              >
                <div>
                  <h4 className="text-xs font-semibold text-[#1F2937]">{item.name}</h4>
                  <div className="flex items-center space-x-2 text-[10.5px] text-[#6B7280] mt-0.5">
                    <span>{item.cat}</span>
                    <span>•</span>
                    <span className="text-amber-600 font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#00D09C] block">{item.returns}</span>
                  <span className="text-[9.5px] text-[#9CA3AF]">3Y CAGR</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
