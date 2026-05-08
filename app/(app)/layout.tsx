import Placeholderlogo from "@/components/PlaceholderLogo";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:grid grid-cols-[256px_auto] min-h-dvh">
      <Sidebar />
      <main className="mx-auto w-full max-w-6xl p-6 lg:p-10">{children}</main>
    </div>
  );
}
