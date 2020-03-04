<template>
    <div id="model-select-component" class="px-4 pb-2 lg:px-16">
        <model-variable-heading :text="config.name" :info="config.info"/>
        
        <div class="flex flex-wrap justify-between">
            <div  class="pr-4 sm:pr-8 w-full md:w-1/2">
                <div v-if="config.options.length < 4">
                    <button
                        class="mr-4 mb-4 text-center px-6 py-2 text-lg rounded"
                        v-for="(option, index) in config.options"
                        :key="index"
                        :class="{'text-blue-100 bg-blue-800 shadow' : (input != null && input === option), 'bg-blue-100 text-blue-800 hover:text-blue-100 hover:bg-blue-600 hover:shadow': (input == null || input !== option)}"
                        style="transition: all 200ms"
                        @click="input=option">
                        <font-awesome-icon class="mr-2" v-if="input===option" icon="check"/>
                        {{option}}
                    </button>
                </div>
                <div v-else style="min-width:200px">
                    <v-select
                        :options = 'config.options'
                        v-model = 'input'
                        :clearable="false"
                        :searchable="false"
                    />
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="flex flex-wrap items-start justify-end">
                    <model-alert-component class="mb-4"
                        :warning = "input==null"
                        text = "Please select an option"
                    />
                    <model-display-component  v-if="config.displayPoints && points!=null" title="points" :text="parseFloat(this.points).toFixed(1)"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ModelVariableHeading from '@/components/biguzzi-model-v2/model-variable-heading.vue'
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import ModelDisplayComponent from "@/components/biguzzi-model-v2/model-display-component.vue"
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    name : 'model-select-component',
    props : ['config'],
    components : {
        'model-variable-heading' : ModelVariableHeading,
        'model-alert-component' : ModelAlertComponent,
        'model-display-component' : ModelDisplayComponent,
        'v-select' : VueSelect,
    },
    data : function(){
        return {
            'input' : this.config.preset,
        }
    },
    computed : {
        'points' : function(){return this.config.mapping[this.input]},
        'result' : function(){return {
            code : this.config.code,
            value : this.input,
            points : this.points,
        }},
    },
    watch : {
        'result' : function(){
            this.$emit('update:result', this.result);
        }
    }
}
</script>