<template>
    <div id="app">
        <m-layout>
            <m-navbar bgcolor="#fff" color="#f36" title="title" fixed slot="top" ref="navbar" :style="styles">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-next"></m-navbar-next-icon>
            </m-navbar>

            <router-view ref="view"/>

            <m-tabbar class="demo-small-pitch" slot="bottom" ref="tabbar" >
                <m-tabbar-item @click.native="changeItem(0)" title="微信" link="/" :active="isActive[0]">
                    <i slot="icon" class="vfont icon-weixin"></i>
                    <m-badge slot="badge" type="danger">2</m-badge>
                </m-tabbar-item>
                <m-tabbar-item @click.native="changeItem(1)" title="通讯录" link="/friends" :active="isActive[1]" >
                    <i slot="icon" class="vfont icon-discover"></i>
                </m-tabbar-item>
                <div style="width:1.4rem;"></div>
                <m-tabbar-item @click.native="changeItem(2)" title="发现" link="/discover" dot :active="isActive[2]">
                    <i slot="icon" class="vfont icon-discover"></i>
                </m-tabbar-item>
                <m-tabbar-item @click.native="changeItem(3)" title="图片" link="/center" :active="isActive[3]">
                    <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png"/>
                </m-tabbar-item>
            </m-tabbar>
        </m-layout>

        <m-avatar-bar></m-avatar-bar>
    </div>
</template>

<script>
    import { Layout } from '@/components/layout'
    import { NavBar, NavBarBackIcon, NavBarNextIcon } from '@/components/navbar'
    import { TabBar, TabBarItem } from '@/components/tabbar'
    import { Badge } from '@/components/badge'

    import { BScroll } from '@/components/bscroll'
    import { AvatarBar } from '@/components/avatarbar'

    export default {
        name: 'app',
        data () {
            return {
                isActive: [true,false,false,false]
            }
        },
        mounted () {
            console.log(this.$refs.tabbar)
        },
        computed: {
            styles(){
                return{
                    opacity: this.$store.getters.scrollTopToOpacity
                }
            }
        },
        methods: {
            changeItem (index) {
                this.isActive = [false,false,false,false]
                this.isActive[index] = true
            }
        },
        components: {
            'm-layout': Layout,
            'm-navbar': NavBar,
            'm-navbar-back-icon': NavBarBackIcon,
            'm-navbar-next-icon': NavBarNextIcon,
            'm-tabbar': TabBar,
            'm-tabbar-item': TabBarItem,
            'm-badge': Badge,
            'm-bscroll': BScroll,
            'm-avatar-bar': AvatarBar
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
