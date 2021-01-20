<template>
<div>
    <h1>{{title}}</h1>
    <button id="btn" v-show="loggedIn" @click="loggedIn = true">Logout</button>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            title: 'Header',
            loggedIn: false

        }
    }
}
</script>
<style scoped>
div{
    background: blue;
    width: 100%;
    height: 100px;
}
h1{
    color: white;
}
</style>