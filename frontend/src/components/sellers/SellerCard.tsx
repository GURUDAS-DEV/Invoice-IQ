import { Badge } from "@/components/ui/Badge";
import { PriceSparkline } from "@/components/ui/PriceSparkline";
import { Supplier, getTrendDirection } from "@/types/supplier";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface SellerCardProps {
  seller: Supplier;
}

/**
 * Senior Architecture Note:
 * This component is redesigned to maximize information density for the shopkeeper.
 * At a glance, they see: Trend, Spike Count, and Total Items being tracked.
 */
export function SellerCard({ seller }: SellerCardProps) {
  const trendDirection = getTrendDirection(seller.prices);
  const borderColor = {
    azure: "border-l-secondary",
    stable: "border-l-stable",
    spike: "border-l-spike"
  }[seller.statusVariant];

  return (
    <div className={cn(
      "flex justify-between items-center py-4 px-4 md:py-5 md:px-6 border-b border-border/5 last:border-0 hover:bg-muted/30 active:bg-muted/50 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/5 transition-all duration-300 ease-premium cursor-pointer group/item border-l-4",
      borderColor
    )}>
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <div className="flex flex-col min-w-0">
          <span className="text-sm md:text-base font-black tracking-tight text-gray-900 dark:text-white leading-tight truncate group-hover/item:text-primary transition-colors">
            {seller.name}
          </span>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-[9px] md:text-[11px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-tight bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
              {seller.category}
            </span>
            <div className="flex items-center gap-1.5 text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 font-bold italic">
              <ShoppingBag className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span>{seller.itemCount} items</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8 shrink-0 ml-2">
        {/* Trend Section */}
        <div className="hidden sm:flex flex-col items-end gap-1 min-w-[100px]">
          <span className="text-[9px] font-bold text-muted-foreground uppercase">Price Trend</span>
          <PriceSparkline data={seller.prices} variant={trendDirection} />
        </div>

        {/* Status Area */}
        <div className="flex flex-col items-end justify-center min-w-22.5 h-10">
          <Badge 
            variant={seller.statusVariant} 
            className="font-black text-[9px] md:text-[10px] tracking-widest uppercase py-1 px-2.5 md:py-1.5 md:px-4 shadow-sm border-white/10 group-hover/item:scale-105 transition-transform"
          >
            {seller.status}
          </Badge>
        </div>
      </div>
    </div>
  );
}
