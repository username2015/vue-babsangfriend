<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />

    <div
      class="max-w-screen-md mx-auto text-center flex flex-col items-center gap-8 py-14"
    >
      <!-- 제목 -->
      <div>
        <h1 class="text-5xl font-bold text-orange-800">문의 및 연락처</h1>
        <p class="text-lg text-gray-700 mt-2">
          밥상친구 앱에 대한 질문이나 피드백이 있으신가요?<br />
          아래 정보를 참고해주세요.
        </p>
      </div>

      <!-- 이메일 카드 -->
      <div
        class="bg-white shadow-lg rounded-xl p-6 w-full sm:w-96 hover:scale-105 transition-transform"
      >
        <h2 class="text-xl font-bold mb-2">📧 이메일 주소</h2>
        <p class="text-gray-700">example@email.com</p>
      </div>

      <!-- 일정 카드 -->
      <div
        class="bg-white shadow-lg rounded-xl p-6 w-full sm:w-96 hover:scale-105 transition-transform"
      >
        <h2 class="text-xl font-bold mb-2">📅 졸업작품 발표 일정</h2>
        <p class="text-gray-700">2025.06.05 / 장소: 본관 302호 / 시연 가능</p>
      </div>

      <!-- 구글폼 카드 -->
      <div
        class="bg-white shadow-lg rounded-xl p-6 w-full sm:w-96 hover:scale-105 transition-transform"
      >
        <h2 class="text-xl font-bold mb-4">📋 피드백 남기기</h2>
        <a
          href="https://forms.gle/sample"
          target="_blank"
          rel="noopener"
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          구글폼 작성하기
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
/* 필요 시 추가 스타일 작성 */
</style>
