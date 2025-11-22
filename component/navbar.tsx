"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ambil path saat ini

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Our Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-4 sm:px-6 md:px-10 py-6 relative">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3 cursor-pointer">
        <Link
          key=""
          href="/"
          className="text-text-light text-lg font-semibold tracking-wide"
        >
          SpaceHive
        </Link>
      </div>

      {/* MENU BUTTON (MOBILE) */}
      <button
        className="md:hidden text-text-light z-50 relative"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex items-center gap-9">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-text-light text-sm font-medium tracking-wider hover:text-muted-foreground transition-colors
                ${isActive ? "border-b-2 border-black pb-1" : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Navigation Mobile */}
      <nav
        className={`absolute top-full left-0 w-full bg-white z-10000 border-b border-border flex flex-col p-6 gap-4 md:hidden
          transform transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-text-light text-sm font-medium tracking-wider hover:text-muted-foreground transition-colors
                ${isActive ? "border-b-2 border-black pb-1" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
