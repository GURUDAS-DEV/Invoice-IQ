"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Plus, 
  MoreHorizontal, 
  LayoutDashboard, 
  Truck, 
  BarChart3, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut,
  X,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const CORE_ITEMS = [
  { icon: LayoutDashboard, label: "Home", href: "/home" },
  { icon: Users, label: "Sellers", href: "/sellers" },
  { icon: Plus, label: "Add", href: "/add-invoice", primary: true },
  { icon: Truck, label: "Deliveries", href: "/deliveries" },
  { icon: MoreHorizontal, label: "More", isMenu: true },
];

const SECONDARY_ITEMS = [
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
];

export function BottomNav() {
  const pathname = usePathname();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMoreMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Drawer Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-70 bg-black/20 transition-all duration-300 lg:hidden",
          isMoreMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMoreMenuOpen(false)}
      />

      <div 
        className={cn(
          "fixed right-6 z-80 transition-all duration-200 ease-out lg:hidden",
          isMoreMenuOpen ? "bottom-[100px] opacity-100 scale-100" : "bottom-[80px] opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-white/98 dark:bg-[#1A1D24]/98 border border-border/10 rounded-[22px] overflow-hidden shadow-2xl w-[180px]">

          {/* Vertical List (Compact Column) */}
          <div className="p-1.5 flex flex-col gap-0.5">
            {SECONDARY_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-gray-500 dark:text-gray-400")} />
                  <span className="font-bold tracking-tight text-[13px]">{item.label}</span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Bottom Bar */}
      <nav className="lg:hidden fixed bottom-6 left-0 right-0 z-90 px-6 flex justify-center">
        <div className={cn(
          "flex justify-between items-center h-[64px] rounded-[24px] px-4 w-full max-w-[400px] transition-all duration-300 border",
          "bg-white dark:bg-[#1A1D24] border-gray-200 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none"
        )}>
          {CORE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            if (item.primary) {
              return (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  className="flex items-center justify-center -translate-y-4"
                >
                  <div className="bg-primary p-3 rounded-full shadow-btn active:scale-90 transition-all duration-500 group">
                    <Plus className="w-6 h-6 text-white stroke-[3px] group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </Link>
              );
            }

            if (item.isMenu) {
              return (
                <button
                  key={idx}
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 transition-all duration-300",
                    isMoreMenuOpen ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isMoreMenuOpen ? "stroke-[2.5px]" : "stroke-[2px]")} />
                  <span className="text-[11px] font-bold leading-none">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href || "#"}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-all duration-300",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-[2px]")} />
                <span className="text-[11px] font-bold leading-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
