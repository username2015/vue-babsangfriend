<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-6">
    <div class="max-w-6xl mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-purple-800 drop-shadow-sm">
        기술 스택 및 개발 스토리
      </h1>
      <p class="text-lg text-gray-700 mt-4">
        밥상친구 앱을 구성한 핵심 기술과 개발 이야기를 소개합니다.
      </p>

      <!-- 기술 스택 -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold text-orange-700 mb-6">🛠️ 사용된 기술 스택</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <InfoCard
            v-for="(tech, index) in techStack"
            :key="index"
            :data="tech"
          />
        </div>
      </section>

      <!-- API 연동 -->
      <section class="mt-20">
        <h2 class="text-3xl font-bold text-orange-700 mb-6">🔗 연동된 API</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <InfoCard
            v-for="(api, index) in apiList"
            :key="index"
            :data="api"
          />
        </div>
      </section>

      <!-- 개발 스토리 -->
      <section class="mt-20 text-left">
        <h2 class="text-3xl font-bold text-orange-700 mb-6">📘 개발 스토리</h2>
        <div class="space-y-6">
          <div
            v-for="(story, index) in devStories"
            :key="index"
            class="bg-white border-l-4 border-purple-300 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-[1.01]"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ story.title }}
            </h3>
            <p class="text-sm text-gray-700 leading-relaxed">
              {{ story.content }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoCard from '../components/InfoCard.vue'
import { techStack } from '@/data/techStack'
import { apiList } from '@/data/apiList'
import { devStories } from '@/data/devStories'


</script>

<style scoped>
/* 추후 애니메이션 커스텀 가능 */
</style>
