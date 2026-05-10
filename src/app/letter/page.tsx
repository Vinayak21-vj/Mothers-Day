'use client';

import { motion } from 'framer-motion';
import { letterContent } from '@/data/letter';
import AnimatedText from '@/components/ui/AnimatedText';
import SectionReveal from '@/components/ui/SectionReveal';

export default function LetterPage() {
  return (
    <div className="container mx-auto py-20 px-4 min-h-screen flex items-center justify-center">
      <SectionReveal direction="up" className="w-full max-w-3xl relative">
        
        {/* Decorative corner SVG - Top Left */}
        <svg className="absolute -top-10 -left-10 w-32 h-32 text-[var(--accent-pink)]/20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 10,90 Q 10,10 90,10 M 10,70 Q 30,30 70,10 M 10,50 Q 50,50 50,10" 
          />
        </svg>

        {/* Decorative corner SVG - Bottom Right */}
        <svg className="absolute -bottom-10 -right-10 w-32 h-32 text-[var(--accent-pink)]/20 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            d="M 10,90 Q 10,10 90,10 M 10,70 Q 30,30 70,10 M 10,50 Q 50,50 50,10" 
          />
        </svg>

        <div className="glass-panel p-10 md:p-16 rounded-[40px] shadow-[0_0_50px_rgba(255,107,157,0.15)] relative z-10 bg-[var(--bg-card)] backdrop-blur-xl border-t border-[var(--border-card)]">
          
          <motion.h2 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="font-script text-5xl md:text-6xl text-[var(--accent-pink)] mb-12 overflow-hidden whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,107,157,0.4)]"
          >
            {letterContent.salutation}
          </motion.h2>

          <div className="space-y-8 text-lg md:text-xl text-[var(--text-soft)] leading-relaxed font-light tracking-wide">
            {letterContent.paragraphs.map((para, index) => (
              <AnimatedText 
                key={index}
                text={para}
                delay={1.5 + (index * 0.5)}
              />
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--border-card)]/30 text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <p className="text-[var(--text-soft)] italic mb-4">{letterContent.signoff}</p>
              <p className="font-script text-4xl md:text-5xl text-[var(--accent-pink)] drop-shadow-[0_0_15px_rgba(255,107,157,0.4)]">
                {letterContent.names}
              </p>
            </motion.div>
          </div>

        </div>
      </SectionReveal>
    </div>
  );
}
