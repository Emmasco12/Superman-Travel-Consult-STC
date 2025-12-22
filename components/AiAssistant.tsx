import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Welcome to Superman Travel Consult! Where your dreams come into reality. STC - Sei kutuu Sei Bam! How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Create a placeholder for the model response
      const modelMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: modelMsgId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      const stream = await sendMessageToGemini(userMsg.text);

      let fullText = '';
      
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text;
        if (textChunk) {
          fullText += textChunk;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === modelMsgId ? { ...msg, text: fullText } : msg
            )
          );
        }
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I'm having trouble connecting to the server right now. Please call us directly!",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-stcRed text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <MessageCircle size={28} />
        <span className="font-bold hidden md:inline pr-2">Ask an Expert</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 sm:bottom-6 sm:right-6 w-full sm:w-[400px] bg-white sm:rounded-2xl shadow-2xl z-50 transition-all duration-300 flex flex-col overflow-hidden border border-gray-200 ${isOpen ? 'opacity-100 translate-y-0 h-[80vh] sm:h-[600px]' : 'opacity-0 translate-y-20 h-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stcBlue to-blue-800 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles size={18} className="text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Superman AI Assistant</h3>
              <p className="text-xs text-blue-200">Online | Ready to help</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stcBlue text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white text-gray-500 shadow-md border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-stcRed" />
                 <span className="text-xs">Thinking...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about visas, flights, etc..."
              className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-stcBlue/20 text-sm text-gray-800"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                inputValue.trim() ? 'bg-stcRed text-white hover:bg-red-700' : 'text-gray-400 bg-gray-200'
              }`}
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            AI can make mistakes. Verify critical info with our agents.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiAssistant;