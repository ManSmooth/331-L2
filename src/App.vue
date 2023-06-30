<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex gap-4 items-center p-2 bg-stone-200">
      <h1 class="font-serif text-3xl font-bold">Events For Good</h1>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/organizers">Organizers</RouterLink>
      <RouterLink to="/students">Students</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView class="p-4"/>
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
