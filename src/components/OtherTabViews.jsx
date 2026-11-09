import React from 'react';
import { TrendingUp, CandlestickChart, Banknote, ArrowLeft } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function OtherTabViews({ tab, onBackToMf }) {
  const meta = {
    stocks: {
      title: 'Stocks Dashboard',
      desc: 'Explore Nifty 50, Sensex, Market Movers, and Intraday screening.',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-50'
    },
    fno: {
      title: 'Futures & Options',
      desc: 'Option chain analysis, Open Interest heatmaps, and Greek analytics.',
      icon: CandlestickChart,
      color: 'text-purple-600 bg-purple-50'
    },
    loans: {
      title: 'Groww Credit & Loans',
      desc: 'Instant pre-approved loan against mutual funds without liquidating units.',
      icon: Banknote,
      color: 'text-amber-600 bg-amber-50'
    }
  }[tab] || {
    title: 'Groww Financial Services',
    desc: 'Explore the full Groww ecosystem.',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50'
  };

  const Icon = meta.icon;

  return (
    <div className="p-6 text-center py-16 space-y-4 animate-in fade-in duration-200">
      <div className={`w-16 h-16 rounded-3xl ${meta.color} mx-auto flex items-center justify-center shadow-xs`}>
        <Icon size={32} />
      </div>
      <h2 className="text-lg font-bold text-gray-900">{meta.title}</h2>
      <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
        {meta.desc}
      </p>

      <div className="pt-4">
        <button
          onClick={() => {
            playTapSound();
            onBackToMf();
          }}
          className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold inline-flex items-center space-x-1.5 hover:bg-black transition-all shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Return to Mutual Funds</span>
        </button>
      </div>
    </div>
  );
}

