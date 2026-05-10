'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { fadeUp, scaleIn, slideLeft, slideRight, staggerContainer } from '@/lib/motion';
import SectionReveal from '@/components/ui/SectionReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col w-full">
      {/* 1.1 Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.h1 
            className="font-playfair text-[clamp(3rem,10vw,6rem)] text-[var(--accent-pink)] leading-tight drop-shadow-[0_0_30px_rgba(255,107,157,0.6)]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            Happy
            <br />
            Mother's Day
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
            className="text-4xl my-6"
          >
            🌸
          </motion.div>
          
          <AnimatedText 
            text="To the most wonderful Mummy in the world"
            className="text-[clamp(1.2rem,4vw,1.8rem)] text-[var(--text-soft)] mb-8 font-light"
            delay={1.2}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-[var(--accent-light)] italic text-lg font-script text-3xl"
          >
            Made with love by Vinayak & Aaadi ❤️
          </motion.p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--accent-pink)] text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* 1.2 Stats Counter */}
      <section className="py-32 relative z-10 bg-[var(--bg-section)]">
        <div className="container mx-auto">
          <SectionReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" direction="up">
            {[
              { num: "∞", label: "Years of Love" },
              { num: "1000+", label: "Hugs Given" },
              { num: "1", label: "Irreplaceable Mummy" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="glass-panel p-10 rounded-3xl"
                variants={fadeUp}
              >
                <div className="font-playfair text-6xl text-[var(--accent-pink)] mb-4 drop-shadow-[0_0_20px_rgba(255,107,157,0.5)]">
                  {stat.num}
                </div>
                <div className="text-[var(--text-soft)] text-lg uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* 1.3 Photo Teaser */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-32">
          
          {/* Card 1 - Left */}
          <SectionReveal direction="left" amount={0.3} className="flex justify-start">
            <div className="relative w-full max-w-lg glass-panel rounded-3xl p-4 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-section)] relative group">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">🌸</div>
                <img src="/photos/photo1.jpg" alt="Memory" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" onLoad={(e) => e.currentTarget.style.opacity = '1'} />
              </div>
              <p className="text-center italic text-[var(--text-soft)] p-6 font-playfair text-xl">
                "Every memory with you is a treasure..."
              </p>
            </div>
          </SectionReveal>

          {/* Card 2 - Right */}
          <SectionReveal direction="right" amount={0.3} className="flex justify-end">
            <div className="relative w-full max-w-lg glass-panel rounded-3xl p-4 rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-section)] relative group">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">🌸</div>
                <img src="/photos/photo2.jpg" alt="Memory" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" onLoad={(e) => e.currentTarget.style.opacity = '1'} />
              </div>
              <p className="text-center italic text-[var(--text-soft)] p-6 font-playfair text-xl">
                "You are our forever home."
              </p>
            </div>
          </SectionReveal>

          <div className="flex justify-center pt-10">
            <Link href="/memories">
              <MagneticButton className="px-8 py-4 bg-[var(--accent-pink)] text-white font-bold tracking-wider rounded-full shadow-[0_0_30px_rgba(255,107,157,0.4)]">
                SEE ALL MEMORIES →
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 1.4 Navigation Grid */}
      <section className="py-32 relative z-10 bg-[var(--bg-section)]">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal direction="none" className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-[var(--accent-pink)]">Explore More</h2>
            <p className="text-[var(--text-soft)] mt-4 text-lg">We made a few special pages just for you.</p>
          </SectionReveal>

          <SectionReveal direction="none">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { title: "Memories", icon: "🖼️", path: "/memories", desc: "A gallery of our best times" },
                { title: "Love Letter", icon: "💌", path: "/letter", desc: "Words from our hearts" },
                { title: "Wishes", icon: "🌟", path: "/wishes", desc: "Our wishes for you" },
                { title: "100 Reasons", icon: "💛", path: "/reasons", desc: "Why we love you so much" },
              ].map((item, i) => (
                <Link key={i} href={item.path}>
                  <motion.div 
                    variants={scaleIn}
                    whileHover={{ y: -8, boxShadow: '0 0 30px rgba(255,107,157,0.3)' }}
                    className="glass-panel p-8 rounded-3xl flex items-center gap-6 group transition-all"
                  >
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h3 className="font-playfair text-2xl text-white group-hover:text-[var(--accent-pink)] transition-colors">{item.title}</h3>
                      <p className="text-[var(--text-soft)] mt-2">{item.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
