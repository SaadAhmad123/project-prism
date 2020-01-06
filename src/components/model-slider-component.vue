<template>
    <div id="model-slider-component">
        <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{parameter}}</p>
        <div class="flex flex-wrap items-stretch pb-8 mb-8 border-b">
            <div class="py-12 sm:pr-4 w-full sm:w-3/4 md:w-1/2">
                <veeno
                    pipsy
                    ltr
                    tooltips
                    :handles="[sliderValue]" 
                    v-model="sliderValue"
                    :range = "{ 
                        'min': this.min, 
                        'max': this.max 
                    }"/>
            </div>
            <div class="sm:pl-4 w-full sm:w-1/4 md:w-1/2 flex items-center">
                <model-risk-point-display-component :riskPoints="riskPoints"></model-risk-point-display-component>
            </div>
        </div>
    </div>
</template>

<script>
import veeno from 'veeno';
import 'nouislider/distribute/nouislider.min.css';
import ModelRiskPointDisplayComponent from '@/components/model-risk-point-display-component.vue';

export default {
    name:'model-slider-component',
    props:{
        'parameter':String,
        'max':Number,
        'min':Number,
        'step':Number,
        'modelFunction':Function,
        'value' : Number
    },
    data:function(){
        return {
            sliderValue: this.value
        };
    },
    components: {
        'veeno' : veeno,
        'model-risk-point-display-component' : ModelRiskPointDisplayComponent,
    },
    mounted : function(){
        this.$emit('update:riskFactor', this.riskPoints)
    },
    computed: {
        riskPoints: function(){
            var _riskFactor = this.sliderValue;
            if(this.modelFunction){
                _riskFactor = this.modelFunction(this.sliderValue)
            }
            this.$emit('update:riskFactor', _riskFactor)
            return _riskFactor;
        }
    }
}
</script>