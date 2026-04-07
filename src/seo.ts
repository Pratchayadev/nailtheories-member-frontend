/**
 * SEO keywords — grouped for copy + flat list for tag chips.
 */

/** คีย์เวิร์ดหลัก (พื้นที่ / ปริมาณค้นหาสูง) */
export const SEO_KEYWORDS_PRIMARY = ['ทำเล็บอุดร', 'ร้านทำเล็บอุดรธานี'] as const;

/** 1. Local SEO — จังหวัด / แลนด์มาร์ค / “ใกล้ฉัน” */
export const SEO_KEYWORDS_LOCAL = [
  'ทำเล็บอุดร',
  'ร้านทำเล็บอุดรธานี',
  'ร้านทำเล็บใกล้ฉัน',
  'ทำเล็บเจล อุดร',
  'ร้านทำเล็บแถวห้าแยกน้ำพุ',
  'ร้านทำเล็บแถวยูดีทาวน์',
] as const;

/** 2. Service-specific — ความสะดวก / สตูดิโอ / จองออนไลน์ */
export const SEO_KEYWORDS_SERVICE = [
  'ทำเล็บนอกสถานที่ อุดร',
  'ทำเล็บเดลิเวอรี่',
  'Private Nail Studio อุดร',
  'จองคิวทำเล็บออนไลน์',
] as const;

/** 3. Niche / long-tail — โจทย์เฉพาะ */
export const SEO_KEYWORDS_NICHE = [
  'ต่อเล็บ PVC อุดร ราคาถูก',
  'สปามือเท้า อุดรธานี',
  'พิกัดร้านทำเล็บอุดร',
  'ลายเล็บเจลเรียบหรู',
  'ทำเล็บเจ้าสาว อุดร',
] as const;

/** คีย์เวิร์ดรองเดิมที่ยังใช้ในเนื้อหา */
export const SEO_KEYWORDS_LEGACY = [
  'เล็บเจลอุดร',
  'ต่อเล็บอุดร',
  'เพ้นท์เล็บอุดร',
  'ร้านเล็บเจลอุดรธานี',
  'ร้านทำเล็บมินิมอลอุดร',
  'ร้านทำเล็บสวยๆ อุดร',
] as const;

/** รวมเป็นชุดเดียวสำหรับแท็กในหน้า Contact (ไม่ซ้ำตามลำดับ) */
export const SEO_ALL_TAGS: readonly string[] = Array.from(
  new Set<string>([
    ...SEO_KEYWORDS_LOCAL,
    ...SEO_KEYWORDS_SERVICE,
    ...SEO_KEYWORDS_NICHE,
    ...SEO_KEYWORDS_LEGACY,
  ])
);

/** @deprecated ใช้ SEO_ALL_TAGS — คงไว้เพื่อ import เดิม */
export const SEO_SECONDARY_KEYWORDS = SEO_ALL_TAGS;

export const SITE_BRAND = 'Nail Theories';
export const SITE_TAGLINE = 'Home Studio Nail Labs';

/** โดเมนหลัก — ใช้กับ og:image / og:url (ต้องเป็น URL แบบเต็ม) */
export const SITE_URL = 'https://www.nail-theories.com';

/** รูป OG / แชร์โซเชียล (ไฟล์ใน public/) */
export const OG_IMAGE_PATH = 'ใกล้เซ็นทรัลอุดร';

export function getOgImageAbsoluteUrl(): string {
  return `${SITE_URL}${OG_IMAGE_PATH}`;
}

export const DEFAULT_META_DESCRIPTION =
  'ทำเล็บอุดร ร้านทำเล็บอุดรธานี Nail Theories — Home Studio / Private Nail Studio อุดร ทำเล็บเจล อุดร จองคิวทำเล็บออนไลน์ ร้านทำเล็บใกล้ฉัน แถวยูดีทาวน์ ห้าแยกน้ำพุ ใกล้เซ็นทรัลอุดรเซ็นทรัลอุดรอุดรอุดร';

/** Official contact & social (single source of truth for UI + future CMS). */
export const CONTACT = {
  phoneDisplay: '080-592-9646',
  phoneTel: 'tel:+66805929646',
  /** ที่อยู่เต็มสำหรับแสดงบนเว็บ / SEO */
  addressLine: '152 ซอย ศรีพินิจ 3 ตำบลหมากแข้ง เมือง อุดรธานี 41000',
  /** ลิงก์เปิดใน Google Maps (แอป/เบราว์เซอร์) */
  googleMapsUrl: 'https://maps.app.goo.gl/6Yeh5vS2hhSSDzbV7',
  facebook: 'https://www.facebook.com/nailtheories.udonthani/',
  instagram: 'https://www.instagram.com/nailtheories/',
  tiktok: 'https://www.tiktok.com/@nail.theories',
} as const;

/** iframe ฝังแผนที่ (ค้นหาตามที่อยู่ — ไม่ต้องใช้ API key) */
export function getGoogleMapsEmbedSrc(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.addressLine)}&output=embed&z=17&hl=th`;
}
