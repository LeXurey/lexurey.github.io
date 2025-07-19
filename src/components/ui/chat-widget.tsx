"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasLink?: boolean;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "How can I assist you? 😎 (Our chatbot is still under development)",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Wanna try a small game? Even ChatGPT can't solve it! Our IllusionCAPTCHA protects your website from bots. 🎮",
      isUser: false,
      timestamp: new Date(),
      hasLink: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Auto-popup effect on page load
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Show tooltip after 1 second

    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000); // Hide tooltip after 7 seconds (6 seconds display)

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  // Always show the chat icon
  const shouldShowIcon = true;

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our chatbot is still under development. You can contact us directly at admin@lexurey.com",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Dialog */}
      {isOpen && (
        <div
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-80 h-96 flex flex-col transition-all duration-300 ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-brand-teal text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">LeXurey Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(true);
                }}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-brand-teal text-white rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.hasLink && (
                    <Link href="/security">
                      <Button className="w-full mt-2 bg-brand-teal hover:bg-brand-teal/90 text-white text-xs py-1 px-3 rounded transition-all duration-200 hover:scale-105 transform">
                        🎯 Try IllusionCAPTCHA Now!
                      </Button>
                    </Link>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-3 py-2 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Icon - Always visible when dialog is not open */}
      {shouldShowIcon && (
        <div className="absolute bottom-0 right-0">
          <Button
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
              setShowTooltip(false); // Hide tooltip when opening chat
            }}
            className="w-14 h-14 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm animate-in slide-in-from-bottom-2 duration-300 relative">
              {/* Close button */}
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <p className="text-gray-900 dark:text-gray-100 mb-3 pr-6 text-base font-medium leading-relaxed">
                Hey, wanna try a small game? Even ChatGPT can't solve it! 😎 
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                 <span className="text-brand-teal font-semibold">IllusionCAPTCHA</span> protects your website from bots.
              </p>
              <Link href="/security">
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white text-xs py-1 px-3 rounded transition-all duration-200 hover:scale-105 transform">
                  🎯 Click here to try!
                </Button>
              </Link>
            </div>
          )}
        </div>
            )}
    </div>
  );
}
 