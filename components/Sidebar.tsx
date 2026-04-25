"use client";

import {
  ChartColumnBig,
  CirclePlus,
  Folder,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Placeholderlogo from "./PlaceholderLogo";

const navLinks = [
  { href: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
  { href: "/applications", name: "Applications", icon: Folder },
  { href: "/new-entry", name: "New Entry", icon: CirclePlus },
  { href: "/analytics", name: "Analytics", icon: ChartColumnBig },
];

function HamburgerOpen({ handleHamburger }: { handleHamburger: () => void }) {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-background z-100">
      <header className="flex justify-between items-center px-4 sm:px-6 py-6">
        <Link href="/">
          <Placeholderlogo className="text-foreground" />
        </Link>

        <Button variant="outline" onClick={handleHamburger}>
          <X />
        </Button>
      </header>

      <ul className="flex flex-col gap-4 px-4 sm:px-6">
        {navLinks.map((link, idx) => (
          <li
            key={link.href}
            className={`py-2 starting:opacity-0 starting:-translate-y-5 opacity-100 transition-[opacity,translate] duration-500 translate-y-0 border-b`}
            style={{
              transitionDelay: `${(idx + 1) * 100}ms`,
            }}
          >
            <Link
              href={link.href}
              className="text-xl font-semibold text-foreground "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  const [hamburger, setHamburger] = useState(false);

  function handleHamburger() {
    setHamburger((prev) => !prev);
  }

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
    <div className="flex justify-between sm:flex-col sm:justify-start sm:h-screen border-r px-4 py-6">
      <Placeholderlogo className="mb-6" />
      <Button variant="outline" onClick={handleHamburger} className="sm:hidden">
        <Menu />
      </Button>
      <ul className="hidden sm:flex flex-col gap-4">{sideBarElements}</ul>
      {hamburger && <HamburgerOpen handleHamburger={handleHamburger} />}
    </div>
  );
}
