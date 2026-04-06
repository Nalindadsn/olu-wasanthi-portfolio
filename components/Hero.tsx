"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HairyWaterLilyLogo } from "./HairyWaterLilyLogo";

export default function ArtistHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-[#0d0d0d] transition-colors duration-700 overflow-hidden pt-20">
      
      {/* 🔥 EDITORIAL PROFILE BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 z-0 overflow-hidden pointer-events-none w-full lg:w-1/2 top-0 h-[70vh] lg:h-full"
      >
        <Image
          src="/olu-wasanthi.png"
          alt="Olu Wasanthi"
          fill
          className="
            object-cover object-top transition-all duration-1000
            mt-[100px] lg:mt-0 
            opacity-[0.2] dark:opacity-[0.15]
            lg:opacity-[0.8] lg:dark:opacity-[0.25]
            grayscale hover:grayscale-0
          "
          priority
        />
        {/* Soft edge blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0d0d0d] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0d0d0d] lg:hidden" />
      </motion.div>

      {/* --- BACKGROUND MESH & WATERMARK REMOVED FOR CLEANER LOOK --- */}

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* LEFT CONTENT: TYPOGRAPHY FOCUS */}
        <div className="lg:col-span-6 xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="h-[1px] w-8 bg-amber-600/60 dark:bg-amber-200/40" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-amber-800 dark:text-amber-200/60 font-medium">
                Fine Art Artist
              </span>
            </div>

            <h1 className="text-7xl md:text-[120px] font-light tracking-tighter text-zinc-900 dark:text-white leading-[0.85]">
              <span className="flex items-center gap-6 md:gap-10"> 
                <HairyWaterLilyLogo className="w-10 h-10 md:w-20 md:h-20 text-zinc-800 dark:text-white transition-transform hover:rotate-12 duration-700" />
                <span className="relative">Olu</span>
              </span>
              <span className="font-serif italic text-zinc-400 dark:text-zinc-600 block mt-4 md:mt-6">
                Wasanthi
              </span>
            </h1>

            <div className="mt-12 max-w-sm space-y-6">
              <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed border-l-2 border-zinc-100 dark:border-zinc-800/50 pl-6">
                Exploring the delicate balance of light and shadow through hand-drawn narratives on archival medium.
              </p>
              
              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 text-zinc-900 dark:text-white text-[11px] uppercase tracking-[0.3em] font-bold dark:font-medium group pt-4"
              >
                Explore Archive
                <div className="relative overflow-hidden">
                   <div className="h-[1px] w-12 bg-zinc-900 dark:bg-white transition-transform duration-500 group-hover:translate-x-full" />
                   <div className="absolute top-0 left-0 h-[1px] w-12 bg-amber-500 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT: THE MASTERPIECE */}
        <div className="lg:col-span-6 xl:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative aspect-[16/11] w-full bg-zinc-50 dark:bg-zinc-900 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden group"
          >
            <Image
              src="/drawings.png"
              alt="Olu Wasanthi Art"
              fill
              className="object-cover opacity-95 dark:opacity-90 group-hover:scale-[1.03] transition-transform duration-[2s] ease-out"
            />
            {/* Minimal Gallery Matting */}
            <div className="absolute inset-0 border-[15px] md:border-[40px] border-white/10 dark:border-black/20 pointer-events-none" />
          </motion.div>

          {/* FLOATING CARD - REDUCED SIZE FOR ELEGANCE */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-10 right-4 md:right-12 bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl border border-zinc-200 dark:border-white/5 p-6 shadow-2xl max-w-[240px]"
          >
            <span className="text-[9px] text-amber-700 dark:text-amber-300 uppercase tracking-[0.4em] mb-3 block font-semibold">
              Current Feature
            </span>
            <h3 className="text-zinc-900 dark:text-white font-serif italic text-lg leading-tight">
              The Hairy Water Lily
            </h3>
            <p className="text-zinc-500 text-[10px] mt-2 font-light">
              Charcoal on Cotton Rag, 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}