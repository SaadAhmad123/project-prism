<template>
    <div class="rounded shadow-md text-blue-800 mr-4">
        <p class="rounded rounded-b-none font-bold text-center tracking-wide bg-blue-700 text-blue-100 uppercase">{{title}}</p>
        <p class="text-5xl font-hairline text-blue-70 px-4 pt-1">{{text}}</p>
    </div>
</template>

<script>
export default {
    name:'model-display-component',
    props: ['title', 'text']
}
</script>