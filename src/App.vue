<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Add any additional styles here */
</style>
