"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Orbit,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  ToggleLeft as Google,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate signup - replace with actual auth logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/onboarding");
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#000d20] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="rounded-full p-2 group-hover:bg-[#3d778c]/10 transition-all duration-300">
              <Orbit className="w-10 h-10 text-[#68a2b3]" />
            </div>
            <span className="text-2xl font-bold text-[#fbffff]">
              Orbit<span className="text-[#68a2b3]">View</span>
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-[#fbffff]">
            Create your account
          </h2>
          <p className="mt-2 text-[#3d778c]">
            Join OrbitView and start sharing your knowledge
          </p>
        </div>

        <Card className="p-6 bg-[#000d20] border-[#3d778c]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-[#fbffff]">
                    First name
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    required
                    className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-[#fbffff]">
                    Last name
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    required
                    className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#fbffff]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#fbffff]">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    required
                    className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d778c] hover:text-[#68a2b3]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-[#fbffff]">Password requirements:</Label>
                <ul className="space-y-2">
                  {[
                    "At least 8 characters",
                    "One uppercase letter",
                    "One number",
                    "One special character",
                  ].map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-center gap-2 text-sm text-[#3d778c]"
                    >
                      <Check className="w-4 h-4" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-[#fbffff] border-t-transparent rounded-full animate-spin" />
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Create account</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>

              <p className="text-sm text-[#3d778c]">
                By creating an account, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-[#68a2b3] hover:text-[#3d778c]"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#68a2b3] hover:text-[#3d778c]"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3d778c]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#000d20] text-[#3d778c]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
              >
                <Google className="w-4 h-4 mr-2" />
                Google
              </Button>
            </div>
          </form>
        </Card>

        <p className="text-center text-sm text-[#3d778c]">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-[#68a2b3] hover:text-[#3d778c]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
