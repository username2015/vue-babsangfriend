<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50 flex flex-col items-center pt-32 pb-20 px-4"
  >
    <div
      class="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-12 max-w-lg w-full mb-12 flex flex-col items-center animate-fade-in-up"
    >
      <span class="text-6xl mb-3">📱</span>
      <h1 class="text-3xl font-extrabold text-green-700 mb-2">밥상친구 앱</h1>
      <p class="text-lg text-gray-800 mb-6 text-center">
        건강하고 편리한 식탁 생활을 시작해보세요!<br />
        아래 버튼을 눌러 앱을 지금 바로 설치하세요.
      </p>
      <a
        href="/apk/babsangfriend.apk"
        download
        class="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        📥 앱 다운로드
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 경우 Header/Footer import
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-in-out;
}
</style>
