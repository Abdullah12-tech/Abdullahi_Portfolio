import { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function GlassCard({ children, hoverable = true, className, ...rest }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl shadow-card relative overflow-hidden',
        hoverable && 'transition-all duration-500 hover:shadow-card-hover hover:border-brand-violet/30',
        className
      )}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}
