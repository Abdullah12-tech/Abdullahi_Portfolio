import { ReactNode, useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { AmbientBackground } from '@/components/ui/AmbientBackground';

export function Layout({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <AmbientBackground />
      <ScrollProgressBar />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
