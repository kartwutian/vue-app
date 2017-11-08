<template>
    <div class="m-avatar-bar">
        <div class="m-avatar-wrap">
            <m-lazyload data-src="../../../../static/img/logo.png" class="m-avatar-rotate" noBgImage bgColor="#fff"></m-lazyload>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'm-avatar-bar',
        props: {
            link: String,
            title: String,
            show: {
                type: Boolean,
                default: true
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/avatarbar.less";
</style>
