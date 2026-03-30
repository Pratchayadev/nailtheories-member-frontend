/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Brush,
  Layers,
  Palette,
  Sparkles,
  ShieldCheck,
  Target,
  Home,
  Grid,
  Scissors,
  Calendar,
  ExternalLink,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO_SECONDARY_KEYWORDS, SITE_TAGLINE } from './seo';
import { useDocumentMeta } from './useDocumentMeta';

// --- Data ---

type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: 'https://picsum.photos/seed/nt-port-1/900/1100',
    alt: 'ผลงานเล็บเจลสไตล์มินิมอล Home Studio Nail Labs ร้านทำเล็บมินิมอลอุดร Nail Theories',
    title: 'มินิมอล เล็บเจล',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-2/900/1100',
    alt: 'ต่อเล็บอุดร งานละเอียด ร้านทำเล็บอุดรธานี ร้านทำเล็บอุดร',
    title: 'ต่อเล็บ Soft Gel',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-3/900/1100',
    alt: 'เพ้นท์เล็บอุดร ลายเกาหลี ร้านเล็บเจลอุดรธานี',
    title: 'ลายเกาหลี',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-4/900/1100',
    alt: 'เล็บเจลอุดร โทนนู้ด ร้านทำเล็บอุดรธานี ร้านทำเล็บสวยๆ อุดร',
    title: 'โทนนู้ดเรียบหรู',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-5/900/1100',
    alt: 'ร้านทำเล็บใกล้ฉัน อุดรธานี ผลงานเล็บแฟชั่น เล็บเจลอุดร',
    title: 'แฟชั่น / ลายพิเศษ',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-6/900/1100',
    alt: 'ต่อเล็บอุดร งานอีเวนต์ Home Studio Nail Labs ร้านเล็บเจลอุดรธานี',
    title: 'หรูหรา / อีเวนต์',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-7/900/1100',
    alt: 'เล็บเจลอุดร ลูกคุณหนู ร้านทำเล็บอุดร ร้านทำเล็บอุดรธานี',
    title: 'ลูกคุณหนู',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-8/900/1100',
    alt: 'ผลงานเล็บมินิมอล ร้านทำเล็บมินิมอลอุดร แนะนำ',
    title: 'มินิมอลลายเส้น',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-9/900/1100',
    alt: 'เพ้นท์เล็บอุดร ลายโอมเบร ร้านทำเล็บอุดรธานี',
    title: 'โอมเบร / ไล่สี',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-10/900/1100',
    alt: 'ร้านทำเล็บอุดรธานี เล็บเจลเงางาม ร้านทำเล็บสวยๆ อุดร',
    title: 'กลาสสกิน / เงา',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-11/900/1100',
    alt: 'ต่อเล็บอุดร สั้นธรรมชาติ ร้านเล็บเจลอุดรธานี',
    title: 'สั้นธรรมชาติ',
  },
  {
    src: 'https://picsum.photos/seed/nt-port-12/900/1100',
    alt: 'เล็บเจลอุดร ดีไซน์พิเศษ ร้านทำเล็บใกล้ฉัน อุดรธานี',
    title: 'ดีไซน์พิเศษ',
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif italic font-bold text-primary leading-tight">
          Nail Theories
          <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/45 not-italic">
            {SITE_TAGLINE}
          </span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/60 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="gradient-cta text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-all inline-block text-center"
        >
          จองคิว
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 z-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50 mb-4 font-bold">
            {SITE_TAGLINE} · อุดรธานี
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-primary mb-6 -tracking-tight">
            ร้านเล็บอุดรธานี<br/>
            <span className="italic font-normal text-ink/80">ร้านทำเล็บอุดร สไตล์สตูดิโอที่บ้าน</span>
          </h1>
          <p className="text-lg text-ink/60 mb-10 max-w-lg leading-relaxed">
            Nail Theories คือ <strong className="font-semibold text-ink/75">ร้านทำเล็บอุดรธานี</strong> แบบ{' '}
            <strong className="font-semibold text-ink/75">{SITE_TAGLINE}</strong> — โฟกัสงานละเอียด สะอาด และบรรยากาศอบอุ่นเหมือนมาทำเล็บที่บ้านเพื่อน
            ครอบคลุม <strong className="font-semibold text-ink/75">เล็บเจลอุดร</strong> <strong className="font-semibold text-ink/75">ต่อเล็บอุดร</strong> และ{' '}
            <strong className="font-semibold text-ink/75">เพ้นท์เล็บอุดร</strong> ในโทน <strong className="font-semibold text-ink/75">ร้านทำเล็บมินิมอลอุดร</strong> ที่ถ่ายรูปขึ้น
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="gradient-cta text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/10 hover:scale-105 transition-transform inline-block text-center"
            >
              จองคิวเลย
            </a>
            <a
              href="#portfolio"
              className="text-primary px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-surface-high transition-colors inline-block text-center border border-primary/15"
            >
              ดูผลงาน
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative h-[500px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <img 
            alt="เล็บเจลอุดร ร้านทำเล็บอุดรธานี Nail Theories Home Studio Nail Labs" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" 
            src="https://picsum.photos/seed/nails1/800/1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[220px] border border-surface-high">
            <p className="text-[10px] uppercase tracking-tighter text-ink/40 mb-2 font-bold">Home Lab</p>
            <p className="font-serif italic text-primary text-lg">ร้านเล็บเจลอุดรธานี · มินิมอล</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LocalSeoSection = () => (
  <section
    id="udon-local-search"
    aria-labelledby="local-seo-heading"
    className="scroll-mt-24 border-y border-ink/5 bg-white py-24 px-8"
  >
    <div className="mx-auto max-w-3xl">
      <h2 id="local-seo-heading" className="mb-8 text-center font-serif text-2xl text-ink md:text-3xl">
        ร้านทำเล็บอุดร · ร้านทำเล็บอุดรธานี — เล็บเจล ต่อเล็บ เพ้นท์เล็บ
      </h2>
      <article className="space-y-6 text-base leading-relaxed text-ink/65">
        <p>
          หากคุณกำลังมองหา <strong className="font-semibold text-ink/80">ร้านทำเล็บอุดร</strong> หรือ{' '}
          <strong className="font-semibold text-ink/80">ร้านทำเล็บอุดรธานี</strong> ที่เน้นงานละเอียดและบรรยากาศอบอุ่น
          Nail Theories ทำงานในรูปแบบ <strong className="font-semibold text-ink/80">{SITE_TAGLINE}</strong> — โฟกัสคุณภาพและความสะอาด
          พร้อมบริการ <strong className="font-semibold text-ink/80">เล็บเจลอุดร</strong> ครบทั้งทาสี แก้ทรง และโทนมินิมอลที่ถ่ายรูปขึ้น
        </p>
        <p>
          งานโครงสร้างและดีไซน์ครอบคลุม <strong className="font-semibold text-ink/80">ต่อเล็บอุดร</strong> แบบนุ่ม เป็นธรรมชาติ
          ไปจนถึง <strong className="font-semibold text-ink/80">เพ้นท์เล็บอุดร</strong> ลายเส้น โอมเบร และลายเทรนด์เบาๆ
          ให้ลุคที่เข้ากับ <strong className="font-semibold text-ink/80">ร้านทำเล็บมินิมอลอุดร</strong> และไลฟ์สไตล์ทำงาน/ใช้ชีวิตประจำวัน
        </p>
        <p>
          คนหลายคนค้นหา <strong className="font-semibold text-ink/80">ร้านทำเล็บใกล้ฉัน</strong> หรือ{' '}
          <strong className="font-semibold text-ink/80">ร้านทำเล็บสวยๆ อุดร</strong> — เราจัดตารางแบบจองคิวชัดเจน
          เพื่อให้คุณได้รับบริการแบบไม่เร่งรีด เหมาะกับผู้ที่ต้องการ <strong className="font-semibold text-ink/80">ร้านเล็บเจลอุดรธานี</strong> ที่ใส่ใจสุขอนามัยและรายละเอียดจริงๆ
        </p>
      </article>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "เล็บเจลอุดร",
      desc: "บริการเล็บเจลอุดรแบบครบวงจร — สีเจลคุณภาพ ให้ความเงางามและติดทน เหมาะกับคนที่ค้นหาร้านทำเล็บอุดรธานีและร้านเล็บเจลอุดรธานีที่เน้นความเรียบมินิมอล",
      icon: <Brush className="w-6 h-6" />,
      colors: ["#F5DFCE", "#DCC7B7", "#8D7466"]
    },
    {
      title: "ต่อเล็บอุดร",
      desc: "ต่อเล็บอุดรด้วย Soft Gel / Acrylic เน้นทรงนุ่มและความเป็นธรรมชาติ เหมาะกับลูกค้าที่ต้องการร้านทำเล็บอุดรที่โฟกัสโครงสร้างและสุขภาพหน้าเล็บ",
      icon: <Layers className="w-6 h-6" />,
      colors: ["#fef8f2", "#fcdccb", "#e3c5b5"]
    },
    {
      title: "เพ้นท์เล็บอุดร",
      desc: "เพ้นท์เล็บอุดร ลายเส้น โอมเบร และเทรนด์เบาๆ โดยช่างที่คุ้นกับงานร้านทำเล็บมินิมอลอุดรและร้านทำเล็บสวยๆ อุดรในโทนถ่ายรูปขึ้น",
      icon: <Palette className="w-6 h-6" />,
      colors: ["#ffdea0", "#735b25", "#e8c786"]
    },
    {
      title: "ดูแลเล็บ & ถอดเจล",
      desc: "ดูแลเล็บ ตัดหนัง และถอดเจลอย่างปลอดภัย เหมาะกับลูกค้าที่ต้องการร้านทำเล็บใกล้ฉันในอุดรและร้านทำเล็บอุดรธานีที่ใส่ใจสุขอนามัย",
      icon: <Sparkles className="w-6 h-6" />,
      colors: ["#ede7e1", "#7f756e", "#32302c"]
    }
  ];

  return (
    <section id="services" className="scroll-mt-24 py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
          <div>
            <span className="text-xs font-bold text-tertiary uppercase tracking-[0.3em] mb-2 block">บริการหลัก</span>
            <h2 className="text-4xl font-serif text-ink">เล็บเจลอุดร · ต่อเล็บอุดร · เพ้นท์เล็บอุดร</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/55">
              ครอบคลุมงานที่คนค้นหาจากร้านทำเล็บอุดรและร้านทำเล็บอุดรธานี — จัดเต็มตั้งแต่โทนมินิมอลไปจนถึงลายพิเศษ
            </p>
          </div>
          <a href="#contact" className="text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary/20 pb-1 hover:border-primary transition-all">
            นัดคิว / สอบถาม
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group border border-surface-high"
            >
              <div className="w-12 h-12 rounded-full bg-surface-low flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                {s.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{s.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-8">{s.desc}</p>
              <div className="flex gap-2">
                {s.colors.map((c, ci) => (
                  <div key={ci} className="h-12 w-5 rounded-full shadow-inner" style={{ backgroundColor: c }}></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i === 0 ? PORTFOLIO_ITEMS.length - 1 : i - 1;
    });
  };

  const goNext = () => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return i === PORTFOLIO_ITEMS.length - 1 ? 0 : i + 1;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) => {
          if (i === null) return null;
          return i === 0 ? PORTFOLIO_ITEMS.length - 1 : i - 1;
        });
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => {
          if (i === null) return null;
          return i === PORTFOLIO_ITEMS.length - 1 ? 0 : i + 1;
        });
      }
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? PORTFOLIO_ITEMS[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-32 bg-surface-low scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif mb-4 italic">ผลงาน · ร้านทำเล็บมินิมอลอุดร</h2>
          <p className="text-ink/40 tracking-[0.3em] uppercase text-[10px] font-bold">
            Home Studio Nail Labs — nail gallery
          </p>
          <p className="text-ink/50 text-sm mt-4 max-w-xl mx-auto">
            คลิกเพื่อขยาย — ตัวอย่างผลงานเล็บเจลอุดร ต่อเล็บอุดร และเพ้นท์เล็บอุดรจากร้านทำเล็บสวยๆ อุดร
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl border border-ink/5 bg-white shadow-sm text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`ขยายภาพ: ${item.title}`}
            >
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.src}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-sm md:text-base text-white drop-shadow-sm">{item.title}</p>
                <p className="text-[10px] text-white/85 mt-0.5">แตะเพื่อขยาย</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="ขยายภาพผลงาน"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              aria-label="ปิดการขยายภาพ"
              onClick={closeLightbox}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-2 right-0 z-20 rounded-full bg-white/95 p-2 text-ink shadow-lg transition hover:bg-white md:-right-2 md:top-0"
                aria-label="ปิด"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative mt-10 w-full overflow-hidden rounded-2xl bg-black/20 shadow-2xl md:mt-0">
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[75vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-4 text-center font-serif text-lg text-white drop-shadow-md">{activeItem.title}</p>
              <p className="mt-1 max-w-lg text-center text-sm text-white/80">{activeItem.alt}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {lightboxIndex + 1} / {PORTFOLIO_ITEMS.length}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-ink shadow-lg transition hover:bg-white md:left-6"
              aria-label="ภาพก่อนหน้า"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-ink shadow-lg transition hover:bg-white md:right-6"
              aria-label="ภาพถัดไป"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ร้านทำเล็บอุดรธานี Nail Theories ตั้งอยู่ที่ไหน?",
      a: "เราให้บริการในรูปแบบ Home Studio Nail Labs ตั้งอยู่ใจกลางเมืองอุดรธานี บริเวณถนนประจักษ์ศิลปาคม ใกล้ UD Town และเซ็นทรัลอุดรธานี เดินทางสะดวก เหมาะกับคนที่ค้นหาร้านทำเล็บอุดรหรือร้านทำเล็บใกล้ฉันในโซนเมืองค่ะ"
    },
    {
      q: "เล็บเจลอุดรอยู่ได้นานแค่ไหน?",
      a: "โดยทั่วไปงานเล็บเจลอุดรสามารถอยู่ได้ประมาณ 3–4 สัปดาห์ ขึ้นกับการดูแลและกิจกรรมในชีวิตประจำวัน หากต้องการรักษาโทนมินิมอลให้สวยตลอด แนะนำนัดทำต่อตามรอบค่ะ"
    },
    {
      q: "ต้องจองคิวล่วงหน้าหรือไม่?",
      a: "เนื่องจากเราเน้นการให้บริการแบบ Home Studio ที่โฟกัสส่วนตัว แนะนำให้จองคิวล่วงหน้าอย่างน้อย 1–2 วัน ผ่าน Line หรือ Facebook ของร้าน โดยเฉพาะช่วงเย็นและวันหยุดค่ะ"
    },
    {
      q: "มีต่อเล็บอุดรและเพ้นท์เล็บอุดรไหม?",
      a: "มีค่ะ ครอบคลุมทั้งต่อเล็บอุดรแบบนุ่มเป็นธรรมชาติ และเพ้นท์เล็บอุดรลายเส้น/โอมเบร รวมถึงโทนร้านทำเล็บมินิมอลอุดรที่ถ่ายรูปขึ้น สอบถามลายและราคาได้ก่อนจองค่ะ"
    },
    {
      q: "ร้านทำเล็บสวยๆ อุดรแบบนี้เหมาะกับใคร?",
      a: "เหมาะกับคนที่ต้องการร้านเล็บเจลอุดรธานีที่เน้นความสะอาด รายละเอียด และบรรยากาศไม่แออัด ใกล้เคียงประสบการณ์ร้านทำเล็บใกล้ฉันแต่ยังได้ความรู้สึกเหมือนทำเล็บที่บ้านเพื่อนค่ะ"
    },
    {
      q: "ราคาเริ่มต้นประมาณเท่าไหร่?",
      a: "บริการทาสีเจลพื้นฐานเริ่มต้นที่ 3xx บาท (แล้วแต่โปรโมชัน/ความยาวเล็บ) โดยใช้ผลิตภัณฑ์คุณภาพทุกขั้นตอน สำหรับงานอาร์ตหรืองานต่อเล็บอุดร ราคาจะขึ้นกับความซับซ้อนของลายและวัสดุค่ะ"
    }
  ];

  return (
    <section className="py-32 bg-white px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16 italic">คำถามที่พบบ่อย · ร้านทำเล็บอุดรธานี</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-low rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-ink">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-ink/60 text-sm leading-relaxed border-t border-ink/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-high pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <a href="#" className="text-2xl font-serif italic font-bold text-primary mb-2 block">Nail Theories</a>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/45">{SITE_TAGLINE}</p>
          <p className="text-ink/60 max-w-sm mb-8 leading-relaxed">
            ร้านทำเล็บอุดรธานีแบบ Home Studio Nail Labs — เน้นเล็บเจลอุดร ต่อเล็บอุดร เพ้นท์เล็บอุดร และโทนร้านทำเล็บมินิมอลอุดรที่สะอาดและละเอียด
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm text-ink/60">
            <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-primary transition-colors font-bold text-primary underline underline-offset-4">Booking</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
          <div className="space-y-4 text-sm text-ink/60">
            <p>Udon Thani, Thailand</p>
            <p>hello@nailtheories.com</p>
            <p>+66 8x-xxx-xxxx</p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-ink/5 text-center">
        <p className="text-ink/30 text-[10px] tracking-[0.2em] uppercase font-bold">
          © {new Date().getFullYear()} Nail Theories · ร้านทำเล็บอุดรธานี · {SITE_TAGLINE}
        </p>
      </div>
    </footer>
  );
};

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 md:hidden glass-nav z-50 rounded-t-[32px] shadow-2xl border-t border-ink/5">
      <a href="#" className="flex flex-col items-center gap-1 text-primary">
        <Home className="w-5 h-5" />
        <span className="text-[9px] uppercase tracking-widest font-bold">Home</span>
      </a>
      <a href="#portfolio" className="flex flex-col items-center gap-1 text-ink/40">
        <Grid className="w-5 h-5" />
        <span className="text-[9px] uppercase tracking-widest font-bold">Portfolio</span>
      </a>
      <a href="#services" className="flex flex-col items-center gap-1 text-ink/40">
        <Scissors className="w-5 h-5" />
        <span className="text-[9px] uppercase tracking-widest font-bold">Services</span>
      </a>
      <a href="#contact" className="flex flex-col items-center gap-1 text-ink/40">
        <Calendar className="w-5 h-5" />
        <span className="text-[9px] uppercase tracking-widest font-bold">Booking</span>
      </a>
    </nav>
  );
};

