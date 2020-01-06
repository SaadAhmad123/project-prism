<template>
    <div id="hemoglobin-param-component">
        <model-slider-component 
            parameter="Hemoglobin"
            :min="7"
            :max="17"
            :step="0.1"
            :modelFunction="this.hemoglobinModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:hemoglobinRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"hemoglobin-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 9.5
        }
    },
    methods: {
        hemoglobinModelFunction(val){
            return -5.1 * val - 86.7;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>