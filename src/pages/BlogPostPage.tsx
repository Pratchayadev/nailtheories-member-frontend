/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ArrowLeft } from 'lucide-react';
import { Navbar, Footer, MobileNav } from '../App';
import {
  getArticlePath,
  parseArticleSeo,
  preprocessArticleMarkdown,
} from '../lib/articleMarkdown';
import { useBlogPostMeta } from '../useDocumentMeta';
import { SITE_BRAND } from '../seo';

const markdownComponents: Components = {
  img({ src, alt, ...props }) {
    return (
      <img
        src={src}
        alt={alt ?? ''}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        {...props}
      />
    );
  },
  a({ href, children, ...props }) {
    if (!href) {
      return <a {...props}>{children}</a>;
    }
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    if (/^https?:\/\//i.test(href) || href.startsWith('//')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    if (href.startsWith('/')) {
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
};

function BlogPostContent({ slug, path }: { slug: string; path: string }) {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [seo, setSeo] = useState({ title: '', description: '' });
  const [loadError, setLoadError] = useState(false);

  useBlogPostMeta({
    title: seo.title || `${SITE_BRAND} · Blog`,
    description: seo.description,
    slug,
  });

  useEffect(() => {
    let cancelled = false;
    fetch(path)
      .then((r) => {
        if (!r.ok) throw new Error('fetch');
        return r.text();
      })
      .then((raw) => {
        if (cancelled) return;
        setSeo(parseArticleSeo(raw));
        setMarkdown(preprocessArticleMarkdown(raw, slug));
        setLoadError(false);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [path]);

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-8">
        <p className="text-ink/70">ไม่พบบทความ</p>
        <Link to="/#blog" className="font-semibold text-primary">
          กลับไปบล็อก
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pb-24 pt-28">
        <article className="mx-auto max-w-3xl px-8">
          <Link
            to="/#blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            กลับไปบล็อก
          </Link>
          {!markdown ? (
            <p className="text-ink/50">กำลังโหลด...</p>
          ) : (
            <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-ink prose-h3:text-lg prose-h3:font-semibold prose-p:text-ink/75 prose-strong:text-ink prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:text-ink/75 prose-ol:text-ink/75 prose-li:marker:text-primary/60 prose-img:rounded-2xl prose-img:border prose-img:border-ink/5">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={markdownComponents}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const path = slug ? getArticlePath(slug) : null;

  if (!slug || !path) {
    return <Navigate to="/" replace />;
  }

  return <BlogPostContent slug={slug} path={path} />;
}
