import PrivateSideBar from "@/components/Navbar/PrivateSideBar"
import PrivateTopBar from "@/components/Navbar/PrivateTopBar"
import { BottomNav } from "@/components/layout/BottomNav"

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background">
      <PrivateSideBar />
      <main className="flex-1 dark:bg-black min-h-screen flex flex-col min-w-0">
        <PrivateTopBar />
        <div className="flex-1 p-4 md:p-6 dark:bg-black">
          {children}
        </div>
        
        {/* Main scrollable content area */}
        <main className="flex-1 min-w-0 overflow-y-auto bg-muted dark:bg-[#080A0F] scroll-smooth">
          <div className="p-5 md:p-8 xl:p-10 min-h-full">
            {children}
          </div>
          <BottomNav />
        </main>
      </div>
    </div>
  );
}
