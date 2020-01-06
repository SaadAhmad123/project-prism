<template>
    <div id="neo-weight-np-param-component">
        <model-slider-component 
            parameter="Neonatal Weight - NP"
            :min="1500"
            :max="5500"
            :step="0.1"
            :modelFunction="this.neoWeightNPModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:neoWeightNPRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"neo-weight-np-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 2000
        }
    },
    methods: {
        neoWeightNPModelFunction(val){
            return 0.0213 * val - 6.875;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>