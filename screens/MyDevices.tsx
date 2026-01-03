
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const MyDevices: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] p-6">
      <header className="pt-6 mb-8 flex items-center gap-4">
        <button onClick={() => onNavigate('me')} className="size-10 rounded-full glass-card flex items-center justify-center text-gray-800">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-xl font-bold text-gray-800">我的设备</h1>
      </header>

      <div className="glass-card rounded-[32px] p-6 mb-6 flex items-center justify-between shadow-soft">
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">watch_off</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">智能穿戴 01</h4>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">已连接</p>
          </div>
        </div>
        <button className="text-gray-300"><span className="material-symbols-outlined">settings</span></button>
      </div>

      <button className="w-full h-16 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400 font-bold flex items-center justify-center gap-2 active:bg-gray-50 transition-colors">
        <span className="material-symbols-outlined">add</span>
        添加新设备
      </button>

      <div className="mt-8 p-6 bg-[#fdf1e8] rounded-[2rem]">
        <h5 className="text-xs font-bold text-gray-800 mb-2">设备优势</h5>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          连接穿戴设备可以更精准地捕获心率变异性(HRV)，从而提供更科学的情绪调节反馈。
        </p>
      </div>
    </div>
  );
};

export default MyDevices;
