"use client";

import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({ label, active, onClick, className }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-2 rounded-full text-[11px] font-bold tracking-tight whitespace-nowrap transition-all duration-300 border outline-none active:scale-95 cursor-pointer",
        active 
          ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20" 
          : "bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/5",
        className
      )}
    >
      {label}
    </button>
  );
}
