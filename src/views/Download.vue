<template>
  <div
    class="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white flex flex-col items-center pt-28 pb-20 px-4"
  >
    <!-- 앱 다운로드 카드 -->
    <div
      class="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center text-center animate-fade-in-up"
    >
      <span class="text-6xl mb-4">📱</span>
      <h1 class="text-3xl font-bold text-green-700 mb-2">앱 다운로드</h1>
      <p class="text-lg text-gray-700 mb-6">
        <span class="font-semibold">밥상친구</span> 앱을 설치하고<br />
        건강한 식탁 관리를 시작해보세요!
      </p>

      <!-- 다운로드 버튼 -->
      <a
        href="/apk/babsangfriend.apk"
        download
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
      >
        Android APK 다운로드
      </a>
    </div>

    <!-- 스크린샷 예시 -->
    <div
      class="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-up delay-500"
    >
      <div
        v-for="n in 3"
        :key="n"
        class="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <img
          :src="`/screenshots/screen${n}.png`"
          alt="앱 스크린샷"
          class="w-full object-cover"
        />
      </div>
    </div>
    <!-- 설치 가이드 -->
    <div
      class="mt-20 max-w-2xl text-left text-sm text-gray-700 bg-white rounded-xl p-6 shadow-md animate-fade-in-up delay-700"
    >
      <h2 class="text-lg font-semibold text-green-700 mb-2">📌 설치 가이드</h2>
      <ol class="list-decimal list-inside space-y-1">
        <li>위의 <strong>APK 다운로드</strong> 버튼을 눌러 앱을 저장하세요.</li>
        <li>다운로드 완료 후 알림창 또는 파일 앱에서 APK를 실행합니다.</li>
        <li>
          <strong>“이 출처의 앱 설치 허용”</strong> 메시지가 나오면
          허용해주세요.
        </li>
        <li>설치가 완료되면 홈 화면에서 앱을 실행할 수 있어요.</li>
      </ol>
      <p class="text-xs mt-4 text-gray-500">
        * 구글 플레이 스토어에 등록되지 않은 앱은 보안 경고가 나타날 수
        있습니다.<br />
        * 설치가 되지 않으면 설정 &gt; 보안 &gt; “알 수 없는 앱 허용” 항목을
        확인해주세요.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 없음
</script>

<style scoped>
@keyframes fadeInUp {
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
  animation: fadeInUp 0.8s ease-out both;
}

.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.delay-700 {
  animation-delay: 0.7s;
}
</style>
