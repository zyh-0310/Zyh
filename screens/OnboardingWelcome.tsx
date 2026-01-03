
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const OnboardingWelcome: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen px-6 py-12 bg-gradient-to-b from-[#fffbf7] to-[#fff0e3]">
      <div className="flex justify-center mb-8 pt-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ee7c2b]/10 text-[#ee7c2b]">
          <span className="material-symbols-outlined text-[28px]">spa</span>
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#2d241f] mb-3">欢迎你来到这里</h1>
        <p className="text-[#8c7e74] text-base">在开始之前，我们想先了解你一点点。</p>
      </div>

      <div className="w-full flex flex-col gap-6 mb-8">
        <h2 className="text-lg font-bold text-[#2d241f] text-center">此刻，你的内心更接近哪种状态?</h2>
        <div className="flex flex-col gap-3">
          {[
            { label: '平静', icon: 'wb_sunny' },
            { label: '有点疲惫', icon: 'bedtime' },
            { label: '有些紧张', icon: 'waves' },
            { label: '说不清楚', icon: 'cloud' }
          ].map((item) => (
            <label key={item.label} className="cursor-pointer group">
              <input type="radio" name="emotion" className="sr-only peer" />
              <div className="flex h-14 items-center justify-between px-6 rounded-full bg-white/60 border border-transparent peer-checked:border-[#ee7c2b] peer-checked:bg-[#fff8f3] peer-checked:text-[#ee7c2b] transition-all">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#8c7e74] group-hover:text-[#ee7c2b] peer-checked:text-[#ee7c2b]">
                    {item.icon}
                  </span>
                  <span className="font-medium text-[#4a3b32] group-checked:text-[#ee7c2b]">{item.label}</span>
                </div>
                <div className="h-5 w-5 rounded-full border border-gray-200 peer-checked:border-[#ee7c2b] peer-checked:bg-[#ee7c2b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[14px] scale-0 peer-checked:scale-100 transition-transform">check</span>
                </div>
              </div>
            </label>
          ))}
        </div>
        <p className="text-xs text-[#8c7e74]/70 text-center">没有对错，你可以随时调整。</p>
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <button 
          onClick={() => onNavigate('login')}
          className="h-14 w-full rounded-full bg-[#ee7c2b] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ee7c2b]/20 active:scale-95 transition-all"
        >
          <span>继续</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="text-sm font-medium text-[#8c7e74] py-2">稍后再说</button>
        <p className="text-[11px] text-[#8c7e74]/50 text-center leading-tight">
          我们会根据你的选择，为你提供更温和的引导。
        </p>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
