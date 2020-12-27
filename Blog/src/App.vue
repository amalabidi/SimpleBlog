
<template>
  <div id="app">
    <navBar/>
    <Home/>

  <Contact/>

   <!-- <Contact/>-->
  </div>
</template>

<script>
  import navBar from './components/navbar.vue'
  import Home from './components/Myhome.vue'
import Contact from "./components/contact";

  export default {
    name: 'App',
    components: {
      navBar,
      Home,
Contact
    }
  }
</script>

<style>

</style>
