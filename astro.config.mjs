import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://themesberg.github.io'
		: 'http://localhost:4321',
	trailingSlash: 'ignore',
	integrations: [
		sitemap(),
		tailwind(),
	],
});
