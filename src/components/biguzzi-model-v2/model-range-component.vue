<template>
    <div id="model-range-component" class="px-4 lg:px-16">
        <model-variable-heading :text="config.name"/>
        <div class="flex flex-wrap justify-between">
            <div class="pr-4 sm:pr-8 w-full md:w-1/2 mb-6">
                <input placeholder="Enter an observation" :max="this.config.validConfig.max" :min="this.config.validConfig.min" :step="this.config.validConfig.step" :type="config.validConfig.inputType" v-model="input" class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 hover:border-blue-5" />
                <p class="mt-4 text-gray-500 text-sm"><font-awesome-icon icon="info-circle" class="mr-2"/>{{config.range_info}}</p>
                <!--<div class="mb-16" id="slider-container">
                    <div class="hidden md:block">
                        <veeno
                            behaviour="tap-drag"
                            :set = "parseFloat(rangeInput)"
                            pipsy
                            ltr
                            :handles="[parseFloat(rangeInput)]" 
                            v-model="input"
                            :step = "this.config.validConfig.step"
                            :range = "{ 
                                'min': this.config.validConfig.min, 
                                'max': this.config.validConfig.max
                            }"/>
                    </div>
                    <div class="block md:hidden">
                        <veeno
                            behaviour="drag"
                            :set = "parseFloat(rangeInput)"
                            pipsy
                            ltr
                            :handles="[rangeInput]" 
                            v-model="input"
                            :step = "this.config.validConfig.step"
                            :range = "{ 
                                'min': this.config.validConfig.min, 
                                'max': this.config.validConfig.max
                            }"/>
                    </div>
                </div>-->
            </div>
            <div class="w-full md:w-1/2">
                <div class="flex flex-wrap items-start justify-end">
                    <model-alert-component class="mb-4" :warning="isNaN(parseInt(input)) || isNaN(parseInt(points))" text="Please enter a valid value"/>
                    <model-display-component v-if="config.displayPoints && !isNaN(parseInt(input)) && !isNaN(parseInt(points))" :title="config.displayName" :text="parseFloat(input).toFixed(1)"/>
                    <model-display-component v-if="config.displayPoints && !isNaN(parseInt(input)) && !isNaN(parseInt(points))" title="Points" :text="parseFloat(points).toFixed(1)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import veeno from 'veeno';
//import 'nouislider/distribute/nouislider.min.css';

import ModelVariableHeading from '@/components/biguzzi-model-v2/model-variable-heading.vue'
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import ModelDisplayComponent from "@/components/biguzzi-model-v2/model-display-component.vue"


export default {
   name : 'model-range-component',
   components : {
        'model-variable-heading' : ModelVariableHeading,
        //'veeno' : veeno,
        'model-alert-component' : ModelAlertComponent,
        'model-display-component' : ModelDisplayComponent,
   },
   props : {
       'config' : Object,
   },
   data : function(){
       return {
           'input' : this.config.preset ? this.config.preset : "",
       }
   },
   computed : {
       'rangeInput' : function(){return this.input === "" ? 0 : this.input},
       'points' : function(){return this.input === "" ? null : this.config.modelFunction(this.input, this.config)},
       'result' : function(){return {
            code : this.config.code,
            value : this.input,
            points : this.points
        }},
   },
   watch: {
       'input' : function(val){
            this.input = this.config.validateInput(val, this.config.validConfig)
        },
       'result' : function(val){
           this.$emit('update:result', val)
        }
   },
}
</script>