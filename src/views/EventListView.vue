<script setup lang="ts">
import EventCardVue from '@/components/EventCard.vue';
import type { EventItem } from '@/types';
import { computed, getCurrentInstance, onMounted, ref, watch, type Ref } from 'vue';
import EventService from '@/services/EventServices';
import { RouterLink, onBeforeRouteUpdate, type NavigationGuardNext } from 'vue-router';
import nProgress from 'nprogress'
import { useRouter } from 'vue-router';
const events = ref<EventItem[]>([])
const totalEvents = ref<number>(0)
const props = defineProps({
	page: {
		type: Number,
		required: true
	}
})
const pageSize: Ref<number> = getCurrentInstance()?.appContext.config.globalProperties.pageSize
const router = useRouter()
const hasNextPage = computed(() => {
	return props.page.valueOf() < Math.ceil(totalEvents.value / pageSize.value)
})

onMounted(() => {
	changePage(props.page)
})

onBeforeRouteUpdate((to, from, next) => {
	const toPage = Number(to.query.page)
	changePage(toPage, next)
})


function changePage(page: number, next?: NavigationGuardNext) {
	EventService.getEvent(pageSize.value, page).then((res) => {
		events.value = res.data
		totalEvents.value = res.headers['x-total-count']
		if (next) next()
	}).catch(() => {
		if (next) next({ name: 'NetworkError' })
		else router.push({ name: 'NetworkError' })
	})
}

</script>

<template>
	<main class="flex flex-col items-center gap-4">
		<EventCardVue v-for="event in events" :key="event.id" :event="event" />
		<div class="flex justify-between w-64">
			<RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
				:to="{ name: 'event-list', query: { page: props.page - 1 } }" rel="prev"
				:class="{ 'invisible': props.page <= 1 }">
				&lt;</RouterLink>
			<RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
				:to="{ name: 'event-list', query: { page: props.page + 1 } }" rel="next"
				:class="{ 'invisible': !hasNextPage }">
				&gt;</RouterLink>
		</div>
	</main>
</template>
