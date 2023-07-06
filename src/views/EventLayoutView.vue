<script setup lang="ts">
import EventServices from '@/services/EventServices';
import type { EventItem } from '@/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const event = ref<EventItem | null>(null)
const props = defineProps({
    id: String
})

EventServices.getEventById(Number(props.id)).then((res) => {
    event.value = res.data
}).catch((err) => {
    console.log(err)
    if(err.response && err.response.status == 404)
        router.push({ name: '404-resource', params: { resource: 'event' } })
    else if (err.code === 'ERR_NETWORK')
        router.push({ name: 'network-error' })
})

</script>

<template>
    <div v-if="event">
        <h1 class="text-2xl font-bold">{{ event.title }}</h1>
        <div class="flex flex-row gap-4 my-1 mb-4 items-center">
            <RouterLink :to="{ name: 'event-details', params: { id: props.id } }">Details</RouterLink>|
            <RouterLink :to="{ name: 'event-register', params: { id: props.id } }">Register</RouterLink>|
            <RouterLink :to="{ name: 'event-edit', params: { id: props.id } }">Edit</RouterLink>
        </div>
        <RouterView :event="event" />
    </div>
</template>
