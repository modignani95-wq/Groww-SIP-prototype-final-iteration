import React from 'react';
import { Bookmark, Star, ArrowUpRight } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function WatchlistView() {
  const watchItems = [
    { name: 'Sample Small Cap Fund Direct Growth', cat: 'Equity • Small Cap', returns: '+34.2% 3Y', rating: '5 ★' },
    { name: 'Sample Gold ETF Fund of Fund', cat: 'Commodities • Gold', returns: '+18.1% 1Y', rating: '4 ★' },
    { name: 'Sample Nifty Next 50 Index Fund', cat: 'Index • Large Cap', returns: '+22.5% 3Y', rating: '5 ★' },
  ];

  return (
    <div className="p-4 space-y-4 animate-in fade-in duration-200">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">Watchlisted Funds (3)</h2>
        <span className="text-[11px] text-gray-500 font-medium">Auto-synced</span>
      </div>

      <div className="space-y-2.5">
        {watchItems.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-2xs flex items-center justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-gray-900">{item.name}</h3>
              <div className="flex items-center space-x-2 text-[11px] text-gray-500 mt-0.5">
                <span>{item.cat}</span>
                <span>•</span>
                <span className="text-amber-600 font-semibold">{item.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-emerald-600 block">{item.returns}</span>
              <button
                onClick={() => {
                  playTapSound();
                  alert(`Starting SIP for ${item.name}`);
                }}
                className="mt-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10.5px] font-bold rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                Start SIP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

