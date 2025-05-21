<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <div
      class="max-w-screen-md mx-auto text-center flex flex-col items-center gap-10 py-14 px-4"
    >
      <!-- 제목 -->
      <div>
        <h1 class="text-5xl font-bold text-purple-800 drop-shadow">
          문의 및 연락처
        </h1>
        <p class="text-lg text-gray-700 mt-3 leading-relaxed">
          밥상친구 앱에 대한 질문이나 피드백이 있으신가요?<br />
          아래 정보를 통해 언제든지 연락해주세요.
        </p>
      </div>

      <!-- 이메일 카드 -->
      <div
        class="bg-white border-l-4 border-purple-400 shadow-md rounded-2xl p-6 w-full sm:w-96 hover:shadow-xl hover:scale-105 transition-all"
      >
        <h2
          class="text-xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2"
        >
          📧 이메일 주소
        </h2>
        <button
          @click="copyEmail"
          class="text-orange-600 underline hover:text-orange-800 transition"
        >
          {{ email }}
        </button>
        <p v-if="copied" class="text-xs text-green-600 mt-2">복사되었습니다!</p>
      </div>

      <!-- 발표 일정 카드 -->
      <div
        class="bg-white border-l-4 border-purple-400 shadow-md rounded-2xl p-6 w-full sm:w-96 hover:shadow-xl hover:scale-105 transition-all"
      >
        <h2
          class="text-xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2"
        >
          📅 졸업작품 발표 일정
        </h2>
        <p class="text-gray-600 mb-4">
          2025.06.26 (목) 오후 1시 ~ 3시<br />
          장소: 잘모름 / 시연 가능
        </p>

        <!-- 더 눈에 띄는 구글 캘린더 버튼 -->
        <a
          :href="calendarUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 text-base bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 mt-2 rounded-full shadow-lg transition-all duration-200"
        >
          📅 Google 캘린더에 일정 추가
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 이메일 복사 기능
const email = 'babsangfriend@email.com';
const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText(email).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
}

// 구글 캘린더 URL 생성
const calendarUrl =
  'https://www.google.com/calendar/render?action=TEMPLATE' +
  '&text=밥상친구+졸업작품+발표' +
  '&dates=20250626T050000Z/20250626T060000Z' + // UTC 기준: 14:00~15:00 KST
  '&details=밥상친구+앱+시연+및+발표' +
  '&location=본관+302호' +
  '&sf=true&output=xml';
</script>

<style scoped>
/* 필요 시 스타일 추가 가능 */
</style>
