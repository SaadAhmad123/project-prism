<template>
    <div class="flex items-center">
        <p class="text-lg font-thin">Risk Points</p>
        <p class="ml-4 px-3 py-3 bg-white bg-gray-200 rounded inline-block">{{riskPoints.toFixed(3)}}</p>
    </div>
</template>

<script>
export default {
    name:'model-risk-point-display-component',
    props: {'riskPoints':Number}
}
</script>