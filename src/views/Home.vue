<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 p-4">
    <HeroSection />

    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-6xl font-bold text-purple-900">주요 기능 안내</h1>
      <p class="text-lg text-gray-900 mt-3">
        밥상친구 앱에서 제공하는 주요 기능들을 소개합니다!.
      </p>

      <!-- 기능 카드들 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧠</span>
          <h2 class="text-2xl font-semibold text-gray-800">AI 추천 레시피</h2>
          <p class="text-sm text-gray-600 mt-1">
            개인 맞춤형 레시피를 제공합니다.
          </p>
          <router-link
            to="/ai-recipe"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">⏲️</span>
          <h2 class="text-2xl font-semibold text-gray-800">요리 타이머</h2>
          <p class="text-sm text-gray-600 mt-1">
            정확한 요리 시간을 제공합니다.
          </p>
          <router-link
            to="/cooking-timer"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🏆</span>
          <h2 class="text-2xl font-semibold text-gray-800">레시피 챌린지</h2>
          <p class="text-sm text-gray-600 mt-1">
            다양한 요리 챌린지에 참여하세요.
          </p>
          <router-link
            to="/recipe-challenge"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧑‍🍳</span>
          <h2 class="text-2xl font-semibold text-gray-800">순서별 조리법</h2>
          <p class="text-sm text-gray-600 mt-1">
            단계별로 쉽게 따라할 수 있습니다.
          </p>
          <router-link
            to="/step-by-step"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧊</span>
          <h2 class="text-2xl font-semibold text-gray-800">냉장고 관리</h2>
          <p class="text-sm text-gray-600 mt-1">
            유통기한 임박 재료나 장기 미사용 재료를 확인하세요.
          </p>
          <router-link
            to="/fridge"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
          >
            자세히 보기
          </router-link>
        </div>

        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">❤️</span>
          <h2 class="text-2xl font-semibold text-gray-800">건강 연동</h2>
          <p class="text-sm text-gray-600 mt-1">
            헬스커넥트와 연동하여 건강을 관리하세요.
          </p>
          <router-link
            to="/health-integration"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
</style>
