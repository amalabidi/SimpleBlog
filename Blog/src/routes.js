
import Home from "./components/Myhome.vue";
import Vue from 'vue'
import Router from 'vue-router'
import Contact from './components/contact'
import Project from './components/project'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        }


    ]
})
