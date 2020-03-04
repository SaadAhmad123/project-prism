<template>
    <div id="episiotomy-param-component">
        <model-select-component
            parameter = "Episiotomy"
            :options = "options"
            :mapping = "mapping"
            v-on:update:riskFactor = "$emit('update:episiotomyRiskFactor', $event);"
            :preset = "value"
        />
    </div>
</template>

<script>
import ModelSelectComponent from '@/components/model-select-component.vue';

export default {
    name: 'episiotomy-param-component',
    components : {
        'model-select-component' : ModelSelectComponent,
    },
    props:['preset'],
    data : function(){
        return {
            options : [
                "No",
                "Median",
                "Paramedian",
            ],
            mapping : {
                "No" : 0,
                "Median" : 9,
                "Paramedian" : 27.5,
            },
        }
    },
    computed : {
        inverseMapping : function(){
            return {
                0 : this.options[0],
                9 : this.options[1],
                27.5 : this.options[2],
            }
        },
        value : function(){
            return this.preset ? this.inverseMapping[this.preset]? this.inverseMapping[this.preset] : this.options[0] : this.options[0];
        }
    }
}
</script>