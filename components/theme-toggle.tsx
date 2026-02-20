"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const checked = resolvedTheme === "dark";

  return (
    <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      <Sun className="h-3.5 w-3.5" />
      <Switch
        checked={checked}
        onCheckedChange={(isDark) => setTheme(isDark ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon className="h-3.5 w-3.5" />
    </label>
  );
}
