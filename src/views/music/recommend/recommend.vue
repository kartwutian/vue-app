<template>
    <div class="recommend-wrap" >
        <m-bscroll class="recommend" :data="list">
            <m-slider autoplay="50000">
                <m-slider-item v-for="item in slider" :key="item.id" class="music-silder">
                    <a :href="item.linkUrl">
                        <m-lazyload :data-src="item.picUrl"></m-lazyload>
                    </a>
                </m-slider-item>
            </m-slider>
            <div style="height: 1rem;text-align: center; color: #f36;line-height: 1rem;font-size: 14px;"  >热门歌单推荐</div>
            <m-list theme="4">
                <div  v-for="item in list" :key="item.content_id"  @click="linkTo(item.content_id)">
                    <m-list-item>
                        <m-lazyload slot="img" :data-src="item.cover" noBgImage ></m-lazyload>
                        <span slot="title" style="font-size: 16px;font-weight: 600;" >{{item.username}}</span>
                        <m-list-other slot="other" style="font-size: 14px;">
                            <div>{{item.title}}</div>
                        </m-list-other>
                    </m-list-item>
                </div>

            </m-list>
        </m-bscroll>
        <router-view/>
    </div>

</template>

<script type="text/babel">
    import {getRecommend, getDiscList, getCDInfo } from '@/api/recommend'

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
                ],
                list: [
                    {
                        "album_pic_mid": "00053XPH0GtqJY",
                        "content_id": 2688852240,
                        "cover": "http://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1F95PNmyxLsg46qd6CibUrmQUe0Hv102Jw/600?n=1",
                        "creator": 3562963616,
                        "edge_mark": "http://y.gtimg.cn/music/common/upload/hot_recommend_item/57957.png",
                        "id": 948,
                        "is_dj": false,
                        "is_vip": false,
                        "jump_url": "",
                        "listen_num": 1280670,
                        "pic_mid": "004fz32J1Q6OB9",
                        "rcmdcontent": "编辑推荐：每日新歌：张信哲×张艾嘉，《最爱》延续",
                        "rcmdtemplate": "编辑推荐",
                        "rcmdtype": 1,
                        "singerid": 0,
                        "title": "每日新歌：张信哲×张艾嘉，《最爱》延续",
                        "tjreport": "",
                        "type": 10014,
                        "username": "QQ音乐新歌推荐"
                    }
                ]
            }
        },
        mounted(){
            this.$dialog.preload.open()
            this._getRecommed()
            this._getDiscList()
        },
        methods: {
            _getRecommed () {
                getRecommend().then( (res) => {
                    this.slider = res.data.slider
                    setTimeout( () => {
                        this.$dialog.preload.close()
                    },500)
                })
            },
            _getDiscList () {
                getDiscList().then( (res) => {
                    this.list = res.recomPlaylist.data.v_hot
                }).catch( (err) => {
                    console.log(err)
                })
            },

            linkTo (id) {
                this.$router.push('/music/recommend/'+id)
            }
        }
    }
</script>

<style lang="less">
    .recommend-wrap{
        height: 100%;
    }
</style>
