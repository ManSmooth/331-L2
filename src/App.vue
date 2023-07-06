<script setup lang="ts">
import { getCurrentInstance, type Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const pageSize: Ref<number> = getCurrentInstance()?.appContext.config.globalProperties.pageSize

</script>

<template>
  <header class="leading-relaxed">
    <nav class="flex p-2 bg-teal-400 justify-between">
      <div class="flex flex-row items-center gap-4">
        <h1 class="font-serif text-3xl font-bold">Events For Good</h1>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'event-list' }">Home</RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'event-org-list' }">Organizers</RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'student-list' }">Students</RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'about' }">About</RouterLink>
      </div>
      <div class="flex flex-row items-center gap-4">
        <div>
          Page Size
          <input v-model="pageSize" class="shadow-md px-2 w-8">
        </div>
      </div>
    </nav>
  </header>
  <RouterView class="p-4 text-white border-white" />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
