<template>
    <div id="ethnicity-param-component">
        <model-select-component
            parameter = "Ethnicity"
            :options = "options"
            :mapping = "mapping"
            v-on:update:riskFactor = "$emit('update:ethnicityRiskFactor', $event);"
            :preset = "value"
        />
    </div>
</template>

<script>
import ModelSelectComponent from '@/components/model-select-component.vue';

export default {
    name: 'ethnicity-param-component',
    components : {
        'model-select-component' : ModelSelectComponent,
    },
    props:['preset'],
    data : function(){
        return {
            options : [
                "Caucasian",
                "non-Caucasian",
            ],
            mapping : {
                "Caucasian" : 0,
                "non-Caucasian" : 15,
            },
        }
    },
    computed : {
        inverseMapping : function(){
            return {
                0 : this.options[0],
                15 : this.options[1],
            }
        },
        value : function(){
            return this.preset ? this.inverseMapping[this.preset]? this.inverseMapping[this.preset] : this.options[0] : this.options[0];
        }
    }
}
</script>