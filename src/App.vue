<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
        <m-avatar-bar></m-avatar-bar>
    </div>
</template>

<script>


    import { AvatarBar } from '@/components/avatarbar'

    export default {
        name: 'app',
        components: {
            'm-avatar-bar': AvatarBar
        }

    }
</script>

<style lang="less">
    /* 初始化reset */
    @import "styles/base";

    #app {
        height: 100%;
    }


</style>
