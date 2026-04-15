"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <SignUpButton mode="modal">
        <Button size="lg" className="px-8">
          Get Started Free
        </Button>
      </SignUpButton>
      <SignInButton mode="modal">
        <Button variant="outline" size="lg" className="px-8">
          Sign In
        </Button>
      </SignInButton>
    </div>
  );
}
