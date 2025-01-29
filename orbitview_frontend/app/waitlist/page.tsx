"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Orbit, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";

interface FormData {
  full_name: string;
  job_title: string;
  industry: string;
  years_of_experience: string;
  email: string;
  motivation: string;
}

interface ApiResponse {
  message: string;
  data?: any;
}

const jobTitles = [
  "Professional",
  "Specialist",
  "Consultant",
  "Analyst",
  "Engineer",
  "Manager",
  "Strategist",
  "Coordinator",
  "Advisor",
  "Executive",
  "Senior Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "Marketing Strategist",
  "Business Consultant",
  "Financial Advisor",
  "Healthcare Professional",
  "Education Specialist",
  "Legal Expert",
];

const industries = [
  "Business",
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Law",
  "Science",
  "Engineering",
  "Arts",
  "Social Sciences",
  "Public Services",
  "Media & Communication",
  "Manufacturing",
  "Retail",
  "Consulting",
  "Entrepreneurship",
  "Research & Development",
];

export default function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    job_title: "",
    industry: "",
    years_of_experience: "",
    email: "",
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const waitlistUserEndpoint =
      "https://orbitview.pythonanywhere.com/users/waitlist/";

    try {
      const response = await fetch(waitlistUserEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setSuccess(true);
        if (response.status === 201) {
          // Only clear form on new registration
          setFormData({
            full_name: "",
            job_title: "",
            industry: "",
            years_of_experience: "",
            email: "",
            motivation: "",
          });
        }
      } else {
        if (typeof data === "object" && data !== null) {
          // Handle validation errors
          const errorMessage = Object.values(data).flat().join(" ");
          setError(errorMessage);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const motivations = [
    "Monetize expertise",
    "Scale teaching/mentoring",
    "Build personal brand",
    "Support existing business",
    "Other",
  ];

  if (success) {
    return (
      <main className="min-h-screen bg-[#000d20] py-12">
        <div className="container max-w-2xl mx-auto px-4">
          <Card className="p-8 bg-[#000d20] border-[#3d778c] text-center">
            <div className="flex justify-center mb-6">
              <div className="floating glowing rounded-full p-4">
                <Sparkles className="w-16 h-16 text-[#68a2b3]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#fbffff] mb-4">Success!</h2>
            <p className="text-[#3d778c] text-lg mb-6">{successMessage}</p>
            <Button
              onClick={() => setSuccess(false)}
              className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
            >
              Join Another Account
            </Button>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="floating glowing rounded-full p-4">
              <Orbit className="w-16 h-16 text-[#68a2b3]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#fbffff] mb-4">
            Join the Waitlist
          </h1>
          <div className="h-1 w-24 bg-[#3d778c] mx-auto mb-6 rounded-full glowing" />
          <p className="text-[#3d778c] text-lg">
            Be among the first to create your AI avatar and start sharing your
            knowledge with the world.
          </p>
        </div>

        <Card className="p-8 bg-[#000d20] border-[#3d778c]">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-[#fbffff]">
                    Full Name
                  </Label>
                  <Input
                    id="full_name"
                    name="full_name"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job_title" className="text-[#fbffff]">
                    Job Title/Role
                  </Label>
                  <div className="relative">
                    <Input
                      id="job_title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                    />
                    <div className="absolute inset-0 pointer-events-none">
                      {!formData.job_title && (
                        <div className="absolute inset-0 flex items-center px-3">
                          <span className="text-[#3d778c]">e.g. </span>
                          <ReactTyped
                            strings={jobTitles}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            className="ml-1 text-[#3d778c]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-[#fbffff]">
                    Industry/Field
                  </Label>
                  <div className="relative">
                    <Input
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                    />
                    <div className="absolute inset-0 pointer-events-none">
                      {!formData.industry && (
                        <div className="absolute inset-0 flex items-center px-3">
                          <span className="text-[#3d778c]">e.g. </span>
                          <ReactTyped
                            strings={industries}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            className="ml-1 text-[#3d778c]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="years_of_experience"
                    className="text-[#fbffff]"
                  >
                    Years of Experience
                  </Label>
                  <Input
                    id="years_of_experience"
                    name="years_of_experience"
                    type="number"
                    min="0"
                    placeholder="e.g. 5"
                    value={formData.years_of_experience}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#fbffff]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#fbffff]">
                  Primary Motivation for Creating an AI Avatar
                </Label>
                <RadioGroup
                  value={formData.motivation}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, motivation: value }))
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                >
                  {motivations.map((motivation) => (
                    <div
                      key={motivation}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={motivation}
                        id={motivation}
                        className="border-[#3d778c] text-[#68a2b3]"
                      />
                      <Label
                        htmlFor={motivation}
                        className="text-[#fbffff] cursor-pointer"
                      >
                        {motivation}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Joining...</span>
                </div>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
