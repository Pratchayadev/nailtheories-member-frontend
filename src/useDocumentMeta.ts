import { useEffect } from 'react';
import { DEFAULT_META_DESCRIPTION, SITE_BRAND, SITE_TAGLINE } from './seo';

export function useDocumentMeta() {
  useEffect(() => {
    const title = `${SITE_BRAND} | ${SITE_TAGLINE} · ร้านทำเล็บอุดรธานี เล็บเจล ต่อเล็บ`;
    document.title = title;

    const ensureMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('description', DEFAULT_META_DESCRIPTION);
    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', DEFAULT_META_DESCRIPTION, 'property');
    ensureMeta('og:type', 'website', 'property');
    ensureMeta('twitter:card', 'summary_large_image');
  }, []);
}
