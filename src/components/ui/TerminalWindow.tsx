import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function TerminalWindow({
  title = 'zsh — codewithhayee',
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('glass-strong rounded-2xl shadow-card-hover overflow-hidden font-mono', className)}>
      <div className="flex items-center gap-2 border-b hairline-strong veil-1 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-text-muted">{title}</span>
      </div>
      <div className="p-5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
