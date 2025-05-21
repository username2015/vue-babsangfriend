<!-- components/DeveloperCard.vue -->
<template>
  <div
    class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 flex flex-col items-center text-center transition-all"
  >
    <img
      :src="img"
      alt="개발자 프로필"
      class="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-200 shadow-sm"
    />
    <h2 class="text-xl font-bold text-gray-900">{{ name }}</h2>
    <p class="text-sm text-purple-600 font-medium mt-1">{{ role }}</p>
    <p class="text-sm text-gray-600 mt-3 leading-relaxed">{{ description }}</p>
    <div class="flex gap-2 mt-4 flex-wrap justify-center">
      <a
        v-if="github"
        :href="github"
        target="_blank"
        class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs"
      >
        GitHub
      </a>
      <a
        v-if="blog"
        :href="blog"
        target="_blank"
        class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs"
      >
        Blog
      </a>
      <a
        v-if="notion"
        :href="notion"
        target="_blank"
        class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs"
      >
        Notion
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  description: string;
  img: string;
  github?: string;
  blog?: string;
  notion?: string;
}>();
</script>
