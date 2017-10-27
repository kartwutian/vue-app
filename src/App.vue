<template>
    <div id="app">
        <yd-layout>

            <img class="logo" src="./assets/1.jpg">
            <router-view/>
        </yd-layout>

    </div>
</template>

<script>
    import { Layout } from '@/components/layout'
    console.log(Layout)
    export default {
        name: 'app',
        components: {
           'yd-layout': Layout
        }
    }
</script>

<style lang="less">
    @import "styles/base";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }
    #app .logo{
        margin: 0 auto;
    }
</style>
