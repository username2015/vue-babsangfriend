<template>
  <motion-footer
    v-motion
    v-in-view
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }"
    class="w-full bg-gradient-to-br from-orange-50 to-purple-100/70 backdrop-blur-md border-t border-purple-200 py-10 px-6 text-gray-600 text-sm shadow-inner"
  >
    <div class="max-w-xl mx-auto flex flex-col items-center gap-5">
      <!-- 브랜드 -->
      <motion-div
        v-motion
        v-in-view
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.1 } }"
        class="text-xl font-bold text-purple-700 tracking-tight"
      >
        🍱 밥상친구
      </motion-div>

      <!-- 소개글 -->
      <motion-p
        v-motion
        v-in-view
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
        class="text-center text-xs text-gray-500 leading-relaxed"
      >
        건강한 식탁 위에<br />
        조용히 올라오는 일상의 따뜻함을 함께 나눠요.
      </motion-p>

      <!-- 링크 라인 -->
      <motion-div
  v-motion
  v-in-view
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 0.5 } }"
  class="text-xs text-gray-600 flex flex-wrap justify-center items-center gap-2"
>
  <template v-for="(link, index) in navLinks" :key="index">
    <router-link
      :to="link.to"
      class="hover:text-purple-600 transition hover:underline"
    >
      {{ link.label }}
    </router-link>
    <span v-if="index < navLinks.length - 1" class="mx-1 text-gray-400">|</span>
  </template>
</motion-div>


      <!-- 카피라이트 -->
      <motion-div
        v-motion
        v-in-view
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
        class="text-[11px] text-gray-400"
      >
        &copy; 2025 <span class="font-semibold text-purple-600">babsangfriend.co</span> All rights reserved.
      </motion-div>
    </div>
  </motion-footer>
</template>

<script setup lang="ts">
const navLinks = [
  { to: '/', label: '홈' },
  { to: '/download', label: '다운로드' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: '문의하기' },
]
</script>
