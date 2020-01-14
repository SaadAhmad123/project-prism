<template>
    <div id="nav-component">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center border-b">
            <div class="flex flex-wrap items-center justify-start">
                <a href="https://www.monash.edu/" target="_blank"><img class="h-16 border-r pr-2 mr-4" :src="require('@/assets/logo.png')"/></a>
                <router-link to="/">
                <p class="text-lg font-thin text-gray-800">
                    <span class="font-extrabold">PPH</span> 
                    Prognostics
                </p>
                </router-link>
            </div>
            <div class="">
                <router-link class="pl-4 hover:underline" to="/about">About</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-component',
}
</script>

