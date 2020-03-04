<template>
    <div id="laceration-param-component">
        <model-select-component
            parameter = "Laceration"
            :options = "options"
            :mapping = "mapping"
            v-on:update:riskFactor = "$emit('update:lacerationRiskFactor', $event);"
            :preset = "value"
        />
    </div>
</template>

<script>
import ModelSelectComponent from '@/components/model-select-component.vue';

export default {
    name: 'laceration-param-component',
    components : {
        'model-select-component' : ModelSelectComponent,
    },
    props:['preset'],
    data : function(){
        return {
            options : [
                "No",
                "Yes",
            ],
            mapping : {
                "No" : 0,
                "Yes" : 12.5,
            },
        }
    },
    computed : {
        inverseMapping : function(){
            return {
                0 : this.options[0],
                12.5 : this.options[1],
            }
        },
        value : function(){
            return this.preset ? this.inverseMapping[this.preset]? this.inverseMapping[this.preset] : this.options[0] : this.options[0];
        }
    }
}
</script>