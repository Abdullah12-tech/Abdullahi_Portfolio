import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Terminal, Github, Linkedin, Mail, Sun, Moon, FileDown,
  User, Briefcase, Code2, FolderGit2, Award, MessageSquare, Newspaper,
} from 'lucide-react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  useLockBodyScroll(open);

  const goTo = (id: string) => {
    onClose();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = useMemo(
    () => [
      { id: 'home', label: 'cd ~/about', hint: 'Go to About', icon: <User size={16} />, action: () => goTo('about') },
      { id: 'exp', label: 'cd ~/experience', hint: 'Go to Experience', icon: <Briefcase size={16} />, action: () => goTo('experience') },
      { id: 'skills', label: 'cd ~/skills', hint: 'Go to Skills', icon: <Code2 size={16} />, action: () => goTo('skills') },
      { id: 'projects', label: 'cd ~/projects', hint: 'Go to Projects', icon: <FolderGit2 size={16} />, action: () => goTo('projects') },
      { id: 'achievements', label: 'cd ~/achievements', hint: 'Go to Achievements', icon: <Award size={16} />, action: () => goTo('achievements') },
      { id: 'blog', label: 'cd ~/blog', hint: 'Go to Blog', icon: <Newspaper size={16} />, action: () => { onClose(); navigate('/blog'); } },
      { id: 'contact', label: 'cd ~/contact', hint: 'Go to Contact', icon: <MessageSquare size={16} />, action: () => goTo('contact') },
      {
        id: 'theme', label: theme === 'dark' ? 'set theme --light' : 'set theme --dark', hint: 'Toggle theme',
        icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />, action: () => { toggleTheme(); onClose(); },
      },
      { id: 'resume', label: 'curl --download resume.pdf', hint: 'Download resume', icon: <FileDown size={16} />, action: () => { window.open('/resume.pdf', '_blank'); onClose(); } },
      { id: 'github', label: 'open github.com/abdullah12-tech', hint: 'GitHub profile', icon: <Github size={16} />, keywords: 'git source code', action: () => { window.open('https://github.com/abdullah12-tech', '_blank'); onClose(); } },
      { id: 'linkedin', label: 'open linkedin.com/in/abdullahi-sheriff', hint: 'LinkedIn profile', icon: <Linkedin size={16} />, action: () => { window.open('https://www.linkedin.com/in/abdullahi-sheriff-2669b03a8', '_blank'); onClose(); } },
      { id: 'email', label: 'mailto:abdullahakinkunmi26@gmail.com', hint: 'Send an email', icon: <Mail size={16} />, action: () => { window.location.href = 'mailto:Abdullahakinkunmi26@gmail.com'; onClose(); } },
    ],
    [theme]
  );

  const filtered = commands.filter(
    (c) => c.label.toLowerCase().includes(query.toLowerCase()) || c.hint.toLowerCase().includes(query.toLowerCase()) || c.keywords?.includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === 'Enter' && filtered[selected]) {
        filtered[selected].action();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, filtered, selected, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="relative w-full max-w-lg glass-strong rounded-2xl shadow-card-hover overflow-hidden"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 border-b hairline-strong px-4 py-3">
              <Terminal size={16} className="text-brand-cyan-light shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent font-mono text-sm text-text-primary placeholder:text-text-muted outline-none"
              />
              <kbd className="hidden sm:inline-block rounded border hairline-strong veil-2 px-1.5 py-0.5 text-[10px] font-mono text-text-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center font-mono text-sm text-text-muted">command not found</p>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelected(i)}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors',
                    i === selected ? 'bg-brand-violet/15 text-text-primary' : 'text-text-secondary'
                  )}
                >
                  <span className={cn('text-brand-cyan-light', i === selected && 'text-brand-violet-light')}>{cmd.icon}</span>
                  <span className="font-mono text-sm flex-1">{cmd.label}</span>
                  <span className="text-xs text-text-muted">{cmd.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
