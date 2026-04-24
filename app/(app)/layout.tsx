import Placeholderlogo from "@/components/PlaceholderLogo";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[256px_1fr] min-h-screen">
      <Sidebar />
      <main className="mx-auto w-full max-w-2xl py-4">{children}</main>
    </div>
  );
}
