// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// PWA 등록
import { registerSW } from 'virtual:pwa-register';

// Service Worker 자동 등록
registerSW({
  immediate: true,
  onRegistered(r) {
    console.log('✅ Service Worker registered:', r);
  },
  onRegisterError(error) {
    console.error('❌ Service Worker registration failed:', error);
  },
});

const app = createApp(App);
app.use(router);
app.mount('#app');
