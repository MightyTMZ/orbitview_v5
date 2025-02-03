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
} from "lucide-react";
import { FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

import Link from "next/link";
import { useRouter } from "next/navigation";
/*import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | OrbitView",
  description:
    "Sign in to your OrbitView account to manage your AI agent and share your expertise.",
}; */

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate login - replace with actual auth logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
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
            Welcome back
          </h2>
          <p className="mt-2 text-[#3d778c]">
            Sign in to your account to continue
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
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#fbffff]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
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
                    placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#3d778c] bg-transparent text-[#68a2b3] focus:ring-[#68a2b3]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[#3d778c]"
                >
                  Remember me
                </label>
              </div>

              <Link
                href="/auth/reset-password"
                className="text-sm text-[#68a2b3] hover:text-[#3d778c]"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#fbffff] border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Sign in</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>

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
                <FaGoogle /> &nbsp; Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
              >
                <FaMicrosoft /> &nbsp; Microsoft
              </Button>
            </div>
          </form>
        </Card>

        <p className="text-center text-sm text-[#3d778c]">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-[#68a2b3] hover:text-[#3d778c]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
