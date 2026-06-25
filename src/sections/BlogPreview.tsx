import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/utils/cn';

export function BlogPreview() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            command="ls -la ~/blog"
            title="Notes from the build process"
            description="Writing about what I actually run into — bugs, architecture decisions, and the realities of shipping from Nigeria."
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet-light hover:text-brand-cyan-light transition-colors mb-1 shrink-0"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <GlassCard className="p-6 h-full flex flex-col">
                  <span className="font-mono text-xs text-brand-cyan-light">{post.category}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-text-primary leading-snug group-hover:text-brand-violet-light">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-text-muted pt-4 border-t hairline">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
