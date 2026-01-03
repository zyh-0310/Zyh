
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Explore: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] pb-24">
      <header className="px-6 pt-12 pb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">探索</h1>
          <p className="text-sm text-gray-400 mt-1">找到属于你的情绪解法</p>
        </div>
        <button className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <section className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">今日推荐</h3>
          <button className="text-xs font-bold text-[#ee7c2b]">查看全部</button>
        </div>
        <div 
          onClick={() => onNavigate('homeostasis')}
          className="glass-card rounded-[32px] p-6 shadow-soft relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -top-10 -right-10 size-40 bg-[#ee7c2b]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ee7c2b]/10 text-[#ee7c2b] text-[10px] font-bold">呼吸节奏</span>
                <h4 className="text-2xl font-bold text-gray-800 mt-2">光环跟随呼吸</h4>
                <p className="text-xs text-gray-400 mt-1">3分钟 · 舒缓焦虑 · 提升专注</p>
              </div>
              <div className="size-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 shadow-inner">
                <span className="material-symbols-outlined text-4xl">air</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full border-2 border-white bg-gray-200"></div>
                <div className="size-8 rounded-full border-2 border-white bg-gray-300"></div>
                <div className="size-8 rounded-full border-2 border-white bg-[#ee7c2b]/20 flex items-center justify-center text-[#ee7c2b] text-[10px] font-bold">+1k</div>
              </div>
              <button className="bg-[#ee7c2b] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#ee7c2b]/20">
                <span className="material-symbols-outlined text-lg">play_circle</span>
                开始调节
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="px-6 flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">场景分类</h3>
          <button className="text-xs font-bold text-[#ee7c2b]">查看全部</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6">
          {[
            { label: '学业压力', icon: 'school', color: 'text-blue-400' },
            { label: '工作疲惫', icon: 'work_history', color: 'text-orange-400' },
            { label: '人际紧张', icon: 'groups', color: 'text-purple-400' },
            { label: '前途焦虑', icon: 'explore', color: 'text-teal-400' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="size-16 rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center hover:scale-105 transition-transform">
                <span className={`material-symbols-outlined ${item.color} text-3xl`}>{item.icon}</span>
              </div>
              <span className="text-xs font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">趣味化调节</h3>
          <button 
            onClick={() => onNavigate('visual-follow')}
            className="text-xs font-bold text-[#ee7c2b]"
          >查看全部</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: '节奏同步', sub: '舒缓压力的波浪', icon: 'waves', color: 'bg-cyan-50 text-cyan-500' },
            { label: '视觉跟随', sub: '眼睛跟着圆点动', icon: 'visibility', color: 'bg-amber-50 text-amber-500', screen: 'visual-follow' },
            { label: '虚拟挤压', sub: '释放指尖压力', icon: 'back_hand', color: 'bg-rose-50 text-rose-500' },
            { label: '声音专注', sub: '寻找白噪音', icon: 'headphones', color: 'bg-emerald-50 text-emerald-500' }
          ].map((item) => (
            <div 
              key={item.label} 
              onClick={() => item.screen && onNavigate(item.screen as Screen)}
              className="bg-white/70 p-4 rounded-[2rem] border border-gray-50 shadow-sm flex flex-col gap-3 hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              <div className={`size-10 rounded-full ${item.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">{item.label}</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-4">情绪互动与陪伴</h3>
        <div className="space-y-3">
          <div className="bg-white p-5 rounded-[2rem] flex items-center justify-between shadow-sm border border-gray-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-violet-50 text-violet-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">bubble_chart</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">情绪互动</h4>
                <p className="text-[10px] text-gray-400">用轻互动，回应当下的感受</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </div>
          <div 
            onClick={() => onNavigate('chat')}
            className="bg-white p-5 rounded-[2rem] flex items-center justify-between shadow-sm border border-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-indigo-50 text-indigo-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">AI 虚拟陪伴</h4>
                <p className="text-[10px] text-gray-400">此时此刻，想说些什么？</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-500 text-[10px] font-bold">去倾诉</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
