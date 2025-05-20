<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 flex flex-col items-center py-12 px-4"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">❤️</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow"
        >
          건강 연동
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2">
        헬스커넥트, 스마트워치 등과 연동해 <br />
        나의 건강 기록도 함께 관리하세요!
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🏃‍♂️</span>
        <h2 class="text-xl font-semibold text-blue-800">걸음수/활동량</h2>
        <p class="text-gray-600 mt-2 text-sm">
          내 건강 데이터를 바탕으로 맞춤 레시피를 추천받으세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">🥦</span>
        <h2 class="text-xl font-semibold text-blue-800">건강관리 팁</h2>
        <p class="text-gray-600 mt-2 text-sm">
          식단, 운동 등 건강관리에 도움되는 정보를 함께 제공합니다.
        </p>
      </div>
    </div>

    <div class="mt-12">
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
  animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.animate-fade-in {
  animation: fade-in-up 1.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
