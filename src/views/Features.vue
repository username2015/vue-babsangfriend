<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 p-4">
    <Header />
    <div class="max-w-screen-md mx-auto text-center py-14 px-4">
      <h1 class="text-6xl font-bold text-purple-900">주요 기능 안내</h1>
      <p class="text-lg text-gray-900 mt-3">
        밥상친구 앱에서 제공하는 주요 기능들을 소개합니다.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon="🧠"
          title="AI 추천 레시피"
          desc="개인 맞춤형 레시피를 제공합니다."
          link="/ai-recipe"
        />
        <FeatureCard
          icon="⏲️"
          title="요리 타이머"
          desc="정확한 요리 시간을 제공합니다."
          link="/cooking-timer"
        />
        <FeatureCard
          icon="🏆"
          title="레시피 챌린지"
          desc="다양한 요리 챌린지에 참여하세요."
          link="/recipe-challenge"
        />
        <FeatureCard
          icon="🧑‍🍳"
          title="순서별 조리법"
          desc="단계별로 쉽게 따라할 수 있습니다."
          link="/step-by-step"
        />
        <FeatureCard
          icon="💾"
          title="즐겨찾기 저장"
          desc="좋아하는 레시피를 저장하세요."
          link="/favorites"
        />
        <FeatureCard
          icon="❤️"
          title="건강 연동"
          desc="헬스커넥트와 연동하여 건강을 관리하세요."
          link="/health-integration"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import FeatureCard from '../components/FeatureCard.vue';
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
</style>
