<template>

    <div class="recommend">
        <m-slider autoplay="50000">
            <m-slider-item v-for="item in slider" :key="item.id" class="music-silder">
                <a :href="item.linkUrl">
                    <m-lazyload :data-src="item.picUrl"></m-lazyload>
                </a>
            </m-slider-item>
        </m-slider>
        <div style="height: 1000px;"></div>

    </div>
</template>

<script type="text/babel">
    import {getRecommend, getDiscList} from '@/api/recommend'

    export default {
        name: 'm-recommend',
        data () {
            return {
                slider: [
                    {
                        id: 12958,
                        linkUrl: "http://y.qq.com/w/album.html?albummid=0035pI7Q3RJw3R",
                        picUrl: "http://y.gtimg.cn/music/photo_new/T003R720x288M0000030DYol0jk1Dg.jpg"
                    }
                ]
            }
        },
        mounted(){
            this.$dialog.preload.open()
            this._getRecommed ()

        },
        methods: {
            _getRecommed () {
                getRecommend().then( (res) => {
                    this.slider = res.data.slider
                    setTimeout( () => {
                        this.$dialog.preload.close()
                    },300)
                })
            }
        }
    }
</script>

<style >

</style>
