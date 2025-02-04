import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Users,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Globe2,
  Laptop,
  BookOpen,
  Presentation,
  MessageSquare,
  Award,
} from "lucide-react";
import Link from "next/link";
import CarouselComponent from "./CarouselComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is OrbitView Right for You? | OrbitView",
  description:
    "Discover if OrbitView is the right platform for sharing your expertise. Learn about ideal users, benefits, and requirements for creating your AI agent.",
  keywords: [
    "AI agent",
    "knowledge sharing",
    "expert platform",
    "teaching platform",
    "mentoring",
    "passive income",
    "expertise monetization",
  ],
};

export default function AdditionalInfo() {
  const benefits = [
    {
      icon: Clock,
      title: "Time Leverage",
      description:
        "Share your knowledge 24/7 without being personally present for every interaction",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Break geographical barriers and reach learners worldwide",
    },
    {
      icon: DollarSign,
      title: "Passive Income",
      description:
        "Create new revenue streams through subscriptions and knowledge monetization",
    },
    {
      icon: Brain,
      title: "Knowledge Preservation",
      description:
        "Capture and preserve your expertise in an interactive, accessible format",
    },
    {
      icon: Users,
      title: "Scalable Impact",
      description:
        "Help more people while maintaining the quality of your expertise",
    },
    {
      icon: MessageSquare,
      title: "Interactive Learning",
      description:
        "Provide personalized responses and guidance to your audience",
    },
  ];

  const requirements = [
    {
      icon: Award,
      title: "Expertise Level",
      description: "3+ years of professional experience in your field",
      essential: true,
    },
    {
      icon: BookOpen,
      title: "Knowledge Depth",
      description:
        "Deep understanding of your domain with practical experience",
      essential: true,
    },
    {
      icon: Presentation,
      title: "Teaching Ability",
      description: "Experience in explaining complex concepts",
      essential: true,
    },
    {
      icon: Laptop,
      title: "Technical Comfort",
      description: "Basic comfort with technology and online platforms",
      essential: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container mx-auto px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#fbffff] mb-4">
            Is OrbitView Right for You?
          </h1>
          <div className="h-1 w-32 bg-[#3d778c] mb-6 rounded-full" />
          <p className="text-xl text-[#3d778c] max-w-3xl">
            Discover if OrbitView is the right platform to share your expertise
            and create impact at scale
          </p>
        </div>
        <Button
          size="lg"
          className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
          asChild
        >
          <Link href="/waitlist">
            <Sparkles className="w-5 h-5 mr-2" />
            Join Waitlist
          </Link>
        </Button>
        <br />
        <br />
        <CarouselComponent />

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#fbffff] mb-8 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#3d778c]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#68a2b3]" />
                </div>
                <h3 className="text-lg font-bold text-[#fbffff] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#3d778c]">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#fbffff] mb-8 text-center">
            Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <Card
                key={index}
                className="p-6 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3d778c]/10 flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-6 h-6 text-[#68a2b3]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#fbffff]">
                        {req.title}
                      </h3>
                      {req.essential ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-[#3d778c]" />
                      )}
                    </div>
                    <p className="text-[#3d778c]">{req.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-[#000d20] border-[#3d778c] max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#fbffff] mb-4">
              Ready to Share Your Knowledge?
            </h2>
            <p className="text-[#3d778c] mb-8">
              Join the waitlist today and be among the first to create your AI
              avatar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                asChild
              >
                <Link href="/waitlist">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                asChild
              >
                <Link href="/">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
