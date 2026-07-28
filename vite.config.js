import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        learn: resolve(__dirname, 'learn.html'),
        listen: resolve(__dirname, 'listen.html'),
      },
    },
  },
})