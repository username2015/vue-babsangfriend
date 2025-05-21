<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-purple-800 drop-shadow-sm">
        유저 후기
      </h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구를 사용한 사람들의 생생한 리뷰를 확인해보세요.
      </p>

      <!-- 후기 카드 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white border border-orange-200 rounded-2xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center"
        >
          <img
            :src="review.image"
            alt="User Profile"
            class="w-20 h-20 rounded-full object-cover ring-2 ring-purple-300 mb-3"
          />
          <h2 class="text-lg font-semibold text-gray-900">{{ review.name }}</h2>

          <!-- 별점 -->
          <div class="text-yellow-400 text-base mt-1">
            <span v-for="i in 5" :key="i">
              <span v-if="i <= review.rating">★</span>
              <span v-else class="text-gray-300">★</span>
            </span>
          </div>

          <p class="mt-3 text-sm text-gray-700 leading-relaxed">
            {{ review.comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: '사용자 1',
    rating: 5,
    comment: '정말 유용한 앱입니다! 요리할 때마다 사용해요.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: '사용자 2',
    rating: 4,
    comment: '레시피 추천 기능이 정말 좋아요!',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: '사용자 3',
    rating: 5,
    comment: '친구들에게도 추천했어요!',
    image: 'https://via.placeholder.com/100',
  },
];
</script>

<style scoped>
/* 필요 시 애니메이션 또는 더 추가 가능 */
</style>
