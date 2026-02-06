import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
//export default defineConfig({
//	plugins: [react(), tailwindcss()],
//	resolve: {
//		alias: {
//			'@': fileURLToPath(new URL('./src', import.meta.url)),
//		},
//	},
//});

export default defineConfig(async ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		base: env.VITE_BASE_URL,
		plugins: [react(), tailwindcss()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			proxy: {
				// 예제 API
				'/api/v1': {
					target: 'https://hn.algolia.com',
					changeOrigin: true,
				},
				'/posts': {
					target: 'https://jsonplaceholder.typicode.com',
					changeOrigin: true,
				},
			},
		},
	};
});
