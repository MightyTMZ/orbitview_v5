"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Target } from "lucide-react";

const CarouselComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const idealUsers = [
    {
      title: "Industry Experts",
      description:
        "Professionals with deep domain knowledge looking to scale their impact",
      examples: [
        "Senior Software Engineers",
        "System Architects",
        "Product Managers",
        "UX Designers",
      ],
    },
    {
      title: "Educators & Mentors",
      description:
        "Teachers and mentors who want to extend their reach beyond 1:1 interactions",
      examples: [
        "Course Creators",
        "Technical Mentors",
        "Career Coaches",
        "Subject Matter Experts",
      ],
    },
    {
      title: "Content Creators",
      description:
        "Knowledge creators looking to provide interactive, personalized experiences",
      examples: [
        "Technical Writers",
        "Tutorial Creators",
        "Documentation Specialists",
      ],
    },
    {
      title: "Consultants",
      description:
        "Professionals who want to scale their consulting practice through AI",
      examples: [
        "Technical Consultants",
        "Business Advisors",
        "Industry Analysts",
      ],
    },
  ];

  useEffect(() => {
    // Set random start index on mount
    setStartIndex(Math.floor(Math.random() * idealUsers.length));
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-[#fbffff] mb-8 text-center">
        Who is best suited for OrbitView?
      </h2>
      <Carousel
        opts={{
          align: "start",
          startIndex,
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {idealUsers.map((user, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="p-6 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-[#fbffff] mb-3">
                  {user.title}
                </h3>
                <p className="text-[#3d778c] mb-4">{user.description}</p>
                <div className="space-y-2">
                  {user.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[#68a2b3]"
                    >
                      <Target className="w-4 h-4" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
