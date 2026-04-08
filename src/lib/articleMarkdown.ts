/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { pickArticleStockImages, stockImagesToMarkdownBlock } from './articleStockImages';

type LocalImage = { src: string; alt: string };

type ImageInjection =
  | { type: 'local'; images: LocalImage[] }
  | { type: 'stock'; count: number };

type ArticleConfig = {
  path: string;
  /** บรรทัดแรกของเนื้อหาจริงต้องมี substring นี้ (ไม่ซ้ำกับบล็อก meta) */
  bodyStartMarker: string;
  imageInjection: ImageInjection;
};

const ARTICLES: Record<string, ArticleConfig> = {
  'nail-salon-udon-thani': {
    path: '/article/nail-salon-udon-thani.md',
    bodyStartMarker: 'ร้านเล็บอุดรธานี แนะนำ ทำเล็บเจล ต่อเล็บ ลายสวย ที่ Nail Theories',
    imageInjection: {
      type: 'local',
      images: [
        {
          src: '/images/portfolio/S__3022860.jpg',
          alt: 'ผลงานเล็บเจล — Nail Theories',
        },
        {
          src: '/images/portfolio/S__40558600.jpg',
          alt: 'เพ้นท์เล็บ ร้านทำเล็บอุดรธานี',
        },
      ],
    },
  },
  'best-nail-salon-udon-thani': {
    path: '/article/2026-04-06-1.md',
    bodyStartMarker: 'ร้านเล็บอุดรธานี แนะนำ เลือกยังไงให้ได้งานสวย คุ้ม และตรงสไตล์',
    imageInjection: { type: 'stock', count: 2 },
  },
  'nail-extension-udon-thani': {
    path: '/article/nail-extension-udon-thani.md',
    bodyStartMarker: 'ต่อเล็บอุดรธานี แบบไหนดี? วิธีเลือกทรงเล็บ ความยาว และร้านที่เหมาะกับคุณ',
    imageInjection: { type: 'stock', count: 2 },
  },
};

export function getArticlePath(slug: string): string | null {
  return ARTICLES[slug]?.path ?? null;
}

export function getRegisteredArticleSlugs(): string[] {
  return Object.keys(ARTICLES);
}

export function parseArticleSeo(raw: string): { title: string; description: string } {
  const titleMatch = raw.match(/SEO Title\s*\n\s*\n([^\n]+)/);
  const descMatch = raw.match(/Meta Description\s*\n\s*\n([^\n]+)/);
  return {
    title: titleMatch?.[1]?.trim() ?? 'Nail Theories',
    description: descMatch?.[1]?.trim() ?? '',
  };
}

function localImagesToMarkdownBlock(images: LocalImage[]): string {
  if (images.length === 0) return '';
  return (
    '\n\n' +
    images.map((im) => `![${im.alt}](${im.src})`).join('\n\n') +
    '\n\n'
  );
}

function buildImageBlock(slug: string, injection: ImageInjection): string {
  if (injection.type === 'local') {
    return localImagesToMarkdownBlock(injection.images);
  }
  const picked = pickArticleStockImages(slug, injection.count);
  return stockImagesToMarkdownBlock(picked);
}

/** แทรกภาพหลังย่อหน้าแรก (หลังหัวข้อ H1) */
function injectImagesAfterFirstParagraph(md: string, imageMarkdown: string): string {
  if (!imageMarkdown) return md;
  const firstLineEnd = md.indexOf('\n');
  if (firstLineEnd === -1) return md + imageMarkdown;
  const afterTitleBlock = md.indexOf('\n\n', firstLineEnd);
  if (afterTitleBlock === -1) return md + imageMarkdown;
  const secondBreak = md.indexOf('\n\n', afterTitleBlock + 2);
  if (secondBreak === -1) {
    return md.slice(0, afterTitleBlock + 2) + imageMarkdown + md.slice(afterTitleBlock + 2);
  }
  return md.slice(0, secondBreak) + imageMarkdown + md.slice(secondBreak);
}

function stripEditorialNotes(lines: string[]): string[] {
  const markers = ['แนะนำเพิ่มเติมเพื่อให้บทความนี้ติด SEO ดีขึ้น'];
  for (const m of markers) {
    const idx = lines.findIndex((l) => l.trim() === m);
    if (idx >= 0) return lines.slice(0, idx);
  }
  return lines;
}

function mapSeoHelperLines(line: string): string {
  const t = line.trim();
  if (t === 'FAQ สำหรับ SEO (แนะนำให้ใส่ท้ายบทความ)' || t === 'FAQ สำหรับ SEO') {
    return '## คำถามที่พบบ่อย';
  }
  if (t === 'CTA ปิดการขาย (แนะนำให้ใส่ท้ายบทความ)' || t === 'CTA ปิดท้ายบทความ') {
    return '## จองคิว / ติดต่อ';
  }
  return line;
}

export function preprocessArticleMarkdown(raw: string, slug: string): string {
  const cfg = ARTICLES[slug];
  if (!cfg) return raw;

  const lines = raw.split('\n');
  const startIdx = lines.findIndex((l) => l.includes(cfg.bodyStartMarker));
  if (startIdx < 0) return raw;

  let body = lines.slice(startIdx).filter((l) => !l.trim().startsWith('#ให้นำภาพ'));
  body = stripEditorialNotes(body);
  body = body.map((line) => mapSeoHelperLines(line));

  const first = body[0];
  const rest = body.slice(1).join('\n');
  let md = `# ${first}\n\n${rest}`;
  const imageBlock = buildImageBlock(slug, cfg.imageInjection);
  md = injectImagesAfterFirstParagraph(md, imageBlock);
  return md;
}
