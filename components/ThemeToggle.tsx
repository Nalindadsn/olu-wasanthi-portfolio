"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/10 dark:bg-black/10 backdrop-blur-md transition-colors"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {theme === "dark" ? (
          /* Sun / Light Flower */
          <motion.svg 
            initial={{ rotate: -90, opacity: 0 }} 
            animate={{ rotate: 0, opacity: 1 }}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-amber-200"
          >
            <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        ) : (
          /* Moon / Dark Flower */
          <motion.svg 
            initial={{ rotate: 90, opacity: 0 }} 
            animate={{ rotate: 0, opacity: 1 }}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-zinc-900"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="1.5" strokeLinejoin="round" />
          </motion.svg>
        )}
      </div>
    </motion.button>
  );
}