import {
  ChartColumnBig,
  CirclePlus,
  Folder,
  LayoutDashboard,
} from "lucide-react";

export const navigationLink = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#features" },
];

export const sideLinks = [
  { href: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
  { href: "/applications", name: "Applications", icon: Folder },
  { href: "/new-entry", name: "New Entry", icon: CirclePlus },
  { href: "/analytics", name: "Analytics", icon: ChartColumnBig },
];
