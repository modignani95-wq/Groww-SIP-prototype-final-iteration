import React, { useState } from 'react';
import { Sparkles, ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';
import { playTapSound, triggerHaptic } from '../utils/audio';

export default function AiSimulatorToolbar({ context, onUpdateContext, onTriggerPanic }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const applyScenario = (updates) => {
    playTapSound();
    triggerHaptic(12);
    onUpdateContext(updates);
  };

  return (
    <div className="fixed bottom-14 left-0 right-0 max-w-[420px] mx-auto px-4 z-30 pointer-events-auto select-none">
      <div className="bg-[#1F2937] text-white rounded-2xl shadow-lg border border-neutral-700/80 overflow-hidden transition-all duration-200">
        {/* Toggle Bar */}
        <button
          onClick={() => {
            playTapSound();
            setIsExpanded(!isExpanded);
          }}
          className="w-full px-3 py-2 flex items-center justify-between text-[11px] font-semibold text-gray-200 hover:text-white"
        >
          <div className="flex items-center space-x-1.5">
            <Sparkles size={13} className="text-[#00D09C]" />
            <span>AI Behavioral Engine Live Simulator</span>
          </div>
          <div className="flex items-center space-x-1 text-[10px] text-gray-400">
            <span>{isExpanded ? 'Hide' : 'Test Scenarios'}</span>
            {isExpanded ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
          </div>
        </button>

        {/* Expanded Controls */}
        {isExpanded && (
          <div className="p-3 pt-1 border-t border-neutral-700 space-y-2 bg-neutral-900/90 text-xs">
            <p className="text-[10px] text-gray-400 leading-tight">
              Tap a scenario to watch the AI engine dynamically reframe anxiety and market states:
            </p>

            <div className="grid grid-cols-2 gap-1.5 pt-0.5">
              {/* 1. Red Market */}
              <button
                onClick={() => applyScenario({ oneDayReturnPct: -1.5, rapidToggleCount: 0 })}
                className={`p-1.5 rounded-lg text-[10.5px] font-medium text-left border transition-all ${
                  context.oneDayReturnPct === -1.5
                    ? 'bg-red-950/80 border-red-500 text-red-200'
                    : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                📉 Red Market (-1.5%)
              </button>

              {/* 2. Flat Market */}
              <button
                onClick={() => applyScenario({ oneDayReturnPct: 0.0, rapidToggleCount: 0 })}
                className={`p-1.5 rounded-lg text-[10.5px] font-medium text-left border transition-all ${
                  context.oneDayReturnPct === 0.0
                    ? 'bg-amber-950/80 border-amber-500 text-amber-200'
                    : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                ⚖️ Flat Market (0.0%)
              </button>

              {/* 3. High App Opens */}
              <button
                onClick={() => applyScenario({ sessionAppOpensThisWeek: 6, oneDayReturnPct: 0.3, rapidToggleCount: 0 })}
                className={`p-1.5 rounded-lg text-[10.5px] font-medium text-left border transition-all ${
                  context.sessionAppOpensThisWeek >= 6
                    ? 'bg-blue-950/80 border-blue-500 text-blue-200'
                    : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                📱 6 App Opens / Week
              </button>

              {/* 4. Approaching Debit (2 Days) */}
              <button
                onClick={() => applyScenario({ daysToNextDebit: 2, rapidToggleCount: 0 })}
                className={`p-1.5 rounded-lg text-[10.5px] font-medium text-left border transition-all ${
                  context.daysToNextDebit <= 2
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                    : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                ⏳ 2 Days to Debit
              </button>
            </div>

            <div className="flex items-center justify-between pt-1 text-[10px]">
              {/* Trigger Panic */}
              <button
                onClick={() => {
                  playTapSound();
                  onTriggerPanic();
                }}
                className="px-2 py-1 rounded-md bg-purple-900/60 text-purple-200 border border-purple-600/60 hover:bg-purple-800"
              >
                ⚡ Trigger Panic Interceptor
              </button>

              {/* Reset */}
              <button
                onClick={() => applyScenario({
                  oneDayReturnPct: 0.3,
                  daysToNextDebit: 14,
                  sessionAppOpensThisWeek: 2,
                  rapidToggleCount: 0
                })}
                className="flex items-center space-x-1 text-gray-400 hover:text-white"
              >
                <RotateCcw size={11} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

