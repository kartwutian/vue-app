<template>
    <div id="app">
        <m-layout>
            <section class="m-navbar" slot="top">

            </section>

            <router-view ref="view"/>
            <section class="m-tabbar" slot="bottom"></section>
        </m-layout>

    </div>
</template>

<script>
    import { Layout } from '@/components/layout'
    export default {
        name: 'app',
        mounted () {
            // console.log(this.$refs.view)
        },
        components: {
           'm-layout': Layout
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
    .m-navbar{
        position: absolute;
        height: 1rem;
        width: 100%;
        background-color: #f00;
        z-index: 9999;
    }
    .m-tabbar{
        height: 1rem;
        width: 100%;
        background-color: #f00;
    }
</style>
