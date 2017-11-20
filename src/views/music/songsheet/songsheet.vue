<template>
    <m-layout>
        <div class="music-list" slot="top">
            <header class="nav">
                <div class="back" >
                    <i class="vfont icon-back"></i>
                </div>
                <h1 class="title">随机播放全部随机播放全部随机播放全部随机播放全部随机播放全部</h1>
            </header>

            <!--<div class="bg-image" ref="bgImage">-->
                <!--<div class="play-wrapper">-->
                    <!--<div ref="playBtn" class="play" >-->
                        <!--<i class="icon-play"></i>-->
                        <!--<span class="text">随机播放全部</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="filter" ref="filter"></div>-->
            <!--</div>-->
            <!--<div class="bg-layer" ref="layer"></div>-->

        </div>
        <m-bscroll :data="songs" @scroll="scroll"
                   class="list" ref="list">
                <li v-for="item in songs" class="song-list-item">
                    <p class="name">{{ item.songorig}} </p>
                    <p class="desc">{{item.singer[0].name +' | '+ item.songname}}</p>
                </li>

        </m-bscroll>
    </m-layout>
</template>

<script type="text/babel">
    export default {
        data () {
            return {}
        },
        computed:  {
            songs: {
                get () {
                    return this.$store.state.music.songSheet.songlist
                }
            }
        },
        methods: {
            scroll(){

            }
        }
    }
</script>

<style lang="less" scoped="">
    .music-list{
        .nav{
            background-color: #f00;
            width: 100%;
            top:0;
            left:0;
            z-index: 1;
            display: flex;
            color: #fff;
            line-height: .8rem;
            .back{
                padding: 0 .2rem;
            }
            .title{
                flex: 1;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                text-align: center;
                font-size: 16px;
                padding: 0 .4rem;
                font-weight: normal;
            }
        }
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
