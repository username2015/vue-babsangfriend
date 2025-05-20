<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50 flex flex-col items-center pt-32 pb-20 px-4"
  >
    <!-- 메인 카드 -->
    <div
      class="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-12 max-w-lg w-full mb-12 flex flex-col items-center animate-fade-in-up"
    >
      <span class="text-6xl mb-3">📱</span>
      <h1 class="text-3xl font-extrabold text-green-700 mb-2">앱 다운로드</h1>
      <p class="text-lg text-gray-800 mb-6 text-center">
        <span class="font-bold">밥상친구</span> 앱을 지금 바로 다운로드해서<br />
        건강하고 편리한 식탁 생활을 시작해보세요!
      </p>
      <a
        href="/apk/babsangfriend.apk"
        download
        class="bg-orange-500 text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 hover:text-blue-200 transition"
      >
        APK 다운로드
      </a>
      <p class="text-sm text-gray-600 mt-2">
        Android 폰에서만 설치가 가능합니다.
      </p>
      <!-- 여기에 원하면 스크린샷, 사용법 등 추가 가능 -->
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
</style>
