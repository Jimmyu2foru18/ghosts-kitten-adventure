import React from 'react';
import { GhostGirlIcon } from '../constants';
import { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
  loading: boolean;
}

export const GhostGirlInterface: React.FC<Props> = ({ messages, loading }) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-700 w-full md:w-80 shadow-[-10px_0_20px_rgba(0,0,0,0.5)]">
      {/* Ghost Girl Portrait Area */}
      <div className="relative h-48 bg-gradient-to-b from-purple-900 to-slate-900 flex items-center justify-center overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 animate-[float_4s_ease-in-out_infinite]">
            <GhostGirlIcon className="w-32 h-32 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </div>
        <div className="absolute bottom-2 text-center w-full">
            <h2 className="text-xl font-spooky text-purple-200 tracking-widest">Ghost Girl</h2>
            <p className="text-xs text-purple-400 font-light">The Spirit Guide</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/90">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`
                max-w-[90%] p-3 rounded-xl text-sm leading-relaxed
                ${msg.sender === 'user' 
                  ? 'bg-purple-900/50 text-purple-100 rounded-br-none border border-purple-700/50' 
                  : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 shadow-lg'}
              `}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                {msg.sender === 'yuki' ? 'Ghost Girl' : 'System'}
            </span>
          </div>
        ))}
        {/* Loading state removed visually but prop kept for compatibility if needed elsewhere */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
