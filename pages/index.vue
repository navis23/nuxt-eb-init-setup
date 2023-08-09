<template>
    <div class="px-4 lg:px-32 py-10">
        <nav class="bg-gray-800 text-white h-30 flex justify-end items-center w-full p-4 mb-5 rounded-md">
            <div class="flex justify-between items-center gap-4 ">
                <nuxt-link to="/">
                    <Badge class="mono">
                        Home
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component">
                    <Badge class="mono">
                        component
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/cards">
                    <Badge class="mono">
                        card
                    </Badge>
                </nuxt-link>
                <nuxt-link to="/list-component/table-1">
                    <Badge class="mono">
                        table
                    </Badge>
                </nuxt-link>
            </div>
        </nav>
        <h1 class="text-emerald-400 text-4xl font-bold uppercase font-oswald">Basic Example for EB CLI Template with nuxt 3</h1>
        <div class="bg-gray-700 p-3 mt-2 rounded">
            <h3 class="text-xl uppercase text-slate-100 font-oswald">Background color is {{ bg_color }}</h3>
        </div>
        <!-- test dependency nuxt icon -->
        <div class="mt-4">
            <p class="uppercase font-bold font-oswald text-xl pb-2 text-sky-600">test nuxt icon</p>
            <div class="flex gap-4 flex-wrap pt-2">
                <div>
                    <Icon name="svg-spinners:clock" class="font-semibold text-4xl text-teal-500" />
                </div>
                <div>
                    <Icon name="lucide:moon" class="font-semibold text-4xl text-purple-500" />
                </div>
                <div>
                    <Icon name="lucide:bird" class="font-semibold text-4xl text-amber-500" />
                </div>
                <div>
                    <Icon name="lucide:fingerprint" class="font-semibold text-4xl text-sky-500" />
                </div>
                <div>
                    <Icon name="lucide:cat" class="font-semibold text-4xl text-indigo-500" />
                </div>
                <div>
                    <Icon name="lucide:sun" class="font-semibold text-4xl text-yellow-500" />
                </div>
                <div>
                    <Icon name="svg-spinners:tadpole" class="font-semibold text-4xl text-red-500" />
                </div>
            </div>

        </div>

        <!-- test dependency nuxt form kit -->
        <div class="mt-4 border-t py-2">
            <p class="uppercase font-bold font-oswald text-xl pb-2 text-sky-600">test formkit</p>
            <FormKit
                v-model="value"
                type="range"
                label="Volume"
                min="0"
                max="11"
                help="Select your volume level."
            />
            <p class="font-oswald uppercase text-teal-500 -mt-3 mb-2">
                {{ value }}
            </p>
            <FormKit
                v-model="time"
                type="time"
                label="Time"
                value="23:15"
                help="jam piro muleh kowe le?"
            />
            <p class="font-oswald uppercase text-fuchsia-500 -mt-3 mb-2">
                {{ time }}
            </p>

            <FormKit
                v-model="name"
                type="text"
                label="Your username"
                placeholder="you nameeeeee"
                help="Pick a username people will remember!"
            />
            <p class="font-oswald uppercase text-rose-500 -mt-3 mb-2">
                {{ name }}
            </p>
        </div>

        <!-- test call api with axios -->
        <div class="mt-4 border-t pt-2">
            <p class="uppercase font-bold font-oswald text-xl pb-2 text-sky-600">test axios and fecth data</p>
            <div class="p-3 border rounded-md w-96 bg-white" :class="loadingIcon ? 'border-red-500' : ''">
                <p v-if="loadingIcon" class="text-center">
                    <Icon name="svg-spinners:tadpole" class="font-semibold text-4xl text-red-500" />
                </p>
                <ul v-for="(item, index) in users" :key="index">
                    <li>
                        {{ index+1 }}. {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>

        <!-- test call api with useFetch -->
        <div class="mt-4 border-t pt-2">
            <p class="uppercase font-bold font-oswald text-xl pb-2 text-sky-600">test use useFetch</p>
            <div class="p-3 border-2 shadow-sm rounded" :class="pending ? 'border-violet-500' : ''">
                <p v-if="pending" class="text-center">
                    <Icon name="svg-spinners:clock" class="font-semibold text-4xl text-violet-500" />
                </p>
                <div v-else class="grid grid-cols-12 w-full gap-6">
                    <div v-for="product of (products as any[])" :key="product.id" class="col-span-12 md:col-span-6 lg:col-span-4">
                        <div class="p-2 bg-gray-700 text-gray-100 my-2 rounded w-96 flex gap-x-3 items-center justify-start">
                            <p class=" w-2/5 ">
                                <nuxt-img :src="product.image" alt="" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded h-48 " />
                            </p>
                           <p class=" w-3/5 text-sm">
                                {{ product.title }}
                           </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- test font family -->
        <div class="mt-4 border-t pt-2 flex flex-col gap-1">
            <h1 class="text-5xl font-semibold uppercase font-oswald text-rose-500">
                test font oswald for text heading
            </h1>
            <h3 class="text-5xl font-semibold font-oswald text-rose-500">
                test font oswald for text heading
            </h3>
            <h3 class="text-3xl font-semibold uppercase font-oswald text-rose-500">
                test font oswald for text heading
            </h3>
            <h3 class="text-3xl font-semibold font-oswald text-rose-500">
                test font oswald for text heading
            </h3>
        
            <h3 class="text-3xl">
                Test Font Open Sans for main text body
            </h3>
            <h3 class="text-2xl">
                Test Font Open Sans for main text body
            </h3>
            <h3 class="text-xl">
                Test Font Open Sans for main text body
            </h3>
            <h3 class="text-lg">
                Test Font Open Sans for main text body
            </h3>
            <h3 class="text-base">
                Test Font Open Sans for main text body
            </h3>
        
        </div>
        
        <!-- test headlessUI -->
        <div class="mt-4 border-t pt-2">
            <p class="uppercase font-bold mb-3 font-oswald text-xl pb-2 text-sky-600">Test Headless UI</p>
            <div class="flex gap-x-2 items-center">
                <HeadlessSwitch
                    v-model="enabled"
                    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full"
                >
                    <span class="sr-only">Enable notifications</span>
                    <span
                    :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    />
                </HeadlessSwitch>

                <ClientOnly>
                    <HeadlessTransitionRoot
                        :show="enabled"
                        enter="transition-opacity duration-200"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="transition-opacity duration-400"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <span>
                            <Icon name="lucide:github" class="text-5xl font-bold text-lime-500" />
                        </span>
                    </HeadlessTransitionRoot>
                </ClientOnly>
            </div>

            <div class="py-4">
                <HeadlessPopover class="relative">
                    <HeadlessPopoverButton>
                        <ButtonBase class="mono">
                            Test Popover
                        </ButtonBase>
                    </HeadlessPopoverButton>

                    <HeadlessPopoverPanel class="absolute z-10 bg-white rounded-md p-4 mt-3">
                        <div class="grid grid-cols-2 gap-6 pb-4">
                            <nuxt-link to="/">
                                <ButtonBase class="dark">
                                    Home
                                </ButtonBase>
                            </nuxt-link>
                            <nuxt-link to="/list-component">
                                <ButtonBase class="dark">
                                    Components
                                </ButtonBase>
                            </nuxt-link>
                            <nuxt-link to="/list-component/cards">
                                <ButtonBase class="dark">
                                    Cards
                                </ButtonBase>
                            </nuxt-link>
                            <nuxt-link to="/">
                                <ButtonBase class="dark">
                                    Table
                                </ButtonBase>
                            </nuxt-link>
                        </div>

                        <nuxt-img src="/img/bg01.png" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded-md h-48" />
                    </HeadlessPopoverPanel>
                </HeadlessPopover>
            </div>
            
            <div class="py-4 flex flex-wrap gap-4">
                <ButtonBase @click="setIsOpen(true)">
                    Tes Modal
                </ButtonBase>

                <ButtonBase class="warning" @click="setIsOpen(true)">
                    Warning Button
                </ButtonBase>

                <ButtonBase class="danger" @click="setIsOpen(true)">
                    Danger Button
                </ButtonBase>

                <ButtonBase class="muted" @click="setIsOpen(true)">
                    Muted Button
                </ButtonBase>
            </div>

            <div class="py-4 flex flex-wrap gap-4">
                <ButtonBaseExpanded @click="setIsOpen(true)">
                    Tes Modal
                </ButtonBaseExpanded>

                <ButtonBaseExpanded class="warning" @click="setIsOpen(true)">
                    Warning Button
                </ButtonBaseExpanded>

                <ButtonBaseExpanded class="danger" @click="setIsOpen(true)">
                    Danger Button
                </ButtonBaseExpanded>

                <ButtonBaseExpanded class="muted" @click="setIsOpen(true)">
                    Muted Button
                </ButtonBaseExpanded>
            </div>

            <div class="py-4 flex flex-wrap gap-4">
                <ButtonIcon @click="setIsOpen(true)">
                    <Icon name="lucide:moon" />
                </ButtonIcon>

                <ButtonIcon class="warning" @click="setIsOpen(true)">
                    <Icon name="lucide:moon" />
                </ButtonIcon>

                <ButtonIcon class="danger" @click="setIsOpen(true)">
                    <Icon name="lucide:moon" />
                </ButtonIcon>

                <ButtonIcon class="muted" @click="setIsOpen(true)">
                    <Icon name="lucide:moon" />
                </ButtonIcon>
            </div>

        </div>

        <!-- test nuxt image optimization -->
        <div class="mt-4 border-t pt-2">
            <p class="uppercase font-bold font-oswald text-xl pb-2 text-sky-600">test nuxt image optimize</p>
            <div class="flex flex-wrap gap-3">
                <nuxt-img src="/img/bg01.png" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded shadow-md md:h-48" />
                <nuxt-img src="/img/bg02.png" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded shadow-md md:h-48" />
                <nuxt-img src="/img/bg03.JPG" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded shadow-md md:h-48" />
                <nuxt-img src="/img/bg04.png" format="webp" loading="lazy" sizes="sm:100vw" fit="cover" class="rounded shadow-md md:h-48" />
            </div>
        </div>

        <ClientOnly>
            <HeadlessDialog :open="isOpen" @close="setIsOpen" class="relative z-50">
                <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

                <!-- Full-screen container to center the panel -->
                <div class="fixed inset-0 flex items-center justify-center p-4">
                <!-- The actual dialog panel -->
                <HeadlessDialogPanel class="w-full max-w-sm rounded bg-white p-4">
                    <HeadlessDialogTitle>Complete your order</HeadlessDialogTitle>
                    <ButtonBase class="danger" @click="setIsOpen(false)">
                        get outttt
                    </ButtonBase>
                    <!-- ... -->
                </HeadlessDialogPanel>
                </div>
            </HeadlessDialog>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const value = ref()
const name = ref()
const time = ref()
const users = ref()
const bg_color = ref('slate-100')

const { data: products, pending, error, refresh } = await useLazyFetch(() => 'https://fakestoreapi.com/products?limit=5')

const enabled = ref(false)

const loadingIcon = ref(false)
const isOpen = ref(false)

function setIsOpen(value : any) {
    isOpen.value = value
}

onMounted( async () => {
    await fetchUser()
    // await fetchProduct()
})

const fetchUser = async () => {
    loadingIcon.value = true
    await axios.get('https://jsonplaceholder.typicode.com/users', {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
    })
    .then(res => {
        users.value = res.data
        loadingIcon.value = false
    })
}


</script>

<style scoped>

</style>