import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag === 'router-view' || tag === 'router-link',
        },
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // 🔧 파일 캐싱 용량을 5MB로 증가 (기본 2MB → 5MB)
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'icons/pwa-icon-192.png',
        'icons/pwa-icon-512.png',
      ],
      manifest: {
        name: '밥상친구',
        short_name: '밥상친구',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
});
