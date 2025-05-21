<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
  >
    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between"
    >
      <!-- 로고 / 브랜드 -->
      <router-link
        to="/"
        class="text-2xl font-extrabold text-green-600 hover:text-green-700 transition"
      >
        🍽️ 밥상친구
      </router-link>

      <!-- 모바일 햄버거 버튼 -->
      <button class="md:hidden text-gray-600 hover:text-gray-900 transition">
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

<style scoped>
/* 필요 시 애니메이션 등 추가 가능 */
</style>
