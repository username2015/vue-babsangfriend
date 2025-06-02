<template>
  <nav
    class="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-gray-700 shadow transition-all"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
      <!-- 로고 -->
      <router-link to="/" class="flex items-center space-x-2">
        <span
          class="text-2xl font-bold text-purple-700 dark:text-purple-300 tracking-tight hover:text-purple-900 dark:hover:text-white transition-all"
        >
          🍽️ 밥상친구
        </span>
      </router-link>

      <!-- 모바일 햄버거 버튼 -->
      <button
        class="md:hidden text-2xl text-purple-800 dark:text-purple-200 focus:outline-none transition"
        @click="menuOpen = !menuOpen"
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- 데스크탑 네비게이션 -->
      <div class="hidden md:flex items-center gap-3">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-purple-300 transition"
          active-class="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-white font-bold shadow-sm"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-white dark:bg-gray-900 px-6 py-4 border-t border-purple-100 dark:border-gray-700 space-y-2"
      >
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="block py-2 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-purple-300 transition"
          active-class="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-white font-bold"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>

  <!-- 여백 확보 -->
  <div class="h-16"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/download', label: 'Download' },
  { to: '/faq', label: 'FAQ' },
  { to: '/testimonial', label: 'Testimonials' },
  { to: '/tech', label: 'Tech' },
  { to: '/devstory', label: 'Dev Story' },
  { to: '/contact', label: 'Contact' },
]
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

/* 부드러운 섹션 이동 */
:global(html) {
  scroll-behavior: smooth;
}
</style>
