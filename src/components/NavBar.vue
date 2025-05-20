<template>
  <nav
    class="fixed w-full z-30 top-0 left-0 bg-white/70 backdrop-blur-lg shadow-md"
  >
    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16"
    >
      <!-- Logo/Brand -->
      <router-link to="/" class="flex items-center space-x-2">
        <span
          class="text-2xl md:text-3xl font-extrabold text-purple-800 tracking-tight drop-shadow"
          >밥상친구</span
        >
      </router-link>

      <!-- Menu Links -->
      <div class="flex space-x-1 md:space-x-4">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-2 py-1 rounded-lg text-gray-700 text-base font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors"
          active-class="bg-purple-200 text-purple-800 font-bold"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
  <!-- 위에 NavBar 높이만큼 여백을 넣어줘야 내용이 가려지지 않음 -->
  <div class="h-16"></div>
</template>

<script setup lang="ts">
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/preview', label: 'Preview' },
  { to: '/download', label: 'Download' },
  { to: '/faq', label: 'FAQ' },
  { to: '/testimonial', label: 'Testimonials' },
  { to: '/tech', label: 'Tech' },
  { to: '/devstory', label: 'Dev Story' },
  { to: '/contact', label: 'Contact' },
];
</script>

<style scoped>
/* 모바일 등에서 메뉴 아이콘 추가 원하면 여기에 구현! */
</style>
