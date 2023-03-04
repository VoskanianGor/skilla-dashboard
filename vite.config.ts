import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { svgPlugin } from 'vite-plugin-fast-react-svg'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgPlugin()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			hooks: '/src/hooks',
			pages: '/src/pages',
			types: '/src/types',
			utils: '/src/utils',
		},
	},
})
