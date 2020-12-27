
<template>
  <div id="app">
    <navBar/>
    <Home/>
<Project nom="Pastry's website" description="It is basically an e-commerce website of an online pastry built with Symfony4" image="../assets/project1.jpg"
link="https://github.com/amalabidi/ProjetWeb"/>
  <Contact/>

   <!-- <Contact/>-->
  </div>
</template>

<script>
  import navBar from './components/navbar.vue'
  import Home from './components/Myhome.vue'
import Contact from "./components/contact";
import Project from "./components/project.vue"

  export default {
    name: 'App',
    components: {
      navBar,
      Home,
      Project,
Contact
    }
  }
</script>

<style>

</style>
