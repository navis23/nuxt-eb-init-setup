<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex justify-between items-center w-full p-4 mb-5 rounded-md">
            <h1 class="text-4xl font-bold text-sky-500 uppercase font-oswald">Card Version for EB UI</h1>
            <div class="flex justify-between items-center gap-4 ">
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
                <nuxt-link to="/">
                    <Badge class="mono">
                        table
                    </Badge>
                </nuxt-link>
            </div>
        </nav>

        <!-- begin card ver 1 -->
        <div class="pb-4">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 1</h2>

            <!-- card container -->
            <div class="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4">

                <!-- begin card -->
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card101.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <!-- <span class="inline-block px-3 font-sans py-1 text-xs rounded-full bg-sky-100 text-sky-500 border-sky-100 border absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            Uyesss
                        </span> -->
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Percobaan car version 1 EB UI gaes lets go
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <!-- <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div> -->
                            <Avatar class="xs">
                                <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                            </Avatar>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-xs font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <SmButton class="mono">
                                <Icon name="carbon:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </SmButton>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card102.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur nulla sint?
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Razer Eb
                            </h4>
                            <p class="text-xs text-gray-400">10 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <SmButton class="mono">
                                <Icon name="carbon:moon" class="text-2xl" />
                                <span>
                                    Edit
                                </span>
                            </SmButton>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card103.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, totam.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Ryuma E.
                            </h4>
                            <p class="text-xs text-gray-400">44 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <SmButton class="mono">
                                <Icon name="carbon:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </SmButton>
                        </div>
                    </div>
                </div>

                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl group p-3">
                    <div class="relative">
                        <nuxt-img src="/img/card104.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover object-center h-40 w-full rounded-lg"/>
                        <Badge class="dark absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            standard badge
                        </Badge>
                    </div>
                    <div class="mb-6 mt-3">
                        <p class="leading-snug line-clamp-2">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-2">
                        <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-slate-500">
                            <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="max-h-full max-w-full object-cover object-center shadow-sm h-8 w-8" />
                            </div>
                        </div>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Hyuga Misa
                            </h4>
                            <p class="text-xs text-gray-400">1 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <SmButton class="mono">
                                <Icon name="carbon:moon" class="text-2xl" />
                                <span>
                                    Switch
                                </span>
                            </SmButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- begin card ver 2 -->
        <div class="pb-4">
            <h2 class="text-3xl font-oswald font-bold mb-3">Card Ver. 2</h2>
            <!-- card container -->
            <div class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <IButton class="mono sm">
                                <Icon name="carbon:overflow-menu-horizontal" />
                            </IButton>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/card101.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <SButton class="mono w-full">
                            Mono Button
                        </SButton>
                        <SButton class="dark w-full">
                            Dark Button
                        </SButton>
                    </div>
                </div>
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <IButton class="mono sm">
                                <Icon name="carbon:overflow-menu-horizontal" />
                            </IButton>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/bg01.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <SButton class="w-full">
                            Full Button
                        </SButton>
                    </div>
                </div>
                <div class="relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
                    <div class="mb-3 flex items-center gap-3">
                        <Avatar class="xs">
                            <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                        </Avatar>
                        <div class="leading-none">
                            <h4 class="text-sm font-medium leading-tight">
                                Navis Mbing
                            </h4>
                            <p class="text-xs text-gray-400">15 minutes ago</p>
                        </div>
                        <div class="ms-auto">
                            <IButton class="mono sm">
                                <Icon name="carbon:overflow-menu-horizontal" />
                            </IButton>
                        </div>
                    </div>
                    <div>
                        <nuxt-img src="/img/card102.png" format="webp" loading="lazy" sizes="sm:100vw" class="object-cover h-64 w-full object-center rounded-lg"/>
                    </div>
                    <div class="my-4">
                        <p class="leading-snug line-clamp-2">
                            Percobaan car version 2 EB UI gaes lets go Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <SButton class="mono w-full">
                            Mono Button
                        </SButton>
                        <SButton class="dark w-full">
                            Dark Button
                        </SButton>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>