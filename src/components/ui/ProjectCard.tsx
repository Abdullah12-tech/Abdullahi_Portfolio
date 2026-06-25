import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProjectCover } from '@/components/ui/ProjectCover';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { TechBadge } from '@/components/ui/StatusBadge';
import type { Project } from '@/types';

export function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      layout
    >
      <GlassCard className="h-full flex flex-col cursor-pointer group" onClick={onOpen}>
        <ProjectCover slug={project.slug} category={project.category} title={project.title} />
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-brand-violet-light transition-colors">
              {project.title}
            </h3>
            <StatusBadge
              label={project.status === 'live' ? 'live' : project.status === 'in-development' ? 'building' : 'archived'}
              tone={project.status === 'live' ? 'live' : project.status === 'in-development' ? 'progress' : 'archived'}
              pulse={project.status === 'in-development'}
            />
          </div>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <TechBadge key={t} label={t} />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-text-muted self-center">+{project.techStack.length - 4}</span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between pt-4 border-t hairline">
            <span className="text-xs font-mono text-text-muted">{project.year}</span>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} GitHub repository`}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} live demo`}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
