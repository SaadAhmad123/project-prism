<template>
    <div id="neo-weight-pp-param-component">
        <model-slider-component 
            parameter="Neonatal Weight - PP"
            :min="1500"
            :max="5500"
            :step="0.1"
            :modelFunction="this.neoWeightPPModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:neoWeightPPRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"neo-weight-pp-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 2000
        }
    },
    methods: {
        neoWeightPPModelFunction(val){
            return 0.0063 * val + 16.625;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>