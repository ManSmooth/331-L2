<script setup lang="ts">
import EventCardVue from '@/components/EventCard.vue';
import type { EventItem } from '@/types';
import { ref } from 'vue';
import EventService from '@/services/EventServices';
const events = ref<EventItem[]>([])
EventService.getEvent().then((res) => {
	events.value = res.data
})

</script>

<template>
	<main class="flex flex-col items-center gap-4">
		<EventCardVue v-for="event in events" :key="event.id" :event="event" />
	</main>
</template>
