
<template>
  

<div class="jumbotron">
<div class="row">
    <div class="col-lg-4"><div class="contact">Projects</div></div>
    <div class="col-lg-2"></div>
    <div class="col-lg-6">
        <div class="row">
            <div  class="col-lg-5"><a  class="img" :href="link">
                <img src="../assets/project1.jpg" width="200px" height="150px" style="border-radius: 20px"/></a>
            </div>
            <div class="col-lg-5"><a :href="link" class="mail">{{nom}}</a>
            <p> {{description}}</p>
            </div></div>
        <div class="row">
            <div class="col-lg-5">
                <a  class="img" href="https://github.com/amalabidi/MobileProject_front/">
                    <img src="../assets/dev.jpg" width="200px" height="150px" style="border-radius: 20px"/></a></div> <div class="col-lg-5"><a href="https://github.com/amalabidi/MobileProject_front/" class="mail">mobile Application </a>
        <p>It is an e-commerce mobile Application for buying furniture . It is built with Flutter for the frontend and Node Js, Express Js for the backend   </p></div>
        </div>


    </div>
</div>




</div>
    </template>




<script>
    export default {
        name: 'Project',
        props: {
            nom: String,
            description: String,
            link: String,
            image: String
        }
    }
</script>
<style>
    .img{
        height:10px;
        width:10px;
    }
</style>
