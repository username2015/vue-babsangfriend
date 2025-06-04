<template>
  <motion-div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="bg-white rounded-2xl border-t-4 border-purple-300 shadow-md hover:shadow-xl p-6 transition-all transform hover:scale-105 flex flex-col items-center text-center"
  >
    <div class="text-4xl mb-3">{{ data.icon }}</div>
    <h3 class="text-xl font-bold text-gray-900">{{ data.name }}</h3>
    <p class="text-sm text-gray-600 mt-1">{{ data.description }}</p>
  </motion-div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    icon: string
    name: string
    description: string
  }
}>()
</script>
