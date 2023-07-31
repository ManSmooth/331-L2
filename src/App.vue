<script setup lang="ts">
import { getCurrentInstance, type Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
import 'nprogress/nprogress.css'

const pageSize: Ref<number> = getCurrentInstance()?.appContext.config.globalProperties.pageSize
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <header class="leading-normal max-h-screen">
    <div v-if="message" class="animate-flashMessage">
      <p class="text-lg">{{ message }}</p>
    </div>
    <nav class="flex p-2 bg-teal-400 justify-between">
      <div class="flex flex-row items-center gap-4">
        <h1 class="font-serif text-3xl font-bold">Sarin <span class="text-teal-700">Patanompee</span></h1>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold"
          :to="{ name: 'event-list', query: { page: 1 } }">Home
        </RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'event-org-list' }">
          Organizers</RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'student-list' }">
          Students</RouterLink>
        <RouterLink class="[&.router-link-active]:text-sky-100 text-black font-bold" :to="{ name: 'about' }">About
        </RouterLink>
      </div>
      <div class="flex flex-row items-center gap-4">
        <div>
          Page Size
          <input type="number" v-model="pageSize" class="shadow-md px-2 w-16">
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
