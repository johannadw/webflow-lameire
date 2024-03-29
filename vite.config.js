import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'


// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      overlay: 'false'
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/whise.js',
      output: {
        format: 'umd',
        entryFileNames: 'whise.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
