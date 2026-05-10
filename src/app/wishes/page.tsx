'use client';

import { motion } from 'framer-motion';
import { wishes } from '@/data/wishes';
import WishCard from '@/components/ui/WishCard';
import { staggerContainer, scaleIn, cardFloat } from '@/lib/motion';

export default function WishesPage() {
  return (
    <div className="container mx-auto py-20 min-h-screen">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-5xl md:text-7xl text-[var(--accent-pink)] mb-6 drop-shadow-[0_0_20px_rgba(255,107,157,0.4)]"
        >
          Our Wishes for You
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[var(--text-soft)] font-light italic max-w-2xl mx-auto"
        >
          Hover over a card to open our wish.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-8"
      >
        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            variants={scaleIn}
          >
            <motion.div
              variants={cardFloat}
              animate="animate"
              // Stagger the float animation to make them look organic
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <WishCard wish={wish} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
