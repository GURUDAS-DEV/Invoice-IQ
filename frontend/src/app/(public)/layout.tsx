import PublicNav from "@/components/Navbar/PublicNav";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <PublicNav/>
        {children}
      </>
  );
}
