import { cn } from '@/utils/cn';

interface StatusBadgeProps {
  label: string;
  tone?: 'live' | 'progress' | 'archived' | 'neutral';
  pulse?: boolean;
}

const tones = {
  live: 'bg-brand-green/10 text-brand-green border-brand-green/30',
  progress: 'bg-brand-amber/10 text-brand-amber-light border-brand-amber/30',
  archived: 'bg-text-muted/10 text-text-muted border-text-muted/30',
  neutral: 'bg-brand-violet/10 text-brand-violet-light border-brand-violet/30',
};

const dotTones = {
  live: 'bg-brand-green',
  progress: 'bg-brand-amber',
  archived: 'bg-text-muted',
  neutral: 'bg-brand-violet-light',
};

export function StatusBadge({ label, tone = 'neutral', pulse = false }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium',
        tones[tone]
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', dotTones[tone], pulse && 'animate-pulse')} />
      {label}
    </span>
  );
}

export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border-light veil-1 px-2.5 py-1 text-xs font-mono text-text-secondary">
      {label}
    </span>
  );
}
