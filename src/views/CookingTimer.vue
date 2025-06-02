<template>
  <div
    class="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50 flex flex-col items-center py-16 px-4"
  >
    <!-- 설명 카드 -->
    <div
      class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-xl w-full text-center mb-10"
    >
      <div class="flex justify-center items-center mb-4">
        <span class="text-5xl">⏲️</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 ml-2">
          요리 타이머
        </h1>
      </div>
      <p class="text-base text-gray-700">
        레시피별로 타이머를 설정해 놓으면, <br />
        알림으로 조리 타이밍을 알려드립니다!
      </p>
    </div>

    <!-- 레시피 카드 그룹 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
      <!-- 계란 프라이 -->
      <div
        class="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition"
      >
        <div class="text-4xl mb-2">🍳</div>
        <h2 class="text-xl font-semibold text-gray-800">계란 프라이</h2>
        <p class="text-gray-600 mt-2">
          딱 3분! 타이머로 노른자 반숙을 완성해보세요.
        </p>
      </div>

      <!-- 된장찌개 -->
      <div
        class="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition"
      >
        <div class="text-4xl mb-2">🍲</div>
        <h2 class="text-xl font-semibold text-gray-800">된장찌개</h2>
        <p class="text-gray-600 mt-2">
          끓이기/졸이기 타이머를 각각 맞춰 완벽한 국물맛을!
        </p>
      </div>
    </div>

    <!-- CTA 버튼 -->
    <button
      class="bg-gray-200 text-gray-500 px-6 py-3 rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-300 transition"
    >
      <span class="text-xl">🕰️</span>
      <span class="font-semibold">내 요리 타이머 시작하기</span>
    </button>
  </div>
</template>

<style scoped>
/* 필요 시 애니메이션 추가 가능 */
</style>
