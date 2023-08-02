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
        <div class="pb-10">
            <h2 class="text-sky-600 text-3xl font-oswald font-bold mb-3">Button</h2>
            <div class="border p-4 rounded-xl bg-white">
                <!-- begin standard button -->
                <p class="mt-3">#Default standard Button, write component ButtonBase </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBase>
                        Primary Button
                    </ButtonBase>
    
                    <ButtonBase class="warning">
                        Warning Button
                    </ButtonBase>
    
                    <ButtonBase class="danger">
                        Danger Button
                    </ButtonBase>
    
                    <ButtonBase class="muted">
                        Muted Button
                    </ButtonBase>

                    <ButtonBase class="mono">
                        Mono Button
                    </ButtonBase>

                    <ButtonBase class="dark">
                        Dark Button
                    </ButtonBase>
                </div>

                <!-- begin expanded button -->
                <p class="mt-3">#Expanded Button to full with when viewport mobile, write component ButtonBaseExpanded </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBaseExpanded>
                        Primary Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="warning">
                        Warning Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="danger">
                        Danger Button
                    </ButtonBaseExpanded>
    
                    <ButtonBaseExpanded class="muted">
                        Muted Button
                    </ButtonBaseExpanded>

                    <ButtonBaseExpanded class="mono">
                        Mono Button
                    </ButtonBaseExpanded>

                    <ButtonBaseExpanded class="dark">
                        Dark Button
                    </ButtonBaseExpanded>
                </div>

                <!-- begin small button with icon -->
                <p class="mt-3">#Small Button with one sentence combine with icon, write component ButtonBaseSmall </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <ButtonBaseSmall>
                        <Icon name="lucide:eye" class="text-2xl" />
                        <span>
                            View
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="warning">
                        <Icon name="lucide:edit-3" class="text-2xl" />
                        <span>
                            Edit
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="danger">
                        <Icon name="lucide:trash" class="text-2xl" />
                        <span>
                            Delete
                        </span>
                    </ButtonBaseSmall>
    
                    <ButtonBaseSmall class="muted">
                        <Icon name="lucide:x" class="text-2xl" />
                        <span>
                            Close
                        </span>
                    </ButtonBaseSmall>

                    <ButtonBaseSmall class="mono">
                        <Icon name="lucide:moon" class="text-2xl" />
                        <span>
                            Switch
                        </span>
                    </ButtonBaseSmall>

                    <ButtonBaseSmall class="dark">
                        <Icon name="lucide:sun" class="text-2xl" />
                        <span>
                            Bright
                        </span>
                    </ButtonBaseSmall>
                </div>

                <!-- begin icon button -->
                <p class="mt-3">#Icon circle & square Button combine with various icon in nuxt icon, write component ButtonIcon </p>
                <!-- standard icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon button -->
                    <ButtonIcon>
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square icon button -->
                    <ButtonIcon class="square">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- small icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle small icon button -->
                    <ButtonIcon class="sm">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning sm">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger sm">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted sm">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono sm">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark sm">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square small icon button -->
                    <ButtonIcon class="square sm">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square sm">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square sm">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square sm">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square sm">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square sm">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- mini xs icon button -->
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle mini xs icon button -->
                    <ButtonIcon class="xs">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning xs">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger xs">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted xs">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono xs">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark xs">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>

                    <!-- square mini xs icon button -->
                    <ButtonIcon class="square xs">
                        <Icon name="lucide:eye" />
                    </ButtonIcon>
    
                    <ButtonIcon class="warning square xs">
                        <Icon name="lucide:edit-3" />
                    </ButtonIcon>
    
                    <ButtonIcon class="danger square xs">
                        <Icon name="lucide:trash" />
                    </ButtonIcon>
    
                    <ButtonIcon class="muted square xs">
                        <Icon name="lucide:x" />
                    </ButtonIcon>

                    <ButtonIcon class="mono square xs">
                        <Icon name="lucide:moon" />
                    </ButtonIcon>

                    <ButtonIcon class="dark square xs">
                        <Icon name="lucide:sun" />
                    </ButtonIcon>
                </div>

                <!-- icon button with tooltips -->
                <p class="mt-3">#Icon Button combine with sticky tooltips, write component ButtonIconTooltip </p>
                <div class="py-4 flex flex-wrap gap-4">
                    <!-- circle icon tooltips button -->
                    <ButtonIconTooltip>
                        <Icon name="lucide:eye" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="warning">
                        <Icon name="lucide:edit-3" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="danger">
                        <Icon name="lucide:trash" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="muted">
                        <Icon name="lucide:x" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="mono">
                        <Icon name="lucide:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="dark">
                        <Icon name="lucide:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ButtonIconTooltip>

                    <!-- square icon tooltips button -->
                    <ButtonIconTooltip class="square">
                        <Icon name="lucide:eye" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Lihat Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="warning square">
                        <Icon name="lucide:edit-3" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Edit Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="danger square">
                        <Icon name="lucide:trash" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Hapus Data</span>
                    </ButtonIconTooltip>
    
                    <ButtonIconTooltip class="muted square">
                        <Icon name="lucide:x" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Keluar</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="mono square">
                        <Icon name="lucide:moon" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Darkness</span>
                    </ButtonIconTooltip>

                    <ButtonIconTooltip class="dark square">
                        <Icon name="lucide:sun" />
                        <span class="absolute bg-gray-700 text-white px-1 py-2 rounded-md text-xs font-opensans -top-9 min-w-full w-24 hidden group-hover:block transition ease-in-out duration-300">Brightness</span>
                    </ButtonIconTooltip>
                </div>
            </div>
        </div>

        <!-- group of badge & avatar -->
        <div class="pb-10">
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