<template>
    <div id="vacuum-param-component">
        <model-select-component
            parameter = "Vacuum"
            :options = "options"
            :mapping = "mapping"
            v-on:update:riskFactor = "$emit('update:vacuumRiskFactor', $event);"
            :preset = "value"
        />
    </div>
</template>

<script>
import ModelSelectComponent from '@/components/model-select-component.vue';

export default {
    name: 'vacuum-param-component',
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
                "Yes" : 11,
            },
        }
    },
    computed : {
        inverseMapping : function(){
            return {
                0 : this.options[0],
                11 : this.options[1],
            }
        },
        value : function(){
            return this.preset ? this.inverseMapping[this.preset]? this.inverseMapping[this.preset] : this.options[0] : this.options[0];
        }
    }
}
</script>