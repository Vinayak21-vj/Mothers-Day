'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { reasons } from '@/data/reasons';
import SectionReveal from '@/components/ui/SectionReveal';

export default function ReasonsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="container mx-auto py-20 min-h-screen relative" ref={containerRef}>
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-5xl md:text-7xl text-[var(--accent-pink)] mb-6 drop-shadow-[0_0_20px_rgba(255,107,157,0.4)]"
        >
          100 Reasons Why
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[var(--text-soft)] font-light italic max-w-2xl mx-auto"
        >
          (And we could easily name a million more...)
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto relative px-4 md:px-10">
        {/* Scroll Progress Line */}
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-[var(--border-card)] rounded-full hidden md:block">
          <motion.div 
            className="w-full bg-[var(--accent-pink)] rounded-full shadow-[0_0_10px_var(--accent-pink)]"
            style={{ height: progressBarHeight }}
          />
        </div>

        <div className="space-y-6 relative">
          {reasons.map((reason, index) => {
            if (typeof reason === 'object') {
              return (
                <SectionReveal key={index} direction="none" className="py-12">
                  <div className="glass-panel p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(255,107,157,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-4xl opacity-20 text-[var(--accent-pink)]">"</div>
                    <p className="font-playfair text-2xl md:text-3xl text-[var(--accent-pink)] italic">
                      {reason.quote}
                    </p>
                    <div className="absolute bottom-0 left-0 p-4 text-4xl opacity-20 text-[var(--accent-pink)]">"</div>
                  </div>
                </SectionReveal>
              );
            }

            return (
              <SectionReveal key={index} direction="up" amount="some">
                <div className="flex items-center gap-6 group relative">
                  {/* Decorative dot for desktop timeline */}
                  <div className="hidden md:flex absolute -left-10 w-3 h-3 rounded-full bg-[var(--accent-pink)] opacity-50 group-hover:scale-150 group-hover:opacity-100 group-hover:shadow-[0_0_10px_var(--accent-pink)] transition-all duration-300" />
                  
                  <div className="flex-1 glass-panel p-6 rounded-2xl group-hover:bg-[rgba(255,107,157,0.12)] transition-colors duration-300 border border-transparent group-hover:border-[var(--border-card)]">
                    <div className="flex gap-4 items-start">
                      <span className="text-[var(--accent-pink)] font-playfair font-bold text-xl opacity-50 w-8 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[var(--text-white)] text-lg md:text-xl font-light">
                        {reason}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
