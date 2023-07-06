<script setup lang="ts">
import { getCurrentInstance, type Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const pageSize: Ref<number> = getCurrentInstance()?.appContext.config.globalProperties.pageSize

</script>

<template>
  <header>
    <nav class="flex p-2 bg-stone-200 justify-between">
      <div class="flex flex-row items-center gap-4">
        <h1 class="font-serif text-3xl font-bold">Events For Good</h1>
        <RouterLink :to="{ name: 'event-list' }">Home</RouterLink>
        <RouterLink :to="{ name: 'event-org-list' }">Organizers</RouterLink>
        <RouterLink :to="{ name: 'student-list' }">Students</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </div>
      <div class="flex flex-row items-center gap-4">
        <div>
          Page Size
          <input v-model="pageSize" class="shadow-md px-2 w-8">
        </div>
      </div>
    </nav>
  </header>
  <RouterView class="p-4" />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}


nav a {
  font-weight: bold;
  color: #2c3e50
}

nav a:first-of-type {
  border: 0;
}
</style>
