import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://indianapropertytaxcalculator.com',
  integrations: [
    tailwind({
      applyBaseStyles: false, // Disable the default base styles
    }),
    sitemap({
      lastmod: new Date(), // Set lastmod to current date
      changefreq: 'weekly', // Default changefreq
      priority: 0.7, // Default priority

      // Use the serialize function to adjust individual page priorities
      serialize: (page) => {
        if (page.url === 'https://indianapropertytaxcalculator.com/') {
          return {
            url: page.url,
            lastmod: new Date(),
            changefreq: 'daily',
            priority: 1.0, // Set homepage priority to 1.0
          };
        }
        // Example: Give county-specific pages higher visibility if needed
        if (page.url.includes('/county/')) {
          return {
            url: page.url,
            lastmod: new Date(),
            changefreq: 'weekly',
            priority: 0.8,
          };
        }
        // Default settings for other pages
        return {
          url: page.url,
          lastmod: new Date(),
          changefreq: 'weekly',
          priority: 0.7,
        };
      },
    }),
  ],
});
