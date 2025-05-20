<template>
  <!-- mt-24 → mt-8 (위쪽 마진을 줄임) -->
  <footer
    class="bg-gradient-to-r from-orange-50 to-purple-50 py-6 px-4 border-t shadow-inner mt-8"
  >
    <!-- py-12 → py-6 (상하 패딩을 줄임) -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-base text-gray-700 items-start"
    >
      <!-- 브랜드 영역 -->
      <div class="flex flex-col items-center md:items-start mb-3 md:mb-0">
        <div class="flex items-center mb-1">
          <span class="text-3xl mr-1">🍽️</span>
          <span class="text-2xl font-extrabold text-orange-700 drop-shadow"
            >밥상친구</span
          >
        </div>
        <p class="text-sm text-gray-600">맛있는 식탁, 함께 만드는 챌린지</p>
      </div>
      <!-- 메뉴 -->
      <div class="flex flex-col items-center">
        <h4 class="font-bold text-purple-800 mb-1">메뉴</h4>
        <ul class="space-y-1 text-center">
          <li>
            <router-link to="/" class="hover:text-orange-600 transition"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="hover:text-orange-600 transition"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/features" class="hover:text-orange-600 transition"
              >Features</router-link
            >
          </li>
          <li>
            <router-link to="/download" class="hover:text-orange-600 transition"
              >Download</router-link
            >
          </li>
        </ul>
      </div>
      <!-- 기타 -->
      <div class="flex flex-col items-center">
        <h4 class="font-bold text-purple-800 mb-1">기타</h4>
        <ul class="space-y-1 text-center">
          <li>
            <router-link to="/faq" class="hover:text-orange-600 transition"
              >FAQ</router-link
            >
          </li>
          <li>
            <router-link to="/tech" class="hover:text-orange-600 transition"
              >Tech</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="hover:text-orange-600 transition"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- mt-10 → mt-6 (버튼/카피라이트 위 여백을 줄임) -->
    <div class="mt-6 flex flex-col items-center">
      <a
        href="/downloads/app-release.apk"
        download
        class="inline-flex items-center bg-gradient-to-r from-green-400 to-green-500 text-white text-base font-bold px-6 py-3 rounded-full shadow-lg hover:from-green-500 hover:to-green-600 transition"
      >
        <span class="text-xl mr-2">📱</span>
        앱 다운로드 (APK)
      </a>
      <p class="text-xs text-gray-400 mt-4">
        &copy; 2025
        <span class="font-bold text-purple-600">Babsangchingu</span>. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// nothing here for now
</script>

<style scoped>
/* 추가적인 미세 조정 원하면 여기에! */
</style>
