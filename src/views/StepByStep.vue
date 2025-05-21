<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-purple-100 flex flex-col items-center py-16 px-4"
  >
    <!-- 타이틀 카드 -->
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-xl w-full animate-fade-in-up delay-0"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-6xl mr-3">🧑‍🍳</span>
        <h1
          class="text-4xl font-extrabold text-green-700 tracking-tight drop-shadow"
        >
          순서별 조리법
        </h1>
      </div>
      <p class="text-lg text-gray-700 text-center leading-relaxed">
        처음 요리해도 걱정 NO!<br />
        단계별로 쉬운 안내와 이미지로 따라할 수 있어요.
      </p>
    </div>

    <!-- 카드 그룹 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-3xl">
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-300"
      >
        <span class="text-5xl mb-4">1️⃣</span>
        <h2 class="text-2xl font-semibold text-green-800 mb-2">재료 준비</h2>
        <p class="text-center text-gray-600 text-sm">
          필요한 재료와 도구를<br />
          한눈에 확인하세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-600"
      >
        <span class="text-5xl mb-4">2️⃣</span>
        <h2 class="text-2xl font-semibold text-green-800 mb-2">조리 순서</h2>
        <p class="text-center text-gray-600 text-sm">
          그림과 텍스트로 상세히<br />
          조리 방법을 안내해드립니다.
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <div class="mt-14 animate-fade-in-up delay-900">
      <router-link
        to="/download"
        class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition focus:ring-2 focus:ring-green-300 text-lg"
      >
        <span class="mr-2 text-xl">🍳</span>
        단계별 가이드 보기
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

/* 순차 애니메이션 딜레이 */
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
