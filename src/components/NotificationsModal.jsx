import React from 'react';
import { X, Bell, Flame, ShieldCheck, Sparkles } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function NotificationsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      title: 'Compounding Streak: Day 47 🔥',
      desc: 'Congratulations! You are officially in the top 8% of disciplined early investors.',
      time: '2 hours ago',
      unread: true,
      icon: Flame,
      color: 'text-amber-500 bg-amber-50'
    },
    {
      title: 'Next SIP Mandate Ready',
      desc: '₹2,500 scheduled for automatic debit on 1st of next month via HDFC Bank.',
      time: 'Yesterday',
      unread: false,
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Monthly Insight Unlocked',
      desc: 'Market dips in Year 1 lower your unit purchase average. Tap to review roadmap.',
      time: '3 days ago',
      unread: false,
      icon: Sparkles,
      color: 'text-indigo-600 bg-indigo-50'
    }
  ];

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
      }}
    >
      <div 
        className="w-full bg-white rounded-t-3xl max-h-[80%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <Bell size={16} className="text-[#1F2937]" />
            <h2 className="text-[14px] font-bold text-[#1F2937]">Notifications</h2>
          </div>
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="p-1 text-[#6B7280] hover:text-[#1F2937] rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-2 overflow-y-auto no-scrollbar divide-y divide-[#ECEEF0] flex-1">
          {notifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="py-2.5 flex items-start space-x-2.5">
                <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#1F2937]">{item.title}</h4>
                    {item.unread && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D09C]"></span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">{item.desc}</p>
                  <span className="text-[9.5px] text-[#9CA3AF] mt-0.5 block">{item.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#1F2937] text-white font-bold rounded-xl text-xs hover:bg-black transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
