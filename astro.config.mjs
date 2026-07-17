import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.pupacenter.org',
  integrations: [sitemap({
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date(),
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ko'],
    routing: { prefixDefaultLocale: false },
  },
});
