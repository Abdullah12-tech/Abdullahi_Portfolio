interface SectionHeadingProps {
  command: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ command, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <div className={`section-eyebrow mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan-light animate-pulse" />
        <span className="terminal-prompt">{command}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed text-balance">{description}</p>
      )}
    </div>
  );
}
