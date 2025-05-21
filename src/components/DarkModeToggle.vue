<template>
  <button
    @click="toggleDarkMode"
    class="text-xl px-3 py-2 rounded-full bg-purple-200 hover:bg-purple-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
  >
    {{ isDark ? '☀️ 라이트 모드' : '🌙 다크 모드' }}
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>
