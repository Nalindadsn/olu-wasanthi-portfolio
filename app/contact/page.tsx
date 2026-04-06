"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] pt-32 pb-20 transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
        
        {/* Left: Studio Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-white tracking-tighter mb-8">
            Start a <br />
            <span className="font-serif italic text-zinc-400">Conversation</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-md">
            For commission inquiries, exhibition bookings, or private studio viewings, please reach out via the form or direct email.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-200 mb-1">Direct Email</p>
              <p className="text-xl text-zinc-800 dark:text-zinc-200 font-light">studio@oluwasanthi.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-200 mb-1">Location</p>
              <p className="text-xl text-zinc-800 dark:text-zinc-200 font-light">Colombo, Sri Lanka</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-50 dark:bg-white/5 p-8 md:p-12 border border-zinc-200 dark:border-white/5"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-400">Full Name</label>
                <input type="text" className="bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-2 focus:border-amber-500 outline-none transition-colors text-zinc-900 dark:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-400">Subject</label>
                <select className="bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-2 focus:border-amber-500 outline-none transition-colors text-zinc-900 dark:text-white appearance-none">
                  <option>Commission Inquiry</option>
                  <option>Exhibition</option>
                  <option>General</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-2 focus:border-amber-500 outline-none transition-colors text-zinc-900 dark:text-white resize-none" />
            </div>
            <button className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-600 dark:hover:bg-amber-200 transition-all">
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}