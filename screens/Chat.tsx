
import React, { useState, useRef, useEffect } from 'react';
import { Screen, Message } from '../types';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Chat: React.FC<Props> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '我会在这里陪你。你可以慢慢说，不需要想清楚，也不需要说得完整。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a warm, healing emotional companion for a meditation and mood app. Use gentle, soft Chinese language. You listen without judgment. Avoid being overly clinical; be poetic and empathetic.",
        },
      });

      const reply = response.text || '我在这里听着。继续说说你的感受吧。';
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '对不起，我刚才走神了，你能再跟我说说吗？' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#fffbfd] to-[#f6eff4]">
      <header className="px-4 h-[56px] flex items-center justify-between shrink-0">
        <button onClick={() => onNavigate('explore')} className="size-9 rounded-full bg-white/80 shadow-sm flex items-center justify-center">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h1 className="text-[17px] font-semibold text-gray-800">AI 虚拟陪伴</h1>
        <div className="size-9"></div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4 pb-48 flex flex-col gap-6">
        <div className="flex justify-center">
          <span className="text-[11px] text-gray-400 bg-white/40 px-3 py-1 rounded-full">今天 {new Date().getHours()}:{new Date().getMinutes()}</span>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'model' && (
              <div className="size-9 rounded-full bg-cover bg-center shrink-0 shadow-sm mt-auto" style={{ backgroundImage: 'url(https://picsum.photos/100?random=1)' }}></div>
            )}
            <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === 'user' ? 'items-end' : ''}`}>
              {msg.role === 'model' && <span className="text-[10px] text-gray-400 ml-1">AI Companion</span>}
              <div className={`p-4 rounded-2xl shadow-sm text-[15px] leading-relaxed border ${
                msg.role === 'user' 
                ? 'bg-[#e2367e] text-white border-transparent rounded-br-none' 
                : 'bg-white/80 border-white/50 text-gray-800 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-full bg-gray-100 animate-pulse"></div>
            <div className="bg-white/40 px-4 py-3 rounded-2xl flex gap-1 items-center">
              <div className="size-1.5 bg-[#e2367e]/40 rounded-full animate-bounce"></div>
              <div className="size-1.5 bg-[#e2367e]/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="size-1.5 bg-[#e2367e]/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 w-full p-5 bg-white rounded-t-[2.5rem] shadow-2xl border-t border-white/60">
        <div className="flex gap-4 items-center mb-4 justify-center text-[10px] text-gray-400">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">spa</span> 随时可以停下来</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> 这里没有对错</span>
        </div>
        <div className="flex items-end gap-3 max-w-md mx-auto">
          <div className="flex-1 bg-gray-100 rounded-[2rem] px-5 py-3 transition-colors focus-within:bg-white focus-within:ring-1 focus-within:ring-[#e2367e]/20">
            <textarea 
              className="w-full bg-transparent border-none p-0 text-gray-800 placeholder-gray-300 focus:ring-0 resize-none max-h-32 min-h-[24px]"
              placeholder="你想说些什么..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="size-12 rounded-full bg-[#e2367e]/10 text-[#e2367e] flex items-center justify-center hover:bg-[#e2367e] hover:text-white transition-all disabled:opacity-50"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
