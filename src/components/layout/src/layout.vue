<template>
    <section class="m-flexview">
        <slot name="top" v-if="showNavbar"></slot>

        <section class="m-scrollview" ref="scrollView" id="scrollView" @scroll="scroll()">
            <slot></slot>
        </section>

        <slot name="bottom"></slot>
    </section>
</template>

<script type="text/babel">
    export default {
        name: 'm-layout',
        props: {
            link: String,
            title: String,
            showNavbar: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            scroll () {
                this.$store.dispatch('updataScrollView',{
                    scrollTop: this.$refs.scrollView.scrollTop
                })
            }
        },
        computed: {

        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/layout.less";
</style>
