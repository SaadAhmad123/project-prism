<template>
    <div id="biguzzi-model-container" class="container mx-auto my-12 px-6 font-normal">
      <p class="text-sm font-thin text-gray-700 mb-4">
        Please, enter the appropriate values so that the model may be
        able to calulate the risk of <span class="italic">Postpartum Heamorrhage</span>.
      </p>
      
      <age-param-component :ageRiskFactor.sync = "ageRiskFactor"/>

      <age-param-component :ageRiskFactor.sync = "ageRiskFactor"/>

      <age-param-component :ageRiskFactor.sync = "ageRiskFactor"/>
    </div>
</template>

<script>
import ageParamComponent from '@/components/biguzzi-model/age-param-component.vue';

export default {
    components : {
        'age-param-component' : ageParamComponent,
    },
    data : function(){
        return {
            ageRiskFactor : 0
        };
    },
}
</script>