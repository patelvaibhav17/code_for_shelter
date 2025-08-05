import React, { useState, useEffect } from 'react';
import { Bot, Lightbulb, MessageCircle } from 'lucide-react';

interface HopeBotProps {
  message: string;
  onRequestHint?: () => void;
  showHint?: boolean;
}

const HopeBot: React.FC<HopeBotProps> = ({ message, onRequestHint, showHint }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      setCurrentMessage(message);
      
      // Auto-hide after 5 seconds if it's not a hint
      if (!showHint) {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [message, showHint]);

  const encouragingMessages = [
    "You're doing great! Keep going!",
    "Every coder started where you are now.",
    "Mistakes are just learning opportunities.",
    "Your future home is taking shape!",
    "Skills today, success tomorrow!",
    "You're building more than code - you're building your future!"
  ];

  const showEncouragement = () => {
    const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    setCurrentMessage(randomMessage);
    setIsVisible(true);
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hope-Bot Character */}
      <div className="relative">
        <button
          onClick={showEncouragement}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <Bot size={32} className="text-white group-hover:rotate-12 transition-transform duration-200" />
          
          {/* Floating particles around Hope-Bot */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping"
                style={{
                  top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 25}px`,
                  left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 25}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </button>

        {/* Hint Button */}
        {onRequestHint && (
          <button
            onClick={onRequestHint}
            className="absolute -top-2 -left-2 w-8 h-8 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            title="Get a hint!"
          >
            <Lightbulb size={16} className="text-white" />
          </button>
        )}
      </div>

      {/* Message Bubble */}
      {isVisible && currentMessage && (
        <div className="absolute bottom-20 right-0 max-w-xs mb-2 animate-fade-in">
          <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-gray-200">
            <div className="flex items-start space-x-2">
              <MessageCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-gray-800 text-sm leading-relaxed font-medium">
                {currentMessage}
              </p>
            </div>
            
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
            </div>
            
            {/* Glowing effect for hints */}
            {showHint && (
              <div className="absolute inset-0 bg-amber-400 rounded-2xl opacity-20 animate-pulse"></div>
            )}
          </div>
        </div>
      )}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HopeBot;