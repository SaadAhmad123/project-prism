<template>
    <div id="neo-weight-mp-param-component">
        <model-slider-component 
            parameter="Neonatal Weight - MP"
            :min="1500"
            :max="5500"
            :step="0.1"
            :modelFunction="this.neoWeightMPModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:neoWeightMPRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"neo-weight-mp-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 2000
        }
    },
    methods: {
        neoWeightMPModelFunction(val){
            return 0.0103 * val - 15.375;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>