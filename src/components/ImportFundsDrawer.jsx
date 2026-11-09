import React, { useState } from 'react';
import { X, UploadCloud, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { playCelebrationFanfare, playTapSound } from '../utils/audio';

export default function ImportFundsDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('choose');

  const handleSimulateImport = () => {
    playTapSound();
    setStep('uploading');
    setTimeout(() => {
      playCelebrationFanfare();
      setStep('done');
    }, 1200);
  };

  return (
    <div 
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 overflow-hidden"
      onClick={() => {
        playTapSound();
        onClose();
        setStep('choose');
      }}
    >
      <div 
        className="w-full bg-white rounded-t-3xl max-h-[82%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 pt-3.5 pb-2.5 border-b border-[#ECEEF0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00D09C] flex items-center justify-center">
              <UploadCloud size={16} />
            </div>
            <div>
              <h2 className="text-[14px] font-bold text-[#1F2937]">Import External Funds</h2>
              <p className="text-[10.5px] text-[#6B7280]">Track all mutual funds in one place</p>
            </div>
          </div>
          <button
            onClick={() => {
              playTapSound();
              onClose();
              setStep('choose');
            }}
            className="p-1 text-[#6B7280] hover:text-[#1F2937] rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-3 overflow-y-auto no-scrollbar space-y-3 flex-1 text-xs">
          {step === 'choose' && (
            <>
              <div className="bg-[#E6F9F5] p-3 rounded-xl border border-[#B3EBDC] flex items-start space-x-2.5">
                <ShieldCheck size={18} className="text-[#00897B] shrink-0 mt-0.5" />
                <div className="text-[11.5px] text-[#00897B]">
                  <strong className="block font-bold">100% Secure & SEBI Regulated</strong>
                  Fetch external investments made via Zerodha, Kuvera, or banks automatically via CAS.
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSimulateImport}
                  className="w-full p-3 rounded-xl border border-[#ECEEF0] hover:border-[#00D09C] text-left transition-all active:scale-[0.99] flex items-center justify-between group bg-white"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                      OTP
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2937]">Auto-fetch with OTP</h4>
                      <p className="text-[10.5px] text-[#6B7280]">Linked with PAN & Mobile</p>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-bold text-[#00D09C]">Instant</span>
                </button>

                <button
                  onClick={handleSimulateImport}
                  className="w-full p-3 rounded-xl border border-[#ECEEF0] hover:border-[#00D09C] text-left transition-all active:scale-[0.99] flex items-center justify-between group bg-white"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2937]">Upload CAS PDF</h4>
                      <p className="text-[10.5px] text-[#6B7280]">CAMS or KFintech statement</p>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-bold text-[#6B7280]">PDF</span>
                </button>
              </div>
            </>
          )}

          {step === 'uploading' && (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-9 h-9 border-2 border-[#00D09C] border-t-transparent rounded-full animate-spin" />
              <h4 className="text-xs font-bold text-[#1F2937]">Fetching registrar records...</h4>
              <p className="text-[11px] text-[#6B7280]">Connecting to CAMS and KFintech servers</p>
            </div>
          )}

          {step === 'done' && (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-11 h-11 bg-emerald-100 text-[#00D09C] rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-sm font-bold text-[#1F2937]">External Holdings Synced!</h4>
              <p className="text-[11px] text-[#6B7280] max-w-xs">
                Your total portfolio value and compounding streak now reflect all holdings.
              </p>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-[#ECEEF0] bg-white shrink-0">
          <button
            onClick={() => {
              playTapSound();
              onClose();
              setStep('choose');
            }}
            className="w-full py-2.5 bg-[#00D09C] hover:bg-emerald-500 text-black font-bold rounded-xl text-xs transition-all shadow-2xs"
          >
            {step === 'done' ? 'Back to Dashboard' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
}
