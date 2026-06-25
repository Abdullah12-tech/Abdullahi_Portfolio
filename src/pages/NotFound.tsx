import { Link } from 'react-router-dom';
import { SEO } from '@/components/seo/SEO';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { TerminalWindow } from '@/components/ui/TerminalWindow';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 pt-20">
      <SEO title="404 — Page not found | Codewithhayee" description="This page doesn't exist." path="/404" />
      <div className="max-w-md w-full text-center">
        <TerminalWindow title="error.log">
          <p className="text-[#ff5f57]">$ cd /requested-page</p>
          <p className="mt-2 text-text-secondary">zsh: no such file or directory</p>
          <p className="mt-1 text-text-muted">Error 404: route not found</p>
        </TerminalWindow>
        <p className="mt-8 text-text-secondary">The page you're looking for doesn't exist, or moved.</p>
        <Link to="/" className="inline-block mt-6">
          <MagneticButton>Back to home</MagneticButton>
        </Link>
      </div>
    </div>
  );
}
