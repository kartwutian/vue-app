<template>
    <div id="app">
        <m-layout>
            <m-navbar bgcolor="#fff" color="#f36" title="title" fixed slot="top" ref="navbar" :style="styles">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-next"></m-navbar-next-icon>
            </m-navbar>

            <router-view ref="view"/>

            <m-tabbar class="demo-small-pitch" slot="bottom">
                <m-tabbar-item title="微信" link="/asidebar" active>
                    <i slot="icon" class="vfont icon-weixin"></i>
                    <m-badge slot="badge" type="danger">2</m-badge>
                </m-tabbar-item>
                <m-tabbar-item title="通讯录" link="/asidebar">
                    <i slot="icon" class="vfont icon-discover"></i>
                </m-tabbar-item>
                <m-tabbar-item title="发现" link="/asidebar" dot ref="test">
                    <i slot="icon" class="vfont icon-discover"></i>
                </m-tabbar-item>
                <m-tabbar-item title="图片" link="/asidebar">
                    <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"/>
                </m-tabbar-item>
            </m-tabbar>
        </m-layout>

    </div>
</template>

<script>
    import { Layout } from '@/components/layout'
    import { NavBar, NavBarBackIcon, NavBarNextIcon } from '@/components/navbar'
    import {TabBar, TabBarItem} from '@/components/tabbar'

    export default {
        name: 'app',
        mounted () {
            console.log(this.$refs.test.dot = false)
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
            'm-navbar-next-icon': NavBarNextIcon,
            'm-tabbar': TabBar,
            'm-tabbar-item': TabBarItem
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
