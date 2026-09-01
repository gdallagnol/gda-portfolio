// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  server: {
    open: true,
  },
  site: 'https://gdallagnol.com',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});