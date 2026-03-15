"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SellerCard } from "@/components/sellers/SellerCard";
import { Card, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { MOCK_SUPPLIERS, CATEGORIES } from "@/lib/mock-data";
import { Plus } from "lucide-react";

/**
 * PRD Alignment: Home is Sellers List
 * 
 * Audit Implementation:
 * 1. Category Filter Chips added at top.
 * 2. Header renamed to "Sellers".
 * 3. Cards show Spike Counts and Item Counts.
 * 4. Realistic Kirana Supplier names used.
 */
export default function SellersPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSellers = MOCK_SUPPLIERS.filter(s => 
    activeCategory === "All" || s.category === activeCategory
  );

  return (
    <div className="relative min-h-screen lg:max-w-[1200px] lg:mx-auto lg:my-6 lg:rounded-[40px] lg:border lg:border-border/10 overflow-hidden flex flex-col bg-surface dark:bg-[#111318] shadow-premium">
        {/* Decorative Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex-1 p-6 md:p-10 space-y-8 md:space-y-12 z-10 pt-12">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white tracking-tighter leading-none">Sellers</h1>
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <span className="w-2 h-2 rounded-full bg-green-500 block" />
                  <span className="w-2 h-2 rounded-full bg-green-500 absolute inset-0 animate-ping opacity-75" />
                </div>
                <p className="text-[12px] md:text-[14px] text-gray-500 dark:text-gray-400 font-bold tracking-tight italic">
                  Amar Kirana Store • <span className="text-primary dark:text-blue-400">{MOCK_SUPPLIERS.length} Distributors</span>
                </p>
              </div>
            </div>
            <Button variant="premium" className="w-full md:w-auto px-8 h-12 gap-2 text-sm shadow-btn active:scale-95">
              <Plus className="w-4 h-4 stroke-[3px]" /> Add Seller
            </Button>
          </header>

          {/* Category Filter Chips */}
          <div className="space-y-4">
            <section className="flex gap-2 overflow-x-auto pb-4 no-scrollbar px-1 -mx-1">
              {CATEGORIES.map(cat => (
                <Chip 
                  key={cat} 
                  label={cat} 
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className="transition-all duration-300"
                />
              ))}
            </section>
          </div>
          
          <div className="grid grid-cols-1">
            <Card className="border-border/40 dark:border-white/10 shadow-card overflow-hidden rounded-3xl bg-white dark:bg-[#1A1D24]">
              <CardContent className="p-0">
                {filteredSellers.length > 0 ? (
                  filteredSellers.map((seller) => (
                    <SellerCard key={seller.id} seller={seller} />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-3 px-6">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <Plus className="text-muted-foreground w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">No sellers found</h3>
                      <p className="text-xs text-muted-foreground max-w-[200px]">Try a different category or add a new seller to start tracking.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}
