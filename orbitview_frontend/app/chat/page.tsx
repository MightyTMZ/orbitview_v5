"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: number;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI avatar assistant. How can I help you today?",
      role: "assistant",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const production = true;
  const backendServer = production
    ? "https://orbitview.pythonanywhere.com"
    : "http://127.0.0.1:8000";

  const generateResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch(`${backendServer}/agents/test-chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userInput,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from agent");
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error generating response:", error);
      return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await generateResponse(input.trim());
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error in chat:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I apologize, but I encountered an error. Please try again later.",
        role: "assistant",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#68a2b3]" />
            <h1 className="text-3xl font-bold text-[#fbffff]">
              Chat with AI Avatar
            </h1>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mt-4 mb-6 rounded-full" />
        </div>

        <Card className="bg-[#000d20] border-[#3d778c] p-4 md:p-6">
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[80%]",
                    message.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.role === "user"
                        ? "bg-[#3d778c]"
                        : "bg-[#3d778c]/10"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="w-5 h-5 text-[#fbffff]" />
                    ) : (
                      <Bot className="w-5 h-5 text-[#68a2b3]" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "rounded-lg p-4",
                      message.role === "user"
                        ? "bg-[#3d778c] text-[#fbffff]"
                        : "bg-[#3d778c]/10 text-[#fbffff]"
                    )}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-[#3d778c]/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-[#68a2b3]" />
                  </div>
                  <div className="bg-[#3d778c]/10 rounded-lg p-4">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-[#68a2b3] rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-[#68a2b3] rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-[#68a2b3] rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] transition-all duration-300"
              >
                {isTyping ? (
                  <Sparkles className="w-5 h-5 animate-pulse" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}
