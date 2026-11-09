import React, { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { triggerHaptic } from '../utils/audio';

export default function PullToRefresh({ children, onRefresh }) {
  const [startY, setStartY] = useState(0);
  const [pullY, setPullY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    if (containerRef.current && containerRef.current.scrollTop === 0) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(0);
    }
  };

  const handleTouchMove = (e) => {
    if (startY === 0 || isRefreshing) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0 && containerRef.current && containerRef.current.scrollTop === 0) {
      // Damped pull
      setPullY(Math.min(diff * 0.45, 65));
    }
  };

  const handleTouchEnd = () => {
    if (pullY > 45 && !isRefreshing) {
      setIsRefreshing(true);
      triggerHaptic(25);
      if (onRefresh) {
        onRefresh().finally(() => {
          setTimeout(() => {
            setIsRefreshing(false);
            setPullY(0);
          }, 600);
        });
      } else {
        setTimeout(() => {
          setIsRefreshing(false);
          setPullY(0);
        }, 800);
      }
    } else {
      setPullY(0);
    }
    setStartY(0);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col"
    >
      {/* Pull indicator */}
      {(pullY > 0 || isRefreshing) && (
        <div
          className="w-full flex items-center justify-center py-2 transition-all duration-150 overflow-hidden text-emerald-600"
          style={{ height: `${pullY}px` }}
        >
          <div className="flex items-center space-x-1.5 text-xs font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Loader2 size={14} className="animate-spin text-[#00D09C]" />
            <span>{isRefreshing ? 'Refreshing Portfolio...' : 'Pull to refresh'}</span>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}

