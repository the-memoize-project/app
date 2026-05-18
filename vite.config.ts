import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@directive': resolve(__dirname, 'packages/directive'),
      '@dom': resolve(__dirname, 'packages/dom'),
      '@echo': resolve(__dirname, 'packages/echo'),
      '@elements': resolve(__dirname, 'packages/elements'),
      '@event': resolve(__dirname, 'packages/event'),
      '@polyfill': resolve(__dirname, 'packages/polyfill'),
      '@renderer': resolve(__dirname, 'packages/renderer'),
      '@result': resolve(__dirname, 'packages/result'),
      '@router': resolve(__dirname, 'packages/router'),
      '@spark': resolve(__dirname, 'packages/spark'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
})
