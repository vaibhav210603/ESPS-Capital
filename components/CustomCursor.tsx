'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'brand' | 'blend'>('default');
  const [cursorText, setCursorText] = useState('');
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for lag follow physics
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices where there is no fine cursor hover
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setHidden(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement;
      if (cursorEl) {
        const type = cursorEl.getAttribute('data-cursor') || 'default';
        const text = cursorEl.getAttribute('data-cursor-text') || '';
        setCursorType(type as any);
        setCursorText(text);
      } else {
        const isClickable = target.closest('a, button, [role="button"], input[type="submit"]') !== null;
        if (isClickable) {
          setCursorType('pointer');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  // Sizes for different states
  const sizeMap = {
    default: 32,
    pointer: 48,
    view: 84,
    brand: 60,
    blend: 60,
  };

  const currentSize = sizeMap[cursorType] || 32;

  // Custom border/background designs for different cursor states
  const getOuterStyle = () => {
    switch (cursorType) {
      case 'pointer':
        return 'border border-brand-red/80 bg-brand-red/5';
      case 'view':
        return 'bg-brand-red text-white flex items-center justify-center font-mono text-[9px] tracking-[0.2em] font-bold uppercase shadow-[0_10px_30px_-5px_rgba(211,34,56,0.4)]';
      case 'brand':
        return 'border border-brand-red bg-brand-red/10 blur-[1px] shadow-[0_0_15px_rgba(211,34,56,0.15)]';
      case 'blend':
        return 'bg-white mix-blend-difference';
      default:
        return 'border border-ink/25 bg-transparent';
    }
  };

  return (
    <>
      {/* Framework-agnostic cursor suppression on fine pointer systems */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body, a, button, select, input, textarea, [role="button"], iframe {
            cursor: none !important;
          }
        }
      ` }} />

      {/* Main outer spring-lag cursor ring */}
      <motion.div
        className={`fixed left-0 top-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center ${getOuterStyle()}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: currentSize,
          height: currentSize,
          translateX: '-50%',
          translateY: '-50%',
          scale: clicked ? 0.88 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      >
        <AnimatePresence>
          {cursorType === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="select-none"
            >
              {cursorText || 'VIEW'}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Primary inner tracking dot */}
      {cursorType !== 'view' && cursorType !== 'blend' && (
        <motion.div
          className="fixed w-1.5 h-1.5 bg-brand-red rounded-full pointer-events-none z-[9999]"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: cursorType === 'brand' ? 0.35 : 1,
          }}
        />
      )}
    </>
  );
}
