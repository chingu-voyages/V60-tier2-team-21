import {
  ChartColumnBig,
  CirclePlus,
  Folder,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

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
    <div>
      <ul>{sideBarElements}</ul>
      {children}
    </div>
  );
}
