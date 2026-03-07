import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sebastianmesserer.com',
  // base is required for GitHub Pages project repos (served at /repo-name/).
  // Remove this line once the custom domain sebastianmesserer.com is connected.
  base: '/sebastianmesserer.com',
  integrations: [sitemap()],
});
