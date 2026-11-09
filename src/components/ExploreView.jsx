import React from 'react';
import { TrendingUp, Award, Shield, Sparkles, Compass, Zap } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function ExploreView({ onSelectFund }) {
  const collections = [
    { title: 'High Return', sub: 'Up to 34% p.a.', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'SIP with ₹500', sub: 'Pocket friendly', icon: Zap, color: 'text-blue-600 bg-blue-50' },
    { title: 'Tax Saving (ELSS)', sub: 'Save ₹46,800', icon: Shield, color: 'text-purple-600 bg-purple-50' },
    { title: 'Top Rated', sub: '5-star CRISIL', icon: Award, color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="p-4 space-y-5 animate-in fade-in duration-200">
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-1">Explore Collections</h2>
        <p className="text-xs text-gray-500">Curated funds for every investor goal</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {collections.map((col, i) => {
          const Icon = col.icon;
          return (
            <div
              key={i}
              onClick={() => {
                playTapSound();
                alert(`Viewing collection: ${col.title}`);
              }}
              className="p-3.5 rounded-2xl border border-gray-200 hover:border-emerald-500 bg-white shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95"
            >
              <div className={`w-8 h-8 rounded-xl ${col.color} flex items-center justify-center mb-2`}>
                <Icon size={18} />
              </div>
              <h3 className="text-xs font-bold text-gray-900">{col.title}</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">{col.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Popular Trending Funds */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-4 rounded-2xl border border-emerald-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles size={16} className="text-emerald-600" />
          <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Top Recommended for Beginners</h3>
        </div>
        <p className="text-xs text-emerald-900 leading-relaxed mb-3">
          Diversified Large & Midcap funds balance volatility while establishing an unbroken compounding record.
        </p>
        <button
          onClick={() => {
            playTapSound();
            alert('Opening Top Recommended Fund');
          }}
          className="w-full py-2 bg-[#00D09C] text-gray-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all shadow-xs"
        >
          Explore Nifty 50 Index Funds
        </button>
      </div>
    </div>
  );
}

