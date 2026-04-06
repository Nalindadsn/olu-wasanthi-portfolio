"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OluFlowerSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path
      d="M50 10C50 10 35 40 10 50C35 60 50 90 50 90C50 90 65 60 90 50C65 40 50 10 50 10Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

export default function ArtistHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-[#0d0d0d] transition-colors duration-700 overflow-hidden pt-20">
      
      {/* 🖼️ LEFT PROFILE BACKGROUND (Light/Dark Optimized) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 h-full w-full lg:w-1/2 z-0 overflow-hidden"
      >
        <Image
          src="/olu-wasanthi.png"
          alt="Olu Wasanthi"
          fill
          className="object-cover opacity-[0.07] dark:opacity-[0.10] grayscale contrast-125"
          priority
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0d0d0d] via-white/90 dark:via-[#0d0d0d]/90 to-transparent" />
      </motion.div>

      {/* 🌈 BACKGROUND MESH (Softer for Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[60%] bg-purple-400/10 dark:bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[50%] bg-blue-400/5 dark:bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* 🌸 WATERMARK */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.02] text-zinc-900 dark:text-white pointer-events-none z-0">
        <OluFlowerSVG className="w-[1000px] h-[1000px] rotate-12" />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-amber-600/50 dark:bg-amber-200/50"></span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-700 dark:text-amber-200/80 font-medium dark:font-light">
                Fine Art Drawing Artist
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-zinc-900 dark:text-white leading-none">
              Olu <br />
              <span className="font-serif italic text-zinc-400 dark:text-zinc-500">
                Wasanthi
              </span>
            </h1>

            <p className="mt-8 text-zinc-600 dark:text-zinc-500 max-w-sm text-lg font-light leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
              Exploring the delicate balance of light and shadow through hand-drawn narratives on archival paper.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <motion.button
                whileHover={{ gap: "24px" }}
                className="flex items-center gap-4 text-zinc-900 dark:text-white text-sm uppercase tracking-widest transition-all group font-medium dark:font-normal"
              >
                Enter Gallery
                <span className="h-[1px] w-8 bg-zinc-900 dark:bg-white group-hover:w-16 transition-all" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE (Main Art Piece) */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 rounded-sm shadow-2xl overflow-hidden group border border-zinc-200 dark:border-white/5"
          >
            <Image
              src="/drawings.png"
              alt="Olu Wasanthi Art Portfolio"
              fill
              className="object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Gallery "Matting" Frame */}
            <div className="absolute inset-0 border-[15px] md:border-[30px] border-white/20 dark:border-[#0d0d0d]/40 pointer-events-none" />
          </motion.div>

          {/* FLOATING ART CARD */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-8 right-4 md:-left-8 bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 p-6 md:p-8 rounded-sm shadow-xl max-w-[260px]"
          >
            <p className="text-[10px] text-amber-700 dark:text-amber-200 uppercase tracking-widest mb-2 font-bold dark:font-normal">
              Current Series
            </p>
            <h3 className="text-zinc-900 dark:text-white font-serif italic text-xl">
              The Silent Bloom
            </h3>
            <p className="text-zinc-500 text-[11px] mt-2 leading-relaxed">
              Hand-drawn Charcoal on Archival Paper, 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}