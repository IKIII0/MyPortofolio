const SITE = 'https://www.rifkialsauqy.my.id';

function upsertMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Per-route SEO for this bilingual SPA.
 * English lives at `/` (and `/about`), Indonesian at `/id` (and `/id/about`),
 * so each language has its own canonical URL — no duplicate-content flag.
 * hreflang alternates tell Google the two are translations, not duplicates.
 */
export function setPageSeo({ title, description, path = '/', lang = 'en', alternates = [] }) {
  document.documentElement.lang = lang;
  document.title = title;
  upsertMeta('description', description);

  // Canonical = this exact language URL
  upsertLink('canonical', `${SITE}${path}`);

  // hreflang alternates (+ x-default → English root)
  alternates.forEach((alt) => upsertLink('alternate', `${SITE}${alt.path}`, alt.lang));
  const xDefault = alternates.find((a) => a.lang === 'en');
  if (xDefault) upsertLink('alternate', `${SITE}${xDefault.path}`, 'x-default');
}
