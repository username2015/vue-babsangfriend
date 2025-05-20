<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />

    <div class="max-w-screen-md mx-auto text-center">
      <!-- 제목 영역 -->
      <h1 class="text-5xl font-bold text-orange-800 mt-6">앱 소개</h1>
      <p class="text-lg text-gray-700 mt-2">
        밥상친구는 레시피를 쉽고 건강하게 관리할 수 있는 앱입니다.
      </p>

      <!-- 주요 기능 섹션 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div
          class="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
        >
          <div class="text-4xl mb-2">🧠</div>
          <h2 class="text-xl font-semibold text-gray-800">AI 추천 레시피</h2>
        </div>
        <div
          class="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
        >
          <div class="text-4xl mb-2">⏲️</div>
          <h2 class="text-xl font-semibold text-gray-800">조리 타이머</h2>
        </div>
        <div
          class="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
        >
          <div class="text-4xl mb-2">🎯</div>
          <h2 class="text-xl font-semibold text-gray-800">챌린지 기록</h2>
        </div>
      </div>

      <!-- 팀원 소개 섹션 -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-orange-800">팀원 소개</h2>
        <div class="flex flex-wrap justify-center gap-6 mt-6">
          <div class="bg-white shadow-md rounded-lg p-4 w-40">
            <img
              :src="photo1"
              alt="Team Member 1"
              class="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
            />
            <h3 class="text-base font-bold">홍길동</h3>
            <p class="text-sm text-gray-600">개발자</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4 w-40">
            <img
              :src="photo2"
              alt="Team Member 2"
              class="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
            />
            <h3 class="text-base font-bold">김철수</h3>
            <p class="text-sm text-gray-600">디자이너</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4 w-40">
            <img
              :src="photo3"
              alt="Team Member 3"
              class="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
            />
            <h3 class="text-base font-bold">이영희</h3>
            <p class="text-sm text-gray-600">기획자</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
</script>

<style scoped>
/* 추가 스타일 필요 시 여기에 작성 */
</style>
