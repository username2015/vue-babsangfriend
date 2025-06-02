"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
require("./assets/main.css");
require("animate.css");
// 🌓 다크 모드 자동 감지 및 설정
if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
else {
    document.documentElement.classList.remove('dark');
}
// 📦 PWA 등록
var virtual_pwa_register_1 = require("virtual:pwa-register");
(0, virtual_pwa_register_1.registerSW)({
    immediate: true,
    onRegistered: function (r) {
        console.log('✅ Service Worker registered:', r);
    },
    onRegisterError: function (error) {
        console.error('❌ Service Worker registration failed:', error);
    },
});
// 앱 시작
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(router_1.default);
app.mount('#app');
app.directive('intersect', {
    mounted: function (el, binding) {
        var observer = new IntersectionObserver(function (entries) {
            binding.value(entries, observer, el);
        }, { threshold: 0.1 });
        observer.observe(el);
    }
});
