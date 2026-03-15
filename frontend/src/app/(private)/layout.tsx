import PrivateSideBar from "@/components/Navbar/PrivateSideBar"
import PrivateTopBar from "@/components/Navbar/PrivateTopBar"
import { BottomNav } from "@/components/layout/BottomNav"

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      {/* TopBar is fixed at z-50 */}
      <PrivateTopBar />
      
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Sidebar is fixed at z-60 */}
        <div className="hidden lg:block w-[220px] shrink-0">
          <PrivateSideBar />
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
