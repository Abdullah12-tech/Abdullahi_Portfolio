import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { blogPosts } from '@/data/blog';
import { formatDate, cn } from '@/utils/cn';
import type { BlogPost } from '@/types';

const CATEGORIES: (BlogPost['category'] | 'All')[] = [
  'All',
  'React',
  'JavaScript',
  'Frontend Development',
  'Career Growth',
  'Software Engineering',
];

export function BlogIndex() {
  const [filter, setFilter] = useState<BlogPost['category'] | 'All'>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="pt-36 pb-24">
      <SEO
        title="Blog | Codewithhayee — Abdullah Sheriff on React, JavaScript & Career Growth"
        description="Technical writing from Abdullah Akinkunmi Sheriff on React, JavaScript, frontend engineering, and building a software career from Nigeria."
        path="/blog"
      />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          command="ls -la ~/blog --all"
          title="Writing on building things"
          description="Notes on the bugs I fixed, the systems I shipped, and what it actually takes to build a career in software from Nigeria."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium font-mono transition-all',
                filter === c ? 'bg-brand-violet text-white shadow-glow-violet' : 'glass text-text-secondary hover:text-text-primary'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <GlassCard className="p-7 h-full flex flex-col group">
                  <span className="font-mono text-xs text-brand-cyan-light">{post.category}</span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-text-primary leading-snug group-hover:text-brand-violet-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-text-muted pt-4 border-t hairline">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet-light">
                    Read article <ArrowRight size={13} />
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
