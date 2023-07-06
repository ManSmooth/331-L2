<script setup lang="ts">
import EventServices from '@/services/EventServices';
import type { EventItem } from '@/types';
import { ref } from 'vue';

const event = ref<EventItem | null>(null)
const props = defineProps({
    id: String
})

EventServices.getEventById(Number(props.id)).then((res) => {
    event.value = res.data
}).catch((err) => {
    console.log(err);
})

</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
