<template>
        <m-layout>
            <m-navbar bgcolor="#fff" color="#f36" title="音乐" ref="navbar" v-if="isActive[0]" bottomLine slot="top">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>

                <m-navbar-next-icon slot="right" icon="icon-center-hollow" link="/music/center"></m-navbar-next-icon>
            </m-navbar>
            <m-navbar bgcolor="#fff" color="#f36" title="音乐"  ref="navbar" v-if="isActive[1]" bottomLine slot="top">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-center-hollow" link="/buttons"></m-navbar-next-icon>
            </m-navbar>
            <m-navbar bgcolor="#fff" color="#f36" title="index2" ref="navbar" v-if="isActive[2]" bottomLine slot="top">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-next" link="/2"></m-navbar-next-icon>
            </m-navbar>
            <m-navbar bgcolor="#fff" color="#f36" title="index3"  ref="navbar" v-if="isActive[3]" bottomLine slot="top">
                <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                <m-navbar-next-icon slot="right" icon="icon-next" link="/3"></m-navbar-next-icon>
            </m-navbar>

            <keep-alive>
                <router-view ref="view"/>
            </keep-alive>

            <m-backtop @click.native="backTop()" v-show="backTopShow"></m-backtop>

            <m-tabbar class="demo-small-pitch" slot="bottom" ref="tabbar" >
                <m-tabbar-item @click.native="changeItem(0)" title="音乐" link="/" :active="isActive[0]">
                    <i slot="icon" class="vfont icon-weixin"></i>
                    <m-badge slot="badge" type="danger">2</m-badge>
                </m-tabbar-item>
                <m-tabbar-item @click.native="changeItem(1)" title="好友" link="/friends" :active="isActive[1]" >
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

</template>

<script>
    import { TabBar, TabBarItem } from '@/components/tabbar'
    export default {
        name: 'm-index',
        data () {
            return {
                backTopShow: false
            }
        },
        mounted () {


        },
        computed: {
            isActive: {
                get: function () {
                    return [
                        /\/music/.test(this.$route.path),
                        /\/friends/.test(this.$route.path),
                        /\/discover/.test(this.$route.path),
                        /\/center/.test(this.$route.path)
                    ]
                },
                set: function (newValue) {
                    return newValue
                }

            }
        },
        methods: {
            // toButtons () {
            //     // console.log(this)
            //     this.$router.push({ path: '/buttons' })
            // },
            changeItem (index) {
                this.isActive = [false,false,false,false]
                this.isActive[index] = true
            },
            bindScroll () {
                this.oScroll = document.querySelector('.m-scrollview')
                if(!this.oScroll){
                    return;
                }
                this.oScroll.addEventListener('scroll',()=>{
                    this.styles.opacity = this.scrollTopToOpacity(this.oScroll.scrollTop)
                    if(this.oScroll.scrollTop > 300){
                        this.backTopShow = true
                    }else{
                        this.backTopShow = false
                    }
                })

            },
            backTop () {
                $utils.scrollTo(this.oScroll,0)
            },
            scrollTopToOpacity: function (scrollTop) {

                return scrollTop/100 > 1 ? 1 :scrollTop/100
            }
        },
        components: {
            'm-tabbar': TabBar,
            'm-tabbar-item': TabBarItem

        }
    }
</script>

<style lang="less">


</style>
