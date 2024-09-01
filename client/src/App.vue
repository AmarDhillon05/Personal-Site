<script setup>
import {RouterView} from 'vue-router'
import Navigator from './components/Navigator.vue'
</script>

<template>
  <div class = "content-center overflow-clip">  
    <div style = "background-color: rgb(20, 30, 45)"> 
    <Navigator class = "bg-gray-900"/>
    </div>
    <RouterView/>
  </div>
</template>

<style>
@font-face {
  font-family: Modern;
  src: url("./assets/GatteModern-Regular.otf")
}

div {
  font-family: Modern;
}
</style>

