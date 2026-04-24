"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import PlaceholderLogo from "@/components/PlaceholderLogo";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { navigationLink } from "@/lib/data";

function HamburgerOpen({ handleHamburger }: { handleHamburger: () => void }) {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-background z-[100]">
      <header className="flex justify-between items-center px-4 sm:px-6 h-(--height-navbar)">
        <a href="#hero">
          <PlaceholderLogo className="text-foreground" />
        </a>

        <Button variant="outline" onClick={handleHamburger}>
          <X />
        </Button>
      </header>

      <ul className="flex flex-col gap-4 px-4 sm:px-6">
        {navigationLink.map((link, idx) => (
          <li
            key={link.href}
            className={`py-2 starting:opacity-0 starting:-translate-y-5 opacity-100 transition-[opacity,translate] duration-500 translate-y-0 border-b`}
            style={{
              transitionDelay: `${(idx + 1) * 100}ms`,
            }}
          >
            <a
              href={link.href}
              className="text-xl font-semibold text-foreground"
              onClick={handleHamburger}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function handleHamburger() {
    setHamburger((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-between gap-8 px-4 sm:px-6 h-(--height-navbar) w-full border-b fixed top-0 left-0 backdrop-blur-lg z-50 [--height-navbar:80px]">
      <a href="#hero">
        <PlaceholderLogo className="text-foreground" />
      </a>

      <div className="flex items-center sm:gap-6 gap-2.5">
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6">
            {navigationLink.map(({ href, name }) => (
              <a href={href} className="text-sm text-foreground" key={href}>
                {name}
              </a>
            ))}
          </ul>
        </nav>

        <div className="h-6 w-px bg-gray-950/10 dark:bg-white/10 sm:block hidden" />

        <ToggleTheme />
        <Button
          variant="outline"
          onClick={handleHamburger}
          className="sm:hidden"
        >
          <Menu />
        </Button>
      </div>

      {hamburger && (
        <HamburgerOpen
          handleHamburger={handleHamburger}
          setHamburger={setHamburger}
        />
      )}
    </div>
  );
}
