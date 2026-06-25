import { motion } from 'framer-motion';
import { MessageSquareQuote, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="cat testimonials/*.json"
          title="What collaborators are saying"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full border-dashed flex flex-col items-center justify-center text-center gap-3 min-h-[180px]">
                <MessageSquareQuote size={22} className="text-text-muted/50" />
                <p className="text-sm text-text-muted">
                  Reserved for the next client or teammate I get to work with.
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <Sparkles size={15} className="text-brand-amber-light" />
            Worked with me on something real? I'd genuinely love to feature your words here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
