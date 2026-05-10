"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Placeholderlogo from "@/components/PlaceholderLogo";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { sideLinks } from "@/lib/data";

function HamburgerOpen({ handleHamburger }: { handleHamburger: () => void }) {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-background z-50">
      <header className="flex justify-between items-center px-4 py-6">
        <Link href="/">
          <Placeholderlogo className="text-foreground" />
        </Link>

        <div className="flex gap-2.5 justify-center items-center">
          <ToggleTheme />
          <Button variant="outline" onClick={handleHamburger}>
            <X />
          </Button>
        </div>
      </header>

      <ul className="flex flex-col gap-4 px-4 sm:px-6">
        {sideLinks.map((link, idx) => (
          <li
            key={link.href}
            className={`py-2 starting:opacity-0 starting:-translate-y-5 opacity-100 transition-[opacity,translate] duration-500 translate-y-0 border-b`}
            style={{
              transitionDelay: `${(idx + 1) * 100}ms`,
            }}
          >
            <Link
              href={link.href}
              className="text-xl font-semibold text-foreground"
              onClick={handleHamburger}
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
  const pathname = usePathname();
  // Regex for getting the active path consume /apps/app produce /apps
  const onlyFirstPath =
    pathname?.match(/(\/(?:[A-Za-z0-9_]+)?)/g)?.[0] ?? "/dashboard";

  function handleHamburger() {
    setHamburger(false);
  }

  const sideBarElements = sideLinks.map((sideLink) => {
    return (
      <li
        className="group hover:bg-foreground/5 rounded-md"
        key={sideLink.href}
      >
        <Link
          className={`p-2 text-sm font-medium flex items-center gap-3 group-hover:text-foreground ${onlyFirstPath === sideLink.href ? "text-foreground" : "text-muted-foreground"}`}
          href={sideLink.href}
        >
          <sideLink.icon className="size-5" />
          {sideLink.name}
        </Link>
      </li>
    );
  });

  return (
    <nav
      className={`flex justify-between lg:flex-col lg:justify-start lg:h-full border-r px-4 py-6 ${hamburger ? "fixed inset-0 z-1000" : ""}`}
    >
      <div className="flex justify-between items-center lg:pb-6 w-full">
        <Link href={"/"}>
          <Placeholderlogo />
        </Link>

        <div className="flex gap-2.5 justify-center items-center">
          <ToggleTheme />

          <Button
            variant="outline"
            onClick={() => setHamburger(true)}
            className="lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </div>

      <ul className="hidden lg:flex flex-col gap-0.5">{sideBarElements}</ul>
      {hamburger && <HamburgerOpen handleHamburger={handleHamburger} />}
    </nav>
  );
}
