<template>
  <header class="bg-white shadow-md p-4 fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- 로고/브랜드 -->
      <a href="/" class="text-xl font-bold text-green-600"> 밥상친구 </a>

      <!-- 햄버거 메뉴 아이콘 (모바일용) -->
      <button class="md:hidden text-gray-600">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
// 필요시 setup logic 작성
</script>

<style scoped>
/* 추가 스타일 있으면 작성 */
</style>
