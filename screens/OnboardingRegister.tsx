
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const OnboardingRegister: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5ee] via-[#ffe8d9] to-[#ffdcc2] px-8 flex flex-col">
      <header className="pt-12 pb-2">
        <button onClick={() => onNavigate('login')} className="size-10 flex items-center justify-center text-gray-800 -ml-2">
          <span className="material-symbols-outlined text-3xl font-light">chevron_left</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col">
        <div className="mt-4 mb-10 text-center">
          <h1 className="text-2xl font-bold text-[#3d2e24] mb-2">创建你的账户</h1>
          <p className="text-sm font-medium text-[#8c6b54]">这是一个只属于你的安静空间。</p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-6 shadow-soft border border-white/50">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {[
                { placeholder: '你希望我们如何称呼你', icon: 'account_circle', type: 'text' },
                { placeholder: '用于登录与找回账户', icon: 'mail', type: 'email' },
                { placeholder: '设置一个安全的密码', icon: 'lock', type: 'password', suffix: 'visibility' },
                { placeholder: '再次输入密码', icon: 'verified_user', type: 'password' }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6c4c] group-focus-within:text-[#ee7c2b] transition-colors">{item.icon}</span>
                  <input 
                    type={item.type}
                    placeholder={item.placeholder}
                    className="w-full h-14 pl-12 pr-12 rounded-2xl border border-[#e7d9cf] bg-[#fcfaf8] focus:bg-white focus:ring-2 focus:ring-[#ee7c2b]/20 focus:border-[#ee7c2b] transition-all text-sm"
                  />
                  {item.suffix && <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer">{item.suffix}</span>}
                </div>
              ))}
            </div>
            
            <p className="text-[10px] text-center text-[#9a6c4c] px-4">你可以随时修改这些信息。</p>
            
            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => onNavigate('home')}
                className="w-full h-14 bg-[#ee7c2b] text-white font-bold text-lg rounded-full shadow-lg shadow-[#ee7c2b]/20 active:scale-95 transition-all"
              >完成注册</button>
              <button 
                onClick={() => onNavigate('login')}
                className="text-sm font-medium text-[#9a6c4c] py-2"
              >已有账户？去登录</button>
            </div>
          </form>
        </div>

        <div className="mt-auto py-8 flex flex-col items-center gap-2 opacity-70">
          <div className="flex items-center gap-1.5 text-[#5c4033]">
            <span className="material-symbols-outlined text-sm">lock</span>
            <p className="text-[10px] font-medium leading-tight max-w-[240px] text-center">我们尊重你的隐私，所有数据只用于情绪支持与服务体验。</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingRegister;
