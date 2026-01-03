
import React, { useEffect, useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const VisualFollow: React.FC<Props> = ({ onNavigate }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Random movement within bounds
      setPosition({
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      });
    }, 3000);

    const timer = setTimeout(() => {
      onNavigate('visual-follow-complete');
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onNavigate]);

  return (
    <div className="h-screen bg-[#fcfaf8] flex flex-col relative overflow-hidden">
      <header className="relative z-20 flex items-center justify-between px-4 pt-6 shrink-0">
        <button onClick={() => onNavigate('explore')} className="size-10 rounded-full bg-white shadow-sm flex items-center justify-center">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-lg font-bold text-gray-800">视觉跟随</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 pt-12 text-center relative z-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">让目光慢慢跟随光点</h2>
        <p className="text-sm text-gray-400">不需要刻意集中，只要轻轻看着它移动</p>
      </div>

      <main className="flex-1 relative w-full overflow-hidden">
        <div 
          className="absolute border border-[#ee7c2b]/10 inset-10 rounded-[3rem] pointer-events-none"
        ></div>
        
        <div 
          className="absolute size-16 transition-all duration-[3000ms] ease-in-out"
          style={{ 
            left: `${position.x}%`, 
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="absolute inset-0 bg-[#ee7c2b]/20 blur-xl rounded-full animate-breathe"></div>
          <div className="relative size-5 bg-[#ee7c2b] rounded-full shadow-lg mx-auto mt-5"></div>
        </div>
      </main>

      <div className="pb-12 text-center relative z-10">
        <p className="text-gray-400 font-medium animate-pulse">慢慢来</p>
      </div>
    </div>
  );
};

export default VisualFollow;
