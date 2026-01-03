
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const BehavioralProgress: React.FC<Props> = ({ onNavigate }) => {
  const activities = [
    { name: '晨间冥想', completed: true, time: '10 mins', icon: 'wb_sunny' },
    { name: '深呼吸练习', completed: true, time: '5 mins', icon: 'air' },
    { name: '情绪日志', completed: false, time: '2 mins', icon: 'edit_note' },
    { name: '晚间放松', completed: false, time: '15 mins', icon: 'bedtime' },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] p-6">
      <header className="pt-6 mb-8 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-xl font-bold text-gray-800">行为进度</h1>
      </header>

      <section className="mb-8">
        <div className="glass-card rounded-[32px] p-6 shadow-soft text-center">
          <p className="text-sm text-gray-400 mb-2">今日完成度</p>
          <div className="text-4xl font-black text-[#ee7c2b] mb-4">50%</div>
          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#ee7c2b] h-full transition-all duration-1000" style={{ width: '50%' }}></div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        {activities.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`size-12 rounded-2xl flex items-center justify-center ${item.completed ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-300'}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{item.name}</h4>
                <p className="text-[10px] text-gray-400">{item.time}</p>
              </div>
            </div>
            <div className={`size-6 rounded-full flex items-center justify-center border-2 ${item.completed ? 'bg-[#ee7c2b] border-[#ee7c2b] text-white' : 'border-gray-100'}`}>
              {item.completed && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehavioralProgress;
