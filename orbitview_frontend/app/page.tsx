"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Users, Zap, Orbit } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create star field
    const starField = document.querySelector('.star-field');
    if (starField) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starField.appendChild(star);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#000d20] relative overflow-hidden">
      <div className="star-field" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="floating glowing rounded-full p-6">
              <Orbit className="w-20 h-20 text-[#68a2b3]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fbffff] mb-4">
            Welcome to
            <span className="text-[#68a2b3] ml-2">OrbitView</span>
          </h1>
          <div className="h-1 w-32 bg-[#3d778c] mx-auto mb-6 rounded-full glowing" />
          <p className="mt-6 text-xl text-[#3d778c] leading-relaxed">
            Share your knowledge 24/7 without sacrificing your time. Create an AI avatar that represents your expertise and helps others learn from your experience.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#3d778c] hover:bg-[#68a2b3] transition-all duration-300 transform hover:scale-105" 
              asChild
            >
              <Link href="/waitlist">Join our Waitlist</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff] transition-all duration-300 transform hover:scale-105" 
              asChild
            >
              <Link href="/explore">Explore Avatars</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "Knowledge Transfer",
              description: "Share your expertise through an AI avatar that learns from your experience and knowledge."
            },
            {
              icon: MessageSquare,
              title: "24/7 Availability",
              description: "Your AI avatar is always available to answer questions and share insights."
            },
            {
              icon: Zap,
              title: "Passive Income",
              description: "Monetize your knowledge without active time investment through subscription access."
            },
            {
              icon: Users,
              title: "Global Reach",
              description: "Connect with learners worldwide and scale your impact exponentially."
            }
          ].map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-500 bg-[#000d20] border-[#3d778c] backdrop-blur-lg hover:scale-105 group"
            >
              <feature.icon className="w-12 h-12 text-[#68a2b3] mb-4 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2 text-[#fbffff]">{feature.title}</h3>
              <p className="text-[#3d778c]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <Card className="p-12 text-center bg-[#000d20] border-[#3d778c] backdrop-blur-lg transform hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-6 text-[#fbffff]">Ready to Share Your Knowledge?</h2>
          <div className="h-1 w-32 bg-[#3d778c] mx-auto mb-6 rounded-full glowing" />
          <p className="text-xl text-[#3d778c] mb-8">
            Join the future of knowledge sharing. Get early access by joining our waitlist today.
          </p>
          <Button 
            size="lg" 
            className="bg-[#3d778c] hover:bg-[#68a2b3] transition-all duration-300 transform hover:scale-105" 
            asChild
          >
            <Link href="/waitlist">Join our Waitlist</Link>
          </Button>
        </Card>
      </div>
    </main>
  );
}