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
                        :key="index"
                        :variable-config="item.variableConfig"
                        :calendar="item.calendar"
                        :range="item.range"
                        :select="item.select"
                        v-on:update:result="points[$event.code] = $event"
                    />
                    <!-- content here -->
                </div>
                <div id="model-result-panel-not-mobile" class="hidden sm:block w-full sm:h-screen sm:w-1/3 sticky top-0">
                    <!-- content here -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HomeHeroComponent from '@/components/biguzzi-model/home-hero-component.vue'
import ModelVariableComponent from '@/components/biguzzi-model-v2/model-variable-component.vue'

export default {
    name: 'biguzzi-model-v2',
    components : {
        'home-hero-component' : HomeHeroComponent,
        'model-variable-component' : ModelVariableComponent,
    },
    data : function(){
        return {
            'points' : {
                age : null,
                age1 : null,
            },
            'modelVariables' : [
                {
                    calendar : true,
                    range : false,
                    select : false,
                    variableConfig : {
                        preset : null,
                        code : 'age',
                        name : 'Date of Birth',
                        minAge : 10,
                        maxAge : 100,
                        modelFunction : function(x){ return 0.7857 * x - 11.786},
                    },
                },
                {
                    calendar : true,
                    range : false,
                    select : false,
                    variableConfig : {
                        preset : null,
                        code : 'age1',
                        name : 'Date of Birth 1',
                        minAge : 10,
                        maxAge : 100,
                        modelFunction : function(x){ return 0.7857 * x - 11.786},
                    },
                },
            ]
        }
    }
}
</script>