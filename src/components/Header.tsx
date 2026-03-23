"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "THREAT", href: "#threat" },
  { label: "SOLUTION", href: "#solution" },
  { label: "PROCESS", href: "#process" },
  { label: "FACILITY", href: "#facility" },
  { label: "PROOF", href: "#proof" },
  { label: "ABOUT", href: "#about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border-harsh">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Gladiator Allegiance"
            width={40}
            height={40}
            className="logo-blend-sm"
          />
          <span className="font-[var(--font-display)] text-foreground text-lg font-semibold tracking-[0.15em] uppercase hidden sm:block">
            Gladiator Allegiance
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-foreground-muted hover:text-tan transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            className="bg-olive hover:bg-olive-bright text-foreground font-[var(--font-display)] text-sm font-semibold tracking-[0.1em] uppercase px-5 py-2 transition-colors"
          >
            LET&apos;S CONNECT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border-harsh overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[var(--font-mono)] text-sm tracking-[0.2em] text-foreground-muted hover:text-tan transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#connect"
                onClick={() => setMobileOpen(false)}
                className="bg-olive text-foreground font-[var(--font-display)] text-sm font-semibold tracking-[0.1em] uppercase px-5 py-3 text-center mt-2 transition-colors hover:bg-olive-bright"
              >
                LET&apos;S CONNECT
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
