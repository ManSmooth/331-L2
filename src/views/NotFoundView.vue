<template>
    <div class="w-full p-12 flex flex-col">
        <div class="w-full h-full bg-red-500 p-4 rounded-t-lg">
            <p class="font-serif text-3xl font-bold text-white">Error 404</p>
        </div>
        <div class="w-full h-full bg-stone-50 p-4 rounded-b-lg shadow-lg text-black">
            <div class="flex flex-col gap-2">
                <p class="font-serif text-3xl font-bold">Oops!</p>
                <p class="font-serif text-2xl">Looks like the {{ resource }} you're looking for doesn't exist.</p>
                <div class="flex justify-center items-center">
                    <RouterLink class="font-bold border border-black py-2 px-4" to="/">Return</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    resource: {
        type: String,
        required: true,
        default: "page",
    }
})
</script>
