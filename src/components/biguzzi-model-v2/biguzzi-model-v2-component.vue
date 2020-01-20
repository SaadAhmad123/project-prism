<template>
    <div>
        <home-hero-component />
        <div class="container mx-auto">
            <div class="sm:flex sm:flex-wrap sm:items-start">
                <div id="model-result-panel-mobile" class="w-full block sm:hidden sticky top-0">
                    <!-- content here -->
                </div>
                <div id="model-variables-panel" class="w-full sm:w-2/3 py-16">
                    <model-variable-component 
                        v-for="(item, index) in modelVariables"
                        :display="item.display"
                        :key="index"
                        :variable-config="item.variableConfig"
                        :calendar="item.calendar"
                        :range="item.range"
                        :select="item.select"
                        v-on:update:result="points[$event.code] = $event"
                    />
                    <!-- content here -->
                </div>
                <div id="model-result-panel-not-mobile" class="hidden sm:block w-full sm:h-screen sm:w-1/3 sticky top-0 py-8 bg-blue-100">
                    <div class="h-full pl-4 pr-8 lg:pr-4">
                        <model-results-component :points="points"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HomeHeroComponent from '@/components/biguzzi-model/home-hero-component.vue'
import ModelVariableComponent from '@/components/biguzzi-model-v2/model-variable-component.vue'
import BiguzziModelParams from "@/components/biguzzi-model-v2/biguzzi-model-params.js"
import ModelResultsComponent from "@/components/biguzzi-model-v2/model-results-component.vue"


export default {
    name: 'biguzzi-model-v2',
    components : {
        'home-hero-component' : HomeHeroComponent,
        'model-variable-component' : ModelVariableComponent,
        'model-results-component' : ModelResultsComponent,
    },
    data : function(){
        return {
            'points' : {
                age : null,
                weight : null,
                haemoglobin : null,
                placentaWeight : null,
                vacuum : null,
                laceration : null,
                episiotomy : null,
                retainedPlacenta : null,
                ethnicity : null,
                womenBirthHistory : null,
                platelets : null,
                neonatalWeight : null,
            },
            'modelVariables' : BiguzziModelParams,
        }
    },
    watch : {
        'points.womenBirthHistory' : function(val){
            var _index = null;
            for(var i = 0; i < this.modelVariables.length; i++){
                if (this.modelVariables[i].variableConfig.code === 'neonatalWeight') _index = i;
            }
            if(val==null || val.points==null) {this.modelVariables[_index].variableConfig.name = 'Neonatal Weight (grams)'; return;}
            var nw_config = ['Nulliparous', 'Primiparous', 'Multiparous'];
            this.modelVariables[_index].variableConfig.name = 'Neonatal Weight (grams) - ' + nw_config[val.points];
            this.modelVariables[_index].variableConfig.womenBirthHistory = val.points;
        }
    }
}
</script>