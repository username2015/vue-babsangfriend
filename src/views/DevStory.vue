<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />

    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-orange-800">
        개발자 소개 및 포트폴리오
      </h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구를 만든 개발자들의 정보를 확인해보세요.
      </p>

      <!-- 카드 영역 -->
      <div class="flex flex-wrap justify-center gap-8 mt-10">
        <div
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 w-full sm:w-96 transition-all flex flex-col items-center text-center"
        >
          <img
            src="https://via.placeholder.com/120"
            alt="개발자 프로필 이미지"
            class="w-28 h-28 rounded-full object-cover mb-4"
          />
          <h2 class="text-2xl font-bold text-gray-900">이석유</h2>
          <p class="text-gray-600 mt-2 text-sm leading-relaxed">
            안녕하세요! 밥상친구 앱의 기획과 개발을 담당한 개발자입니다.<br />
            iOS, 웹, AI 추천, Firebase 등 다양한 기술을 활용했습니다.
          </p>
          <div class="flex gap-4 mt-4">
            <a
              href="https://github.com/your-id"
              target="_blank"
              rel="noopener"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              GitHub
            </a>
            <a
              href="https://yourblog.com"
              target="_blank"
              rel="noopener"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Blog
            </a>
            <a
              href="https://yournotion.so"
              target="_blank"
              rel="noopener"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Notion
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';

import Footer from '../components/Footer.vue';
</script>

<style scoped>
/* 추가 커스터마이징이 필요한 경우 여기에 작성 */
</style>
