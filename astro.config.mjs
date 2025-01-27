// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    open: true,
  },
  site: 'https://rafael-ac.github.io',
  base: 'gda-portfolio',
});
