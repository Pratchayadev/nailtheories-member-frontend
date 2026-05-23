# /update-blog

Research and create 5 new SEO-optimized blog articles for Nail Theories (nail salon in Udon Thani, Thailand). The goal is to rank #1 on Google Thailand for: **"ร้านทำเล็บอุดร"**, **"ทำเล็บเจลอุดร"**, **"ทำเล็บเจลอุดรธานี"**.

## Steps

### 1. Research topics
Think of 5 fresh article topics related to:
- ร้านทำเล็บเจล / gel nail salon
- ทาสีเล็บ / nail polish
- เล็บมือ เล็บเท้า / manicure & pedicure
- การดูแลรักษาเล็บ / nail care
- ลายเล็บ / nail art trends

Topics should NOT duplicate existing articles. Check `src/lib/articleMarkdown.ts` for existing slugs.

### 2. Create article files
- Location: `public/article/`
- Filename format: `YYYY-MM-DD-N.md` (current date + article number, e.g. `2026-05-23-1.md`)
- Each article must contain:

```
SEO SETUP
SEO Title

[Thai SEO title — include primary keyword naturally]

Meta Description

[150-160 chars Thai description — include keyword + CTA]

URL Slug

/[slug]

Focus Keyword

[primary keyword]

Related Keywords
ร้านทำเล็บอุดร
ทำเล็บเจลอุดร
ทำเล็บเจลอุดรธานี
[3-5 more related terms]

---

[Body start marker line — unique Thai sentence, becomes H1]

[Full article body in Thai markdown, 600-1000 words]
[Use ## and ### headings]
[Include internal links to other blog posts at /blog/[slug]]
[Include CTA section linking to /#contact]
[End with FAQ section: FAQ สำหรับ SEO]
```

### 3. Register articles in `src/lib/articleMarkdown.ts`
Add each new article to the `ARTICLES` Record with:
- key: slug string
- `path`: `/article/YYYY-MM-DD-N.md`
- `bodyStartMarker`: exact text of the first line of article body
- `imageInjection`: `{ type: 'stock', count: 2 }`

### 4. Add blog cards in `src/App.tsx`
Add a `<Link>` card for each new article inside the `<div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">` section. Use this pattern:

```tsx
<Link
  to="/blog/[slug]"
  className="group block overflow-hidden rounded-[40px] border border-ink/5 bg-surface shadow-xl transition hover:border-primary/20 hover:shadow-2xl"
>
  <div className="aspect-[16/10] w-full overflow-hidden bg-surface-low">
    <img
      src={randomCover.src}
      alt={randomCover.alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  </div>
  <div className="p-8 text-left">
    <h3 className="font-serif text-xl leading-snug text-ink md:text-2xl">
      [Thai article title]
    </h3>
    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink/60">
      [Thai excerpt — 2-3 sentences, include keyword naturally]
    </p>
    <span className="mt-6 inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary">
      อ่านต่อ
    </span>
  </div>
</Link>
```

### 5. Push to GitHub
After all files are created and code updated:
```bash
git add public/article/2026-MM-DD-*.md src/lib/articleMarkdown.ts src/App.tsx .claude/commands/update-blog.md
git commit -m "add 5 new SEO blog articles — [date]"
git push origin main
```

## SEO rules
- Always include "ร้านทำเล็บอุดร", "ทำเล็บเจลอุดร", or "ทำเล็บเจลอุดรธานี" in H1
- Use keywords naturally in first paragraph
- Each article links to at least 2 other blog posts internally
- End every article with CTA to /#contact (จองคิว)
- Unique title + meta description per article
