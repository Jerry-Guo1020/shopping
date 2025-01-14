<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
    <RawNavBar :toggle-dark="toggleDark"></RawNavBar> 
  </div>

</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import Login from './components/Login.vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
