// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'animate.css'

// 🌓 다크 모드 자동 감지 및 설정
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// 📦 PWA 등록
import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onRegistered(r) {
    console.log('✅ Service Worker registered:', r);
  },
  onRegisterError(error) {
    console.error('❌ Service Worker registration failed:', error);
  },
});

// 앱 시작
const app = createApp(App);
app.use(router);
app.mount('#app');

app.directive('intersect', {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      binding.value(entries, observer, el)
    }, { threshold: 0.1 })
    observer.observe(el)
  }
})