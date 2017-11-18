<template>
    <m-layout>
        <m-bscroll :data="songlist">
                <li v-for="item in songlist">
                    {{ item.songname}}
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
            songlist: {
                get () {
                    return this.$store.state.music.songSheet.songlist
                }
            }
        }
    }
</script>

<style>

</style>
