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

    <div
      class="absolute inset-0 bg-layer mask-layer pointer-events-none"
      :style="{ transform: maskTransform, zIndex: 0 }"
    ></div>

    <div class="relative z-10 p-4">
      <HeroSection />

      <div class="max-w-screen-md mx-auto text-center py-14 px-4">
        <h1
          class="text-6xl font-extrabold tracking-tight mb-4 transition-all duration-700"
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
            v-for="feature in features"
            :key="feature.title"
            class="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-6 hover:scale-[1.03] hover:shadow-purple-300/60 transition-all duration-500 flex flex-col items-center text-center opacity-0 translate-y-8"
            v-intersect="(entries, observer, el) => animateIn(entries, observer, el as HTMLElement)"
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
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  Ref,
  ComputedRef,
} from 'vue';
// HeroSection 컴포넌트의 정확한 경로를 확인해주세요.
import HeroSection from '@/components/HeroSection.vue';

// TypeScript 타입 정의로 코드 안정성 향상
interface Feature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface BackgroundItem {
  bg: string;
}

const features: Feature[] = [
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

const backgrounds: BackgroundItem[] = [
  { bg: 'linear-gradient(to right, #e3f2fd, #ffffff)' }, // 연하늘 → 흰색
  { bg: 'linear-gradient(to right, #ffe8f2, #eae6ff)' }, // 연핑크 → 연보라
];

const blendWeight: Ref<number> = ref(0);
const maskTransform: Ref<string> = ref('translateX(0%)');

const currentTextStyle: ComputedRef<string> = computed(() => {
  return blendWeight.value < 0.5 ? 'text-purple-900' : 'text-pink-800';
});

/**
 * IntersectionObserver 콜백 함수. 요소가 화면에 나타나면 애니메이션 클래스를 추가합니다.
 * @param entries IntersectionObserverEntry 객체의 배열
 * @param observer IntersectionObserver 인스턴스 (필요시 요소 관찰 중지 등에 사용)
 * @param el 감시 대상 HTML 요소 (HTMLElement로 타입 지정 권장)
 */
function animateIn(
  entries: IntersectionObserverEntry[],
  _observer: IntersectionObserver, // observer를 명시적으로 받도록 수정 (사용하지 않더라도)
  el: HTMLElement // Element 대신 HTMLElement로 구체화하여 타입 안정성 향상
): void {
  const entry = entries[0]; // 일반적으로 첫 번째 entry를 사용
  if (entry.isIntersecting) {
    el.classList.add('animate-fade-slide');
    el.classList.remove('opacity-0', 'translate-y-8');

    // 선택 사항: 애니메이션이 한 번만 실행되도록 하려면 관찰 중지
    // observer.unobserve(el);
  }
}

const handleScroll = (): void => {
  // window.innerHeight가 0인 경우를 대비 (매우 드물지만)
  const currentWindowHeight = window.innerHeight || 1;
  const ratio = window.scrollY / currentWindowHeight;

  blendWeight.value = Math.min(Math.max(ratio, 0), 1);
  maskTransform.value = `translateX(${Math.min(ratio * 50, 100)}%)`;
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
  transition: opacity 1s ease, transform 1s ease;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1; /* 배경이므로 콘텐츠 뒤에 위치 */
}

.mask-layer {
  mix-blend-mode: overlay; /* 오버레이 블렌드 모드 */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 30%,
    black 70%,
    transparent
  ); /* 마스크 이미지 그라데이션 */
  mask-repeat: no-repeat; /* 마스크 반복 없음 */
  mask-size: 200% 100%; /* 마스크 크기 (가로 200%) */
  opacity: 0.7; /* 전체 투명도 */
  /* z-index: 0; /* 배경보다는 위, 콘텐츠보다는 아래에 위치하도록 명시적 설정 권장 */
  /* pointer-events-none은 template에서 이미 적용됨 */
}

@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(32px); /* 2rem */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-slide {
  animation: fade-slide 0.9s ease-out forwards;
}

/* 전역 스타일로 부드러운 스크롤 효과 (이미 적용되어 있음) */
:global(html) {
  scroll-behavior: smooth;
}
</style>
