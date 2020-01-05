<template>
    <div id="age-param-component">
        <model-slider-component 
            parameter="Age"
            :min="10"
            :max="120"
            :step="0.1"
            :modelFunction="this.ageModelFunction"
            :value="25"
            v-on:update:riskFactor="$emit('update:ageRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"age-param-component",
    methods: {
        ageModelFunction(val){
            return val*0.9
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>