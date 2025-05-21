<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 p-4">
    <div class="max-w-7xl mx-auto text-center py-14 px-4">
      <!-- 제목 -->
      <h1 class="text-5xl font-bold text-purple-800 drop-shadow-sm">
        개발자 소개 및 포트폴리오
      </h1>
      <p class="text-lg text-gray-700 mt-3">
        밥상친구를 만든 개발자들의 정보를 확인해보세요.
      </p>

      <!-- 카드 영역 (2x2 그리드) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        <!-- 카드 1 -->
        <div
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all text-center"
        >
          <img
            src="https://via.placeholder.com/120"
            alt="이석유"
            class="w-28 h-28 rounded-full object-cover mb-4 mx-auto ring-2 ring-purple-300"
          />
          <h2 class="text-xl font-bold text-gray-900">이석유</h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            밥상친구 앱의 기획과 개발을 담당한 개발자입니다.<br />
            iOS, 웹, AI 추천, Firebase 등 다양한 기술을 활용했습니다.
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <a
              href="https://github.com/your-id"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >GitHub</a
            >
            <a
              href="https://yourblog.com"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Blog</a
            >
            <a
              href="https://yournotion.so"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Notion</a
            >
          </div>
        </div>

        <!-- 카드 2 -->
        <div
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all text-center"
        >
          <img
            src="https://via.placeholder.com/120"
            alt="김예림"
            class="w-28 h-28 rounded-full object-cover mb-4 mx-auto ring-2 ring-purple-300"
          />
          <h2 class="text-xl font-bold text-gray-900">김예림</h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            UI/UX 디자인을 맡고, 웹 퍼블리싱 및 애니메이션 디자인을
            담당했습니다.
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >GitHub</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Blog</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Notion</a
            >
          </div>
        </div>

        <!-- 카드 3 -->
        <div
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all text-center"
        >
          <img
            src="https://via.placeholder.com/120"
            alt="최준혁"
            class="w-28 h-28 rounded-full object-cover mb-4 mx-auto ring-2 ring-purple-300"
          />
          <h2 class="text-xl font-bold text-gray-900">최준혁</h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            Firebase 백엔드, 데이터베이스 연동 및 실시간 기능 구현을
            담당했습니다.
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >GitHub</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Blog</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Notion</a
            >
          </div>
        </div>

        <!-- 카드 4 -->
        <div
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all text-center"
        >
          <img
            src="https://via.placeholder.com/120"
            alt="박지민"
            class="w-28 h-28 rounded-full object-cover mb-4 mx-auto ring-2 ring-purple-300"
          />
          <h2 class="text-xl font-bold text-gray-900">박지민</h2>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            서비스 구조 기획과 문서화, 챌린지 시스템을 설계하고 테스트했습니다.
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >GitHub</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Blog</a
            >
            <a
              href="#"
              target="_blank"
              class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm"
              >Notion</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 없음
</script>

<style scoped>
/* 필요 시 추가 스타일 작성 가능 */
</style>
