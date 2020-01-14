<!--
    This component selects the appropriate input fields
    for relevent variables
-->

<template>
    <div id="model-variable-component" class="mb-8">
        <model-calendar-component v-if="calendar" :config="this.variableConfig" :result.sync="result"/>
    </div>
</template>

<script>
import ModelCalendarComponent from '@/components/biguzzi-model-v2/model-calendar-component.vue'

export default {
    name : 'model-variable-component',
    components:{
        'model-calendar-component' : ModelCalendarComponent,
    },
    props : {
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