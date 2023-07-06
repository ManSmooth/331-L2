<template>
    <div class="p-4 w-[250px] cursor-pointer border hover:scale-[1.01] hover:shadow-md text-right">
        <p>{{ props.event.category }}</p>
        <p class="font-bold">{{ props.event.organizer }}</p>
    </div>
</template>

<script setup lang="ts">
import type { EventItem } from '@/types';
import type { PropType } from 'vue';

const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        required: true
    }
})
</script>
