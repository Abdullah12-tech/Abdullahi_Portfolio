import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const links = {
  Sections: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ],
  More: [
    { label: 'Achievements', href: '#achievements' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  const handleAnchor = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t hairline mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-text-primary">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-sm font-mono">
                &lt;/&gt;
              </span>
              <span>
                code<span className="text-brand-violet-light">with</span>hayee
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Frontend developer and full stack software engineer building production-grade web
              systems from Ibadan, Nigeria — for clients and teams anywhere.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/abdullah12-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-text-secondary hover:text-text-primary hover:border-brand-violet/30 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahi-sheriff-2669b03a8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-text-secondary hover:text-text-primary hover:border-brand-violet/30 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:Abdullahakinkunmi26@gmail.com"
                aria-label="Email"
                className="grid h-9 w-9 place-items-center rounded-lg glass text-text-secondary hover:text-text-primary hover:border-brand-violet/30 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-4">{heading}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => handleAnchor(item.href)}
                        className="text-sm text-text-secondary hover:text-brand-violet-light transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link to={item.href} className="text-sm text-text-secondary hover:text-brand-violet-light transition-colors">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t hairline pt-8">
          <p className="font-mono text-xs text-text-muted">
            © {year} Abdullah Akinkunmi Sheriff. Built with React & a lot of coffee.
          </p>
          <a
            href="mailto:Abdullahakinkunmi26@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-brand-violet-light transition-colors"
          >
            Available for remote opportunities
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
