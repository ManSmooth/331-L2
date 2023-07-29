<script setup lang="ts">
import { useMessageStore } from '@/stores/message';
import type { EventItem } from '@/types';
import type { PropType } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        required: true
    }
})
const router = useRouter()
const store = useMessageStore()
function edit() {
    store.updateMessage(`Event ${props.event.title} has been successfully edited.`)
    setTimeout(() => store.resetMessage(), 3000)
    router.push({
        name: 'event-details',
        params: {
            id: props.event.id
        }
    })
}
</script>

<template>
    <div>
        <p>Edit Event Here</p>
        <button @click="edit">Edit</button>
    </div>
</template>
