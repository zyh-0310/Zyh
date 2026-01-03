
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const EmotionalInsights: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F6] to-[#fcfaf8] p-6">
      <header className="pt-6 mb-8 flex items-center gap-4">
        <button onClick={() => onNavigate('mood')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-xl font-bold text-gray-800">情绪洞察</h1>
      </header>

      <div className="glass-card rounded-[32px] p-8 shadow-soft text-center mb-8">
        <div className="size-20 rounded-full bg-[#ee7c2b]/10 text-[#ee7c2b] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-4xl">auto_awesome</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">你的韧性核心</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          通过过去30天的记录，我们发现你在面对压力时，能够迅速通过“自我对话”回归平静。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
          <span className="material-symbols-outlined text-[#ee7c2b] mb-2">lightbulb</span>
          <h4 className="font-bold text-xs text-gray-800">调节建议</h4>
          <p className="text-[10px] text-gray-400 mt-1">多尝试户外步行</p>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50">
          <span className="material-symbols-outlined text-blue-400 mb-2">bedtime</span>
          <h4 className="font-bold text-xs text-gray-800">睡眠关联</h4>
          <p className="text-[10px] text-gray-400 mt-1">情绪受睡眠质量影响显著</p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalInsights;
