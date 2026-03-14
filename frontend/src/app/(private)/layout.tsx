import PrivateSideBar from "@/components/Navbar/PrivateSideBar"
import PrivateTopBar from "@/components/Navbar/PrivateTopBar"

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background">
      <PrivateSideBar />
      {/* Offset content by sidebar width */}
      <main className="flex-1 ml-[220px] dark:bg-black min-h-screen flex flex-col">
        <PrivateTopBar />
        <div className="flex-1 p-6 dark:bg-black">
          {children}
        </div>
      </main>
    </div>
  );
}
