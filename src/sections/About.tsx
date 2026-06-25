import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Target } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Ibadan, Nigeria' },
  { icon: GraduationCap, label: 'Studying', value: 'BSc. Computer Science, UoPeople' },
  { icon: Target, label: 'Focused on', value: 'React, TypeScript, Node.js' },
  { icon: Sparkles, label: 'Driven by', value: 'Real business problems, not just code' },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading command="cat about.md" title="The developer behind the commits" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-lg leading-relaxed text-text-secondary text-balance"
          >
            <p>
              I started out the way most frontend developers do — chasing pixel-perfect layouts.
              What kept me in this field was realizing that a great interface is really a
              translation problem: turning a messy business requirement into something a real
              person can use without thinking twice about it.
            </p>
            <p>
              That translation work is what I care about most. At{' '}
              <span className="text-text-primary font-medium">ATC Africa</span>, that meant
              rebuilding event platforms so registration didn't feel like a chore. On{' '}
              <span className="text-text-primary font-medium">Trackify</span>, it meant turning
              raw transaction data into a budget view people could actually act on. On the
              backend side of newer projects like{' '}
              <span className="text-text-primary font-medium">AttendIQ</span> and a full school
              management platform for a Nigerian Islamic institution, it means making sure the
              system holds up — clean data models, reliable auth, logging that tells the truth
              when something breaks.
            </p>
            <p>
              I'm self-taught at the core, sharpened through a Professional Diploma in Software
              Engineering at SQI College of ICT, and now formalizing that foundation through a
              Computer Science degree at the University of the People. I'd rather ship something
              real and learn from what breaks than wait until I feel "ready." Most of what I know
              came from exactly that.
            </p>
            <p>
              Outside of pure code, I'm drawn to projects with cultural and educational weight —
              the kind of software that doesn't get built unless someone is willing to sit with a
              community's actual conventions instead of importing a foreign template. That's a
              thread you'll see running through my project list.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-5">
                quick_facts.json
              </p>
              <div className="space-y-5">
                {facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-violet/10 text-brand-violet-light">
                      <fact.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{fact.label}</p>
                      <p className="text-sm font-medium text-text-primary">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
