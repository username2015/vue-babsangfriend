<template>
  <nav
    class="fixed w-full z-50 top-0 left-0 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-purple-100 dark:border-gray-700 transition"
  >
    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16"
    >
      <!-- 로고 -->
      <router-link to="/" class="flex items-center space-x-2">
        <span
          class="text-3xl font-extrabold text-purple-700 dark:text-purple-300 tracking-tight hover:scale-105 hover:text-purple-900 dark:hover:text-white transition-all"
        >
          🍽️ 밥상친구
        </span>
      </router-link>

      <!-- 햄버거 버튼 (모바일 전용) -->
      <button
        class="md:hidden text-purple-800 dark:text-purple-200 text-2xl focus:outline-none"
        @click="menuOpen = !menuOpen"
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- 데스크탑 메뉴 -->
      <div class="hidden md:flex items-center gap-4">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 transition-all"
          active-class="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-white font-bold shadow-sm"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>

    <!-- 모바일 전용 메뉴 -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-2 border-t border-purple-100 dark:border-gray-700"
      >
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="block py-2 px-3 rounded text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 transition"
          active-class="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-white font-bold"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>

  <!-- 네비게이션 높이 여백 확보 -->
  <div class="h-16"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/download', label: 'Download' },
  { to: '/faq', label: 'FAQ' },
  { to: '/testimonial', label: 'Testimonials' },
  { to: '/tech', label: 'Tech' },
  { to: '/devstory', label: 'Dev Story' },
  { to: '/contact', label: 'Contact' },
];
</script>

<style scoped>
/* 슬라이드 애니메이션 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
