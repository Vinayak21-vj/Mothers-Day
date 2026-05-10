'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { memories } from '@/data/memories';
import { staggerContainer, fadeUp } from '@/lib/motion';

export default function MemoriesPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const selectedMemory = memories.find(m => m.id === selectedId);

  return (
    <div className="container mx-auto py-20 min-h-screen">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-5xl md:text-7xl text-[var(--accent-pink)] mb-6 drop-shadow-[0_0_20px_rgba(255,107,157,0.4)]"
        >
          Our Memories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[var(--text-soft)] font-light italic max-w-2xl mx-auto"
        >
          A collection of our favorite moments with you. Click any photo to see it larger.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            variants={fadeUp}
            layoutId={`card-container-${memory.id}`}
            onClick={() => setSelectedId(memory.id)}
            className="break-inside-avoid cursor-none relative group"
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          >
            <div className="glass-panel rounded-3xl p-3 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,107,157,0.3)] transition-shadow">
              <motion.div 
                className={`w-full overflow-hidden rounded-2xl bg-[var(--bg-section)] relative ${
                  memory.height === 'tall' ? 'aspect-[3/4]' : 
                  memory.height === 'short' ? 'aspect-[4/3]' : 'aspect-square'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-50">🌸</div>
                <motion.img 
                  layoutId={`image-${memory.id}`}
                  src={memory.src} 
                  alt={memory.caption}
                  className="w-full h-full object-cover absolute inset-0 z-10 group-hover:scale-105 transition-transform duration-700"
                  onLoad={(e) => (e.target as HTMLImageElement).style.opacity = '1'}
                  style={{ opacity: 0 }}
                />
              </motion.div>
              <motion.p 
                layoutId={`caption-${memory.id}`}
                className="text-center italic text-[var(--text-soft)] p-4 font-playfair text-lg"
              >
                {memory.caption}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox / Expanded View */}
      <AnimatePresence>
        {selectedId && selectedMemory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-md z-50"
              onClick={() => setSelectedId(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div 
                layoutId={`card-container-${selectedMemory.id}`}
                className="glass-panel rounded-3xl p-4 md:p-6 w-full max-w-4xl pointer-events-auto shadow-[0_0_50px_rgba(255,107,157,0.3)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full aspect-square md:aspect-[16/10] overflow-hidden rounded-2xl bg-black">
                  <motion.img 
                    layoutId={`image-${selectedMemory.id}`}
                    src={selectedMemory.src} 
                    alt={selectedMemory.caption}
                    className="w-full h-full object-contain"
                  />
                </div>
                <motion.p 
                  layoutId={`caption-${selectedMemory.id}`}
                  className="text-center italic text-white p-6 font-playfair text-2xl md:text-3xl"
                >
                  {selectedMemory.caption}
                </motion.p>
                
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-12 right-0 md:-right-12 text-white hover:text-[var(--accent-pink)] transition-colors interactive text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                >
                  ✕
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
