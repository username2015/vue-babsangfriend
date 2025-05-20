"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
require("./assets/main.css");
// PWA 등록
var virtual_pwa_register_1 = require("virtual:pwa-register");
// Service Worker 자동 등록
(0, virtual_pwa_register_1.registerSW)({
    immediate: true,
    onRegistered: function (r) {
        console.log('✅ Service Worker registered:', r);
    },
    onRegisterError: function (error) {
        console.error('❌ Service Worker registration failed:', error);
    },
});
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(router_1.default);
app.mount('#app');
