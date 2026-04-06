"use client";

import { motion } from "framer-motion";
import { HairyWaterLilyLogo } from "@/components/HairyWaterLilyLogo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-40 pb-20 transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-24">
        
        {/* LEFT: STUDIO INFO & TYPOGRAPHY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="mb-12">
            <HairyWaterLilyLogo className="w-12 h-12 text-amber-600 dark:text-amber-200/40 mb-8" />
            <h2 className="text-6xl md:text-8xl font-light text-zinc-900 dark:text-white tracking-tighter leading-[0.85] mb-8">
              Start a <br />
              <span className="font-serif italic text-zinc-400 dark:text-zinc-600">Conversation</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed max-w-sm">
              For commission inquiries, private studio viewings, or collection acquisitions.
            </p>
          </div>
          
          <div className="mt-auto space-y-10 pt-12 border-t border-zinc-100 dark:border-white/5">
            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.5em] text-amber-700 dark:text-amber-200/50 mb-2 transition-colors group-hover:text-amber-500">
                Direct Correspondence
              </p>
              <p className="text-2xl text-zinc-800 dark:text-zinc-200 font-light hover:underline underline-offset-8 decoration-zinc-200 dark:decoration-zinc-800">
                studio@oluwasanthi.com
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-400 mb-2">Location</p>
              <p className="text-lg text-zinc-800 dark:text-zinc-200 font-light">
                Colombo, Sri Lanka <br />
                <span className="text-zinc-400 text-sm italic">Available for International Shipping</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE INQUIRY FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-zinc-50/50 dark:bg-white/[0.02] p-8 md:p-16 rounded-sm border border-zinc-100 dark:border-white/5 backdrop-blur-3xl">
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Custom Input Wrapper */}
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white font-light placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-amber-600 pointer-events-none">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white font-light placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-amber-600 pointer-events-none">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select className="peer w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white font-light appearance-none">
                  <option className="bg-white dark:bg-[#0a0a0a]">Commission Inquiry</option>
                  <option className="bg-white dark:bg-[#0a0a0a]">Exhibition / Gallery Booking</option>
                  <option className="bg-white dark:bg-[#0a0a0a]">Print Request</option>
                  <option className="bg-white dark:bg-[#0a0a0a]">General Correspondence</option>
                </select>
                <label className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.3em] text-amber-600">
                  Subject of Inquiry
                </label>
                {/* Custom Chevron */}
                <div className="absolute right-0 bottom-5 pointer-events-none text-zinc-400">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" /></svg>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  rows={4} 
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white font-light resize-none placeholder-transparent"
                />
                <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-amber-600 pointer-events-none">
                  Message
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative w-full overflow-hidden bg-zinc-900 dark:bg-white py-6"
              >
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                <span className="relative z-10 text-white dark:text-black text-[11px] uppercase tracking-[0.6em] font-bold transition-colors group-hover:text-white">
                  Submit Inquiry
                </span>
              </motion.button>
              
              <p className="text-center text-[9px] text-zinc-400 uppercase tracking-widest">
                Average response time: 24-48 Hours
              </p>
            </form>
          </div>
        </motion.div>

      </div>
    </main>
  );
}