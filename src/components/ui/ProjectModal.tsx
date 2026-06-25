import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink, Lightbulb, TrendingUp } from 'lucide-react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { ProjectCover } from '@/components/ui/ProjectCover';
import { StatusBadge, TechBadge } from '@/components/ui/StatusBadge';
import type { Project } from '@/types';

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useLockBodyScroll(!!project);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-strong rounded-2xl shadow-card-hover"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <X size={18} />
            </button>

            <ProjectCover slug={project.slug} category={project.category} title={project.title} />

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">{project.title}</h3>
                  <p className="mt-1 text-text-secondary">{project.tagline}</p>
                </div>
                <StatusBadge
                  label={project.status === 'live' ? 'live' : project.status === 'in-development' ? 'building' : 'archived'}
                  tone={project.status === 'live' ? 'live' : project.status === 'in-development' ? 'progress' : 'archived'}
                  pulse={project.status === 'in-development'}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-text-muted font-mono">
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.role}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2 text-sm font-medium text-text-primary hover:border-brand-violet/40 transition-colors"
                  >
                    <Github size={15} /> View source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-violet to-brand-violet-dark px-4 py-2 text-sm font-medium text-white shadow-glow-violet"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
              </div>

              <div className="mt-9">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-cyan-light mb-3">Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-brand-violet-light mt-1">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-cyan-light mb-3">
                  Challenges &amp; Solutions
                </h4>
                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl veil-1 border hairline p-4">
                      <p className="text-sm text-text-muted flex items-start gap-2">
                        <Lightbulb size={15} className="text-brand-amber-light mt-0.5 shrink-0" />
                        <span><span className="text-text-secondary font-medium">Problem: </span>{c.problem}</span>
                      </p>
                      <p className="text-sm text-text-secondary mt-2 flex items-start gap-2">
                        <TrendingUp size={15} className="text-brand-green mt-0.5 shrink-0" />
                        <span><span className="font-medium text-text-primary">Solution: </span>{c.solution}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-9 mb-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-cyan-light mb-3">
                  Business Impact
                </h4>
                <ul className="space-y-2">
                  {project.businessImpact.map((b, i) => (
                    <li key={i} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-brand-green mt-0.5">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
