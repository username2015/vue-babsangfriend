<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center pt-28 pb-16 px-4"
  >
    <!-- 상단 타이틀 카드 -->
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full mb-10 animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">🧠</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-purple-700 tracking-tight drop-shadow"
        >
          AI 추천 레시피
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2">
        나만을 위한 레시피가 궁금하다면?<br />
        AI가 내 취향과 재료에 딱 맞는 레시피를 추천해드려요!
      </p>
    </div>

    <!-- 카드 그룹 -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-3">🍝</span>
        <h2 class="text-xl font-bold text-purple-800 mb-1">토마토 파스타</h2>
        <p class="text-gray-600 text-base text-center">
          집에 남은 토마토와 파스타면으로 완성! 건강한 한 끼.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-3">🥗</span>
        <h2 class="text-xl font-bold text-purple-800 mb-1">닭가슴살 샐러드</h2>
        <p class="text-gray-600 text-base text-center">
          다이어트에도 딱! 신선한 야채와 닭가슴살의 조합.
        </p>
      </div>
    </div>

    <!-- Call to Action 버튼 -->
    <div class="mt-16">
      <router-link
        to="/download"
        class="inline-flex items-center bg-purple-500 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-md transition focus:ring-2 focus:ring-purple-300 text-lg"
      >
        <span class="mr-2 text-xl">✨</span>
        지금 AI 레시피 추천받기
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// This script is set up for the AI Recipe page.
// Add any necessary logic or imports here.
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
