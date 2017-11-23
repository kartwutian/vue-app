<template>
    <transition name="slider">
        <div class="music-list">
            <div class="back" @click="back">
                <i class="vfont icon-back"></i>
            </div>
            <h1 class="title" v-html="title"></h1>
            <div class="bg-image" :style="bgStyle" ref="bgImage">
                <div class="play-wrapper">
                    <div ref="playBtn" v-show="songs.length>0" class="play" >
                        <i class="icon-play"></i>
                        <span class="text">随机播放全部</span>
                    </div>
                </div>
                <div class="filter" ref="filter"></div>
            </div>
            <div class="bg-layer" ref="layer"></div>
            <m-bscroll :data="songs" @scroll="scroll" :listenScroll="listenScroll" :probeType="probeType" class="list" ref="list">
                <song-list :songs="songs" :rank="rank" ></song-list>
                <div v-show="!songs.length" class="loading-container" slot="out">
                    <m-loading1></m-loading1>
                </div>
            </m-bscroll>
        </div>
    </transition>
</template>

<script type="text/babel">
    import SongList from './songlist.vue'
    import { getCDInfo } from '@/api/recommend.js'
    import {mapActions} from 'vuex'

    const RESERVED_HEIGHT = 50
    const transform = $utils.prefixStyle('transform')
    const backdrop = $utils.prefixStyle('backdrop-filter')

    export default {
        data() {
            return {
                songs: [],
                scrollY: 0
            }
        },
        props: {
            bgImage: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            rank: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            bgStyle() {
                return `background-image:url(${this.bgImage})`
            }
        },
        created() {
            this.probeType = 3
            this.listenScroll = true
            this._getCDInfo()
        },
        mounted() {
            this.imageHeight = this.$refs.bgImage.clientHeight
            this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT
            this.$refs.list.$el.style.top = `${this.imageHeight}px`
        },
        methods: {
            scroll(pos) {
                this.scrollY = pos.y
            },
            back() {
                this.$router.back()
            },
            _getCDInfo() {
                getCDInfo(this.$route.params.id).then((res) =>{
                    this.songs = res.data.cdlist[0].songlist
                    console.log(this.songs)
                })
            }
        },
        watch: {
            scrollY(newVal) {
                let translateY = Math.max(this.minTransalteY, newVal)
                let scale = 1
                let zIndex = 0
                let blur = 0
                const percent = Math.abs(newVal / this.imageHeight)
                if (newVal > 0) {
                    scale = 1 + percent
                    zIndex = 10
                } else {
                    blur = Math.min(20, percent * 20)
                }

                this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`
                this.$refs.filter.style[backdrop] = `blur(${blur}px)`
                if (newVal < this.minTransalteY) {
                    zIndex = 10
                    this.$refs.bgImage.style.paddingTop = 0
                    this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
                    this.$refs.playBtn.style.display = 'none'
                } else {
                    this.$refs.bgImage.style.paddingTop = '70%'
                    this.$refs.bgImage.style.height = 0
                    this.$refs.playBtn.style.display = ''
                }
                this.$refs.bgImage.style[transform] = `scale(${scale})`
                this.$refs.bgImage.style.zIndex = zIndex
            }
        },
        components: {
            SongList
        }
    }
</script>

<style scoped lang="less" >
    .slider-enter-active,.slider-leave-active{
        transition: all 0.3s;
    }
    .slider-enter,.slider-leave-to{
        transform: translate3d(100%,0,0);
    }

    .music-list{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;

        .back{
            position: absolute;
            top: 0;
            left: 6px;
            z-index: 50;
            line-height: 50px;
            .icon-back{
                display: block;
                font-size: 18px;
                padding: 0 10px;
                color: #fff;
            }
        }

        .title{
            position: absolute;
            top: 0;
            left: 15%;
            right: 15%;
            z-index: 40;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            font-weight: normal;
        }

        .bg-image{
             position: relative;
             width: 100%;
             height: 0;
             padding-top: 70%;
             transform-origin: top;
             background-size: cover;
             .play-wrapper{
                 position: absolute;
                 bottom: 20px;
                 z-index: 50;
                 width: 100%;
                 .play{
                     box-sizing: border-box;
                     width: 135px;
                     padding: 7px 0;
                     margin: 0 auto;
                     text-align: center;
                     border: 1px solid #0f0;
                     color: #f36;
                     border-radius: 100px;
                     font-size: 0;
                     .icon-play{
                         display: inline-block;
                         vertical-align: middle;
                         margin-right: 6px;
                         font-size: 16px;
                     }
                     .text{
                         display: inline-block;
                         vertical-align: middle;
                         font-size: 14px;
                     }

                 }
             }
             .filter{
                 position: absolute;
                 top: 0;
                 left: 0;
                 width: 100%;
                 height: 100%;
                 background: rgba(7, 17, 27, 0.4);
             }
        }
        .bg-layer{
             position: relative;
             height: 100%;
             background: #fff;
        }
        .list {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            height: auto!important;
            background: #fff;
            .loading-container {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

</style>
