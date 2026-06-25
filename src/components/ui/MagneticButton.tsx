import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/utils/cn';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  icon?: ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

const variants = {
  primary:
    'bg-gradient-to-r from-brand-violet to-brand-violet-dark text-white shadow-glow-violet hover:shadow-[0_0_30px_rgba(110,86,207,0.6)] border border-white/10',
  secondary:
    'glass text-text-primary hover:[background-color:var(--c-hover-veil)]',
  ghost:
    'text-text-secondary hover:text-text-primary',
};

export function MagneticButton(props: ButtonProps | AnchorProps) {
  const { ref, offset, onMouseMove, onMouseLeave } = useMagnetic(0.25);
  const { children, variant = 'primary', className, icon, as, ...rest } = props as any;

  const classes = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform',
    variants[variant as keyof typeof variants],
    className
  );

  const motionProps = {
    onMouseMove: onMouseMove as any,
    onMouseLeave,
    animate: { x: offset.x, y: offset.y },
    transition: { type: 'spring', stiffness: 150, damping: 12, mass: 0.1 },
    whileTap: { scale: 0.96 },
  };

  if (as === 'a') {
    return (
      <motion.a ref={ref as any} className={classes} {...motionProps} {...(rest as any)}>
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as any} className={classes} {...motionProps} {...(rest as any)}>
      {children}
      {icon}
    </motion.button>
  );
}
