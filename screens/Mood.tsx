
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Mood: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-[#FFF5F2] to-[#FDFBF7] min-h-screen">
      <header className="pt-6 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">我的心情</h1>
          <p className="text-gray-500 text-sm mt-1">今天感觉如何？</p>
        </div>
        <button className="p-2 rounded-full glass-card text-gray-700">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <section className="mb-8">
        <div 
          onClick={() => onNavigate('calendar')}
          className="glass-card rounded-[32px] p-8 shadow-soft flex flex-col items-center text-center group cursor-pointer"
        >
          <div className="size-20 rounded-full bg-gradient-to-tr from-[#ee7c2b] to-yellow-300 flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-white text-4xl">add</span>
          </div>
          <h2 className="text-xl font-bold mb-1">记录心情</h2>
          <p className="text-sm text-gray-500">捕捉当下的情绪与感受，此刻你在想什么？</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4 px-2">
          <h3 className="font-bold text-lg text-gray-700">我的打卡</h3>
          <span className="text-[10px] font-bold text-[#ee7c2b] bg-[#ee7c2b]/10 px-3 py-1 rounded-full">本周</span>
        </div>
        <div className="glass-card rounded-[32px] p-6 h-48 relative flex items-end overflow-hidden">
          <div className="w-full flex justify-between items-end h-full relative z-10 text-[10px] text-gray-400 font-medium">
            <span>周一</span>
            <span>周二</span>
            <span>周三</span>
            <span>周四</span>
            <span>周五</span>
            <span className="text-[#ee7c2b] font-bold">今天</span>
            <span>周日</span>
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path 
              d="M0,120 Q50,80 100,100 T200,60 T300,90 T400,100 V180 H0 Z" 
              fill="rgba(238, 124, 43, 0.1)"
            />
            <path 
              d="M0,120 Q50,80 100,100 T200,60 T300,90 T400,100" 
              stroke="#ee7c2b" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="320" cy="80" r="5" fill="#ee7c2b" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex justify-end mt-3">
          <button 
            onClick={() => onNavigate('calendar')}
            className="text-[11px] font-medium text-gray-400 flex items-center gap-0.5 hover:text-[#ee7c2b] transition-colors"
          >
            进入统计详情
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-bold text-lg text-gray-700 mb-4">情绪复盘</h3>
        <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
          {[
            { label: '快乐时刻', count: 12, emoji: '☀️', color: 'from-[#FFF8E1] to-[#FFECB3]' },
            { label: '平静安宁', count: 8, emoji: '🍃', color: 'from-[#E3F2FD] to-[#BBDEFB]' },
            { label: '低落/紧张', count: 3, emoji: '🌧️', color: 'from-[#F3E5F5] to-[#E1BEE7]' }
          ].map((item) => (
            <div key={item.label} className={`min-w-[140px] h-44 rounded-[2rem] p-5 flex flex-col justify-between bg-gradient-to-br ${item.color} shadow-sm active:scale-95 transition-all`}>
              <div className="size-10 rounded-full bg-white/60 flex items-center justify-center text-xl backdrop-blur-sm">
                {item.emoji}
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800">{item.count}</span>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-bold text-lg text-gray-700 mb-4">情绪洞察</h3>
        <div 
          onClick={() => onNavigate('insights')}
          className="glass-card rounded-[32px] p-6 flex items-start gap-4 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="size-12 rounded-2xl bg-[#ee7c2b]/20 flex items-center justify-center text-[#ee7c2b] shrink-0">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">你很有韧性</h4>
            <p className="text-sm text-gray-500 leading-relaxed">即使近期有压力，情绪恢复曲线仍展现出你的调节能力。</p>
            <button className="mt-3 text-xs font-bold text-[#ee7c2b] flex items-center gap-1">
              查看报告 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <button className="fixed right-6 bottom-28 size-14 bg-[#ee7c2b] text-white rounded-full shadow-lg shadow-[#ee7c2b]/40 flex items-center justify-center z-40 active:scale-90 transition-all">
        <span className="material-symbols-outlined text-2xl">edit</span>
      </button>
    </div>
  );
};

export default Mood;
