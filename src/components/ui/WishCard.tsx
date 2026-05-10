'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface WishCardProps {
  wish: {
    id: number;
    emoji: string;
    title: string;
    content: string;
  };
}

export default function WishCard({ wish }: WishCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Use hover for desktop, click for mobile
  const handleHoverStart = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsHovered(true);
    }
  };

  const handleHoverEnd = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsFlipped(!isFlipped);
    }
  };

  const showBack = isHovered || isFlipped;

  return (
    <div 
      className="relative w-full aspect-[3/4] cursor-none perspective-1000"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={handleClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: showBack ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(255,107,157,0.2)]"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,107,157,0.15) 0%, rgba(233,30,140,0.05) 100%)',
            border: '1px solid var(--border-card)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.div 
            className="text-6xl mb-6"
            animate={showBack ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: wish.id * 0.2 }}
          >
            {wish.emoji}
          </motion.div>
          <h3 className="font-playfair text-2xl text-white drop-shadow-[0_0_10px_rgba(255,107,157,0.5)]">
            {wish.title}
          </h3>
          
          <div className="absolute bottom-6 text-[var(--accent-light)]/50 text-sm italic md:hidden">
            Tap to open
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden w-full h-full rounded-3xl p-8 flex items-center justify-center text-center glass-panel"
          style={{ 
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--bg-primary)]/80 rounded-3xl -z-10" />
          
          <p className="text-[var(--text-soft)] text-lg leading-relaxed font-light">
            {wish.content}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
