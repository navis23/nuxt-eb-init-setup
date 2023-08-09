<template>
    <button class="bg-sky-600 text-white p-3 w-40 rounded-md hover:bg-sky-500 hover:text-gray-100 transition ease-in-out duration-300 font-oswald tracking-wide">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-red-600 hover:bg-red-500
}
.warning {
    @apply bg-yellow-600 hover:bg-yellow-500
}
.muted {
    @apply bg-gray-500 hover:bg-gray-400
}
.mono {
    @apply bg-slate-50 text-gray-600 border hover:bg-white
}
.dark {
    @apply text-gray-50 bg-gray-800 border hover:bg-gray-700
}
</style>