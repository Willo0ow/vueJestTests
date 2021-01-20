<template>
  <div class="home">
    <headercomponent></headercomponent>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import headercomponent from '../components/Header'

export default {
  name: 'Home',
  components: {
    HelloWorld, headercomponent
  }
}
</script>
