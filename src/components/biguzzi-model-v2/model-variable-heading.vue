<template>
    <div class="flex justify-between items-center border-l-8 border-blue-800 text-3xl font-thin text-blue-800 bg-blue-100 px-4 mb-8">
        <p>{{text}}</p> 
        <p v-tooltip.bottom="info" v-if="info" class="hover:text-blue-800 cursor-pointer text-blue-700 text-xl"><font-awesome-icon icon="info-circle"/></p>
    </div>
</template>

<script>
export default {
    name: "model-variable-heading",
    props: ['text', 'info'],
    
}
</script>