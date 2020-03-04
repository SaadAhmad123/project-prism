<template>
    <div id="kristeller-param-component">
        <model-select-component
            parameter = "Kristeller"
            :options = "options"
            :mapping = "mapping"
            v-on:update:riskFactor = "$emit('update:kristellerRiskFactor', $event);"
            :preset = "value"
        />
    </div>
</template>

<script>
import ModelSelectComponent from '@/components/model-select-component.vue';

export default {
    name: 'kristeller-param-component',
    components : {
        'model-select-component' : ModelSelectComponent,
    },
    props:['preset'],
    data : function(){
        return {
            options : [
                "No",
                "One",
                "More"
            ],
            mapping : {
                "No" : 0,
                "One" : 10,
                "More" : 9
            },
        }
    },
    computed : {
        inverseMapping : function(){
            return {
                0 : this.options[0],
                10 : this.options[1],
                9 : this.options[2],
            }
        },
        value : function(){
            return this.preset ? this.inverseMapping[this.preset]? this.inverseMapping[this.preset] : this.options[0] : this.options[0];
        }
    }
}
</script>