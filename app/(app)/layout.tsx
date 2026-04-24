import {
  ChartColumnBig,
  CirclePlus,
  Folder,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import Placeholderlogo from "@/components/PlaceholderLogo";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { href: "/applications", name: "Applications", icon: Folder },
    { href: "/new-entry", name: "New Entry", icon: CirclePlus },
    { href: "/analytics", name: "Analytics", icon: ChartColumnBig },
  ];

  const sideBarElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.href}>
        <Link className="flex gap-3" href={navLink.href}>
          <navLink.icon />
          {navLink.name}
        </Link>
      </li>
    );
  });

  return (
    <div className="grid grid-cols-[256px_1fr] min-h-screen">
      <div className="h-screen border-r px-4 py-6">
        <Placeholderlogo className="mb-6" />
        <ul className="flex flex-col gap-4">{sideBarElements}</ul>
      </div>
      <main className="mx-auto w-full max-w-2xl py-4">{children}</main>
    </div>
  );
}
