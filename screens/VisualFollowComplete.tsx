
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const VisualFollowComplete: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#FFF9F5] to-[#EDF4F9] flex flex-col items-center justify-center px-8">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-blue-100 blur-2xl rounded-full animate-breathe"></div>
        <div className="relative size-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-white/50">
          <span className="material-symbols-outlined text-[#ee7c2b] text-5xl">visibility</span>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">已完成视觉跟随</h1>
      <p className="text-sm text-gray-500 mb-8">你的注意力已经慢慢安定下来</p>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/40 flex gap-4 items-start mb-12">
        <span className="material-symbols-outlined text-blue-300 mt-1">auto_awesome</span>
        <p className="text-xs text-gray-600 leading-relaxed text-left font-medium">
          当你跟随光点移动时，大脑正在从紧张状态中切换出来。哪怕只有短短几分钟，也是一种有效的自我照顾。
        </p>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full h-14 bg-[#ee7c2b] text-white font-bold rounded-full shadow-lg shadow-[#ee7c2b]/20 active:scale-95 transition-all"
        >
          继续放松一下
        </button>
        <button 
          onClick={() => onNavigate('explore')}
          className="w-full h-14 bg-white border border-gray-100 text-gray-500 font-bold rounded-full active:scale-95 transition-all"
        >
          回到趣味化调节
        </button>
      </div>
    </div>
  );
};

export default VisualFollowComplete;
