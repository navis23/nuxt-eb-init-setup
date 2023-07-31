<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex justify-between items-center w-full p-4 mb-5 rounded-md">
            <h1 class="text-4xl text-sky-500 font-bold uppercase font-oswald">List Component for EB UI</h1>
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
        <!-- group of button -->
        <div class="pb-8">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Button</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin standard button -->
                <p class="mt-3">#Default standard Button, write component SButton </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <SButton>
                        Primary Button
                    </SButton>
    
                    <SButton class="warning">
                        Warning Button
                    </SButton>
    
                    <SButton class="danger">
                        Danger Button
                    </SButton>
    
                    <SButton class="muted">
                        Muted Button
                    </SButton>

                    <SButton class="mono">
                        Mono Button
                    </SButton>

                    <SButton class="dark">
                        Dark Button
                    </SButton>
                </div>

                <!-- begin expanded button -->
                <p class="mt-3">#Expanded Button to full with when viewport mobile, write component LButton </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <LButton>
                        Primary Button
                    </LButton>
    
                    <LButton class="warning">
                        Warning Button
                    </LButton>
    
                    <LButton class="danger">
                        Danger Button
                    </LButton>
    
                    <LButton class="muted">
                        Muted Button
                    </LButton>

                    <LButton class="mono">
                        Mono Button
                    </LButton>

                    <LButton class="dark">
                        Dark Button
                    </LButton>
                </div>

                <!-- begin small button with icon -->
                <p class="mt-3">#Small Button with one sentence combine with icon, write component SmButton </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <SmButton>
                        <Icon name="carbon:view" class="text-2xl" />
                        <span>
                            View
                        </span>
                    </SmButton>
    
                    <SmButton class="warning">
                        <Icon name="carbon:edit" class="text-2xl" />
                        <span>
                            Edit
                        </span>
                    </SmButton>
    
                    <SmButton class="danger">
                        <Icon name="carbon:trash-can" class="text-2xl" />
                        <span>
                            Delete
                        </span>
                    </SmButton>
    
                    <SmButton class="muted">
                        <Icon name="carbon:close" class="text-2xl" />
                        <span>
                            Close
                        </span>
                    </SmButton>

                    <SmButton class="mono">
                        <Icon name="carbon:moon" class="text-2xl" />
                        <span>
                            Switch
                        </span>
                    </SmButton>

                    <SmButton class="dark">
                        <Icon name="carbon:sun" class="text-2xl" />
                        <span>
                            Bright
                        </span>
                    </SmButton>
                </div>

                <!-- begin icon button -->
                <p class="mt-3">#Icon circle & square Button combine with various icon in nuxt icon, write component IButton </p>
                <!-- standard icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon button -->
                    <IButton>
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark">
                        <Icon name="carbon:sun" />
                    </IButton>

                    <!-- square icon button -->
                    <IButton class="square">
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning square">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger square">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted square">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono square">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark square">
                        <Icon name="carbon:sun" />
                    </IButton>
                </div>

                <!-- small icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle small icon button -->
                    <IButton class="sm">
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning sm">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger sm">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted sm">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono sm">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark sm">
                        <Icon name="carbon:sun" />
                    </IButton>

                    <!-- square small icon button -->
                    <IButton class="square sm">
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning square sm">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger square sm">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted square sm">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono square sm">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark square sm">
                        <Icon name="carbon:sun" />
                    </IButton>
                </div>

                <!-- mini xs icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle mini xs icon button -->
                    <IButton class="xs">
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning xs">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger xs">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted xs">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono xs">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark xs">
                        <Icon name="carbon:sun" />
                    </IButton>

                    <!-- square mini xs icon button -->
                    <IButton class="square xs">
                        <Icon name="carbon:view" />
                    </IButton>
    
                    <IButton class="warning square xs">
                        <Icon name="carbon:edit" />
                    </IButton>
    
                    <IButton class="danger square xs">
                        <Icon name="carbon:trash-can" />
                    </IButton>
    
                    <IButton class="muted square xs">
                        <Icon name="carbon:close" />
                    </IButton>

                    <IButton class="mono square xs">
                        <Icon name="carbon:moon" />
                    </IButton>

                    <IButton class="dark square xs">
                        <Icon name="carbon:sun" />
                    </IButton>
                </div>

                <!-- icon button with tooltips -->
                <p class="mt-3">#Icon Button combine with sticky tooltips, write component ItButton </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon tooltips button -->
                    <ItButton>
                        <Icon name="carbon:view" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ItButton>
    
                    <ItButton class="warning">
                        <Icon name="carbon:edit" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ItButton>
    
                    <ItButton class="danger">
                        <Icon name="carbon:trash-can" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ItButton>
    
                    <ItButton class="muted">
                        <Icon name="carbon:close" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ItButton>

                    <ItButton class="mono">
                        <Icon name="carbon:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ItButton>

                    <ItButton class="dark">
                        <Icon name="carbon:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ItButton>

                    <!-- square icon tooltips button -->
                    <ItButton class="square">
                        <Icon name="carbon:view" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ItButton>
    
                    <ItButton class="warning square">
                        <Icon name="carbon:edit" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ItButton>
    
                    <ItButton class="danger square">
                        <Icon name="carbon:trash-can" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ItButton>
    
                    <ItButton class="muted square">
                        <Icon name="carbon:close" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ItButton>

                    <ItButton class="mono square">
                        <Icon name="carbon:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ItButton>

                    <ItButton class="dark square">
                        <Icon name="carbon:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ItButton>
                </div>
            </div>
        </div>

        <!-- group of badge & avatar -->
        <div class="pb-8">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Badge & Avatar</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin badge -->
                <p class="mt-3">#Default standard Badge, write component Badge </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <Badge>
                        standard badge
                    </Badge>
                    <Badge class="warning">
                        warning badge
                    </Badge>
                    <Badge class="danger">
                        danger badge
                    </Badge>
                    <Badge class="muted">
                        muted badge
                    </Badge>
                    <Badge class="mono">
                        mono badge
                    </Badge>
                    <Badge class="dark">
                        dark badge
                    </Badge>
                </div>

                <!-- begin avatar -->
                <p class="mt-3">#Standard & small Avatar with circle & square design and indicator, write component Avatar </p>
                <!-- standard avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle avatar -->
                    <Avatar>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    
                    <!-- square avatar -->
                    <Avatar class="square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                </div>

                <!-- standard avatar with indicator -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle avatar indicator -->
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-emerald-500"></span>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-red-500"></span>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-sky-500"></span>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    <Avatar class="relative">
                        <span class="absolute w-3 h-3 top-0 right-1 ring-1 ring-offset-1 rounded-full bg-yellow-500"></span>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-full" />
                    </Avatar>
                    
                    <!-- square avatar indicator -->
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-emerald-500"></span>
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-red-500"></span>
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-sky-500"></span>
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                    <Avatar class="square relative">
                        <span class="absolute w-3 h-3 -top-1 -right-1 ring-1 ring-offset-1 rounded-full bg-yellow-500"></span>
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-14 w-14 rounded-md" />
                    </Avatar>
                </div>

                <!-- small avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle sm avatar -->
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <Avatar class="sm">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-full" />
                    </Avatar>
                    <!-- square sm avatar -->
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                    <Avatar class="sm square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-12 w-12 rounded-md" />
                    </Avatar>
                </div>

                <!-- mini avatar -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle mini xs avatar -->
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <Avatar class="xs">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-full" />
                    </Avatar>
                    <!-- square mini xs avatar -->
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava01.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava02.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava03.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                    <Avatar class="xs square">
                        <nuxt-img src="/img/ava04.png" format="webp" loading="lazy" sizes="sm:20vw" class="object-cover object-center h-8 w-8 rounded-md" />
                    </Avatar>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>