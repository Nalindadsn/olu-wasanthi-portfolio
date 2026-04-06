"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OluLogo } from "./OluLogo";
import Link from "next/link";

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <OluLogo className="w-8 h-8 text-amber-200 transition-transform duration-500 group-hover:rotate-90" />
          <span className="text-white tracking-[0.2em] font-light text-sm uppercase">
            Olu <span className="font-serif italic lowercase tracking-normal">Wasanthi</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <Link 
                href={link.href}
                className="relative text-xs uppercase tracking-widest text-zinc-400 hover:text-amber-200 transition-colors duration-300 group"
              >
                {link.name}
                {/* Premium Underline Animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-200 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* "Pro" Call to Action */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block px-6 py-2 border border-amber-200/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-amber-200 hover:bg-amber-200 hover:text-black transition-all duration-500"
        >
          Inquire
        </motion.button>
      </div>
    </motion.nav>
  );
}