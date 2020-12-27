
import Home from "./components/Myhome.vue";
import Vue from 'vue'
import Router from 'vue-router'
import Contact from './components/contact'

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


    ]
})
