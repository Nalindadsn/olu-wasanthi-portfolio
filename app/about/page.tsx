"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const LilyLogo = ({ className }: { className?: string }) => (
  <svg viewBox="-50 -50 100 100" fill="none" className={className}>
    <path d="M0 -40C0 -40 -15 -10 0 0C15 -10 0 -40 0 -40Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M28 -28C28 -28 10 -10 0 0C25 5 28 -28 28 -28Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M-28 -28C-28 -28 -10 -10 0 0C-25 5 -28 -28 -28 -28Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M40 0C40 0 10 0 0 0C10 20 40 0 40 0Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M-40 0C-40 0 -10 0 0 0C-10 20 -40 0 -40 0Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-[#080808] transition-colors duration-1000 overflow-x-hidden">
      
      {/* 🔥 1. BACKGROUND PERSONA (Full Height Subtle Image) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/olu-wasanthi.png"
          alt="Olu Wasanthi Profile"
          fill
          className="object-cover object-center opacity-[0.07] dark:opacity-[0.05] grayscale transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#080808] via-transparent to-white dark:to-[#080808]" />
      </div>

      {/* 2. HERO: TYPOGRAPHY ONLY */}
      <section className="relative min-h-screen flex items-center z-10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: textY }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-6 mb-16">
              <LilyLogo className="w-12 h-12 text-amber-600/80 dark:text-amber-200/40" />
              <span className="text-[11px] uppercase tracking-[0.8em] text-zinc-400 font-light">Fine Art Portfolio</span>
            </div>
            
            <h1 className="text-[12vw] md:text-[10vw] font-light text-zinc-900 dark:text-white tracking-tighter leading-[0.8] mb-12">
              Olu <br />
              <span className="font-serif italic text-zinc-400 dark:text-zinc-600">Wasanthi</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-amber-500/20 pl-8">
                A charcoal specialist crafting narratives through the delicate balance of light and shadow.
              </p>
              <div className="flex flex-col justify-end">
                <p className="text-sm uppercase tracking-widest text-zinc-400 mb-2">Based in</p>
                <p className="text-lg font-serif italic text-zinc-800 dark:text-zinc-200">Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. STATEMENT: FULL WIDTH FOCUS */}
      <section className="relative z-10 py-60 border-y border-zinc-100 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-7xl font-light text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight max-w-6xl mx-auto"
          >
            “Art is the <span className="font-serif italic text-zinc-400">quiet</span> vibration between what is seen and what is <span className="text-amber-700 dark:text-amber-400">felt</span>.”
          </motion.h2>
        </div>
      </section>

      {/* 4. METHODOLOGY: VERTICAL STACK */}
      <section className="relative z-10 container mx-auto px-6 md:px-12 py-40">
        <div className="max-w-4xl mx-auto space-y-40">
          {[
            { 
              num: "I", 
              title: "Obsession with Light", 
              desc: "My process begins with a study of the ephemeral. I capture the fleeting moments of Sri Lankan daylight and translate them into permanent tonal values." 
            },
            { 
              num: "II", 
              title: "Archival Quality", 
              desc: "Using the finest charcoal and graphite on heavy-weight cotton rag, ensuring each stroke remains as deep and resonant as the day it was drawn." 
            },
            { 
              num: "III", 
              title: "The Silent Narrative", 
              desc: "The final work is a curated silence. A space where the viewer can find a moment of stillness in an increasingly loud world." 
            }
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group"
            >
              <div className="flex flex-col md:flex-row items-baseline gap-8">
                <span className="text-8xl font-serif italic text-zinc-100 dark:text-[#111] group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors duration-700">
                  {step.num}
                </span>
                <div className="space-y-6">
                  <h4 className="text-zinc-900 dark:text-white uppercase tracking-[0.4em] text-[10px] font-bold">Process Step</h4>
                  <h3 className="text-3xl md:text-5xl font-light text-zinc-800 dark:text-zinc-200">{step.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <section className="relative z-10 container mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col items-center text-center">
          <div className="h-32 w-[1px] bg-gradient-to-b from-transparent to-amber-500 mb-12" />
          <h3 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-white tracking-tighter mb-12 max-w-2xl">
            Let’s create something <span className="font-serif italic text-zinc-400">timeless</span> together.
          </h3>
          <Link 
            href="/contact"
            className="group relative px-16 py-6 overflow-hidden border border-zinc-200 dark:border-white/10"
          >
            <span className="relative z-10 text-[11px] uppercase tracking-[0.6em] text-zinc-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
              Request Portfolio
            </span>
            <div className="absolute inset-0 bg-zinc-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>

    </main>
  );
}