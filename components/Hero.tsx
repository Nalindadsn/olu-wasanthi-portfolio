"use client";
import { motion } from "framer-motion";
import { OluLogo } from "./OluLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <OluLogo className="w-16 h-16 mx-auto mb-8 text-amber-200/80" />
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">
            OLU <span className="font-serif italic text-amber-200">WASANTHI</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Capturing the essence of nature and emotion through contemporary fine art.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 border border-zinc-700 bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 rounded-full text-sm uppercase tracking-widest"
          >
            Explore Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}