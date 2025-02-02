"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/auth/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className="w-full justify-start text-red-500 hover:bg-red-500/10"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </Button>
  );
}
