<script setup lang="ts">
import GallerySlider from '@/components/GallerySlider.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white flex flex-col items-center pt-28 pb-24 px-4">
    
    <!-- 다운로드 카드 -->
    <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-lg w-full flex flex-col items-center text-center animate-fade-in-up">
      <span class="text-6xl mb-4">📱</span>
      <h1 class="text-3xl font-bold text-green-700 mb-2">앱 다운로드</h1>
      <p class="text-base text-gray-700 mb-6 leading-relaxed">
        <strong>밥상친구</strong> 앱을 설치하고<br />
        건강한 식탁 관리를 지금 시작해보세요!
      </p>
      <a
        href="/apk/app-debug.apk"
        download
        class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 14a1 1 0 011-1h3v-4a1 1 0 012 0v4h3a1 1 0 010 2H6a1 1 0 01-1-1z" />
          <path d="M7 3a1 1 0 012 0v8a1 1 0 01-2 0V3z" />
        </svg>
        Android APK 다운로드
      </a>
    </div>

    <!-- 갤러리 슬라이더 컴포넌트 -->
    <GallerySlider />

    <!-- 설치 가이드 -->
    <div class="mt-20 max-w-2xl w-full text-left text-sm text-gray-800 bg-white rounded-xl p-6 shadow-md animate-fade-in-up delay-700">
      <h2 class="text-lg font-semibold text-green-700 mb-3">📌 설치 가이드</h2>
      <ol class="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
        <li><strong>APK 다운로드</strong> 버튼을 눌러 앱 파일을 저장합니다.</li>
        <li>다운로드가 완료되면 알림창 또는 파일 앱에서 해당 파일을 실행합니다.</li>
        <li><strong>“이 출처의 앱 설치 허용”</strong> 메시지가 뜨면 허용을 눌러주세요.</li>
        <li>설치가 완료되면 홈 화면에 생성된 아이콘을 통해 앱을 실행할 수 있습니다.</li>
      </ol>
      <p class="text-xs mt-4 text-gray-500">
        * 구글 플레이 스토어 외부 앱 설치 시 보안 경고가 나타날 수 있습니다.<br />
        * 설치가 되지 않을 경우 설정 &gt; 보안 &gt; “알 수 없는 앱 허용” 항목을 확인하세요.
      </p>
    </div>
  </div>
</template>
