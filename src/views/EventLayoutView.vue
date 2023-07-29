<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useEventStore()
const { event } = storeToRefs(store)
const id = ref(event.value?.id)



</script>

<template>
    <div v-if="event">
        <h1 class="text-2xl font-bold">{{ event.title }}</h1>
        <div class="flex flex-row gap-4 my-1 mb-4 items-center">
            <RouterLink :to="{ name: 'event-details', params: { id } }">Details</RouterLink>|
            <RouterLink :to="{ name: 'event-register', params: { id } }">Register</RouterLink>|
            <RouterLink :to="{ name: 'event-edit', params: { id } }">Edit</RouterLink>
        </div>
        <RouterView :event="event" />
    </div>
</template>
