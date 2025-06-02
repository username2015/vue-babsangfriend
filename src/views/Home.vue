<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      class="absolute inset-0 bg-layer"
      :style="{ background: backgrounds[0].bg, opacity: 1 - blendWeight }"
    ></div>

    <div
      class="absolute inset-0 bg-layer"
      :style="{ background: backgrounds[1].bg, opacity: blendWeight }"
    ></div>

    <div class="container mx-auto px-4 py-16 text-center relative z-10">
      <h1
        class="text-4xl font-bold mb-4 transition-all duration-700 text-gray-800"
        :class="currentTextStyle"
      >
        주요 기능 안내
      </h1>
      <p
        class="text-lg mb-10 transition-all duration-700"
        :class="currentTextStyle"
      >
        밥상친구 앱에서 제공하는 다양한 기능을 소개합니다.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-6 hover:scale-[1.03] hover:shadow-purple-300/60 transition-all duration-500 flex flex-col items-center text-center opacity-0 translate-y-8"
          v-intersect="(entries, _observer, el) => animateIn(entries, el)"
        >
          <span class="text-5xl mb-3" aria-hidden="true">{{
            feature.icon
          }}</span>
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">
            {{ feature.title }}
          </h2>
          <p class="text-sm text-gray-600 mb-4">{{ feature.description }}</p>
          <router-link
            :to="feature.link"
            class="mt-auto bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-colors shadow-md"
          >
            자세히 보기
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
// import HeroSection from '@/components/HeroSection.vue' // 미사용으로 주석 처리 또는 삭제

const features = [
  {
    icon: '🧠',
    title: 'AI 추천 레시피',
    description: '개인 맞춤형 레시피를 제공합니다.',
    link: '/ai-recipe',
  },
  {
    icon: '⏲️',
    title: '요리 타이머',
    description: '정확한 요리 시간을 제공합니다.',
    link: '/cooking-timer',
  },
  {
    icon: '🏆',
    title: '레시피 챌린지',
    description: '다양한 요리 챌린지에 참여하세요.',
    link: '/recipe-challenge',
  },
  {
    icon: '🧑‍🍳',
    title: '순서별 조리법',
    description: '단계별로 쉽게 따라할 수 있습니다.',
    link: '/step-by-step',
  },
  {
    icon: '🧊',
    title: '냉장고 관리',
    description: '유통기한 임박 재료나 장기 미사용 재료를 확인하세요.',
    link: '/fridge',
  },
  {
    icon: '❤️',
    title: '건강 연동',
    description: '헬스커넥트와 연동하여 건강을 관리하세요.',
    link: '/health-integration',
  },
];

// 두 개의 배경
const backgrounds = [
  { bg: 'linear-gradient(to right, #e3f2fd, #ffffff)' }, // 연하늘 → 흰색
  { bg: 'linear-gradient(to right, #ffe8f2, #eae6ff)' }, // 연핑크 → 연보라
];

const blendWeight = ref(0);
// maskTransform은 현재 템플릿에서 사용되지 않으므로, 필요 없다면 삭제 가능합니다.
// const maskTransform = ref('translateX(0%)')
const currentTextStyle = computed(() => {
  return blendWeight.value < 0.5 ? 'text-purple-900' : 'text-pink-800';
});

function animateIn(entries: IntersectionObserverEntry[], el: Element) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    el.classList.add('animate-fade-slide');
    el.classList.remove('opacity-0', 'translate-y-8');
  }
}

const handleScroll = () => {
  const ratio = window.scrollY / window.innerHeight;
  blendWeight.value = Math.min(Math.max(ratio, 0), 1);
  // maskTransform.value = `translateX(${Math.min(ratio * 50, 100)}%)` // maskTransform 사용 시 주석 해제
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.bg-layer {
  transition: opacity 1s ease, transform 1s ease; /* transform은 현재 사용되지 않음 */
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1; /* 배경이므로 콘텐츠 뒤에 오도록 함 */
}

/* .mask-layer {  // 미사용으로 주석 처리 또는 삭제
  mix-blend-mode: overlay;
  mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
  mask-repeat: no-repeat;
  mask-size: 200% 100%;
  opacity: 0.7;
} */

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
