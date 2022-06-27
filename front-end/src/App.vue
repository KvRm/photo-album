<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <header-component></header-component>
    <div class="flex-fill container">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent, 
    FooterComponent,
  }
})
</script>

<style lang="scss">
  @import './assets/styles/index.scss'
</style>