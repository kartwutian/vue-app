<template>
    <router-link :to="link" class="m-tabbar-item" :class="classes" :style="styles" :exact="$parent.exact"
                 :active-class="$parent.activeClass">
        <span class="m-tabbar-icon">
            <slot name="icon"></slot>
            <span class="m-tabbar-badge">
                <slot name="badge"></slot>
            </span>
            <span class="m-tabbar-dot" v-if="dot"></span>
        </span>
        <span class="m-tabbar-txt">{{title}}</span>
    </router-link>
</template>

<script type="text/babel">

    export default {
        name: 'm-tabbar-item',
        props: {
            link: [String, Object],
            title: String,
            active: Boolean,
            dot: Boolean
        },
        computed: {
            classes() {
                return this.active ? 'm-tabbar-active' : '';
            },
            styles() {
                return !this.active ? {color: this.$parent.color} : {};
            }
        }
    }
</script>
