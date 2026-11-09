import React from 'react';
import { X, ShieldCheck, CreditCard, Bell, Smartphone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export default function ProfileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
      }}
    >
      <div 
        className="w-full bg-white rounded-t-3xl max-h-[82%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <h2 className="text-[14px] font-bold text-[#1F2937]">Account & Settings</h2>
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

        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3 flex-1 text-xs">
          {/* User profile card */}
          <div className="flex items-center space-x-3 p-3 bg-[#F8F9FA] rounded-xl border border-[#ECEEF0]">
            <div className="w-10 h-10 rounded-full bg-[#00897B] text-white font-bold text-base flex items-center justify-center shadow-xs">
              R
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1F2937]">Rahul Sharma</h3>
              <p className="text-[10.5px] text-[#6B7280]">rahul.sharma@example.com</p>
              <div className="flex items-center space-x-1 mt-0.5 text-[10.5px] text-[#00897B] font-semibold">
                <CheckCircle2 size={11} className="text-[#00897B]" />
                <span>KYC 100% Verified</span>
              </div>
            </div>
          </div>

          {/* Autopay Mandate info */}
          <div className="p-3 rounded-xl bg-[#E6F9F5] border border-[#B3EBDC] space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#00897B] flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#00897B]" />
                e-NACH Autopay Active
              </span>
              <span className="text-[9.5px] bg-white text-[#00897B] px-1.5 py-0.2 rounded-sm font-bold">
                Max ₹25,000/mo
              </span>
            </div>
            <p className="text-[11px] text-[#00897B]/90">
              HDFC Bank A/c ending with <strong className="font-mono">4821</strong>. Next debit on 1st.
            </p>
          </div>

          {/* Settings list */}
          <div className="divide-y divide-[#ECEEF0] rounded-xl border border-[#ECEEF0] text-xs">
            <div className="p-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2.5">
                <Smartphone size={16} className="text-[#6B7280]" />
                <span className="font-medium text-[#1F2937]">Add to Home Screen (PWA)</span>
              </div>
              <ChevronRight size={14} className="text-[#9CA3AF]" />
            </div>

            <div className="p-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2.5">
                <Bell size={16} className="text-[#6B7280]" />
                <span className="font-medium text-[#1F2937]">SIP Debit Alerts</span>
              </div>
              <span className="text-[#00D09C] font-semibold text-[11px]">Active</span>
            </div>

            <div className="p-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2.5">
                <CreditCard size={16} className="text-[#6B7280]" />
                <span className="font-medium text-[#1F2937]">Bank Accounts & Mandates</span>
              </div>
              <ChevronRight size={14} className="text-[#9CA3AF]" />
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
            }}
            className="w-full py-2.5 bg-[#1F2937] text-white font-bold rounded-xl text-xs hover:bg-black transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
