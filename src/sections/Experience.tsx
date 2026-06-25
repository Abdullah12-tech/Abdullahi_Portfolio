import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { experience } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="git log --experience"
          title="Where the work happened"
          description="Real teams, real deadlines, real users — not tutorial clones."
        />

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard className="p-7 sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/10 text-brand-violet-light">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-text-primary">{job.role}</h3>
                      <p className="text-text-secondary">
                        {job.company} <span className="text-text-muted">· {job.type} · {job.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <StatusBadge label={job.period} tone="neutral" />
                  </div>
                </div>

                <p className="mt-5 text-text-secondary leading-relaxed text-balance">{job.summary}</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.achievements.map((a, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-cyan-light mt-0.5 shrink-0" />
                      <span className="text-sm text-text-secondary leading-relaxed">{a}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-7 sm:p-9 border-dashed">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-amber/10 text-brand-amber-light">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      Full Stack Developer — Independent
                    </h3>
                    <p className="text-text-secondary">Self-directed · Remote · Nigeria</p>
                  </div>
                </div>
                <StatusBadge label="in progress" tone="progress" pulse />
              </div>
              <p className="mt-5 text-text-secondary leading-relaxed text-balance">
                Currently building two production-grade full-stack platforms end to end —{' '}
                <span className="text-text-primary font-medium">AttendIQ</span>, an attendance
                management SaaS, and a full school management system for a multi-level Nigerian
                Islamic institution. Both run on a React, Node.js, and MongoDB architecture with
                role-based access and real-time updates.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
