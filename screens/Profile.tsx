
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Profile: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] pb-24">
      <header className="px-6 py-8 pt-12 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="size-20 rounded-full border-2 border-white shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/200)' }}></div>
            <button className="absolute bottom-0 right-0 size-6 bg-white rounded-full shadow flex items-center justify-center text-gray-400">
              <span className="material-symbols-outlined text-[14px]">edit</span>
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">钰怀同学</h1>
            <p className="text-sm text-gray-400">正在慢慢建立属于自己的节奏</p>
          </div>
        </div>
        <button className="size-10 rounded-full glass-card text-gray-500">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <div className="px-6 mb-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-red-400 text-[18px] filled">favorite</span>
          <span className="text-xs font-medium text-gray-600">已陪伴 128 天</span>
        </div>
      </div>

      <section className="px-6 mb-6">
        <div className="glass-card rounded-[32px] p-6 shadow-soft relative overflow-hidden">
          <div className="absolute -top-10 -right-10 size-40 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">情绪画像</h3>
              <button 
                onClick={() => onNavigate('insights')}
                className="text-xs text-gray-400 flex items-center font-medium"
              >
                查看详细 <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-20 w-24 rounded-2xl bg-gradient-to-br from-[#fde6ca] to-[#fce4ec] shadow-inner border border-white/40"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 font-medium leading-relaxed">
                  这周是<span className="text-[#ee7c2b]">平静</span>与<span className="text-blue-400">思考</span>的一周。
                </p>
                <p className="text-[10px] text-gray-400 mt-1">你花了很多时间与自己对话，整体平稳。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="flex justify-between items-end mb-4 px-1">
          <h3 className="font-bold text-lg text-gray-800">我的成就</h3>
          <button 
            onClick={() => onNavigate('achievements')}
            className="text-xs text-[#ee7c2b] font-bold"
          >查看全部</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col items-center gap-2 border border-gray-50">
            <div className="size-10 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center">
              <span className="material-symbols-outlined filled">hotel_class</span>
            </div>
            <span className="text-xs font-bold">初次相遇</span>
          </div>
          <div className="bg-white p-4 rounded-3xl shadow-sm flex flex-col items-center gap-2 border border-gray-50">
            <div className="size-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center">
              <span className="material-symbols-outlined filled">psychology</span>
            </div>
            <span className="text-xs font-bold">深度探索者</span>
          </div>
        </div>
      </section>

      <section className="px-6 space-y-3">
        {[
          { label: '我的设备', icon: 'smart_toy', tag: '已连接', tagColor: 'text-green-500 bg-green-50', screen: 'devices' },
          { label: '浏览与收藏', icon: 'bookmarks', screen: 'explore' },
          { label: '我的方案', icon: 'list_alt', screen: 'behavioral' },
          { label: '设置', icon: 'settings', screen: 'home' }
        ].map((item) => (
          <button 
            key={item.label}
            onClick={() => onNavigate(item.screen as Screen)}
            className="w-full bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-50 active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.tag && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>}
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </div>
          </button>
        ))}
      </section>

      <p className="text-center text-[10px] text-gray-300 mt-12 tracking-widest uppercase">情绪心屿 v1.2.0</p>
    </div>
  );
};

export default Profile;
