<template>
    <div id="model-select-component">
        <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{{parameter}}</p>
        <div class="flex flex-wrap items-stretch pb-8 mb-8 border-b">
            <div class="py-12 sm:pr-4 w-full sm:w-3/4 md:w-1/2">
                <v-select 
                    :options = 'options'
                    v-model = 'selectValue'
                    :clearable="false"
                    :searchable="false"
                />
            </div>
            <div class="sm:pl-4 w-full sm:w-1/4 md:w-1/2 flex items-center">
                <model-risk-point-display-component :riskPoints="riskPoints"></model-risk-point-display-component>
            </div>
        </div>
    </div>
</template>

<script>
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import ModelRiskPointDisplayComponent from '@/components/model-risk-point-display-component.vue';

export default {
    name: 'model-select-component',
    components: {
        'v-select' : VueSelect,
        'model-risk-point-display-component' : ModelRiskPointDisplayComponent,
    },
    data : function(){
        return {
            selectValue : this.preset? this.preset : this.options[0]
        }
    },
    props: {
        'parameter' : String,
        'options' : Array,
        'mapping' : Object,
        'preset' : String
    },
    computed : {
        riskPoints : function(){
            var _riskPoints = this.mapping[this.selectValue];
            this.$emit("update:riskFactor", _riskPoints);
            return _riskPoints;
        }
    }
}
</script>