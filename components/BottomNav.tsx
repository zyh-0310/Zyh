
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { key: 'home', label: '首页', icon: 'home' },
    { key: 'mood', label: '心情', icon: 'sentiment_satisfied' },
    { key: 'explore', label: '探索', icon: 'explore' },
    { key: 'me', label: '我的', icon: 'person' }
  ];

  return (
    <nav className="absolute bottom-4 left-0 w-full z-50 px-4 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-[35px] h-20 flex items-center justify-around px-2 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key as Screen)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-all duration-300 ${
                isActive ? 'text-[#ee7c2b]' : 'text-gray-400'
              }`}
            >
              <div className={`flex items-center justify-center p-2 rounded-2xl ${isActive ? 'bg-[#ee7c2b]/10' : ''}`}>
                <span className={`material-symbols-outlined text-[24px] ${isActive ? 'filled' : ''}`}>
                  {item.icon}
                </span>
              </div>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
