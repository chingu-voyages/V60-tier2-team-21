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
        <Link className="flex gap-1" href={navLink.href}>
          <navLink.icon />
          {navLink.name}
        </Link>
      </li>
    );
  });

  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 h-screen border-amber-50 py-4 px-6">
        <Placeholderlogo className="mb-6" />
        <ul className="flex flex-col gap-4">{sideBarElements}</ul>
      </div>
      <main className="ml-64 flex-1 py-4">{children}</main>
    </div>
  );
}
