<template>
  <div class="min-h-screen bg-yellow-100 p-4 overflow-hidden">
    <div class="max-w-screen-xl mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-purple-800 drop-shadow-sm">유저 후기</h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구를 사용한 사람들의 생생한 리뷰를 확인해보세요.
      </p>

      <!-- 슬라이더 영역 -->
      <div class="relative mt-10 overflow-hidden">
        <!-- 흐림 효과 -->
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-yellow-100 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-yellow-100 to-transparent z-10 pointer-events-none"></div>

        <!-- 슬라이더 -->
        <div ref="sliderRef" class="flex gap-6 w-max px-4 will-change-transform">
          <div
            v-for="(review, index) in [...reviews, ...reviews]"
            :key="index"
            ref="cards"
            class="review-card bg-white border border-yellow-200 rounded-2xl p-6 text-center w-72 shrink-0 transition-all duration-300"
          >
            <img
              :src="review.image"
              alt="User"
              class="w-20 h-20 rounded-full object-cover ring-2 ring-purple-300 mx-auto mb-3"
            />
            <h2 class="text-lg font-semibold text-gray-900">{{ review.name }}</h2>

            <!-- 별점 -->
            <div class="text-yellow-400 text-base mt-1">
              <span v-for="i in 5" :key="i">
                <span v-if="i <= review.rating">★</span>
                <span v-else class="text-gray-300">★</span>
              </span>
            </div>

            <p class="mt-3 text-sm text-gray-700 leading-relaxed line-clamp-4">
              {{ review.comment }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reviews } from '@/data/reviews'
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const sliderRef = ref<HTMLDivElement | null>(null)
const cards = ref<HTMLElement[]>([])

onMounted(async () => {
  await nextTick()
  const el = sliderRef.value
  if (!el) return

  // 자동 슬라이드 (loop)
  const totalWidth = el.scrollWidth / 2
  gsap.to(el, {
    x: `-=${totalWidth}`,
    duration: 60,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
    onUpdate: animateDepth,
  })

  function animateDepth() {
    const centerX = window.innerWidth / 2
    cards.value.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const dist = Math.abs(centerX - cardCenter)

      const maxDist = window.innerWidth / 2
      const norm = 1 - Math.min(dist / maxDist, 1) // 1 (중앙) → 0 (끝)

      const scale = 0.9 + norm * 0.15
      const opacity = 0.5 + norm * 0.5
      const shadow = norm * 0.3

      gsap.set(card, {
        scale,
        opacity,
        boxShadow: `0 8px 24px rgba(0,0,0,${shadow})`,
        zIndex: Math.round(norm * 10),
      })
    })
  }

  // 애니메이션 루프 수동 호출 (프레임마다 깊이 갱신)
  gsap.ticker.add(animateDepth)
})
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.review-card {
  will-change: transform, opacity, box-shadow;
}
</style>
