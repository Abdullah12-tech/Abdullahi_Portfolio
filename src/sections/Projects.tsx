import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { projects } from '@/data/projects';
import { cn } from '@/utils/cn';
import type { Project } from '@/types';

const FILTERS: { label: string; value: Project['category'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Fintech', value: 'fintech' },
  { label: 'SaaS', value: 'saas' },
  { label: 'Education', value: 'education' },
  { label: 'Platform', value: 'platform' },
  { label: 'Tools', value: 'tool' },
];

export function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="ls -la ~/projects"
          title="Things I've shipped"
          description="Production-shaped systems, not tutorial clones — each one built to solve a real problem for a real user."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium font-mono transition-all',
                filter === f.value
                  ? 'bg-brand-violet text-white shadow-glow-violet'
                  : 'glass text-text-secondary hover:text-text-primary'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
