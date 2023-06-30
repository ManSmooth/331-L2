<script setup lang="ts">
import type { StudentItem } from '@/types';
import { ref } from 'vue';
import StudentService from '@/services/StudentServices';
import StudentCard from '@/components/StudentCard.vue';
const students = ref<StudentItem[]>([])
StudentService.getStudents().then((res) => {
    students.value = res.data
})

</script>

<template>
    <main class="flex flex-col items-center gap-4">
        <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </main>
</template>
