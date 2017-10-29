<template>
    <span><slot></slot><i :class="classes" :style="{color: color}"></i></span>
</template>

<script type="text/babel">

    export default {
        name: 'm-navbar-next-icon',
        props: {
            icon: {
                type: String,
                default: 'icon-more'
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return $utils.isColor(value);
                },
                default: '#5C5C5C'
            }
        },
        computed: {
            classes () {
                return 'vfont ' + this.icon
            }
        }

    }
</script>
