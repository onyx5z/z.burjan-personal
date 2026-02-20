"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="glass mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6">
        <a href="#" className="text-sm font-semibold tracking-[0.08em] uppercase">
          Zoltan Burjan
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-72 border-none bg-transparent p-0 shadow-none"
            >
              <div className="glass-strong m-3 mt-3 flex h-[calc(100%-1.5rem)] flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.08em] uppercase">
                    Menu
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    className="h-8 w-8"
                  >
                    <span className="text-lg">&times;</span>
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <nav className="mt-8 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
