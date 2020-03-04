<template>
    <div id="placenta-weight-param-component">
        <model-slider-component 
            parameter="Placenta Weight"
            :min="1500"
            :max="5500"
            :step="0.1"
            :modelFunction="this.placentaWeightModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:placentaWeightRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"placenta-weight-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 2000
        }
    },
    methods: {
        placentaWeightModelFunction(val){
            return 0.0622 * val - 6.222;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>