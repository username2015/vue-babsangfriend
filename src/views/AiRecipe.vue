<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-200 via-pink-300 to-yellow-200 flex flex-col items-center pt-28 pb-20 px-4"
  >
    <!-- 상단 타이틀 카드 -->
    <div
      class="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-2xl w-full mb-14 animate-fade-in-up delay-0"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-6xl mr-3 animate-bounce">🧠</span>
        <h1
          class="text-4xl font-extrabold text-purple-800 tracking-tight drop-shadow-lg"
        >
          AI 추천 레시피
        </h1>
      </div>
      <p class="text-lg text-gray-700 text-center leading-relaxed">
        나만의 맞춤 레시피가 궁금하다면?<br />
        AI가 취향과 재료에 딱 맞는 레시피를 추천해드려요!
      </p>
    </div>

    <!-- 카드 그룹 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-2">
      <!-- 카드 1 -->
      <div
        class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300"
      >
        <span class="text-5xl mb-4 animate-pulse">🍝</span>
        <h2 class="text-2xl font-bold text-purple-800 mb-2">토마토 파스타</h2>
        <p class="text-center text-gray-600">
          남은 토마토와 파스타면으로 완성하는<br />
          건강한 한 끼 레시피!
        </p>
      </div>

      <!-- 카드 2 -->
      <div
        class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-600"
      >
        <span class="text-5xl mb-4 animate-pulse">🥗</span>
        <h2 class="text-2xl font-bold text-purple-800 mb-2">닭가슴살 샐러드</h2>
        <p class="text-center text-gray-600">
          신선한 야채와 담백한 닭가슴살의 조화로<br />
          다이어트에도 완벽한 선택!
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <div class="mt-20 animate-fade-in-up delay-900">
      <router-link
        to="/download"
        class="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-xl transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
      >
        <span class="mr-2 text-2xl">✨</span>
        지금 AI 레시피 추천받기
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Delay classes */
.delay-0 {
  animation-delay: 0s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.delay-900 {
  animation-delay: 0.9s;
}
</style>
