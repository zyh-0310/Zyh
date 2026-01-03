
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const OnboardingLogin: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f5] via-[#ffefe8] to-[#fceade] px-8 flex flex-col justify-center">
      <div className="text-center mb-10">
        <div className="size-16 rounded-full bg-white shadow-lg mx-auto mb-6 flex items-center justify-center text-[#ee7c2b] animate-bounce [animation-duration:3s]">
          <span className="material-symbols-outlined text-4xl">spa</span>
        </div>
        <h1 className="text-3xl font-bold text-[#4a3b32] mb-3">一个温柔的<br/><span className="text-[#ee7c2b]">开始内观的场所</span></h1>
        <p className="text-[#8c7e74] font-medium">今天向自己敞开心扉。</p>
      </div>

      <div className="glass-card rounded-[2.5rem] p-8 shadow-soft border border-white/80">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('home'); }}>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ee7c2b] transition-colors">mail</span>
            <input 
              type="text" 
              placeholder="您的邮箱或手机号" 
              className="w-full h-14 pl-14 pr-4 rounded-full border-none bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#ee7c2b]/30 transition-all font-medium"
            />
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ee7c2b] transition-colors">lock</span>
            <input 
              type="password" 
              placeholder="密码" 
              className="w-full h-14 pl-14 pr-12 rounded-full border-none bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#ee7c2b]/30 transition-all font-medium"
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"><span className="material-symbols-outlined">visibility_off</span></button>
          </div>
          
          <div className="pt-4 flex flex-col gap-3">
            <button 
              type="submit"
              className="w-full h-14 bg-[#ee7c2b] text-white font-bold text-lg rounded-full shadow-lg shadow-[#ee7c2b]/20 flex items-center justify-center gap-2 group active:scale-95 transition-all"
            >
              <span>开始</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              type="button"
              onClick={() => onNavigate('register')}
              className="w-full h-14 bg-white/60 text-[#4a3b32] font-bold text-lg rounded-full border border-white/60 active:scale-95 transition-all"
            >
              注册
            </button>
          </div>
        </form>

        <div className="my-8 flex items-center gap-4 px-2 opacity-50">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-gray-500 whitespace-nowrap">或者</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <button className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#ee7c2b] transition-all"><span className="material-symbols-outlined">call</span></button>
            <button className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#ee7c2b] transition-all"><span className="material-symbols-outlined">chat_bubble</span></button>
          </div>
          <button 
            onClick={() => onNavigate('home')}
            className="text-xs font-bold text-gray-400 border-b border-transparent hover:border-gray-200"
          >以访客身份继续</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLogin;
