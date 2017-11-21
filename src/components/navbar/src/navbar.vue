<template>
    <header class="m-navbar " :class="classes"  :style="{backgroundColor: bgcolor, height: height}">
        <div class="m-navbar-item">
            <slot name="left"></slot>
        </div>
        <div class="m-navbar-center-box" :style="{height: height}">
            <div class="m-navbar-center">
                <slot name="center"><span class="m-navbar-center-title" :style="{color: color, fontSize: fontsize}">{{title}}</span></slot>
            </div>
        </div>
        <div class="m-navbar-item">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script type="text/babel">

    export default {
        name: 'm-navbar',
        props: {
            title: String,
            fixed: Boolean,
            bgcolor: {
                validator(value) {
                    if(!value) return true;
                    return $utils.isColor(value);
                },
                default: '#FFF'
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return $utils.isColor(value);
                },
                default: '#5C5C5C'
            },
            fontsize: {
                validator(value) {
                    return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
                },
                default: '.4rem'
            },
            height: {
                validator(value) {
                    return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
                },
                default: '1rem'
            },
            bottomLine: Boolean
        },
        mounted(){
        },
        computed: {
            classes() {

                return {
                    'm-navbar-fixed': this.fixed,
                    'm-bottom-line': this.bottomLine
                };
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/navbar.less';
</style>
