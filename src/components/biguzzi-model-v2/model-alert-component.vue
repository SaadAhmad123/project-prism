<template>
    <div>
        <p v-if="success" class="px-4 py-1 bg-green-600 text-center rounded text-white">{{text}}</p>
        <p v-if="warning" class="px-4 py-1 bg-yellow-600 text-center rounded text-white">{{text}}</p>
        <p v-if="danger" class="px-4 py-1 bg-red-600 text-center rounded text-white">{{text}}</p>
    </div>
</template>

<script>
export default {
    name:"model-alert-component",
    props: {'warning':Boolean, 'success':Boolean, 'danger':Boolean, 'text':String},
}
</script>