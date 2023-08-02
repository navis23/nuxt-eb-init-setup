<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex justify-between items-center w-full p-4 mb-5 rounded-md">
            <div class="font-bold flex items-center gap-x-2 text-sky-500 uppercase font-oswald">
                <Icon name="lucide:table" class="text-4xl" />
                <h1 class="text-3xl ">Table Version for EB UI</h1>
            </div>
            <div class="flex justify-between items-center gap-4 flex-wrap">
                <nuxt-link to="/">
                    <Badge class="mono">
                        Home
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component">
                    <Badge class="mono">
                        small component
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/cards">
                    <Badge class="mono">
                        card
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/tables">
                    <Badge class="mono">
                        table
                    </Badge>
                </nuxt-link>
            </div>
        </nav>
        <!-- start table v1 -->
        <div class="pb-10">
            <h2 class="text-3xl font-oswald font-bold mb-3">Table Ver. 1</h2>
            <!-- table container -->
            <div class="mt-6">
                <!-- search & action -->
                <div class="mb-2 flex w-full flex-col items-end justify-between gap-2 sm:flex-row">
                    <div class="flex w-full items-center sm:w-auto">
                        <div class="relative w-full sm:w-auto">
                            <FormKit
                                type="search"
                                placeholder="Search..."
                                prefix-icon="search"
                                value="Apple Cider"
                            />
                        </div>
                    </div>
                    <ButtonBaseExpanded class="mb-4 flex items-center justify-center gap-x-1">
                        <Icon name="lucide:copy-plus" class="text-2xl"/>
                        New Data
                    </ButtonBaseExpanded>
                </div>
                <!-- table & pagination -->
                <div class="">
                    <!-- table start -->
                    <div class="w-full">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto border rounded-md">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="overflow-hidden">
                                        <table class="divide-gray-200 min-w-full table-fixed divide-y">
                                            <thead>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    product
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    name
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    price
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    stock
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    category
                                                </th>
                                                <th class="text-left font-semibold tracking-wider text-xs uppercase border-gray-200 last:border-none border-r bg-white px-4 py-5">
                                                    action
                                                </th>
                                            </thead>
                                            <tbody class="divide-gray-20 divide-y bg-white">
                                                <tr v-for="product of (products as any[])" :key="product.id" class="hover:bg-gray-50 transition-colors duration-300">
                                                    <td class="whitespace-nowrap text-sm p-4">
                                                        <div class="flex items-center">
                                                            <nuxt-img :src="product.image" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center w-14 rounded-md" />
                                                        </div>
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        {{ product.title }}
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        <span class="font-semibold">
                                                            {{ product.price }}
                                                        </span>
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        {{ product.rating.count }}
                                                    </td>
                                                    <td class="whitespace-nowrap text-xs p-4">
                                                        <span class="text-sky-500">
                                                            {{ product.category }}
                                                        </span> 
                                                    </td>
                                                    <td class="whitespace-nowrap text-sm p-4">
                                                        <ButtonBase class="mono">
                                                            Manage
                                                        </ButtonBase>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const { data: products, pending, error, refresh } = await useLazyFetch(() => 'https://fakestoreapi.com/products?limit=10')

</script>

<style scoped>

</style>