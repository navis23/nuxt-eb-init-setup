<template>
    <span class="bg-sky-300 text-sky-700 bg-opacity-30 h-6 px-2 font-semibold text-xs flex justify-center items-center rounded-md">
        <slot />
    </span>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-red-300 text-red-700 
}
.warning {
    @apply bg-yellow-300 text-yellow-700 
}
.muted {
    @apply bg-slate-300 text-slate-700
}
.mono {
    @apply bg-slate-50 text-gray-800 border
}
.dark {
    @apply text-slate-50 bg-gray-800
}

</style>