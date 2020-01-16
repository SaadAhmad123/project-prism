<template>
    <div class="flex">
        <p v-if="success" class="px-4 py-1 bg-green-600 text-center rounded text-white"><font-awesome-icon icon="check" class="mr-2"/>{{text}}</p>
        <p v-if="warning" class="px-4 py-1 bg-yellow-600 text-center rounded text-white"><font-awesome-icon icon="exclamation-triangle" class="mr-2"/>{{text}}</p>
        <p v-if="danger" class="px-4 py-1 bg-red-600 text-center rounded text-white"><font-awesome-icon icon="times" class="mr-2"/>{{text}}</p>
    </div>
</template>

<script>
export default {
    name:"model-alert-component",
    props: {'warning':Boolean, 'success':Boolean, 'danger':Boolean, 'text':String},
}
</script>