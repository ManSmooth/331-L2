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
        <p>Edit Event Here</p>
        <p>{{ props.event }}</p>
    </div>
</template>
