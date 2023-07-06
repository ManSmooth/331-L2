<template>
    <RouterLink :to="{ name: 'event-details', params: { id: event.id } }"
        class="p-4 w-[250px] cursor-pointer border border-[#39495c] hover:scale-[1.01] hover:shadow-md text-[#2c3e50]">
        <span>@{{ props.event.time }} on {{ props.event.date }}</span>
        <h4 class="text-xl">{{ props.event.title }}</h4>
    </RouterLink>
</template>

<script setup lang="ts">
import type { EventItem } from '@/types';
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        required: true
    }
})
</script>
