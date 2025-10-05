import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000,
		fs: {
			allow: ['..']
		}
	},
	ssr: {
		noExternal: ['@sveltejs/kit']
	},
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: ['src']
			}
		}
	}
});