// --- Main App ---

export default function App() {
  useDocumentMeta();

  return (
    <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-32 bg-surface-low">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-12 text-ink"
            >
              {SITE_TAGLINE} · ร้านทำเล็บอุดรธานี
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-left">
              <p className="text-ink/60 leading-relaxed text-lg">
                ที่ Nail Theories เราเชื่อว่าการทำเล็บคือการดูแลตนเองที่สะท้อนรสนิยม — ในฐานะบริการ{' '}
                <strong className="font-semibold text-ink/75">ร้านทำเล็บอุดร</strong> แบบโฟกัสสตูดิโอเล็กๆ ฟีลบ้าน
                เราจัดตารางแบบจองคิวชัดเจน เพื่อให้คุณได้รับบริการแบบไม่เร่งรีด เหมาะกับคนที่ค้นหา{' '}
                <strong className="font-semibold text-ink/75">ร้านทำเล็บใกล้ฉัน</strong> ในอุดรธานี แต่ยังต้องการความสะอาดและรายละเอียดจริงๆ
              </p>
              <p className="text-ink/60 leading-relaxed text-lg italic border-l-2 border-primary pl-8">
                "เราคัดสรรผลิตภัณฑ์เกรดพรีเมียมจากเกาหลีและญี่ปุ่น เพื่อสุขภาพเล็บที่แข็งแรงและสีสันที่ติดทนนาน
                ในบรรยากาศที่สะอาดและอบอุ่น — โทนงานที่เข้ากับคำว่า{' '}
                <strong className="font-semibold not-italic text-ink/75">ร้านทำเล็บอุดรธานี</strong> แบบมินิมอลและถ่ายรูปขึ้น"
              </p>
            </div>
          </div>
        </section>

        <LocalSeoSection />

        <Services />
        <Portfolio />

        {/* Why Choose Us */}
        <section className="py-32 px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">ทำไมร้านทำเล็บอุดรธานีแห่งนี้ถึงเป็น Home Lab</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              ครบทั้งเล็บเจลอุดร ต่อเล็บอุดร และเพ้นท์เล็บอุดร — โดยยึดความสะอาดและรายละเอียดเป็นหลัก
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck />, title: "สุขอนามัยก่อนเสมอ", desc: "อุปกรณ์ทุกชิ้นผ่านการฆ่าเชื้อด้วยตู้อบ UV และเครื่องนึ่งความดันไอน้ำมาตรฐานการแพทย์ เหมาะกับคนที่ต้องการร้านเล็บเจลอุดรธานีที่ใส่ใจความสะอาดจริงๆ" },
              { icon: <Target />, title: "ละเอียดทุกขั้นตอน", desc: "เราให้เวลากับทุกรายละเอียด ไม่ว่าจะเป็นการตัดหนังหรือการวางเลเยอร์สี เพื่อผลลัพธ์ที่เข้ากับคำว่าร้านทำเล็บมินิมอลอุดรและร้านทำเล็บสวยๆ อุดรในโทนถ่ายรูปขึ้น" },
              { icon: <Home />, title: "ฟีลสตูดิโอที่บ้าน", desc: "บริการแบบจองคิว ไม่แออัด โฟกัสส่วนตัวในบรรยากาศที่ผ่อนคลาย เหมือนมาทำเล็บที่บ้านเพื่อนคนสนิท" }
            ].map((item, i) => (
              <div key={i} className="text-center px-6">
                <div className="text-tertiary mb-6 flex justify-center">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-xl font-serif mb-4 font-bold">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-surface-low px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <h2 className="text-4xl font-serif mb-6 leading-tight">รีวิวจากลูกค้า<br/><span className="italic font-normal">ร้านทำเล็บอุดร</span></h2>
                <div className="flex gap-1 text-tertiary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-ink/60 text-sm">ความประทับใจจากลูกค้าที่มาใช้บริการร้านทำเล็บอุดรธานีและร้านทำเล็บสวยๆ อุดรในโทน Home Studio Nail Labs</p>
              </div>
              <div className="md:w-2/3 flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
                {[
                  { name: "คุณมิว K.", text: "สะอาด เป็นส่วนตัวสุดๆ ช่างทำละเอียดมากค่ะ เล็บเจลอุดรติดทน คุ้มค่าสำหรับคนที่ชอบร้านทำเล็บอุดรแบบมินิมอลจริงๆ" },
                  { name: "คุณฟ้า P.", text: "ชอบโทนสีและบรรยากาศ Home Lab มากค่ะ แนะนำใครที่หาร้านทำเล็บใกล้ฉันในอุดร แต่ยังอยากได้งานละเอียดเหมือนร้านเล็บเจลอุดรธานีที่เน้นคุณภาพ" }
                ].map((t, i) => (
                  <div key={i} className="min-w-[350px] bg-white p-10 rounded-3xl shadow-sm snap-center border border-ink/5">
                    <p className="text-ink mb-8 italic leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-high"></div>
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-[10px] text-ink/40 uppercase tracking-widest font-bold">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section id="contact" className="scroll-mt-24 py-32 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Visit Our Home Studio · <span className="italic font-normal">Udon Thani</span></h2>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-ink/60 text-sm">123 ถนนประจักษ์ศิลปาคม ต.หมากแข้ง อ.เมือง จ.อุดรธานี 41000</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-ink/60 text-sm">เปิดให้บริการทุกวัน: 10:00 น. - 20:00 น. (กรุณาจองล่วงหน้า)</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-ink/60 text-sm">08x-xxx-xxxx</p>
                </div>
              </div>
              <div className="p-8 bg-surface-low rounded-3xl">
                <h4 className="font-bold mb-4 uppercase tracking-widest text-[10px] text-ink/40">คำค้นยอดนิยม (อุดรธานี)</h4>
                <div className="flex flex-wrap gap-2">
                  {SEO_SECONDARY_KEYWORDS.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] text-ink/60 border border-ink/5 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-[500px] bg-surface-high rounded-[40px] overflow-hidden relative shadow-2xl group">
              <img 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                src="https://picsum.photos/seed/map/800/800" 
                alt="Location Map"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-8 py-6 rounded-3xl shadow-2xl text-center border border-primary/10 pointer-events-auto">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-serif text-lg font-bold">Nail Theories</p>
                  <p className="text-[10px] text-ink/40 uppercase tracking-widest mt-1 font-bold">{SITE_TAGLINE}</p>
                  <button className="mt-4 text-[9px] font-bold text-tertiary uppercase tracking-[0.2em] border border-tertiary/20 px-6 py-2.5 rounded-full hover:bg-tertiary hover:text-white transition-all">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
