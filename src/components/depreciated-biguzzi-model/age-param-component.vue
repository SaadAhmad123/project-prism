<template>
    <div id="age-param-component">
        <model-slider-component 
            parameter="Age"
            :min="10"
            :max="120"
            :step="0.1"
            :modelFunction="this.ageModelFunction"
            :value="value"
            v-on:update:riskFactor="$emit('update:ageRiskFactor', $event)"
        />
    </div>
</template>

<script>
import ModelSliderComponent from '@/components/model-slider-component.vue';


export default {
    name:"age-param-component",
    props:[
        'preset',
    ],
    data : function(){
        return {
            value : this.preset? this.preset : 25
        }
    },
    methods: {
        ageModelFunction(val){
            return 0.7857 * val - 11.786;
        },
    },
    components : {
        'model-slider-component' : ModelSliderComponent,
    },
}
</script>