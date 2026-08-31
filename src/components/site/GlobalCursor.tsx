import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Site-wide cursor animation: a precise dot plus a lagging dashed target ring.
 * Rendered once at the root so it follows the pointer across every page.
 */
export const GlobalCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 130, damping: 18, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 130, damping: 18, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer'));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 1.35 : 1 }}
        transition={{ duration: 0.25 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-black/10 mix-blend-difference animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-3 rounded-full border border-black/10 mix-blend-difference" />
          <div className="absolute inset-4 rounded-full bg-[#CCFF00]/25 blur-lg" />
        </div>
      </motion.div>
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] mix-blend-difference"
      />
    </div>
  );
};
