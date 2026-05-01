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
      <main className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-10">
        {children}
      </main>
    </div>
  );
}
