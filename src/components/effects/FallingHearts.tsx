'use client';

import { useEffect, useRef } from 'react';

interface Heart {
  x: number;
  y: number;
  size: number;
  speed: number;
  char: string;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export default function FallingHearts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let hearts: Heart[] = [];
    const chars = ['🩷', '💕', '♥', '🌸'];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHearts();
    };
    
    const initHearts = () => {
      hearts = [];
      const count = window.innerWidth < 600 ? 20 : 40;
      
      for (let i = 0; i < count; i++) {
        hearts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 20 + 12,
          speed: Math.random() * 1.5 + 0.5,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.5 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollY = window.scrollY;
      
      hearts.forEach(heart => {
        // Update
        heart.y += heart.speed;
        heart.rotation += heart.rotationSpeed;
        
        // Reset if off screen
        if (heart.y > canvas.height + 50) {
          heart.y = -50;
          heart.x = Math.random() * canvas.width;
        }
        
        // Draw
        ctx.save();
        // Parallax effect with scroll
        const parallaxY = heart.y - (scrollY * 0.1 * heart.speed);
        
        ctx.translate(heart.x, parallaxY > canvas.height + 50 ? (parallaxY % (canvas.height + 100)) - 50 : parallaxY);
        ctx.rotate(heart.rotation);
        
        ctx.font = `${heart.size}px Arial`;
        ctx.globalAlpha = heart.opacity;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Special color for standard heart
        if (heart.char === '♥') {
          ctx.fillStyle = '#ffb3d1';
        }
        
        ctx.fillText(heart.char, 0, 0);
        ctx.restore();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
