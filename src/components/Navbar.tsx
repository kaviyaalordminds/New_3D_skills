"use client";

import { useState } from "react";
import { Menu, X, Boxes } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Boxes className="h-6 w-6 text-primary" aria-hidden="true" />
          Forge3D
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#pricing"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Start creating free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Start creating free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
