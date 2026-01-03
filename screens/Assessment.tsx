
import React, { useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Assessment: React.FC<Props> = ({ onNavigate }) => {
  const [intensity, setIntensity] = useState(60);

  return (
    <div className="min-h-screen bg-[#FFF9F6] pb-24">
      <header className="px-6 pt-12 pb-4 flex flex-col gap-4">
        <button onClick={() => onNavigate('home')} className="size-10 flex items-center justify-center text-gray-800 -ml-3">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
        <div>
          <h1 className="text-[30px] font-bold text-gray-900 leading-tight">情绪评估</h1>
          <p className="text-sm text-gray-500">帮助你回到身体与情绪的稳定节奏</p>
        </div>
      </header>

      <div className="px-6 space-y-6">
        <div className="glass-card rounded-3xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-5">
            <span className="size-6 rounded-full bg-[#ee7c2b]/20 text-[#ee7c2b] flex items-center justify-center text-xs font-bold">1</span>
            <h2 className="font-semibold text-gray-800">您感觉如何？</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: '平静', icon: 'water_drop', color: 'text-blue-300' },
              { label: '焦虑', icon: 'waves', color: 'text-[#ee7c2b]', active: true },
              { label: '沉重', icon: 'cloud', color: 'text-gray-400' },
              { label: '烦躁', icon: 'grain', color: 'text-orange-400' }
            ].map((item) => (
              <button 
                key={item.label}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                  item.active 
                  ? 'bg-[#ee7c2b]/10 border-[#ee7c2b] shadow-md scale-[1.02]' 
                  : 'bg-white border-gray-100'
                }`}
              >
                <span className={`material-symbols-outlined text-3xl ${item.color}`}>{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-8">
            <span className="size-6 rounded-full bg-[#ee7c2b]/20 text-[#ee7c2b] flex items-center justify-center text-xs font-bold">2</span>
            <h2 className="font-semibold text-gray-800">强度如何？</h2>
          </div>
          <div className="px-2">
            <input 
              type="range" 
              className="w-full h-1.5 bg-[#FFE4DE] rounded-full appearance-none cursor-pointer accent-[#ee7c2b]"
              min="0" max="100" 
              value={intensity}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
            />
            <div className="flex justify-between mt-4 text-xs font-medium text-gray-400">
              <span>轻微</span>
              <span className="text-[#ee7c2b]">中等</span>
              <span>强烈</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="size-6 rounded-full bg-[#ee7c2b]/20 text-[#ee7c2b] flex items-center justify-center text-xs font-bold">3</span>
              <h2 className="font-semibold text-gray-800">有明确来源吗？</h2>
            </div>
            <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full border border-gray-200 uppercase">可选</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['身体', '环境', '想法', '社交', '不确定'].map((source) => (
              <button 
                key={source}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  source === '想法' 
                  ? 'bg-[#ee7c2b] text-white shadow-lg shadow-[#ee7c2b]/30' 
                  : 'bg-white text-gray-600 border border-gray-100'
                }`}
              >
                {source}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#fef1e8] p-5 rounded-3xl border border-orange-100 flex gap-4">
          <div className="size-10 rounded-full bg-white flex items-center justify-center text-[#ee7c2b] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-xl">favorite</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">我听到了，钰怀同学。</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              听起来您的想法现在正在引起一些焦虑。这完全没关系。我们可以温柔地处理它。
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#FFF9F6] via-[#FFF9F6]/90 flex justify-center">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full max-w-md bg-[#2d241f] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] transition-all"
        >
          <span>完成评估</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Assessment;
