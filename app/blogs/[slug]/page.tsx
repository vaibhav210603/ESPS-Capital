import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getBlogBySlug, blogs } from '@/lib/blogs-data';

export function generateStaticParams() {
  return blogs.map(b => ({ slug: b.slug }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* Back nav */}
      <div className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-rule">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
            Back to Blogs
          </Link>
          <Link href="/" className="font-serif text-lg text-ink">
            ESPS <span className="italic text-brand-red">Capital</span>
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border"
            style={{
              color: post.accent,
              borderColor: post.accent + '40',
              background: post.accent + '15',
            }}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
            <Calendar className="w-3 h-3" strokeWidth={1.5} />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-[1.05] mb-8">
          {post.title}
        </h1>

        {/* Red rule */}
        <div className="w-16 h-[2px] mb-12" style={{ background: post.accent }} />

        {/* Excerpt lead */}
        <p className="text-xl md:text-2xl font-serif text-ink-soft leading-relaxed mb-12 pb-12 border-b border-rule">
          {post.excerpt}
        </p>

        {/* Full content */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">Ready to invest?</p>
            <p className="font-serif text-2xl text-ink">Speak to our advisory team</p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-8 py-4 font-sans text-sm font-semibold hover:bg-brand-red/90 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </div>
  );
}
