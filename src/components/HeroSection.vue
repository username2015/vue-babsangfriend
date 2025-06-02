<template>
  <section class="relative overflow-hidden py-20 px-6 bg-white rounded-3xl shadow-xl max-w-4xl mx-auto mt-6">
    <!-- 배경 이미지 (아주 옅게) -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 animate-fade-zoom rounded-3xl"
      style="background-image: url('/assets/bg-kitchen-light.jpg')"
    ></div>

    <!-- 콘텐츠 -->
    <div class="relative z-10 max-w-2xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-sm leading-snug animate-fade-in-up">
        건강한 식탁을 위한<br />
        <span class="text-purple-600">AI 요리 파트너</span>
      </h1>
      <p class="mt-6 text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-300">
        맞춤형 레시피부터 스마트 타이머, 냉장고 관리까지.<br />
        <span class="font-medium text-purple-600">밥상친구</span>와 함께 요리의 즐거움을 경험해보세요.
      </p>

      <!-- 버튼 -->
      <div class="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
        <router-link
          to="/download"
          class="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          앱 다운로드
        </router-link>
        <router-link
          to="/features"
          class="px-6 py-3 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-transform transform hover:scale-105"
        >
          기능 살펴보기
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 없음
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeZoom {
  from {
    transform: scale(1.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 0.1;
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.9s ease-out both;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.animate-fade-zoom {
  animation: fadeZoom 2s ease-out forwards;
}
</style>
