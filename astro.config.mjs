import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://indianapropertytaxcalculator.com',
  integrations: [
    tailwind({
      // Disable the default base styles
      applyBaseStyles: false,
    }),
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('private'),
      customPages: [
        {
          url: 'https://indianapropertytaxcalculator.com/',
          changefreq: 'daily',
          priority: 1
        }
      ],
      // Default values for other pages
      changefreq: 'weekly',
      priority: 0.8
    }),
  ],
});
