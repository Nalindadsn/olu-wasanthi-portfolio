"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-700 pt-32 pb-20">
      
      {/* 1. HERO SECTION: The Persona */}
      <section className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 dark:text-amber-200 font-medium mb-6 block">
              The Artist Behind the Charcoal
            </span>
            <h1 className="text-6xl md:text-8xl font-light text-zinc-900 dark:text-white tracking-tighter leading-none mb-10">
              Olu <br />
              <span className="font-serif italic text-zinc-400">Wasanthi</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed mb-6">
              Based in the vibrant landscapes of Sri Lanka, Olu Wasanthi is a fine art artist dedicated to the revival of traditional drawing techniques in a digital age.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-base font-light leading-relaxed">
              Her work explores the silent intersection of human emotion and botanical geometry, utilizing charcoal and graphite to uncover narratives that color often obscures.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] md:aspect-[16/10] w-full grayscale contrast-110 shadow-2xl rounded-sm overflow-hidden border border-zinc-200 dark:border-white/5"
          >
            <Image
              src="/olu-wasanthi.png" // Using your background profile image
              alt="Olu Wasanthi at work"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY: The "White Cube" Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 py-24 border-y border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif italic text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200 mb-8">
              "Art is not what you see, but what you make others see through the absence of color."
            </h2>
            <div className="h-[1px] w-20 bg-amber-500 mx-auto mb-8" />
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px]">Artist Statement — 2026</p>
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS: Studio Narrative */}
      <section className="container mx-auto px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-3 gap-16">
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="space-y-6"
          >
            <span className="text-4xl font-serif italic text-zinc-300 dark:text-zinc-800">01</span>
            <h4 className="text-zinc-900 dark:text-white uppercase tracking-widest text-xs font-bold">Observation</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
              Every piece begins with hours of silent observation, capturing the specific way light falls across a subject before a single mark is made.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="space-y-6 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-white/5 md:pl-12 pt-12 md:pt-0"
          >
            <span className="text-4xl font-serif italic text-zinc-300 dark:text-zinc-800">02</span>
            <h4 className="text-zinc-900 dark:text-white uppercase tracking-widest text-xs font-bold">Medium</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
              Specializing in archival-grade charcoal and high-density graphite on heavy cotton-rag paper to ensure the longevity of every line.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="space-y-6 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-white/5 md:pl-12 pt-12 md:pt-0"
          >
            <span className="text-4xl font-serif italic text-zinc-300 dark:text-zinc-800">03</span>
            <h4 className="text-zinc-900 dark:text-white uppercase tracking-widest text-xs font-bold">Exhibition</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
              The final works are curated experiences, designed to bring a sense of meditative stillness to the modern home or gallery space.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. FOOTER CALL-TO-ACTION */}
      <section className="container mx-auto px-6 md:px-12 text-center pb-20">
        <div className="p-16 border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.02]">
          <h3 className="text-2xl md:text-3xl text-zinc-900 dark:text-white font-light mb-8">
            Interested in a custom commission?
          </h3>
          <Link 
            href="/contact"
            className="inline-block px-12 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] uppercase tracking-[0.4em] hover:bg-amber-600 dark:hover:bg-amber-200 transition-all"
          >
            Request Portfolio
          </Link>
        </div>
      </section>

    </main>
  );
}