"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const artworks = [
  { id: 1, src: "/1.png", title: "Midnight Charcoal", size: "24x36", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/2.jpg", title: "Shadow Play", size: "18x24", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/3.webp", title: "Blue and Purple. MATTED Watercolor Prints.", size: "12x12", span: "md:col-span-1 md:row-span-2" },
  // Add more items...
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] pt-32 pb-20 px-6 md:px-12 transition-colors duration-700">
      <div className="container mx-auto">
        <header className="mb-16 border-b border-zinc-200 dark:border-white/5 pb-10">
          <h1 className="text-5xl md:text-7xl font-light text-zinc-900 dark:text-white tracking-tighter">
            The <span className="font-serif italic text-zinc-400">Collection</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${art.span}`}
            >
              <Image
                src={art.src}
                alt={art.title}
                width={800}
                height={1000}
                className="object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-amber-200 text-[10px] uppercase tracking-widest mb-2">Fine Art Drawing</p>
                <h3 className="text-white font-serif italic text-2xl">{art.title}</h3>
                <p className="text-zinc-400 text-xs mt-1">{art.size} — Graphite on Paper</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}