<template>
    <article class="m-list" :class="classes">
        <slot></slot>
    </article>
</template>

<script type="text/babel">
    export default {
        name: 'm-list',
        props: {
            theme: {
                validator(value){
                    return ['1', '2', '3', '4', '5'].indexOf(value + '') > -1;
                },
                default: '1'
            }
        },
        computed: {
            classes() {
                return 'm-list-theme' + this.theme;
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/list.less';
</style>
