import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Command, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolledPast } from '@/hooks/useScrollProgress';
import { cn } from '@/utils/cn';

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'achievements', 'contact'];

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
];

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolledPast(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300',
            scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
          )}
        >
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text-primary">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-sm font-mono">
              &lt;/&gt;
            </span>
            <span>
              code<span className="text-brand-violet-light">with</span>hayee
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={cn(
                  'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  active === item.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg veil-3"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            <Link
              to="/blog"
              className={cn(
                'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                location.pathname.startsWith('/blog') ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
              )}
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="hidden sm:flex items-center gap-2 rounded-lg border border-border-light veil-2 px-3 py-1.5 text-xs font-mono text-text-muted hover:text-text-secondary hover:border-brand-violet/30 transition-colors"
              aria-label="Open command palette"
            >
              <Command size={13} />
              <span>K</span>
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg text-text-secondary hover:text-text-primary hover:[background-color:var(--c-hover-veil)] transition-colors"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => goToSection('contact')}
              className="hidden sm:inline-flex items-center rounded-lg bg-gradient-to-r from-brand-violet to-brand-violet-dark px-4 py-2 text-sm font-semibold text-white shadow-glow-violet hover:opacity-90 transition-opacity"
            >
              Let's talk
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg text-text-secondary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-5 mt-2 glass-strong rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:[background-color:var(--c-hover-veil)]"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:[background-color:var(--c-hover-veil)]"
              >
                Blog
              </Link>
              <button
                onClick={() => goToSection('contact')}
                className="mt-2 rounded-lg bg-gradient-to-r from-brand-violet to-brand-violet-dark px-4 py-2.5 text-sm font-semibold text-white"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
