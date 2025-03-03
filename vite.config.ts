import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '$lib': path.resolve('./src/lib'),
      '$lib/components': path.resolve('./src/lib/components'),
      '$lib/utils': path.resolve('./src/lib/utils')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        notFound: path.resolve(__dirname, 'static/404.html')
      }
    }
  }
})
