
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-[#FFF5F2] to-[#FDFBF7] min-h-screen">
      <header className="pt-6 pb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#8D6E63]">早上好！钰怀</h1>
        <button className="size-10 rounded-full glass-card flex items-center justify-center text-[#8D6E63]">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <section className="mb-6">
        <div className="glass-card rounded-[32px] p-6 shadow-soft relative overflow-hidden">
          <span className="material-symbols-outlined absolute -right-4 -top-4 text-7xl text-[#ee7c2b] opacity-10 rotate-12">spa</span>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">当前状态</p>
          <h2 className="text-[2.5rem] font-bold text-[#ee7c2b] leading-tight mb-2">平静</h2>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/70 text-[10px] font-medium text-gray-600 border border-white/50">低强度</span>
            <span className="px-3 py-1 rounded-full bg-white/70 text-[10px] font-medium text-gray-600 border border-white/50">来源：清晨的平静</span>
          </div>
          <button 
            onClick={() => onNavigate('assessment')}
            className="w-full py-3 px-6 rounded-2xl bg-[#ee7c2b] text-white font-bold flex items-center justify-between shadow-lg shadow-[#ee7c2b]/20 active:scale-95 transition-all"
          >
            <span className="text-sm">更新情绪评估</span>
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </button>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-800 mb-3 px-1">特别推荐</h3>
        <div className="bg-[#fdf1e8] rounded-2xl p-4 flex gap-3 items-start border border-orange-100/50 shadow-sm">
          <div className="size-8 rounded-full bg-white flex items-center justify-center text-[#ee7c2b] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-lg">energy_savings_leaf</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed pt-1">您的身体今天可能感到轻微的紧张——留意即可，无需评判。</p>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-800 mb-3 px-1">快速调节</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[
            { label: '稳态调节', sub: '回归内心秩序', icon: 'balance', color: 'from-[#E8D5C4] to-[#ee7c2b]', screen: 'homeostasis' },
            { label: '趣味调节', sub: '轻松一下', icon: 'bubble_chart', color: 'from-[#F5E6CA] to-[#E6BA5C]', screen: 'explore' },
            { label: '一键冷静', sub: '即刻平复', icon: 'dew_point', color: 'from-[#CFE8F5] to-[#8FBAD6]', screen: 'visual-follow' }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => onNavigate(item.screen as Screen)}
              className="flex flex-col items-center gap-2 min-w-[84px]"
            >
              <div className={`size-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md active:scale-95 transition-all`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div className="text-center">
                <span className="block text-[11px] font-bold text-gray-800">{item.label}</span>
                <span className="block text-[9px] text-gray-400 mt-0.5">{item.sub}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-800 mb-3 px-1">温柔建议</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="size-8 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">waves</span>
            </div>
            <h4 className="font-bold text-xs text-gray-800">舒缓波浪</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed">让呼吸的韵律加深这份平静。</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="size-8 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">airline_seat_recline_extra</span>
            </div>
            <h4 className="font-bold text-xs text-gray-800">轻柔释放</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed">通过轻柔的伸展，增强身体轻盈感。</p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h3 className="text-sm font-bold text-gray-800 mb-3 px-1">个人管理</h3>
        <div className="flex flex-col gap-2">
          {[
            { label: '完整情绪评估', icon: 'pie_chart', color: 'bg-[#F5E6E1]', text: 'text-[#ee7c2b]', screen: 'assessment' },
            { label: '今日行为完成状态', icon: 'check_circle', color: 'bg-[#E3F2FD]', text: 'text-[#64B5F6]', screen: 'behavioral' },
            { label: '今日情绪目标', icon: 'flag', color: 'bg-[#F3E5F5]', text: 'text-[#BA68C8]', screen: 'insights' }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => onNavigate(item.screen as Screen)}
              className="w-full bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`size-8 rounded-full ${item.color} ${item.text} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <span className="text-xs font-medium text-gray-700">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
