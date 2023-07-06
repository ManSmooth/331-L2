<script setup lang="ts">
import EventCardVue from '@/components/EventCard.vue';
import type { EventItem } from '@/types';
import { computed, getCurrentInstance, onMounted, ref, watch, type Ref } from 'vue';
import EventService from '@/services/EventServices';
import { RouterLink } from 'vue-router';
const events = ref<EventItem[]>([])
const totalEvents = ref<number>(0)
const props = defineProps({
	page: {
		type: Number,
		required: true
	}
})
const pageSize: Ref<number> = getCurrentInstance()?.appContext.config.globalProperties.pageSize
watch(() => pageSize.value, () => {
	changePage(props.page)
}, {
	deep: true
})


const hasNextPage = computed(() => {
	return props.page.valueOf() < Math.ceil(totalEvents.value / pageSize.value)
})

onMounted(() => {
	changePage(props.page)
})

watch(() => props.page, (newPage) => {
	changePage(newPage)
})

function changePage(page: number) {
	EventService.getEvent(pageSize.value, page).then((res) => {
		events.value = res.data
		totalEvents.value = res.headers['x-total-count']
	})
}

</script>

<template>
	<main class="flex flex-col items-center gap-4">
		<EventCardVue v-for="event in events" :key="event.id" :event="event" />
		<div class="flex justify-between w-64">
			<RouterLink class="p-2 border border-black hover:shadow-md hover:bg-stone-400"
				:to="{ name: 'event-list', query: { page: props.page - 1 } }" rel="prev"
				:class="{ 'invisible': props.page <= 1 }">
				&lt;</RouterLink>
			<RouterLink class="p-2 border border-black hover:shadow-md hover:bg-stone-400"
				:to="{ name: 'event-list', query: { page: props.page + 1 } }" rel="next"
				:class="{ 'invisible': !hasNextPage }">
				&gt;</RouterLink>
		</div>
	</main></template>
