import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			plugins: [],
		},
	},
	plugins: [
		// fhir(),
		// Inspect({ build: true, outputDir: '.vite-inspect' }),
		vue(),
		vuetify({ autoImport: true }),
		// createFhir(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			// This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
			// see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
			// process and buffer are excluded because already managed
			// by node-globals-polyfill
			// stream: 'rollup-plugin-node-polyfills/polyfills/stream',
			// buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
		},
	},
	// optimizeDeps: {
	// esbuildOptions: {
	// 	define: {
	// 		global: 'globalThis',
	// 	},
	// 	plugins: [
	// 		NodeGlobalsPolyfillPlugin({
	// 			process: true,
	// 			buffer: true,
	// 		}),
	// 		NodeModulesPolyfillPlugin(),
	// 	],
	// },
	// },
	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			ws: true,
	// 			changeOrigin: true,
	// 			target: 'http://fhir.redwoodhealth.kr/fhir',
	// 		},
	// 	},
	// },
	// define: {
	// 	'process.env': {},
	// },
});
