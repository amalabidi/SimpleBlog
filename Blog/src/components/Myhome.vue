<template>
    <div>

        <div class="row" >
            <div class="col-lg-5 ">
               <img src="../assets/amal.jpg"  alt="vue logo" class="image" >
               <div class="name">
                   <b> Amal Abidi</b>

               </div>
                <div class="enthusiast">
                <p>Software Engineering Enthusiast</p>
                    <p style="margin-top: 50px">
                        <a href="https://github.com/amalabidi" style="color:grey"> <i class="fa fa-github" aria-hidden="true"></i></a>

                        <a href="https://www.linkedin.com/in/abidi-amal-4121481a0/" style="color:grey">  <i class="fa fa-linkedin-square" aria-hidden="true"></i></a>

                        <a href="contact" style="color:grey"><i class="fa fa-envelope" aria-hidden="true"></i></a>
<!--                        <router-link :to="contact"><i class="fa fa-envelope" aria-hidden="true"></i> </router-link>-->



                    </p>
                </div>

            </div>

                <div class=" col-lg-5">
                    <div class="row">
                    <p class="bio">Biography</p>
                    <p class="para">Dynamic and motivated full stack developer and software engineering student with fast-learning capacities and great passion for modern technologies </p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <b class="interest">Interests</b>
<div class="interests">
                            <p>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <span class="mob"> web development</span></p>
                            <p> <i class="fa fa-circle" aria-hidden="true"></i><span class="mob">mobile development</span></p>
                            <p>  <i class="fa fa-circle" aria-hidden="true"></i><span class="mob"> Machine Learning</span></p>
                            <p>  <i class="fa fa-circle" aria-hidden="true"></i>
                                <span class="mob">   Artificial Intelligence</span></p>
</div>
                        </div>
                        <div class="col-lg-2"></div>

                        <div class="col-lg-4">
                            <b class="educ">Education</b>
                            <div class="interests">
                            <p>Software Engineering , 2020 </p>
                            <p class="school">National Institute of Applied Science And Technology Tunis  </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

</div>
        </template>

        <script>

        export default {
        name: 'Home',
            components:{
            // Contact
            }
        }
        </script>

        <style>
            .mob{
                margin-left: 10px;
            }
            .fa-circle{
                font-size: 6px;
            }
            .fa-envelope{
                margin-left: 30px;
                font-size: 40px;
            }

            .bi-linkedin{
                margin-left: 30px;
            }
            .fa-github {
                margin-left: 10px;
                font-size: 40px;

            }
            .fa-linkedin-square{
                margin-left: 30px;
                font-size: 40px;
            }
.row{

    margin-top: 50px;

}
.image{
 width: 250px;
    height: 300px;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    margin-left: 150px;
    margin-top: 50px;
}
.bio{
                font-size: 40px;

            }
            .interest{
                font-size: 25px;
            }
.educ{
    font-size: 25px;
}
.school{
    color: grey;

}
.interests{
    margin-top: 10px;
}
            .name{
                font-size: 30px;
                alignment: center;
                margin-left: 170px;
            }
            .enthusiast{
                margin-left: 150px;
                color:grey;
            }
            .para{
                font-size: 21px;
            }
        </style>
