import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { achievements } from '@/data/profile';

const icons = [Trophy, GraduationCap, Sparkles, Award];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="cat CHANGELOG.md"
          title="Milestones along the way"
          description="A running log of recognition, training, and formal education."
        />

        <div className="mt-14 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-violet/50 via-border-light to-transparent hidden sm:block" />
          <div className="space-y-8">
            {achievements.map((a, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-5 sm:gap-6"
                >
                  <div className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-full glass-strong text-brand-amber-light z-10">
                    <Icon size={17} />
                  </div>
                  <div className="flex-1 glass rounded-2xl p-6 shadow-card">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-text-primary">{a.title}</h3>
                      <span className="font-mono text-xs text-text-muted shrink-0">{a.year}</span>
                    </div>
                    <p className="text-sm text-brand-cyan-light font-medium mt-1">{a.org}</p>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{a.description}</p>
                    {a.metric && (
                      <span className="mt-3 inline-block rounded-full bg-brand-amber/10 text-brand-amber-light text-xs font-mono px-3 py-1">
                        {a.metric}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
