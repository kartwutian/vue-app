<template>
    <div id="app">
        <m-layout>
            <m-navbar bgcolor="#fff" color="#f36" title="title" fixed slot="top" ref="navbar" :style="styles">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-next"></m-navbar-next-icon>
            </m-navbar>

            <router-view ref="view"/>
            <section class="m-tabbar" slot="bottom"></section>
        </m-layout>

    </div>
</template>

<script>
    import { Layout } from '@/components/layout'
    import { NavBar, NavBarBackIcon, NavBarNextIcon } from '@/components/navbar'

    export default {
        name: 'app',
        mounted () {
            // console.log(this.$refs.view)
        },
        computed: {
            styles(){
                return{
                    opacity: this.$store.getters.scrollTopToOpacity
                }
            }
        },
        components: {
            'm-layout': Layout,
            'm-navbar': NavBar,
            'm-navbar-back-icon': NavBarBackIcon,
            'm-navbar-next-icon': NavBarNextIcon
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

    .m-tabbar{
        height: 1rem;
        width: 100%;
        background-color: #f00;
    }
</style>
