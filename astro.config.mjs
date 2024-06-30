import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mycoscaffold.com/",
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.

  sitemap: true
  // Generate sitemap (set to "false" to disable)
  ,
  integrations: [icon()]
});