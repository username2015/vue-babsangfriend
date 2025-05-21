<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 flex flex-col items-center py-12 px-4"
  >
    <!-- 상단 타이틀 카드 -->
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up delay-0"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">❤️</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow"
        >
          건강 연동
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2 text-center leading-relaxed">
        헬스커넥트, 스마트워치 등과 연동해<br />
        나의 건강 기록도 함께 관리하세요!
      </p>
    </div>

    <!-- 정보 카드 그룹 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl">
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-300"
      >
        <span class="text-4xl mb-2">🏃‍♂️</span>
        <h2 class="text-xl font-semibold text-blue-800">걸음수/활동량</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          내 건강 데이터를 바탕으로 맞춤 레시피를 추천받으세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform animate-fade-in-up delay-600"
      >
        <span class="text-4xl mb-2">🥦</span>
        <h2 class="text-xl font-semibold text-blue-800">건강관리 팁</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          식단, 운동 등 건강관리에 도움되는 정보를 함께 제공합니다.
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <div class="mt-12 animate-fade-in-up delay-900">
      <router-link
        to="/download"
        class="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:ring-2 focus:ring-blue-300"
      >
        <span class="mr-2 text-lg">⚙️</span>
        건강 연동 설정하기
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

/* 딜레이 순차 애니메이션 */
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
