import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillCategories } from '@/data/profile';

function ProficiencyDots({ level }: { level: number }) {
  const filled = Math.round(level / 20);
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i < filled ? 'bg-brand-cyan-light' : 'bg-border-light'}`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="ls -la ~/skills"
          title="The stack I build with"
          description="Tools I reach for daily, organized the way I actually think about my own toolkit."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <p className="font-mono text-xs text-brand-cyan-light terminal-prompt mb-1">{cat.command}</p>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-5">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <ProficiencyDots level={skill.level} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
