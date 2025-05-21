<template>
  <section
    class="text-center py-20 px-6 bg-gradient-to-br from-green-50 via-yellow-50 to-white"
  >
    <h1
      class="text-3xl md:text-4xl font-semibold text-green-800 mb-4 animate-fade-in-up"
    >
      당신의 건강한 식탁을 위한 AI 요리 파트너
    </h1>
    <p
      class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200"
    >
      맞춤형 레시피, 타이머, 냉장고 관리까지 밥상친구와 함께하세요.
    </p>

    <!-- 앱 설치 유도 버튼 -->
    <div class="mt-8 flex justify-center gap-4 animate-fade-in-up delay-500">
      <router-link
        to="/download"
        class="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
      >
        앱 다운로드
      </router-link>
      <router-link
        to="/features"
        class="px-6 py-3 border border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
      >
        기능 살펴보기
      </router-link>
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
.delay-500 {
  animation-delay: 0.5s;
}
</style>
