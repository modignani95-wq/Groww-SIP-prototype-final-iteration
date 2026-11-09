import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

export default function TopStatusBar() {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Detect if running on an actual mobile device or standalone PWA
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 640 || window.matchMedia('(display-mode: standalone)').matches;
      setIsMobileDevice(isMobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const formatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  // On actual mobile device or standalone PWA, native OS already has a status bar
  if (isMobileDevice) {
    return <div className="h-[env(safe-area-inset-top,0px)] bg-white w-full" />;
  }

  return (
    <div className="w-full pt-3 pb-1 px-5 flex items-center justify-between text-xs font-semibold text-black select-none z-30 bg-white">
      {/* Time: 9:41 */}
      <span className="font-semibold tracking-tight text-[13px] ml-0.5">{currentTime}</span>

      {/* Dynamic Island Pill (desktop preview only) */}
      <div className="h-5 w-22 bg-black rounded-full flex items-center justify-end pr-2 transition-all">
        <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-neutral-700/60 mr-1" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0a192f] border border-blue-900/40" />
      </div>

      {/* Right Icons: Cellular 4-bars, Wifi, Battery */}
      <div className="flex items-center space-x-1.5 mr-0.5">
        <div className="flex items-end space-x-[1.5px] h-2.5">
          <span className="w-[2px] h-1 bg-black rounded-[0.5px]"></span>
          <span className="w-[2px] h-1.5 bg-black rounded-[0.5px]"></span>
          <span className="w-[2px] h-2 bg-black rounded-[0.5px]"></span>
          <span className="w-[2px] h-2.5 bg-black rounded-[0.5px]"></span>
        </div>

        <Wifi size={12} className="text-black stroke-[2.2]" />

        <div className="flex items-center">
          <div className="w-4.5 h-2.5 border border-black rounded-[2px] p-[1px] flex items-center">
            <div className="w-full h-full bg-black rounded-[0.5px]"></div>
          </div>
          <div className="w-[1px] h-1 bg-black rounded-r-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
}
