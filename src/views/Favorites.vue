<template>
  <div
    class="min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-yellow-100 flex flex-col items-center py-12 px-4"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-xl w-full animate-fade-in-up"
    >
      <div class="flex items-center justify-center mb-4">
        <span class="text-5xl mr-2">💾</span>
        <h1
          class="text-3xl md:text-4xl font-extrabold text-red-700 tracking-tight drop-shadow"
        >
          즐겨찾기 저장
        </h1>
      </div>
      <p class="text-lg text-gray-700 mt-2">
        마음에 드는 레시피는 언제든 저장! <br />
        나만의 레시피북을 만들 수 있어요.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl animate-fade-in"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">📖</span>
        <h2 class="text-xl font-semibold text-red-800">나만의 컬렉션</h2>
        <p class="text-gray-600 mt-2 text-sm">
          내가 저장한 레시피를 한눈에 관리하세요.
        </p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
      >
        <span class="text-4xl mb-2">❤️</span>
        <h2 class="text-xl font-semibold text-red-800">간편한 추가/삭제</h2>
        <p class="text-gray-600 mt-2 text-sm">
          원하는 레시피만 손쉽게 추가/삭제 가능합니다.
        </p>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/download"
        class="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:ring-2 focus:ring-red-300"
      >
        <span class="mr-2 text-lg">💾</span>
        내 즐겨찾기 보러가기
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
