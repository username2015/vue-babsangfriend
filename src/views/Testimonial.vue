<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />

    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-orange-800">유저 후기</h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구를 사용한 사람들의 생생한 리뷰를 확인해보세요.
      </p>

      <!-- 후기 카드 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-transform text-gray-700 text-center"
        >
          <img
            :src="review.image"
            alt="User Profile"
            class="w-20 h-20 rounded-full mx-auto object-cover mb-3"
          />
          <h2 class="text-lg font-bold text-gray-900">{{ review.name }}</h2>
          <p class="text-yellow-500 mt-1">{{ review.stars }}</p>
          <p class="mt-2 text-sm leading-relaxed">{{ review.comment }}</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Footer from '../components/Footer.vue';

const reviews = [
  {
    name: '사용자 1',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    comment: '정말 유용한 앱입니다! 요리할 때마다 사용해요.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: '사용자 2',
    stars: '⭐️⭐️⭐️⭐️',
    comment: '레시피 추천 기능이 정말 좋아요!',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: '사용자 3',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    comment: '친구들에게도 추천했어요!',
    image: 'https://via.placeholder.com/100',
  },
];
</script>

<style scoped>
/* 추가 스타일 필요 시 여기에 작성 */
</style>
