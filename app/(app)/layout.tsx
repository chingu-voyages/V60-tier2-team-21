import Placeholderlogo from "@/components/PlaceholderLogo";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:grid grid-cols-[256px_1fr] min-h-dvh">
      <Sidebar />
      <main className="h-[200vh] mx-auto w-full max-w-6xl">{children}</main>
    </div>
  );
}
