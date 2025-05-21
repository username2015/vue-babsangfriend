<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-orange-800">앱 화면 미리보기</h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구 앱의 실제 화면을 확인해보세요.
      </p>

      <!-- 캐러셀 -->
      <div class="mt-10">
        <div
          class="carousel-container rounded-xl shadow-lg overflow-x-auto flex gap-6 px-2 py-4 snap-x snap-mandatory scroll-smooth"
        >
          <div
            v-for="(item, index) in previews"
            :key="index"
            class="flex-none w-72 bg-white rounded-xl p-4 shadow-md snap-start"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="w-full rounded-lg mb-2 object-cover"
            />
            <p class="text-sm text-gray-700">{{ item.caption }}</p>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">← 좌우로 스크롤해보세요</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';

const previews = [
  {
    src: 'https://via.placeholder.com/300',
    alt: '홈 화면',
    caption: '홈 화면',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: '추천 레시피',
    caption: '추천 레시피',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: '타이머 기능',
    caption: '타이머 기능',
  },
];
</script>

<style scoped>
.carousel-container {
  -webkit-overflow-scrolling: touch;
}
</style>
