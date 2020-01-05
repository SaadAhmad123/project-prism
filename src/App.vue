<template>
  <div id="app">
    <nav-component/>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/main.css';
import 'vue-range-component/dist/vue-range-slider.min.css';

import NavComponent from '@/components/nav-component.vue';

export default {
  name: 'app',
  components : {
    'nav-component' : NavComponent,
  }
}
</script>

<style>

</style>
