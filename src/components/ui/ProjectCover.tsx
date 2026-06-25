import { cn } from '@/utils/cn';

const palettes: Record<string, string> = {
  fintech: 'from-brand-violet/40 via-brand-violet-dark/30 to-transparent',
  saas: 'from-brand-cyan/40 via-brand-cyan/10 to-transparent',
  platform: 'from-brand-amber/30 via-brand-violet/20 to-transparent',
  tool: 'from-brand-green/30 via-brand-cyan/10 to-transparent',
  education: 'from-brand-amber/35 via-brand-amber/10 to-transparent',
};

export function ProjectCover({ slug, category, title }: { slug: string; category: string; title: string }) {
  const initials = title
    .split(' ')
    .filter((w) => w.length > 2 || /[A-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-t-2xl card-grid-bg">
      <div className={cn('absolute inset-0 bg-gradient-to-br', palettes[category] ?? palettes.tool)} />
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl font-bold text-white/[0.14] tracking-tight" aria-hidden="true">
          {initials || slug.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="absolute bottom-3 left-4 font-mono text-[11px] text-white/40">~/{slug}</div>
    </div>
  );
}
