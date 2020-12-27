<template>
    <div>
    <h3> Users:</h3>
     <HelloWorld/>
</div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import axios from 'axios';
    export default {
        name: 'Users',
        components: {
            HelloWorld
        },

    data() {
        return {
            users: null,
        };
    },
        created: function() {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    this.users = res.data;
                })
        }}
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
</style>
