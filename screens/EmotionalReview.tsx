
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const EmotionalReview: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] p-6">
      <header className="pt-6 mb-8">
        <button onClick={() => onNavigate('mood')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800 mb-6">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-800">情绪复盘</h1>
        <p className="text-sm text-gray-400 mt-2">回顾这一段心路历程</p>
      </header>

      <div className="space-y-6">
        <div className="glass-card rounded-[32px] p-6 shadow-soft">
          <h3 className="font-bold text-gray-800 mb-4">高频情绪关键词</h3>
          <div className="flex flex-wrap gap-2">
            {['平静', '专注', '轻微焦虑', '充实', '思考', '感恩'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">{tag}</span>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-6 shadow-soft">
          <h3 className="font-bold text-gray-800 mb-2">情绪趋势</h3>
          <p className="text-xs text-gray-400 mb-4">相比上周，你的稳定性提升了 12%</p>
          <div className="h-32 bg-gray-50 rounded-2xl flex items-end justify-between p-4 gap-2">
             {[40, 60, 45, 80, 55, 70, 90].map((h, i) => (
               <div key={i} className="flex-1 bg-[#ee7c2b]/30 rounded-t-lg transition-all hover:bg-[#ee7c2b]" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionalReview;
