<template>
    <div id="weight-param-component">
        <model-slider-component 
            parameter="Weight - kg"
            :min="40"
            :max="150"
            :step="0.1"
            :modelFunction="this.weightModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:weightRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"weight-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 80
        }
    },
    methods: {
        weightModelFunction(val){
            return 0.2364 * val - 9.4545;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>