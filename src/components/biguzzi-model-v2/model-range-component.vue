<template>
    <div id="model-range-component" class="px-4 lg:px-16">
        <model-variable-heading :text="config.name" :info="config.info"/>
        <div class="flex flex-wrap justify-between">
            <div class="pr-4 sm:pr-8 w-full md:w-1/2 mb-6">
                <input placeholder="Enter an observation" :max="this.config.validConfig.max" :min="this.config.validConfig.min" :step="this.config.validConfig.step" :type="config.validConfig.inputType" v-model="input" class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 hover:border-blue-5" />
                <p class="mt-4 text-gray-500 text-sm"><font-awesome-icon icon="info-circle" class="mr-2"/>{{config.range_info}}</p>
            </div>
            <div class="w-full md:w-1/2">
                <div class="flex flex-wrap items-start justify-end">
                    <model-alert-component class="mb-4" :warning="this.validInput === null" text="Please enter a valid value"/>
                    <model-alert-component class="mb-4" :danger="this.validInput && !this.validInput.condition && this.validInput.type === 'max'" :text="'Model\'s maximum limit is ' + config.validConfig.max"/>
                    <model-alert-component class="mb-4" :danger="this.validInput && !this.validInput.condition && this.validInput.type === 'min'" :text="'Model\'s minimum limit is ' + config.validConfig.min"/>
                    <div class="flex flex-wrap items-start justify-end" v-if="this.validInput && this.validInput.condition"> 
                        <model-display-component  :title="config.displayName" :text="parseFloat(input).toFixed(1)"/>
                        <model-display-component  title="Points" :text="isNaN(parseFloat(points)) ? '?' : parseFloat(points).toFixed(1)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelVariableHeading from '@/components/biguzzi-model-v2/model-variable-heading.vue'
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import ModelDisplayComponent from "@/components/biguzzi-model-v2/model-display-component.vue"


export default {
    name : 'model-range-component',
    components : {
            'model-variable-heading' : ModelVariableHeading,
            'model-alert-component' : ModelAlertComponent,
            'model-display-component' : ModelDisplayComponent,
    },
    props : ['config'],
    data : function(){
        return {
            'input' : this.config.preset ? this.config.preset : "",
            'validInput' : null
        }
    },
    computed : {
        'rangeInput' : function(){return this.input === "" ? 0 : this.input},
        'points' : function(){
                if (this.validInput == null || (this.validInput && this.validInput.condition == false)) return null;
                return this.config.modelFunction(this.input, this.config)
            },
        'result' : function(){return {
                code : this.config.code,
                value : this.input,
                points : this.points
            }},
    },
    watch: {
            'input' : function(val){
                if (val === '' || isNaN(parseInt(val))) this.validInput = null
                else this.validInput = this.config.validateInput(val, this.config.validConfig) 
            },
            'result' : function(val){
                this.$emit('update:result', val)
            }
    },
}
</script>