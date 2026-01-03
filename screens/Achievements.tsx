
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Achievements: React.FC<Props> = ({ onNavigate }) => {
  const list = [
    { id: '1', title: '初次相遇', icon: 'spa', unlocked: true },
    { id: '2', title: '深度探索者', icon: 'psychology', unlocked: true },
    { id: '3', title: '连续打卡7天', icon: 'local_fire_department', unlocked: true },
    { id: '4', title: '平和之心', icon: 'favorite', unlocked: false },
    { id: '5', title: '对话大师', icon: 'chat', unlocked: false },
    { id: '6', title: '调节先锋', icon: 'bolt', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] p-6">
      <header className="pt-6 mb-8 flex items-center gap-4">
        <button onClick={() => onNavigate('me')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-xl font-bold text-gray-800">成就勋章</h1>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {list.map(item => (
          <div key={item.id} className={`p-6 rounded-[2.5rem] flex flex-col items-center gap-3 border transition-all ${
            item.unlocked ? 'bg-white border-gray-50 shadow-sm' : 'bg-gray-100 border-transparent opacity-40 grayscale'
          }`}>
            <div className={`size-16 rounded-full flex items-center justify-center ${item.unlocked ? 'bg-[#ee7c2b]/10 text-[#ee7c2b]' : 'bg-gray-200 text-gray-400'}`}>
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <span className="text-xs font-bold text-gray-700">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
