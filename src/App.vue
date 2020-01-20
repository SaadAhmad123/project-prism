<template>
  <div id="app">
    <nav-component/>
    <router-view/>
    <footer-component />
  </div>
</template>

<script>
import '@/assets/css/main.css';
import NavComponent from '@/components/nav-component.vue'
import FooterComponent from '@/components/footer-component.vue'

export default {
  name: 'app',
  components : {
    'nav-component' : NavComponent,
    'footer-component' : FooterComponent,
  }
}
</script>
