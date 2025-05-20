<template>
  <div
    class="bg-white shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center text-center animate-fade-in"
  >
    <span class="text-5xl mb-2">{{ icon }}</span>
    <h2 class="text-2xl font-semibold text-gray-800">{{ title }}</h2>
    <p class="text-sm text-gray-600 mt-1">{{ desc }}</p>
    <router-link
      :to="link"
      class="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
    >
      자세히 보기
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  desc: string;
  link: string;
}>();
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
