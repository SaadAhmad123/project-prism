<template>
    <div id="model-slider-component">
        <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{parameter}}</p>
        <div class="flex flex-wrap items-stretch pb-8 mb-8 border-b">
            <div class="py-6 sm:pr-4 w-full sm:w-3/4 md:w-1/2">
                <range-slider
                    tooltip="always"
                    :min="min"
                    :max="max"
                    :step="step"
                    speed="0.2"
                    v-model="sliderValue"
                    start-animation
                    real-time
                    use-keyboard
                ></range-slider>
            </div>
            <div class="sm:pl-4 w-full sm:w-1/4 md:w-1/2 flex items-center">
                <p class="text-lg sm:text-2xl md:text-3xl">{{riskPoints.toFixed(3)}}</p>
                <p class="ml-4 px-3 py-3 bg-white bg-gray-200 rounded inline-block">Risk points</p>
            </div>
        </div>
    </div>
</template>

<script>
import VueRangeSlider from 'vue-range-component';

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
        'range-slider' : VueRangeSlider,
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