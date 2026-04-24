import {
  ChartColumnBig,
  CirclePlus,
  Folder,
  LayoutDashboard,
} from "lucide-react";

import Link from "next/link";

export default function Sidebar() {
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

  return <ul className="flex flex-col gap-4">{sideBarElements}</ul>;
}
