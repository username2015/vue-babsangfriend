<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-green-100 flex flex-col items-center py-12 px-4"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">🧊</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow"
        >
          냉장고 관리
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2 text-center">
        유통기한 임박 재료와 장기 미사용 재료를 <br />
        편리하게 확인하고 알림을 받아보세요.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">⏰</span>
        <h2 class="text-xl font-semibold text-blue-800">유통기한 알림</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          곧 유통기한이 다가오는 재료를 미리 알려드려요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">📦</span>
        <h2 class="text-xl font-semibold text-blue-800">장기 미사용 재료</h2>
        <p class="text-gray-600 mt-2 text-sm text-center">
          오래 사용하지 않은 재료들을 한눈에 확인하세요.
        </p>
      </div>
    </div>

    <div class="mt-12">
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
  animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.animate-fade-in {
  animation: fade-in-up 1.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
