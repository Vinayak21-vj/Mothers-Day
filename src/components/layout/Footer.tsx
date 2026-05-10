'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export default function Footer() {
  return (
    <motion.footer 
      className="relative z-10 bg-[var(--bg-section)] text-center py-20 px-6 overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="container mx-auto relative z-10">
        <div className="mb-6 flex justify-center gap-3 drop-shadow-[0_0_12px_var(--accent-rose)]">
          <motion.span 
            className="text-3xl text-[var(--accent-pink)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >🩷</motion.span>
          <motion.span 
            className="text-3xl text-[var(--accent-pink)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >💕</motion.span>
          <motion.span 
            className="text-3xl text-[var(--accent-pink)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >🩷</motion.span>
        </div>
        
        <h2 className="font-playfair text-3xl md:text-5xl text-[var(--accent-pink)] mb-6">
          We love you, Mummy 🌸
        </h2>
        
        <p className="text-[var(--text-soft)] italic text-lg tracking-wide">
          — Vinayak & Aaadi
        </p>
      </div>

      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-[var(--accent-rose)] opacity-10 blur-[100px] rounded-full pointer-events-none" />
    </motion.footer>
  );
}
