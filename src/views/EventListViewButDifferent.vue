<script setup lang="ts">
import EventDetail from '@/components/EventDetail.vue';
import type { EventItem } from '@/types';
import { ref } from 'vue';
import axios from 'axios';
const events = ref<EventItem[]>([])
axios.get<EventItem[]>('http://localhost:3030/events').then((res) => {
	events.value = res.data
})
</script>

<template>
	<main class="flex flex-col items-center gap-4">
		<EventDetail v-for="event in events" :key="event.id" :event="event" />
	</main>
</template>
