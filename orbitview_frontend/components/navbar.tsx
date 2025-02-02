"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Orbit,
  Menu,
  X,
  User,
  Settings,
  LayoutDashboard,
  LogOut,
  CreditCard,
  Bot,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

          {/* Profile Menu & CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button
              asChild
              className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] transition-all duration-300"
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/saleem.png" alt="User" />
                    <AvatarFallback className="bg-[#3d778c] text-[#fbffff]">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-[#000d20] border-[#3d778c]"
                align="end"
              >
                <DropdownMenuLabel className="text-[#fbffff]">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Mr. Saleem</p>
                    <p className="text-xs text-[#3d778c]">
                      mrsaleem@microsoftteams.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#3d778c]/20" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                    <User className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                    <Bot className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    <span>My Avatars</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                    <LayoutDashboard className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    <span>Dashboard</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                    <CreditCard className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                    <Settings className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-[#3d778c]/20" />
                <DropdownMenuItem className="text-[#fbffff] focus:bg-[#3d778c]/20">
                  <HelpCircle className="mr-2 h-4 w-4 text-[#68a2b3]" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#3d778c]/20" />
                <DropdownMenuItem className="text-red-500 focus:bg-red-500/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <div className="pt-4 border-t border-[#3d778c]/20">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback className="bg-[#3d778c] text-[#fbffff]">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[#fbffff] font-medium">Mr. Saleem</p>
                  <p className="text-sm text-[#3d778c]">mrsaleem@teams.com</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { icon: User, label: "Profile" },
                  { icon: Bot, label: "My Avatars" },
                  { icon: LayoutDashboard, label: "Dashboard" },
                  { icon: CreditCard, label: "Billing" },
                  { icon: Settings, label: "Settings" },
                  { icon: HelpCircle, label: "Support" },
                ].map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start text-[#fbffff] hover:bg-[#3d778c]/20"
                  >
                    <item.icon className="mr-2 h-4 w-4 text-[#68a2b3]" />
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:bg-red-500/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
