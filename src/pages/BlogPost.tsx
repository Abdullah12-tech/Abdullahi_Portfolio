import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { getPostBySlug, blogPosts } from '@/data/blog';
import { formatDate } from '@/utils/cn';
import { GlassCard } from '@/components/ui/GlassCard';

export function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug ?? '');

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Abdullah Akinkunmi Sheriff' },
  };

  return (
    <div className="pt-36 pb-24">
      <SEO
        title={`${post.title} | Codewithhayee`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />
      <div className="mx-auto max-w-2xl px-5">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand-violet-light transition-colors">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6">
          <span className="font-mono text-xs text-brand-cyan-light">{post.category}</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight text-balance">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
            <span>·</span>
            <span>Abdullah Akinkunmi Sheriff</span>
          </div>

          <div className="mt-10 space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-text-secondary text-balance">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t hairline">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted mb-5">More on {post.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`}>
                  <GlassCard className="p-5">
                    <h4 className="font-display text-sm font-semibold text-text-primary leading-snug">{r.title}</h4>
                    <p className="mt-2 text-xs text-text-muted">{formatDate(r.date)}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
