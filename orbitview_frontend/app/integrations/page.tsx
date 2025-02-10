"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Youtube,
  FileText,
  Instagram,
  Linkedin,
  Cloud,
  Github,
  Bot,
  ArrowRight,
  Lock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const integrations = [
  {
    name: "YouTube",
    description:
      "Import your video content and transcripts to train your AI with your actual teaching style and explanations.",
    icon: Youtube,
    benefits: [
      "Convert video transcripts into training data",
      "Extract key concepts from your explanations",
      "Maintain your teaching style",
    ],
  },
  {
    name: "Medium",
    description:
      "Transform your articles into knowledge that your AI can use to provide detailed, well-structured explanations.",
    icon: FileText,
    benefits: [
      "Preserve your writing style",
      "Import technical articles",
      "Maintain consistent tone",
    ],
  },
  {
    name: "Substack",
    description:
      "Use your newsletter content to train your AI in delivering expert insights in your unique voice.",
    icon: FileText,
    benefits: [
      "Leverage newsletter expertise",
      "Capture topic deep-dives",
      "Import subscriber interactions",
    ],
  },
  {
    name: "Reddit",
    description:
      "Import your Reddit posts, comments, and discussions to train your AI with your problem-solving approach and community interactions.",
    icon: MessageSquare,
    benefits: [
      "Learn from your explanations",
      "Capture discussion style",
      "Import technical solutions",
    ],
  },
  {
    name: "Instagram",
    description:
      "Import your educational posts and carousel content to enhance your AI's knowledge base.",
    icon: Instagram,
    benefits: [
      "Extract knowledge from carousels",
      "Convert visual explanations",
      "Capture engagement patterns",
    ],
  },
  {
    name: "LinkedIn",
    description:
      "Turn your professional insights and posts into training data for more business-oriented responses.",
    icon: Linkedin,
    benefits: [
      "Import professional insights",
      "Capture industry expertise",
      "Learn from post discussions",
    ],
  },
  {
    name: "OneDrive",
    description:
      "Connect your OneDrive to easily import documents, presentations, and training materials.",
    icon: Cloud,
    benefits: [
      "Bulk import documents",
      "Process presentations",
      "Analyze spreadsheets",
    ],
  },
  {
    name: "Google Drive",
    description:
      "Seamlessly import your Google Drive content to train your AI with your documented knowledge.",
    icon: Cloud,
    benefits: ["Import Google Docs", "Process Slides", "Analyze Sheets"],
  },
  {
    name: "GitHub",
    description:
      "Train your AI with your coding style and documentation from your public repositories.",
    icon: Github,
    benefits: [
      "Learn your coding style",
      "Import documentation",
      "Understand your patterns",
    ],
  },
];

export default function Integrations() {
  return (
    <main className="min-h-screen bg-[#000d20] py-24">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-[#68a2b3]" />
            <h1 className="text-3xl font-bold text-[#fbffff]">
              Train Your AI Avatar
            </h1>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mb-6 rounded-full" />
          <p className="text-xl text-[#3d778c] max-w-3xl">
            Coming soon: Connect your existing content platforms to train an AI
            that truly represents you. Import your knowledge directly from the
            platforms where you already share your expertise.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="p-8 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 relative rounded-lg bg-[#3d778c]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <integration.icon className="w-12 h-12 text-[#68a2b3]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#fbffff]">
                      {integration.name}
                    </h3>
                    <span className="px-2 py-1 rounded-full text-xs bg-[#3d778c]/10 text-[#68a2b3] flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-[#3d778c] mb-4">
                    {integration.description}
                  </p>
                  <div className="space-y-2">
                    {integration.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[#68a2b3] text-sm"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-[#000d20] border-[#3d778c] max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fbffff] mb-4">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-[#3d778c] mb-6">
            Join the waitlist to be among the first to create your AI avatar and
            integrate your existing content.
          </p>
          <Button
            size="lg"
            className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
            asChild
          >
            <Link href="/waitlist">
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </Card>
      </div>
    </main>
  );
}
