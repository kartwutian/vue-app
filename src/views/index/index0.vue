<template>
    <m-sub-layout>
        <m-newtab slot="top">
            <m-newtab-item v-for="item in tabs" :link="item.link" :title="item.title" :key="item.id"></m-newtab-item>
        </m-newtab>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </m-sub-layout>
</template>

<script>
    import MSubLayout from "../../components/layout/src/sublayout";

    export default {
        components: {MSubLayout}, name: 'm-index0',
        data () {
            return {
                tabs : [
                    {
                        id: 1,
                        title: '推荐',
                        link: '/music/recommend'
                    },
                    {
                        id: 2,
                        title: '歌手',
                        link: '/music/singer'
                    },
                    {
                        id: 3,
                        title: '排行',
                        link: '/music/rank'
                    },
                    {
                        id: 4,
                        title: '搜索',
                        link: '/music/search'
                    }
                ]
            }
        },
        mounted () {


        }
    }
</script>

<style lang="less">

</style>
