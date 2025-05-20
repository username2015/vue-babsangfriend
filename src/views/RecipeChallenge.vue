<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 flex flex-col items-center py-12 px-4"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">🏆</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-pink-700 tracking-tight drop-shadow"
        >
          레시피 챌린지
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2">
        요리 챌린지에 참여하고, <br />
        랭킹 보상과 뱃지를 모아보세요!
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🎯</span>
        <h2 class="text-xl font-semibold text-pink-800">주간 미션</h2>
        <p class="text-gray-600 mt-2 text-sm">
          정해진 미션 요리를 완성하고 주간 뱃지를 획득하세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🥇</span>
        <h2 class="text-xl font-semibold text-pink-800">랭킹 시스템</h2>
        <p class="text-gray-600 mt-2 text-sm">
          친구들과 순위 경쟁, 나만의 기록을 세워보세요!
        </p>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/download"
        class="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:ring-2 focus:ring-pink-300"
      >
        <span class="mr-2 text-lg">🔥</span>
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
