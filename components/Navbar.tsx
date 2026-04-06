"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "The Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 shadow-sm" 
          : "py-10 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col group">
          <span className="text-zinc-900 dark:text-white tracking-[0.4em] font-light text-[10px] uppercase leading-none">
            Olu
          </span>
          <span className="font-serif italic text-zinc-500 text-xl leading-none mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
            Wasanthi
          </span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="relative text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 dark:bg-amber-200 rounded-full opacity-0 transition-all group-hover:opacity-100" />
            </Link>
          ))}
          
          {/* THEME TOGGLE */}
          <ThemeToggle/>
        </div>

        {/* CTA */}
        <Link 
          href="/contact"
          className="px-6 py-2 border border-zinc-900 dark:border-white/20 text-zinc-900 dark:text-white text-[9px] uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        >
          Inquire
        </Link>
      </div>
    </motion.nav>
  );
}