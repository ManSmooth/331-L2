<template>
    <div>
        <div class="p-4 w-[250px] cursor-pointer border border-[#39495c] hover:scale-[1.01] hover:shadow-md">
            <span>@{{ props.event.time }} on {{ props.event.date }}</span>
            <h4 class="text-xl">{{ props.event.title }}</h4>
        </div>
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
