import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrolledPast } from '@/hooks/useScrollProgress';

export function BackToTop() {
  const visible = useScrolledPast(500);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full glass-strong text-text-primary shadow-card hover:shadow-glow-violet hover:border-brand-violet/40 transition-shadow"
        >
          <ArrowUp className="h-4.5 w-4.5" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
