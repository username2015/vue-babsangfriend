<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 flex flex-col items-center py-16 px-4"
  >
    <!-- 타이틀 카드 -->
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-xl w-full animate-fade-in-up delay-0"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-6xl mr-3">🏆</span>
        <h1
          class="text-4xl font-extrabold text-pink-700 tracking-tight drop-shadow"
        >
          레시피 챌린지
        </h1>
      </div>
      <p class="text-lg text-gray-700 text-center leading-relaxed">
        요리 챌린지에 참여하고,<br />
        랭킹 보상과 뱃지를 모아보세요!
      </p>
    </div>

    <!-- 카드 그룹 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-3xl">
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-300"
      >
        <span class="text-5xl mb-4">🎯</span>
        <h2 class="text-2xl font-semibold text-pink-800 mb-2">주간 미션</h2>
        <p class="text-center text-gray-600 text-sm">
          정해진 미션 요리를 완성하고<br />
          주간 뱃지를 획득하세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-600"
      >
        <span class="text-5xl mb-4">🥇</span>
        <h2 class="text-2xl font-semibold text-pink-800 mb-2">랭킹 시스템</h2>
        <p class="text-center text-gray-600 text-sm">
          친구들과 순위 경쟁,<br />
          나만의 기록을 세워보세요!
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <div class="mt-14 animate-fade-in-up delay-900">
      <router-link
        to="/download"
        class="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition focus:ring-2 focus:ring-pink-300 text-lg"
      >
        <span class="mr-2 text-xl">🔥</span>
        챌린지 참여하기
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

/* 딜레이 클래스 */
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
