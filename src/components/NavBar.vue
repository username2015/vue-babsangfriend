<template>
  <nav
    class="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-gray-700 shadow-md transition-all"
  >
    <div
      ref="navContainer"
      class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16 relative"
    >
      <router-link to="/" class="flex items-center space-x-2">
        <span
          class="text-2xl font-bold text-purple-700 dark:text-purple-300 tracking-tight hover:text-purple-900 dark:hover:text-white transition-all duration-300"
        >
          🍽️ 밥상친구
        </span>
      </router-link>

      <button
        class="md:hidden text-2xl text-purple-800 dark:text-purple-200 focus:outline-none transition-transform hover:scale-110"
        @click="menuOpen = !menuOpen"
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <div
        class="hidden md:flex items-center gap-4 relative"
        ref="linkContainer"
      >
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-item px-4 py-2 rounded-md text-sm font-semibold relative z-10 text-gray-700 dark:text-gray-200 hover:text-purple-900 dark:hover:text-purple-300"
          active-class="font-bold text-purple-900 dark:text-white"
          @click="updateHighlight"
        >
          {{ item.label }}
        </router-link>

        <div
          class="absolute bottom-0 h-1 bg-purple-500 rounded-full transition-all duration-300 ease-in-out"
          :style="highlightStyle"
        ></div>
      </div>
    </div>

    <transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-white dark:bg-gray-900 px-6 py-4 border-t border-purple-100 dark:border-gray-700 space-y-2 animate__animated animate__fadeInDown"
      >
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          @click="menuOpen = false"
          class="block py-2 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-900 dark:hover:text-purple-300 transition-all duration-300"
          active-class="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-white font-bold"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>

  <div class="h-16"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, Ref, CSSProperties } from 'vue';
import { useRouter } from 'vue-router';

// 네비게이션 아이템 타입 정의
interface NavItem {
  to: string;
  label: string;
}

const menuOpen: Ref<boolean> = ref(false);

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/download', label: 'Download' },
  { to: '/faq', label: 'FAQ' },
  { to: '/testimonial', label: 'Testimonials' },
  { to: '/tech', label: 'Tech' },
  { to: '/devstory', label: 'Dev Story' },
  { to: '/contact', label: 'Contact' },
];

const highlightStyle: Ref<CSSProperties> = ref<CSSProperties>({
  left: '0px',
  width: '0px',
  opacity: '0', // 초기에는 보이지 않도록 설정
});

// _navContainer로 변경하거나 제거하는 것을 고려해볼 수 있습니다 (현재 스크립트에서 사용 안 함).
const navContainer: Ref<HTMLElement | null> = ref(null);
const linkContainer: Ref<HTMLElement | null> = ref(null);

const router = useRouter();

function updateHighlight(): void {
  nextTick(() => {
    const activeLink = linkContainer.value?.querySelector(
      '.router-link-exact-active'
    ) as HTMLElement | null;

    if (activeLink && linkContainer.value) {
      const containerLeft = linkContainer.value.getBoundingClientRect().left;
      const linkRect = activeLink.getBoundingClientRect();
      const left = linkRect.left - containerLeft;
      const width = linkRect.width;

      highlightStyle.value = {
        left: `${left}px`,
        width: `${width}px`,
        opacity: '1', // 활성 링크가 있으면 보이도록 설정
      };
    } else {
      // 활성 링크가 없을 경우 하이라이트 바를 숨김
      highlightStyle.value = {
        ...highlightStyle.value, // left, width는 이전 값을 유지할 수 있으나,
        opacity: '0', // 투명하게 만들어 보이지 않게 함.
        // 또는 left: '0px', width: '0px'로 초기화도 가능.
      };
    }
  });
}

onMounted(() => {
  // Vue 라우터가 준비된 후 초기 하이라이트 설정
  router.isReady().then(() => {
    updateHighlight();
  });

  router.afterEach(() => {
    updateHighlight(); // 페이지 이동 시마다 하이라이트 업데이트
  });
});
</script>

<style scoped>
/* animate.css 임포트는 CSS 규칙상 가장 위에 위치해야 합니다. */
/* (프로젝트에 animate.css가 설치되어 있고, 빌드 도구에서 CSS 임포트를 지원해야 합니다.) */
@import 'animate.css';

/* 슬라이드 애니메이션 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* 하이라이트 애니메이션을 위해 nav-item에 position: relative 설정 */
.nav-item {
  position: relative;
  z-index: 10; /* 하이라이트 바 위에 텍스트가 오도록 함 */
}

/* 전역 스크롤 부드럽게 */
:global(html) {
  scroll-behavior: smooth;
}
</style>
