<template>
    <div id="app">
        <router-view />
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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }


</style>
