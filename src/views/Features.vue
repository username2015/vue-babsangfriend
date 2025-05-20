<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />
    <div class="max-w-screen-md mx-auto text-center">
      <h1 class="text-5xl font-bold text-orange-800">주요 기능 안내</h1>
      <p class="text-lg text-gray-600 mt-2">
        밥상친구 앱에서 제공하는 주요 기능들을 소개합니다.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">🧠</span>
          <h2 class="text-xl font-bold">AI 추천 레시피</h2>
          <p class="text-sm text-gray-600">개인 맞춤형 레시피를 제공합니다.</p>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">⏲️</span>
          <h2 class="text-xl font-bold">요리 타이머</h2>
          <p class="text-sm text-gray-600">정확한 요리 시간을 제공합니다.</p>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">🏆</span>
          <h2 class="text-xl font-bold">레시피 챌린지</h2>
          <p class="text-sm text-gray-600">다양한 요리 챌린지에 참여하세요.</p>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">🧑‍🍳</span>
          <h2 class="text-xl font-bold">순서별 조리법</h2>
          <p class="text-sm text-gray-600">단계별로 쉽게 따라할 수 있습니다.</p>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">💾</span>
          <h2 class="text-xl font-bold">즐겨찾기 저장</h2>
          <p class="text-sm text-gray-600">좋아하는 레시피를 저장하세요.</p>
        </div>
        <div
          class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition"
        >
          <span class="text-3xl">❤️</span>
          <h2 class="text-xl font-bold">건강 연동</h2>
          <p class="text-sm text-gray-600">
            헬스커넥트와 연동하여 건강을 관리하세요.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Footer from '../components/Footer.vue';
</script>

<style scoped>
/* Add any additional styles here */
</style>
