<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-6">
    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-purple-800 drop-shadow-sm">
        자주 묻는 질문
      </h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구 앱을 사용하면서 자주 나오는 질문들을 정리했습니다.
      </p>

      <!-- FAQ 리스트 -->
      <div class="mt-12 space-y-4 w-full text-left">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white border-l-4 border-orange-400 rounded-xl shadow-md hover:shadow-lg p-6 cursor-pointer transition-all duration-200 transform hover:scale-[1.01]"
          @click="toggle(index)"
        >
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </h2>
            <span
              class="text-2xl font-bold text-orange-500 transition-transform duration-200"
              :class="{ 'rotate-180': faq.open }"
            >
              {{ faq.open ? '−' : '+' }}
            </span>
          </div>
          <transition name="slidefade">
            <p
              v-show="faq.open"
              class="mt-4 text-gray-700 text-sm leading-relaxed"
            >
              {{ faq.answer }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const faqs = ref([
  {
    question: '앱은 어디서 다운로드할 수 있나요?',
    answer: "상단의 '앱 다운로드' 페이지를 참고해주세요.",
    open: false,
  },
  {
    question: 'AI 추천 기능은 어떻게 작동하나요?',
    answer: '사용자의 선호 데이터를 기반으로 추천합니다.',
    open: false,
  },
  {
    question: '건강 연동은 어떤 방식으로 하나요?',
    answer: 'Google Health Connect와 연동하여 걸음 수 등을 분석합니다.',
    open: false,
  },
  {
    question: '앱 사용 중 문제가 발생하면 어떻게 하나요?',
    answer: '문의 페이지를 통해 연락주세요.',
    open: false,
  },
  {
    question: '개발자에게 직접 피드백을 줄 수 있나요?',
    answer: '네, 피드백 페이지를 통해 가능합니다.',
    open: false,
  },
]);

function toggle(index: number) {
  faqs.value[index].open = !faqs.value[index].open;
}
</script>

<style scoped>
.slidefade-enter-active,
.slidefade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slidefade-enter-from,
.slidefade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}
.slidefade-enter-to,
.slidefade-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}
</style>
