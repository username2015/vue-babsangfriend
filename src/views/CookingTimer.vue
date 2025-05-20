<template>
  <div
    class="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-purple-100 flex flex-col items-center py-12 px-4"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">⏲️</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-orange-700 tracking-tight drop-shadow"
        >
          요리 타이머
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2">
        레시피별로 타이머를 설정해 놓으면, <br />
        알림으로 조리 타이밍을 알려드립니다!
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🍳</span>
        <h2 class="text-xl font-semibold text-orange-800">계란 프라이</h2>
        <p class="text-gray-600 mt-2 text-sm">
          딱 3분! 타이머로 노른자 반숙을 완성해보세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🥘</span>
        <h2 class="text-xl font-semibold text-orange-800">된장찌개</h2>
        <p class="text-gray-600 mt-2 text-sm">
          끓이기/졸이기 타이머를 각각 맞춰 완벽한 국물맛을!
        </p>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/download"
        class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:ring-2 focus:ring-orange-300"
      >
        <span class="mr-2 text-lg">⏲️</span>
        내 요리 타이머 시작하기
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
  animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.animate-fade-in {
  animation: fade-in-up 1.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
