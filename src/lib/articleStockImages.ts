/**
 * รูปสต็อกฟรี (Unsplash License) สำหรับประกอบบทความร้านทำเล็บ — สุ่มตาม seed (slug) ให้ผลคงที่ต่อการโหลด
 * @license SPDX-License-Identifier: Apache-2.0
 */

export type ArticleStockImage = {
  /** URL ภาพเต็ม (Unsplash CDN) */
  src: string;
  /** คำอธิบายภาพ — ใช้เป็น alt ใน markdown */
  alt: string;
};

/** พารามิเตอร์ร่วม: ความกว้าง + คุณภาพ + crop */
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/**
 * คลังรูปธีมเล็บ / มือ / บรรยากาศทำเล็บ — เพิ่มรูปได้ที่นี่ (ใช้ photo id จาก unsplash.com)
 */
export const NAIL_SALON_STOCK_IMAGES: ArticleStockImage[] = [
  {
    src: U('photo-1604654894610-df63bc536371'),
    alt: 'เล็บทาสีเจลโทนนู้ด มุมใกล้ — งานเล็บเจลเรียบหรู',
  },
  {
    src: U('photo-1522337660859-02fbefca4702'),
    alt: 'การดูแลมือและเล็บ — สปามือสไตล์ซาลอน',
  },
  {
    src: U('photo-1522335789203-aabd1fc54bc9'),
    alt: 'ยาทาเล็บและอุปกรณ์ทำเล็บ — โต๊ะทำเล็บ',
  },
  {
    src: U('photo-1585747860715-2ba37e788b70'),
    alt: 'มือสวยหลังทำเล็บ — ลุคสะอาดดูแพง',
  },
  {
    src: U('photo-1632345031435-8727f6897d53'),
    alt: 'เล็บยาวทรงสวย — แนวทำเล็บและ Nail Art',
  },
];

function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** แปลงสตริงเป็น seed ตัวเลขสำหรับ PRNG */
export function seedFromString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** สลับอาร์เรย์แบบมี seed (Fisher–Yates) */
function shuffleInPlace<T>(arr: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * สุ่มเลือกรูปจากคลังไม่ซ้ำ จำนวน `count` รูป — ผลลัพธ์คงที่เมื่อ `seedKey` เดิม (เช่น slug บทความ)
 */
export function pickArticleStockImages(seedKey: string, count: number): ArticleStockImage[] {
  const pool = NAIL_SALON_STOCK_IMAGES;
  if (pool.length === 0) return [];
  const n = Math.min(Math.max(1, count), pool.length);
  const seed = seedFromString(seedKey);
  const shuffled = shuffleInPlace(pool, seed);
  return shuffled.slice(0, n);
}

/** แปลงเป็น markdown สำหรับแทรกในบทความ */
export function stockImagesToMarkdownBlock(images: ArticleStockImage[]): string {
  if (images.length === 0) return '';
  return (
    '\n\n' +
    images.map((im) => `![${im.alt}](${im.src})`).join('\n\n') +
    '\n\n'
  );
}
