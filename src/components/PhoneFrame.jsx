import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function PhoneFrame({ 
  children, 
  onOpenWhyHabit, 
  soundEnabled, 
  setSoundEnabled 
}) {
  return (
    <div className="h-full w-full bg-[#F4F6F8] flex flex-col items-center justify-center sm:py-6 font-sans antialiased overflow-hidden">
      {/* Desktop Helper Toolbar (Hidden on actual mobile screens) */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-[420px] mb-2 px-3 text-xs text-[#6B7280] shrink-0">
        <div className="flex items-center space-x-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#00D09C]"></span>
          <span>Groww PWA Mode</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playTapSound();
            }}
            className="p-1 rounded-md bg-white border border-[#ECEEF0] text-[#44475B] hover:text-[#1F2937] transition-colors"
            title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
          >
            {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
          </button>

          <button
            onClick={() => {
              playTapSound();
              onOpenWhyHabit();
            }}
            className="px-2 py-0.5 rounded-md bg-white border border-[#00D09C] text-[#00897B] font-semibold text-[11px] flex items-center space-x-1 hover:bg-[#E6F9F5] active:scale-95 transition-all"
          >
            <Sparkles size={11} className="text-[#00D09C]" />
            <span>Product Thesis</span>
          </button>
        </div>
      </div>

      {/* Screen Container: 100dvh on mobile, fixed height on desktop */}
      <div className="w-full max-w-[420px] h-[100dvh] sm:h-[844px] sm:max-h-[92vh] sm:rounded-2xl bg-white sm:border sm:border-[#ECEEF0] sm:shadow-md flex flex-col overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
