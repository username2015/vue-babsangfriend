<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-green-100 flex flex-col items-center py-12 px-4"
  >
    <!-- 타이틀 카드 -->
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up delay-0"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">🧊</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow"
        >
          냉장고 관리
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2 text-center leading-relaxed">
        유통기한 임박 재료와 장기 미사용 재료를<br />
        편리하게 확인하고 알림을 받아보세요.
      </p>
    </div>

    <!-- 카드 그룹 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl">
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-300"
      >
        <span class="text-4xl mb-2">⏰</span>
        <h2 class="text-xl font-semibold text-blue-800">유통기한 알림</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          곧 유통기한이 다가오는 재료를 미리 알려드려요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-600"
      >
        <span class="text-4xl mb-2">📦</span>
        <h2 class="text-xl font-semibold text-blue-800">장기 미사용 재료</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          오래 사용하지 않은 재료들을 한눈에 확인하세요.
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <div class="mt-12 animate-fade-in-up delay-900">
      <router-link
        to="/download"
        class="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:ring-2 focus:ring-blue-300"
      >
        <span class="mr-2 text-lg">🧊</span>
        냉장고 보러가기
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
    transform: none;
  }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.8s ease-out forwards;
}

/* 순차 애니메이션 딜레이 클래스 */
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
