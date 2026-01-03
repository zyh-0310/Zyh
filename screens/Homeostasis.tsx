
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Homeostasis: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#1a1614] text-white flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d241f] to-[#1a1614] opacity-50"></div>
      
      <div className="relative z-10 mb-12">
        <div className="size-64 rounded-full border border-white/10 flex items-center justify-center animate-breathe">
          <div className="size-48 rounded-full bg-[#ee7c2b]/20 blur-2xl absolute"></div>
          <div className="size-32 rounded-full border-2 border-[#ee7c2b]/40 flex items-center justify-center">
            <div className="size-12 bg-[#ee7c2b] rounded-full shadow-[0_0_30px_rgba(238,124,43,0.6)]"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">稳态调节</h1>
        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          感受呼吸的起伏，让意识跟随光球。回归身体最原始的秩序。
        </p>
      </div>

      <div className="fixed bottom-12 left-0 w-full px-8 flex flex-col gap-4 z-20">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full h-14 glass-card rounded-full border-white/20 text-white font-bold backdrop-blur-md active:scale-95 transition-all"
        >
          结束练习
        </button>
      </div>
    </div>
  );
};

export default Homeostasis;
