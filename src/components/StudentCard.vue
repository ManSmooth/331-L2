<template>
    <div>
        <div class="p-4 w-[320px] cursor-pointer border hover:scale-[1.01] hover:shadow-md flex flex-col gap-2">
            <div class="flex flex-row justify-between">
                <p class="text-xs opacity-50">{{ student.studentId }}</p>
                <p class="text-xs">GPA: {{ student.gpa }}</p>
            </div>
            <img :src="student.image" class="object-fit" />
            <p class="text-lg">{{ `${student.name} ${student.surname}` }}</p>
            <p class="text-sm opacity-75">{{ student.description }}</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { StudentItem } from '@/types';
import type { PropType } from 'vue';

const props = defineProps({
    student: {
        type: Object as PropType<StudentItem>,
        required: true
    }
})
</script>
