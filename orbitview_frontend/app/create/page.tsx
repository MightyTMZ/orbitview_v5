"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, BookOpen, DollarSign, Sparkles } from "lucide-react";
// import { Metadata } from "next";

/*export const metadata: Metadata = {
  title: "Create Your AI Agent | OrbitView",
  description:
    "Design and customize your AI agent. Define its expertise, personality, and communication style.",
  keywords: [
    "create AI agent",
    "AI personality",
    "expert agent",
    "knowledge transfer",
    "AI customization",
  ],
}; */

export default function CreateAgent() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[#fbffff]">
            Create Your AI Agent
          </h1>
          <p className="text-[#3d778c]">
            Follow these steps to create your personalized AI agent that will
            represent your expertise.
          </p>
        </div>

        <Tabs value={String(step)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#000d20] border border-[#3d778c]">
            <TabsTrigger
              value="1"
              disabled={step < 1}
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <Brain className="w-4 h-4 mr-2" />
              Expertise
            </TabsTrigger>
            <TabsTrigger
              value="2"
              disabled={step < 2}
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge
            </TabsTrigger>
            <TabsTrigger
              value="3"
              disabled={step < 3}
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Personality
            </TabsTrigger>
            <TabsTrigger
              value="4"
              disabled={step < 4}
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="1">
            <Card className="p-6 bg-[#000d20] border-[#3d778c]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-[#fbffff]">
                      Professional Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior Software Engineer"
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="expertise" className="text-[#fbffff]">
                      Areas of Expertise
                    </Label>
                    <Input
                      id="expertise"
                      placeholder="e.g. React, Node.js, System Design"
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-[#fbffff]">
                      Years of Experience
                    </Label>
                    <Input
                      id="experience"
                      type="number"
                      min="1"
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                >
                  Continue
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="2">
            <Card className="p-6 bg-[#000d20] border-[#3d778c]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="background" className="text-[#fbffff]">
                      Professional Background
                    </Label>
                    <Textarea
                      id="background"
                      placeholder="Share your career journey and key achievements..."
                      className="min-h-[100px] bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialties" className="text-[#fbffff]">
                      Key Specialties
                    </Label>
                    <Textarea
                      id="specialties"
                      placeholder="List your main areas of expertise and what makes your knowledge unique..."
                      className="min-h-[100px] bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="3">
            <Card className="p-6 bg-[#000d20] border-[#3d778c]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <Label className="text-[#fbffff]">
                      Communication Style
                    </Label>
                    <RadioGroup defaultValue="professional" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="professional"
                          id="professional"
                          className="border-[#3d778c]"
                        />
                        <Label
                          htmlFor="professional"
                          className="text-[#fbffff]"
                        >
                          Professional & Formal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="casual"
                          id="casual"
                          className="border-[#3d778c]"
                        />
                        <Label htmlFor="casual" className="text-[#fbffff]">
                          Casual & Friendly
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="mentor"
                          id="mentor"
                          className="border-[#3d778c]"
                        />
                        <Label htmlFor="mentor" className="text-[#fbffff]">
                          Mentoring & Supportive
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="tone" className="text-[#fbffff]">
                      Agent Tone
                    </Label>
                    <Textarea
                      id="tone"
                      placeholder="Describe how you want your AI agent to communicate..."
                      className="min-h-[100px] bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="4">
            <Card className="p-6 bg-[#000d20] border-[#3d778c]">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-[#fbffff]">Pricing Model</Label>
                    <RadioGroup defaultValue="subscription" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="subscription"
                          id="subscription"
                          className="border-[#3d778c]"
                        />
                        <Label
                          htmlFor="subscription"
                          className="text-[#fbffff]"
                        >
                          Monthly Subscription
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="pay-per-use"
                          id="pay-per-use"
                          className="border-[#3d778c]"
                        />
                        <Label htmlFor="pay-per-use" className="text-[#fbffff]">
                          Pay Per Use
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="tiered"
                          id="tiered"
                          className="border-[#3d778c]"
                        />
                        <Label htmlFor="tiered" className="text-[#fbffff]">
                          Tiered Access
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="price" className="text-[#fbffff]">
                      Base Price ($)
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      min="1"
                      step="0.01"
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-[#fbffff]">
                      Pricing Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what users get for the price..."
                      className="min-h-[100px] bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                    className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                  >
                    Create Agent
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
