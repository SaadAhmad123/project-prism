<template>
    <div class="rounded shadow text-blue-800 mr-4 mb-4">
        <p class="rounded rounded-b-none font-bold text-center text-xs lg:text-base tracking-wide text-blue-100 uppercase px-4" :class="color">{{title}}</p>
        <p class="text-center text-3xl font-hairline text-blue-70 px-4 pt-1">{{text}}</p>
    </div>
</template>

<script>
export default {
    name:'model-display-component',
    props: {
        'title' : String,
        'text' : {},
        'color' : {type: String, default: 'bg-blue-700'}
     }
}
</script>