import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:4321`,
	output: "server",
	adapter: vercel(),
	integrations: [sitemap(), tailwind(), db()],
});
