import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://mycoscaffold.com/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  integrations: [sitemap(), mdx(), lit(), icon(), react()] // Add renderers to the config
});