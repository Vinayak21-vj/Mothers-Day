'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '@/data/timeline';
import SectionReveal from '@/components/ui/SectionReveal';

export default function TimelinePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="container mx-auto py-20 min-h-screen overflow-hidden relative" ref={containerRef}>
      <div className="text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-5xl md:text-7xl text-[var(--accent-pink)] mb-6 drop-shadow-[0_0_20px_rgba(255,107,157,0.4)]"
        >
          Our Journey
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[var(--text-soft)] font-light italic max-w-2xl mx-auto"
        >
          Through the years, one thing remained constant.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        
        {/* Wavy Timeline Path - Desktop Only */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 1000">
            <motion.path 
              d="M 50,0 Q 80,100 50,200 T 50,400 T 50,600 T 50,800 T 50,1000"
              fill="none" 
              stroke="var(--border-card)" 
              strokeWidth="1"
              className="opacity-50"
            />
            <motion.path 
              d="M 50,0 Q 80,100 50,200 T 50,400 T 50,600 T 50,800 T 50,1000"
              fill="none" 
              stroke="var(--accent-pink)" 
              strokeWidth="2"
              pathLength={scrollYProgress}
              className="drop-shadow-[0_0_10px_var(--accent-pink)]"
            />
          </svg>
        </div>

        {/* Straight Line - Mobile Only */}
        <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px] bg-[var(--border-card)]">
          <motion.div 
            className="w-full bg-[var(--accent-pink)]"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>

        <div className="space-y-32">
          {timeline.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={event.id} className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Desktop Empty Space for alternating layout */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-pink)] z-10">
                  <div className="absolute inset-0 bg-[var(--accent-pink)] rounded-full animate-ping opacity-50" />
                </div>

                {/* Content Card */}
                <div className={`w-full pl-16 md:pl-0 md:w-[45%] flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  <SectionReveal direction={isEven ? 'right' : 'left'} amount={0.5} className="w-full">
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-[rgba(255,107,157,0.12)] transition-colors duration-500">
                      
                      {/* Ambient background glow on hover */}
                      <div className="absolute inset-0 bg-[var(--accent-rose)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl" />

                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-pink)] text-[var(--accent-pink)] font-script text-2xl mb-4 bg-[var(--bg-primary)]/50">
                          {event.year}
                        </span>
                        <h3 className="font-playfair text-3xl text-white mb-4 group-hover:text-[var(--accent-pink)] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-[var(--text-soft)] text-lg font-light leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
