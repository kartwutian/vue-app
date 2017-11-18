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
//            this.$dialog.confirm({
//                title: '提示',
//                mes: '17日上午9时30分，中共中央总书记、国家主席、中央军委主席习近平来到人民大会堂金色大厅，亲切会见参加全国精神文明建设表彰大会的600多名代表。在热烈的掌声中，习近平总书记高兴地同大家热情握手、亲切交谈，代表们纷纷向总书记问好。握手结束后，习近平总书记回到队伍中间，准备同代表们合影。总书记看到93岁的黄旭华和82岁的黄大发两位道德模范代表年事已高，站在代表们中间，总书记握住他们的手，微笑着问候说：“你们这么大岁数，身体还不错。你们别站着了，到我边上坐下。”习近平总书记拉着他们的手，请两位老人坐到自己身旁来，两人执意推辞，习近平一再邀请，说：“来！挤挤就行了，就这样。”！',
//                opts: [
//                    {
//                        txt: '取消',
//                        color: false,
//                        callback: () => {
//                            this.$dialog.toast({mes: '你点了取消', timeout: 1000});
//                        }
//                    },
//                    {
//                        txt: '确定',
//                        color: true,
//                        callback: () => {
//                            this.$dialog.toast({mes: '你点了确定', timeout: 1000});
//                        }
//                    }
//                ]
//            });
//            this.$dialog.notice({
//                mes: '17日上午9时30分，中共中央总书记、国家主席、中央军委主席习近平来到人民大会堂金色大厅，亲切会见参加全国精神文明17日上午9时30分，中共中央总书记、国家主席、中央军委主席习近平来到人民大会堂金色大厅，亲切会见参加全国精神文明'
//            })
//            this.$dialog.notify({
//                mes: '17日上午9时30分，中共中央总书记、国家主席、中央军委主席习近平来到人民大会堂金色大厅，亲切会见参加全国精神文明'
//            })

        }
    }
</script>

<style lang="less">

</style>
