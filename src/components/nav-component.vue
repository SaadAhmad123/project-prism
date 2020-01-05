<template>
    <div id="nav-component">
        <div class="container mx-auto px-4 py-4 flex justify-between border-b">
            <div class="">
                <router-link to="/"><p class="text-lg font-semibold">Project PRISM</p></router-link>
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

