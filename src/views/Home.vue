<template>
  <div id="home">
    <home-hero-component/>
    <biguzzi-model-component />
  </div>
</template>

<script>
import BiguzziModelCompnent from '@/components/biguzzi-model/biguzzi-model-component.vue';
import HomeHeroComponent from '@/components/home-hero-component.vue';

export default {
  name: 'home',
  components: {
    'home-hero-component' : HomeHeroComponent,
    'biguzzi-model-component' : BiguzziModelCompnent,
  },
}
</script>
