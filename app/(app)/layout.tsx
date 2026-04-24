import Placeholderlogo from "@/components/PlaceholderLogo";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[256px_1fr] min-h-screen">
      <div className="h-screen border-r px-4 py-6">
        <Placeholderlogo className="mb-6" />
        <Sidebar />
      </div>
      <main className="mx-auto w-full max-w-2xl py-4">{children}</main>
    </div>
  );
}
