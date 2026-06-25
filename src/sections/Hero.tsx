import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TerminalWindow } from '@/components/ui/TerminalWindow';
import { performanceMetrics } from '@/data/profile';

const ROLES = ['Frontend Developer', 'Full Stack Web Developer', 'Software Engineer'];

function useTypewriter(words: string[], speed = 65, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function MetricLine({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3 py-1"
    >
      <span className="text-brand-green shrink-0">✓</span>
      <span className="text-text-secondary flex-1 truncate">{label.toLowerCase().replace(/\s+/g, '_')}</span>
      <div className="h-1 w-16 rounded-full veil-4 overflow-hidden shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-violet to-brand-cyan-light"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="text-text-muted w-10 text-right shrink-0">{value}</span>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          {/* Left: headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              Available for remote opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] text-balance"
            >
              Abdullah Akinkunmi
              <br />
              <span className="gradient-text animate-gradient">Sheriff</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 h-8 font-mono text-lg sm:text-xl text-text-secondary"
            >
              <span className="text-brand-cyan-light">&gt;</span> {typed}
              <span className="inline-block w-[2px] h-5 bg-brand-violet-light ml-1 align-middle animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary text-balance"
            >
              I turn complex business requirements into fast, intuitive interfaces — and the
              full-stack systems behind them. Based in Ibadan, Nigeria, shipping production-grade
              software for teams anywhere in the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                as="a"
                href="#projects"
                onClick={(e: any) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={<ArrowRight size={16} />}
              >
                View my work
              </MagneticButton>
              <MagneticButton as="a" href="/resume.pdf" target="_blank" variant="secondary" icon={<FileDown size={16} />}>
                Download résumé
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-5"
            >
              <a href="https://github.com/abdullah12-tech" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abdullahi-sheriff-2669b03a8" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <div className="h-4 w-px bg-border-light" />
              <span className="font-mono text-xs text-text-muted">2+ years · Ibadan, NG</span>
            </motion.div>
          </div>

          {/* Right: terminal build panel — signature element */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/10 rounded-3xl blur-2xl -z-10" />
            <TerminalWindow title="build.log — codewithhayee">
              <p className="text-text-muted">
                <span className="text-brand-cyan-light">$</span> npm run build:profile
              </p>
              <p className="mt-2 text-text-muted">Running quality checks…</p>
              <div className="mt-3 space-y-0.5">
                {performanceMetrics.map((m, i) => (
                  <MetricLine key={m.label} label={m.label} value={m.value} delay={0.8 + i * 0.12} />
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mt-4 pt-3 border-t hairline-strong text-brand-green font-medium"
              >
                ✓ BUILD SUCCESSFUL — ready for production
              </motion.p>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
