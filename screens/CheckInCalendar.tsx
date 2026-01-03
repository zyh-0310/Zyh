
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const CheckInCalendar: React.FC<Props> = ({ onNavigate }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const moods = [2, 5, 8, 12, 15, 20, 21, 22]; // Mocked check-in days

  return (
    <div className="min-h-screen bg-[#fcfaf8] p-6">
      <header className="pt-6 mb-8 flex items-center justify-between">
        <button onClick={() => onNavigate('mood')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-lg font-bold text-gray-800">打卡日历</h1>
        <div className="size-10"></div>
      </header>

      <section className="glass-card rounded-[32px] p-6 shadow-soft mb-8">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-400"><span className="material-symbols-outlined">chevron_left</span></button>
          <span className="font-bold text-gray-800 text-lg">2024年 10月</span>
          <button className="text-gray-400"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center mb-4">
          {['日', '一', '二', '三', '四', '五', '六'].map(d => (
            <span key={d} className="text-[10px] font-bold text-gray-300 uppercase">{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map(d => {
            const hasMood = moods.includes(d);
            return (
              <div key={d} className={`aspect-square flex items-center justify-center rounded-2xl text-sm font-medium transition-all ${
                hasMood ? 'bg-[#ee7c2b] text-white shadow-md' : 'text-gray-400 hover:bg-gray-100'
              }`}>
                {d}
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#fef1e8] p-6 rounded-[2rem] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-white text-[#ee7c2b] flex items-center justify-center">
            <span className="material-symbols-outlined">local_fire_department</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">已连续打卡 8 天</h4>
            <p className="text-[10px] text-gray-500">你是最棒的，请继续保持！</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInCalendar;
