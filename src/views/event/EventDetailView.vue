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

<template>
    <div>
        <p>{{ props.event.time }} on {{ props.event.date }} @ {{ props.event.location }}</p>
        <p>{{ props.event.description }}</p>
    </div>
</template>
