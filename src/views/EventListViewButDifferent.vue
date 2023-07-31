<script setup lang="ts">
import type { EventItem } from '@/types';
import { ref } from 'vue';
import EventService from '@/services/EventServices';
import { useRouter } from 'vue-router';
import EventDetail from '@/components/EventDetail.vue';
const events = ref<EventItem[]>([])
const router = useRouter()
EventService.getEvent(32, 1).then((res) => {
	events.value = res.data
}).catch(() => {
	router.push({ name: 'NetworkError' })
})
</script>

<template>
	<main class="flex flex-col items-center gap-4">
		<EventDetail v-for="event in events" :key="event.id" :event="event" />
	</main>
</template>
