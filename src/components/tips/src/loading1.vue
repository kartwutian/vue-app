<template>
    <div class="loading">
        <img width="24" height="24" src="./loading.gif">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'm-loading1',
        props: {
            title: {
                type: String,
                default: '正在载入...'
            }
        }
    }
</script>
<style scoped lang="less">

    .loading {
        width: 100%;
        text-align: center;
        img{
            display: inline-block;
        }
        .desc {
            line-height: 20px;
            font-size: 14px;
            color: #666;
        }
    }
</style>
