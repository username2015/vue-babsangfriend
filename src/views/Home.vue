<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- 배경 그라데이션 레이어 1 -->
    <div
      class="absolute inset-0 bg-layer"
      :style="{ background: backgrounds[0].bg, opacity: 1 - blendWeight }"
    ></div>

    <!-- 배경 그라데이션 레이어 2 -->
    <div
      class="absolute inset-0 bg-layer"
      :style="{ background: backgrounds[1].bg, opacity: blendWeight }"
    ></div>

    <!-- 마스크 흐름 레이어 -->
    <div
      class="absolute inset-0 bg-layer mask-layer pointer-events-none"
      :style="{ transform: maskTransform }"
    ></div>

    <!-- 콘텐츠 -->
    <div class="relative z-10 p-4">
      <HeroSection />

      <div class="max-w-screen-md mx-auto text-center py-14 px-4">
        <h1
          class="text-6xl font-extrabold tracking-tight mb-4 transition-all duration-700"
          :class="currentTextStyle"
        >
          주요 기능 안내
        </h1>
        <p class="text-lg mb-10 transition-all duration-700" :class="currentTextStyle">
          밥상친구 앱에서 제공하는 다양한 기능을 소개합니다.
        </p>

      <!-- 기능 카드들 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧠</span>
          <h2 class="text-2xl font-semibold text-gray-800">AI 추천 레시피</h2>
          <p class="text-sm text-gray-600 mt-1">
            개인 맞춤형 레시피를 제공합니다.
          </p>
          <router-link
            to="/ai-recipe"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">⏲️</span>
          <h2 class="text-2xl font-semibold text-gray-800">요리 타이머</h2>
          <p class="text-sm text-gray-600 mt-1">
            정확한 요리 시간을 제공합니다.
          </p>
          <router-link
            to="/cooking-timer"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🏆</span>
          <h2 class="text-2xl font-semibold text-gray-800">레시피 챌린지</h2>
          <p class="text-sm text-gray-600 mt-1">
            다양한 요리 챌린지에 참여하세요.
          </p>
          <router-link
            to="/recipe-challenge"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧑‍🍳</span>
          <h2 class="text-2xl font-semibold text-gray-800">순서별 조리법</h2>
          <p class="text-sm text-gray-600 mt-1">
            단계별로 쉽게 따라할 수 있습니다.
          </p>
          <router-link
            to="/step-by-step"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">🧊</span>
          <h2 class="text-2xl font-semibold text-gray-800">냉장고 관리</h2>
          <p class="text-sm text-gray-600 mt-1">
            유통기한 임박 재료나 장기 미사용 재료를 확인하세요.
          </p>
          <router-link
            to="/fridge"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
          >
            자세히 보기
          </router-link>
        </div>

        <div
          class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
        >
          <span class="text-5xl mb-2">❤️</span>
          <h2 class="text-2xl font-semibold text-gray-800">건강 연동</h2>
          <p class="text-sm text-gray-600 mt-1">
            헬스커넥트와 연동하여 건강을 관리하세요.
          </p>
          <router-link
            to="/health-integration"
            class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >자세히 보기</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'

const features = [
  { icon: '🧠', title: 'AI 추천 레시피', description: '개인 맞춤형 레시피를 제공합니다.', link: '/ai-recipe' },
  { icon: '⏲️', title: '요리 타이머', description: '정확한 요리 시간을 제공합니다.', link: '/cooking-timer' },
  { icon: '🏆', title: '레시피 챌린지', description: '다양한 요리 챌린지에 참여하세요.', link: '/recipe-challenge' },
  { icon: '🧑‍🍳', title: '순서별 조리법', description: '단계별로 쉽게 따라할 수 있습니다.', link: '/step-by-step' },
  { icon: '🧊', title: '냉장고 관리', description: '유통기한 임박 재료나 장기 미사용 재료를 확인하세요.', link: '/fridge' },
  { icon: '❤️', title: '건강 연동', description: '헬스커넥트와 연동하여 건강을 관리하세요.', link: '/health-integration' },
]

// 두 개의 배경
const backgrounds = [
  { bg: 'linear-gradient(to right, #e3f2fd, #ffffff)' }, // 연하늘 → 흰색
  { bg: 'linear-gradient(to right, #ffe8f2, #eae6ff)' }, // 연핑크 → 연보라
]

const blendWeight = ref(0)
const maskTransform = ref('translateX(0%)')
const currentTextStyle = computed(() => {
  return blendWeight.value < 0.5 ? 'text-purple-900' : 'text-pink-800'
})

function animateIn(entries: IntersectionObserverEntry[], el: Element) {
  const [entry] = entries
  if (entry.isIntersecting) {
    el.classList.add('animate-fade-slide')
    el.classList.remove('opacity-0', 'translate-y-8')
  }
}

const handleScroll = () => {
  const ratio = window.scrollY / window.innerHeight
  blendWeight.value = Math.min(Math.max(ratio, 0), 1)
  maskTransform.value = `translateX(${Math.min(ratio * 50, 100)}%)`
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.bg-layer {
  transition: opacity 1s ease, transform 1s ease;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

.mask-layer {
  mix-blend-mode: overlay;
  mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
  mask-repeat: no-repeat;
  mask-size: 200% 100%;
  opacity: 0.7;
}

@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-slide {
  animation: fade-slide 0.9s ease-out forwards;
}

:global(html) {
  scroll-behavior: smooth;
}
</style>
