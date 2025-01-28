"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Orbit, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Create Avatar", href: "/create" },
  { name: "Train Avatar", href: "/train" },
  { name: "Explore", href: "/explore" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#000d20]/80 backdrop-blur-lg border-b border-[#3d778c]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-full p-1 group-hover:bg-[#3d778c]/10 transition-all duration-300">
              <Orbit className="w-8 h-8 text-[#68a2b3]" />
            </div>
            <span className="text-xl font-bold text-[#fbffff]">
              Orbit<span className="text-[#68a2b3]">View</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#68a2b3]"
                    : "text-[#3d778c] hover:text-[#68a2b3]"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#3d778c]/0 via-[#68a2b3]/50 to-[#3d778c]/0" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] transition-all duration-300"
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#3d778c] hover:text-[#68a2b3] transition-colors"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#68a2b3]"
                    : "text-[#3d778c] hover:text-[#68a2b3]"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] transition-all duration-300"
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}