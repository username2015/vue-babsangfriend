<template>
  <div class="relative w-full max-w-[640px] mx-auto overflow-hidden animate-fade-in-up delay-500">
    <!-- 스마트폰 갤러리 컨테이너 -->
    <div class="relative flex items-center justify-center gap-4 w-max mx-auto">
      <div
        v-for="(item, i) in images"
        :key="item.id"
        class="transition-all duration-700 ease-in-out flex-shrink-0 rounded-[2rem] overflow-hidden"
        :class="i === currentIndex ? 'w-[140px] h-[280px] opacity-100 scale-100 z-10' : 'w-[110px] h-[220px] opacity-40 scale-90 z-0'"
      >
        <div class="relative w-full h-full bg-black rounded-[2rem] shadow-xl border-2 border-gray-800 flex items-center justify-center">
          <!-- 상단 스피커 슬롯 -->
          <div class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full z-10"></div>
          
          <!-- 이미지 -->
          <img
            :src="`/screenshots/screen_${item.id}.png`"
            alt="앱 스크린샷"
            class="rounded-[1rem] object-contain"
            style="width: 120px; height: 213px; max-width: 100%; max-height: 100%;"
          />
        </div>
      </div>
    </div>

    <!-- 설명 카드 -->
    <transition name="fade" mode="out-in">
      <div
        :key="images[currentIndex].title"
        class="mt-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md w-max max-w-xs mx-auto text-center"
      >
        <h3 class="text-base font-bold text-gray-800 mb-2">{{ images[currentIndex].title }}</h3>
        <p class="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{{ images[currentIndex].description }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)

const images = [
  {
    id: 1,
    title: '홈 화면',
    description: '앱 실행 후 첫 화면으로,\n식단 요약과 추천 메뉴를 보여줍니다.',
  },
  {
    id: 2,
    title: '로그인 화면',
    description: '이메일과 비밀번호로 로그인할 수 있습니다.\n자동 로그인 기능도 제공돼요.',
  },
  {
    id: 3,
    title: 'AI 추천',
    description: '사용자 정보를 기반으로 AI가 식단을 추천해줍니다.\n직관적인 레이아웃과 카드 뷰 구성.',
  },
  {
    id: 4,
    title: '커뮤니티',
    description: '식단과 레시피 관련 이야기를 나눌 수 있어요.\n댓글, 좋아요, 조회수 기능도 포함.',
  },
  {
    id: 5,
    title: '레시피 저장소',
    description: '마음에 드는 레시피를 저장하고\n언제든 다시 열람할 수 있습니다.',
  },
]

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
