<template>
  <footer
    class="bg-gradient-to-r from-orange-50 to-purple-100 py-12 px-6 border-t shadow-inner"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base text-gray-700"
    >
      <!-- 브랜드 -->
      <div class="flex flex-col items-center md:items-start space-y-2">
        <div class="flex items-center space-x-2">
          <span class="text-4xl">🍱</span>
          <span
            class="text-2xl font-extrabold text-purple-700 tracking-wide drop-shadow-sm"
          >
            밥상친구
          </span>
        </div>
        <p class="text-sm text-gray-600 text-center md:text-left leading-snug">
          건강한 식탁,<br class="hidden md:block" />
          함께 만드는 도전과 즐거움
        </p>
      </div>

      <!-- 메뉴 -->
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold text-purple-800 mb-2">📋 메뉴</h4>
        <ul class="space-y-1 text-center">
          <li>
            <router-link
              to="/"
              class="transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
            >
              홈
            </router-link>
          </li>

          <li>
            <router-link
              to="/download"
              class="transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
            >
              다운로드
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 고객지원 -->
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold text-purple-800 mb-2">📞 고객지원</h4>
        <ul class="space-y-1 text-center">
          <li>
            <router-link
              to="/faq"
              class="transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
            >
              FAQ
            </router-link>
          </li>
          <li>
            <router-link
              to="/tech"
              class="transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
            >
              기술정보
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="transition-all duration-200 hover:text-orange-600 hover:translate-x-1"
            >
              문의하기
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 하단 배너 -->
    <div class="mt-10 flex flex-col items-center space-y-3">
      <a
        href="/download"
        class="inline-flex items-center bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-200 hover:from-green-500 hover:to-green-600 hover:scale-105"
      >
        <span class="text-xl mr-2">⬇️</span> 앱 다운로드 페이지로 이동
      </a>
      <p class="text-xs text-gray-400">
        &copy; 2025
        <span class="font-bold text-purple-600">BabsangFriend</span>. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>
