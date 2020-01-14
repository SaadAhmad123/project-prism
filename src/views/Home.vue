<template>
  <div id="home">
    <biguzzi-model-v2-component />
  </div>
</template>

<script>
import BiguzziModelV2_Component from '@/components/biguzzi-model-v2/biguzzi-model-v2-component.vue';
//import BiguzziModelCompnent from '@/components/biguzzi-model/biguzzi-model-component.vue';
export default {
  name: 'home',
  components: {
    'biguzzi-model-v2-component' : BiguzziModelV2_Component,
    //'biguzzi-model-component' : BiguzziModelCompnent,
  },
}
</script>
