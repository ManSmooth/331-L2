<template>
    <div class="w-full p-12 flex flex-col font-serif">
        <div class="w-full h-full bg-red-500 p-4 rounded-t-lg">
            <p class="text-3xl font-bold text-white">Network Error</p>
        </div>
        <div class="w-full h-full bg-stone-50 p-4 rounded-b-lg shadow-lg text-black">
            <div class="flex flex-col gap-2">
                <p class="text-3xl font-bold">Uh-Oh!</p>
                <p class="text-2xl">Looks like you are experiencing some network issues, please take a breather and <a class="font-bold" href="#" @click="router.go(-1)">click here</a> to go back.</p>
                <p>Sorry, we cannot fetch the data from the server.</p>
                <p>Please try again later.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
