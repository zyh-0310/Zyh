
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import OnboardingWelcome from './screens/OnboardingWelcome';
import OnboardingLogin from './screens/OnboardingLogin';
import OnboardingRegister from './screens/OnboardingRegister';
import Home from './screens/Home';
import Mood from './screens/Mood';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Assessment from './screens/Assessment';
import BehavioralProgress from './screens/BehavioralProgress';
import Homeostasis from './screens/Homeostasis';
import Chat from './screens/Chat';
import VisualFollow from './screens/VisualFollow';
import VisualFollowComplete from './screens/VisualFollowComplete';
import CheckInCalendar from './screens/CheckInCalendar';
import EmotionalReview from './screens/EmotionalReview';
import EmotionalInsights from './screens/EmotionalInsights';
import Achievements from './screens/Achievements';
import MyDevices from './screens/MyDevices';
import BottomNav from './components/BottomNav';

// 模拟 iPhone 状态栏组件
const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-12 flex items-center justify-between px-8 z-[100] pointer-events-none select-none">
      <div className="text-[14px] font-bold text-gray-800">{time}</div>
      <div className="absolute left-1/2 -translate-x-1/2 top-3 w-24 h-7 bg-black rounded-full shadow-inner flex items-center justify-center">
        <div className="w-1 h-1 bg-gray-800 rounded-full mr-12"></div>
      </div>
      <div className="flex items-center gap-1.5 text-gray-800">
        <span className="material-symbols-outlined text-[16px] font-bold">signal_cellular_4_bar</span>
        <span className="material-symbols-outlined text-[16px] font-bold">wifi</span>
        <div className="flex items-center gap-0.5 border border-gray-400 rounded-[2px] px-0.5 h-3 w-6 relative">
          <div className="bg-gray-800 h-2 w-4 rounded-[1px]"></div>
          <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-1.5 bg-gray-400 rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
};

// 底部 Home 指示条
const HomeIndicator: React.FC = () => (
  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/10 rounded-full z-[100] pointer-events-none"></div>
);

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    // 模拟平滑滚动到顶部
    const container = document.getElementById('app-scroll-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome': return <OnboardingWelcome onNavigate={navigate} />;
      case 'login': return <OnboardingLogin onNavigate={navigate} />;
      case 'register': return <OnboardingRegister onNavigate={navigate} />;
      case 'home': return <Home onNavigate={navigate} />;
      case 'mood': return <Mood onNavigate={navigate} />;
      case 'explore': return <Explore onNavigate={navigate} />;
      case 'me': return <Profile onNavigate={navigate} />;
      case 'assessment': return <Assessment onNavigate={navigate} />;
      case 'behavioral': return <BehavioralProgress onNavigate={navigate} />;
      case 'homeostasis': return <Homeostasis onNavigate={navigate} />;
      case 'chat': return <Chat onNavigate={navigate} />;
      case 'visual-follow': return <VisualFollow onNavigate={navigate} />;
      case 'visual-follow-complete': return <VisualFollowComplete onNavigate={navigate} />;
      case 'calendar': return <CheckInCalendar onNavigate={navigate} />;
      case 'review': return <EmotionalReview onNavigate={navigate} />;
      case 'insights': return <EmotionalInsights onNavigate={navigate} />;
      case 'achievements': return <Achievements onNavigate={navigate} />;
      case 'devices': return <MyDevices onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  const showBottomNav = ['home', 'mood', 'explore', 'me'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-[#f2f2f7] flex items-center justify-center py-10 px-4">
      {/* 手机外壳容器 - 模拟 iPhone 17 比例 */}
      <div className="relative w-[393px] h-[852px] bg-white rounded-[55px] shadow-[0_0_0_12px_#1c1c1e,0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col border-[2px] border-[#3a3a3c]">
        
        {/* 系统组件 */}
        <StatusBar />
        
        {/* 内容滚动区域 */}
        <main 
          id="app-scroll-container"
          className={`flex-1 overflow-y-auto no-scrollbar relative pt-12 ${showBottomNav ? 'pb-24' : 'pb-6'}`}
        >
          {renderScreen()}
        </main>

        {/* 底部导航 */}
        {showBottomNav && <BottomNav currentScreen={currentScreen} onNavigate={navigate} />}
        
        {/* 底部 iOS 指示条 */}
        <HomeIndicator />
      </div>
    </div>
  );
};

export default App;
