<template>
    <transition name="slider">
        <div class="fixed">
            <m-layout>
                <m-navbar bgcolor="#fff" color="#f36" title="音乐"  slot="top">
                    <m-navbar-back-icon slot="left"></m-navbar-back-icon>
                    <m-navbar-next-icon slot="right" icon="icon-center-hollow" link="/music/center"></m-navbar-next-icon>
                </m-navbar>

                <m-bscroll :data="songs">
                    <song-list :songs="songs"></song-list>
                    <m-list-loading isLoading ></m-list-loading>
                </m-bscroll>
            </m-layout>
        </div>
    </transition>
</template>

<script type="text/babel">
    import SongList from './songlist.vue'
    import { getCDInfo } from '@/api/recommend'

    export default {
        data () {
            return {
                songs: []
            }
        },
        created () {
            this._getCDInfo(this.$route.params.id)
        },
        computed:  {

        },
        methods: {
            scroll(){

            },
            _getCDInfo(disstid){
                getCDInfo(disstid).then( (res) => {
                    console.log(res.data.cdlist[0].songlist)
                    this.songs = res.data.cdlist[0].songlist

                }).catch( (err) => {
                    console.log(err)
                })
            }
        },
        components: {
            SongList
        }
    }
</script>

<style lang="less" >
    .slider-enter-active, .slider-leave-active {
        transition: all .2s;
    }
    .slider-enter, .slider-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        transform: translate3d(100%,0,0)
    }

    .fixed{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:1000;
        background-color: #efefef;
    }

    .bg-image{
        width: 100%;
        height: 0;
        padding-top: 70%;
        background-image: url(http://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9kdDXz6ojhty7j6FibiaEWwhWO0FQgp6GFKw/600?n=1);
    }
    .music-list{

        .bg-image{
            background-image: url(http://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9kdDXz6ojhty7j6FibiaEWwhWO0FQgp6GFKw/600?n=1);
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 70%;
            -webkit-transform-origin: top;
            transform-origin: top;
            background-size: cover;
        }
    }
    .song-list-item{
        padding: 0 .4rem;
        line-height: .5rem;
        .name{
            font-size: 14px;
            color: #f36;
        }
        .desc{
            font-size: 12px;
            color: #666;
        }
    }

</style>
