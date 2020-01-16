<!--
    This component selects the appropriate input fields
    for relevent variables
-->

<template>
    <div v-if="display" :id="'var-'+this.variableConfig.code" class="mb-4">
        <model-calendar-component v-if="calendar" :config="this.variableConfig" :result.sync="result"/>
        <model-range-component v-if="range" :config="this.variableConfig" :result.sync="result"/>
        <model-select-component v-if="select" :config="this.variableConfig" :result.sync="result"/>
    </div>
</template>

<script>
import ModelCalendarComponent from '@/components/biguzzi-model-v2/model-calendar-component.vue'
import ModelRangeComponent from '@/components/biguzzi-model-v2/model-range-component.vue'
import ModelSelectComponent from '@/components/biguzzi-model-v2/model-select-component.vue'

export default {
    name : 'model-variable-component',
    components:{
        'model-calendar-component' : ModelCalendarComponent,
        'model-range-component' : ModelRangeComponent,
        'model-select-component' : ModelSelectComponent,
    },
    props : {
        'display' : {type:Boolean, default:true},
        'calendar' : {type:Boolean, default:false},
        'select' : {type:Boolean, default:false},
        'range' : {type:Boolean, default:false},
        'variable-config' : Object,
    },
    data : function(){
        return {
            'result' : null,
        }
    },
    watch : {
        'result' : function(){
            this.$emit('update:result', this.result)
        }
    }
}
</script>
