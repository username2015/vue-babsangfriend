<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <Header />

    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-orange-800">
        기술 스택 및 개발 스토리
      </h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구 앱을 구성한 핵심 기술과 개발 이야기를 소개합니다.
      </p>

      <!-- 기술 스택 -->
      <div class="mt-10">
        <h2 class="text-3xl font-bold text-orange-800 mb-6">기술 스택</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="(tech, index) in techStack"
            :key="index"
            class="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform text-gray-800 text-center"
          >
            <div class="text-4xl mb-2">🔧</div>
            <h3 class="text-xl font-semibold">{{ tech.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ tech.description }}</p>
          </div>
        </div>
      </div>

      <!-- 개발 스토리 -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-orange-800 mb-6">개발 스토리</h2>
        <div class="space-y-6 text-left">
          <div
            v-for="(story, index) in devStories"
            :key="index"
            class="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ story.title }}
            </h3>
            <p class="text-sm text-gray-700 mt-2">{{ story.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const techStack = [
  { name: 'Vue', description: '프론트엔드 프레임워크' },
  { name: 'TypeScript', description: '정적 타입을 지원하는 자바스크립트' },
  { name: 'Tailwind', description: '유틸리티 퍼스트 CSS 프레임워크' },
  { name: 'Firebase', description: '백엔드 서비스 플랫폼' },
  { name: 'Jetpack Compose', description: '안드로이드 UI 툴킷' },
  { name: 'Health Connect', description: '건강 데이터 연동' },
];

const devStories = [
  {
    title: 'AI 추천 구현 방식',
    content: '사용자 맞춤형 레시피 추천을 위한 AI 알고리즘 개발',
  },
  {
    title: '챌린지 설계 배경',
    content: '사용자 참여를 유도하기 위한 다양한 챌린지 설계',
  },
];
</script>

<style scoped>
/* 필요 시 추가 커스터마이징 */
</style>
